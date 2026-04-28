import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface RoomCardProps {
  objectId: string;
  room: Project;
}

const RoomCard = ({ objectId, room }: RoomCardProps) => {
  const cover = room.coverImage ?? room.gallery[0]?.src;

  return (
    <Link
      to={`/portfolio/${objectId}/${room.id}`}
      className="group block"
    >
      <div className="relative aspect-square overflow-hidden rounded-sm bg-secondary/30 mb-4">
        {cover ? (
          <img
            src={cover}
            alt={room.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${room.coverGradient}`} />
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-500" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-foreground leading-snug mb-1 group-hover:text-primary transition-colors">
        {room.title}
      </h3>
      <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">
        {room.area} · {room.style}
      </p>
    </Link>
  );
};

export default RoomCard;