import { Link } from "react-router-dom";
import type { PortfolioObject } from "@/data/objects";

interface ObjectCardProps {
  object: PortfolioObject;
  roomCount: number;
  size?: "default" | "large";
}

const ObjectCard = ({ object, roomCount, size = "default" }: ObjectCardProps) => {
  const isLarge = size === "large";

  return (
    <Link
      to={`/portfolio/${object.id}`}
      className="group block"
    >
      <div
        className={`relative overflow-hidden rounded-sm bg-secondary/30 ${
          isLarge ? "aspect-[4/5]" : "aspect-[4/3]"
        }`}
      >
        {object.coverImage ? (
          <img
            src={object.coverImage}
            alt={object.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${object.coverGradient}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/0 to-transparent opacity-90" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-background/95 backdrop-blur-sm text-foreground font-body text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm">
            {object.status}
          </span>
        </div>
      </div>

      <div className="pt-5 pb-2">
        <p className="font-body text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-2">
          {object.location} · {object.year}
        </p>
        <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
          {object.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-body text-sm text-muted-foreground">
            {object.area}
          </span>
          <span className="font-body text-xs text-primary tracking-wider uppercase opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            {roomCount > 1
              ? `${roomCount} ${roomCount >= 2 && roomCount <= 4 ? "помещения" : "помещений"} →`
              : "Смотреть →"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ObjectCard;