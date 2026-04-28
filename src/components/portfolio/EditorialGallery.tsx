import type { ProjectImage } from "@/data/projects";

interface EditorialGalleryProps {
  /** Photos AFTER the hero image (hero is rendered separately in the page). */
  images: ProjectImage[];
}

/**
 * Magazine-style gallery that adapts its rhythm to the number of photos (1–9).
 * Pattern (after the hero photo):
 *  - 1 image  → full-width
 *  - 2 images → two-column row
 *  - 3 images → full-width, then two-column row
 *  - 4 images → two-column row, full-width, two-column row
 *  - 5+       → repeat: 1 full-width + 2-col row, with a single full-width hero in the middle
 */
const EditorialGallery = ({ images }: EditorialGalleryProps) => {
  if (!images || images.length === 0) return null;

  const blocks: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  const fullWidth = (img: ProjectImage) => (
    <figure key={`f-${key++}`} className="my-10 lg:my-16">
      <div className="aspect-[16/9] sm:aspect-[16/8] overflow-hidden rounded-sm bg-secondary/30">
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      {img.alt && (
        <figcaption className="mt-3 font-body text-xs tracking-wide text-muted-foreground italic text-center">
          {img.alt}
        </figcaption>
      )}
    </figure>
  );

  const twoCol = (a: ProjectImage, b: ProjectImage) => (
    <div key={`t-${key++}`} className="grid sm:grid-cols-2 gap-4 lg:gap-6 my-10 lg:my-16">
      {[a, b].map((img, idx) => (
        <figure key={idx}>
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary/30">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          {img.alt && (
            <figcaption className="mt-2 font-body text-[11px] tracking-wide text-muted-foreground italic">
              {img.alt}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );

  while (i < images.length) {
    const remaining = images.length - i;
    if (remaining === 1) {
      blocks.push(fullWidth(images[i]));
      i += 1;
    } else if (remaining === 2) {
      blocks.push(twoCol(images[i], images[i + 1]));
      i += 2;
    } else {
      // 3+ remaining: full-width then two-col
      blocks.push(fullWidth(images[i]));
      blocks.push(twoCol(images[i + 1], images[i + 2]));
      i += 3;
    }
  }

  return <div>{blocks}</div>;
};

export default EditorialGallery;