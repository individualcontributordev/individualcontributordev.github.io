#!/usr/bin/env python3
"""Render og-builder.png, the 1200x630 social card for every page on the site.

  python3 scripts/make_og_image.py

The card is drawn rather than hand-edited so the base and mod names below can be
corrected in one place when the catalog changes. Both lists must match what the
builder actually offers: bases come from CSR Pages plus the local Unmodified
entry, mods come from Modding Pages.

Colours and fonts are the site's own (see site.css and the DogicaPixel TTFs at
the repo root), so the card and the page it links to look like one product.
"""

from __future__ import annotations

import random
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "og-builder.png"

WIDTH, HEIGHT = 1200, 630

# site.css --ff7-* custom properties.
BLUE = (0x00, 0x3A, 0x90)
BLUE_DEEP = (0x00, 0x00, 0x51)
TEXT = (0xE6, 0xE6, 0xE6)
LINK = (0x00, 0xE6, 0xE6)
MUTED = (0xAA, 0xAA, 0xAA)

TITLE = "PSX Disc Builder"
SUBTITLE = "Final Fantasy VII - PS1 NTSC-U"
TAGLINE = "Patch your own .bin in the browser"
URL = "individualcontributor.dev"

BASES = ("Unmodified", "CSR", "CSR+", "Highwind")
MODS = ("Field Encounters", "World Encounters", "Fanfare Skip")

# Dogica is an 8px pixel font: integer multiples keep every stem one pixel wide.
FONT_BOLD = ROOT / "DogicaPixelBold.ttf"
FONT_REGULAR = ROOT / "DogicaPixelRegular.ttf"


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    if not path.is_file():
        raise SystemExit(f"missing font: {path}")
    return ImageFont.truetype(str(path), size)


def draw_starfield(image: Image.Image) -> None:
    """Sparse stars on black, matching the site's animated backdrop."""
    # Seeded so re-running the script does not churn the committed PNG.
    rng = random.Random(7)
    pixels = image.load()
    for _ in range(420):
        x = rng.randrange(WIDTH)
        y = rng.randrange(HEIGHT)
        shade = rng.choice((70, 90, 120, 160, 210))
        pixels[x, y] = (shade, shade, shade)
        if rng.random() < 0.12:
            for nx, ny in ((x + 1, y), (x, y + 1)):
                if nx < WIDTH and ny < HEIGHT:
                    pixels[nx, ny] = (shade // 2, shade // 2, shade // 2)


def meteor_layer(
    panel_width: int, panel_height: int
) -> tuple[Image.Image, tuple[int, int]]:
    """The site's meteor, faded into the panel's top-right corner.

    The source art is a bright halo around a planet with the meteor streaking
    off it. Composited whole it reads as a pale disc stamped on the blue and
    its edge cuts across the title, so a left-to-right ramp dissolves the
    planet and leaves only the streak running off the corner.
    """
    size = round(panel_height * 0.95)
    meteor = Image.open(ROOT / "meteor.png").convert("RGBA")
    meteor = meteor.resize((size, size), Image.LANCZOS)

    ramp = Image.new("L", (size, size))
    ramp_draw = ImageDraw.Draw(ramp)
    for x in range(size):
        strength = min(1.0, max(0.0, (x / size - 0.42) / 0.45))
        ramp_draw.line([(x, 0), (x, size)], fill=round(255 * strength * 0.6))

    meteor.putalpha(ImageChops.multiply(meteor.getchannel("A"), ramp))
    return meteor, (panel_width - size + 90, -60)


def build_panel(box: tuple[int, int, int, int], radius: int) -> Image.Image:
    """The site's 160deg #003a90 -> #000051 window, with the meteor behind it."""
    left, top, right, bottom = box
    width, height = right - left, bottom - top

    panel = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(panel)
    for y in range(height):
        # 35% stop in the CSS gradient: hold the lighter blue, then ramp.
        t = max(0.0, (y / height - 0.35) / 0.65)
        draw.line(
            [(0, y), (width, y)],
            fill=tuple(round(a + (b - a) * t) for a, b in zip(BLUE, BLUE_DEEP)),
        )
    panel = panel.convert("RGBA")

    panel.alpha_composite(*meteor_layer(width, height))

    mask = Image.new("L", (width, height), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        [0, 0, width - 1, height - 1], radius=radius, fill=255
    )
    panel.putalpha(mask)
    return panel


def chip(
    draw: ImageDraw.ImageDraw,
    x: int,
    y: int,
    label: str,
    chip_font: ImageFont.FreeTypeFont,
    colour: tuple[int, int, int],
) -> int:
    """Draw one rounded pill and return the x where the next one starts."""
    pad_x, pad_y = 18, 12
    text_width = draw.textlength(label, font=chip_font)
    height = chip_font.size + pad_y * 2
    right = x + text_width + pad_x * 2
    draw.rounded_rectangle(
        [x, y, right, y + height], radius=height // 2, outline=colour, width=2
    )
    draw.text((x + pad_x, y + pad_y), label, font=chip_font, fill=colour)
    return int(right) + 14


def main() -> int:
    image = Image.new("RGB", (WIDTH, HEIGHT), (0, 0, 0))
    draw_starfield(image)

    box = (48, 40, WIDTH - 48, HEIGHT - 40)
    panel = build_panel(box, radius=26)
    image.paste(panel, box[:2], panel)

    draw = ImageDraw.Draw(image)
    # Two rules, like the game's window chrome: a bright outer edge and a
    # dimmer inner one.
    draw.rounded_rectangle(box, radius=26, outline=(222, 232, 250), width=2)
    draw.rounded_rectangle(
        [box[0] + 8, box[1] + 8, box[2] - 8, box[3] - 8],
        radius=20,
        outline=(120, 160, 230),
        width=2,
    )

    title_font = font(FONT_BOLD, 56)
    subtitle_font = font(FONT_BOLD, 24)
    tagline_font = font(FONT_REGULAR, 16)
    url_font = font(FONT_REGULAR, 16)
    label_font = font(FONT_BOLD, 16)
    chip_font = font(FONT_REGULAR, 16)

    left = box[0] + 52
    draw.text((left, 92), TITLE, font=title_font, fill=TEXT)
    draw.text((left, 178), SUBTITLE, font=subtitle_font, fill=LINK)
    draw.text((left, 224), TAGLINE, font=tagline_font, fill=TEXT)
    draw.text((left, 258), URL, font=url_font, fill=MUTED)

    draw.text((left, 344), "BASE  (pick one)", font=label_font, fill=MUTED)
    x = left
    for name in BASES:
        x = chip(draw, x, 376, name, chip_font, TEXT)

    draw.text((left, 456), "MODS  (stackable)", font=label_font, fill=MUTED)
    x = left
    for name in MODS:
        x = chip(draw, x, 488, name, chip_font, LINK)

    image.save(OUTPUT, format="PNG", optimize=True)
    print(f"wrote {OUTPUT} ({OUTPUT.stat().st_size:,} bytes, {WIDTH}x{HEIGHT})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
