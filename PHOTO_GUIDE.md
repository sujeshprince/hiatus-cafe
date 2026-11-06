# Photography guide

Every photograph currently in `public/images/` is a **Pexels placeholder**, downloaded for layout and demonstration. They are not verified photographs of Hiatus Cafe.

Before launch, replace them with photography that the café owns or has explicit permission to use. Do not rely on a downloaded file alone as proof of a licence — keep the source, photographer and licence for each image on file.

## Image map

### Hero

| File | Recommended subject | Notes |
| --- | --- | --- |
| `hero/hero-main.jpg` | Wide café interior or a warm cup in the foreground | Keep the left third dark and uncluttered; the headline and supporting copy sit there. The image is cropped toward the right on desktop. |

### Story

| File | Recommended subject |
| --- | --- |
| `story/story-main.jpg` | A wide, human moment in the café |
| `story/story-detail.jpg` | A close detail: hands, cup, table texture |
| `story/story-barista.jpg` | A barista at work, portrait crop |

### Menu

| File | Category |
| --- | --- |
| `menu/coffee.jpg` | Coffee |
| `menu/tea.jpg` | Tea and beverages |
| `menu/desserts.jpg` | Desserts |
| `menu/quick-bites.jpg` | Quick bites |
| `menu/small-plates.jpg` | Small plates |
| `menu/vegetarian.jpg` | Vegetarian |
| `menu/vegan.jpg` | Vegan |

### Gallery

`gallery/gallery-01.jpg` through `gallery/gallery-10.jpg` are used in the masonry gallery and lightbox. Use a mix of landscape and portrait crops, with at least one wide establishing shot of the room and several close details.

### Experiences

| File | Panel |
| --- | --- |
| `experiences/coffee-date.jpg` | The Coffee Date |
| `experiences/creative-corner.jpg` | The Creative Corner |
| `experiences/friends-table.jpg` | The Friends Table |

### Reservation

`reserve/reserve-table.jpg` is the tall arch image beside the booking form. A portrait or square crop of a set table, window seat or empty corner works best.

### Social preview

`og-image.jpg` is generated from the hero image with a brand overlay. Regenerate it after replacing the hero:

```bash
node scripts/make-og.mjs
```

The generator uses `sharp`, which is already installed as a dev dependency.

## Suggested dimensions

| Use | Size |
| --- | --- |
| Hero | 2400 × 1600 or larger, landscape |
| Story main | 1800 × 1200 |
| Story detail | 1200 × 1500 |
| Story barista | 1200 × 1500 |
| Menu square | 1600 × 1600 |
| Gallery | 1600–2400px on the long edge, mixed orientation |
| Experience panels | 2000 × 1400 |
| Reservation arch | 1600 × 2000 |
| Open Graph | 1200 × 630 (generated) |

Next/Image handles responsive resizing and AVIF/WebP conversion at request time. Keep source JPEGs reasonably compressed; large originals are not automatically reduced in the repository.

## Art direction

- Warm, low-contrast light — late afternoon or early evening.
- Natural wood, cream ceramics, olive and caramel tones.
- People can be present, but avoid stock-photo direct-to-camera smiles.
- Leave breathing room around the subject; the design crops aggressively.
- Avoid obvious brand logos, recognisable chain cafés, or images that imply a different location.

## Replacement checklist

- [ ] Every image is owned or licensed.
- [ ] Alt text still describes the new photograph accurately.
- [ ] Captions in `src/data/gallery.ts` still match the photographs.
- [ ] The hero still has a quiet left side for the headline.
- [ ] The reservation image still works as a tall arch crop.
- [ ] The OG image has been regenerated.
- [ ] The Pexels placeholder note has been removed from the launch checklist once all assets are replaced.
