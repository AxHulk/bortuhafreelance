import type { ProjectImage } from "@/data/projects";

interface EditorialGalleryProps {
  /** Photos AFTER the hero image (hero is rendered separately in the page). */
  images: ProjectImage[];
  /** Called with the image index relative to the FULL gallery (incl. hero). */
  onImageClick?: (globalIndex: number) => void;
  /** Offset added to local index to compute the global index. Default 1 (hero is first). */
  startOffset?: number;
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
const EditorialGallery = ({ images, onImageClick, startOffset = 1 }: EditorialGalleryProps) => {
  if (!images || images.length === 0) return null;

  const blocks: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  const fullWidth = (img: ProjectImage, localIndex: number) => (
    <figure key={`f-${key++}`} className="my-10 lg:my-16">
      <button
        type="button"
        onClick={() => onImageClick?.(localIndex + startOffset)}
        aria-label={`Открыть изображение: ${img.alt}`}
        className="block w-full aspect-[16/9] sm:aspect-[16/8] overflow-hidden rounded-sm bg-secondary/30 cursor-zoom-in group"
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </button>
      {img.alt && (
        <figcaption className="mt-3 font-body text-xs tracking-wide text-muted-foreground italic text-center">
          {img.alt}
        </figcaption>
      )}
    </figure>
  );

  const twoCol = (a: ProjectImage, b: ProjectImage, indexA: number) => (
    <div key={`t-${key++}`} className="grid sm:grid-cols-2 gap-4 lg:gap-6 my-10 lg:my-16">
      {[a, b].map((img, idx) => (
        <figure key={idx}>
          <button
            type="button"
            onClick={() => onImageClick?.(indexA + idx + startOffset)}
            aria-label={`Открыть изображение: ${img.alt}`}
            className="block w-full aspect-[4/5] overflow-hidden rounded-sm bg-secondary/30 cursor-zoom-in group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </button>
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
      blocks.push(fullWidth(images[i], i));
      i += 1;
    } else if (remaining === 2) {
      blocks.push(twoCol(images[i], images[i + 1], i));
      i += 2;
    } else {
      // 3+ remaining: full-width then two-col
      blocks.push(fullWidth(images[i], i));
      blocks.push(twoCol(images[i + 1], images[i + 2], i + 1));
      i += 3;
    }
  }

  return <div>{blocks}</div>;
};

export default EditorialGallery;