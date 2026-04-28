import { useParams, Navigate } from "react-router-dom";
import { getObjectByRoomId } from "@/data/objects";

/**
 * Backward-compat: old URL /portfolio/:id pointed directly to a room.
 * We resolve the owning object and redirect to /portfolio/:objectId/:roomId.
 * If no object owns this id (and it's not itself an object), bounce home.
 */
const PortfolioRoomRedirect = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/portfolio" replace />;

  const owner = getObjectByRoomId(id);
  if (owner) {
    return <Navigate to={`/portfolio/${owner.id}/${id}`} replace />;
  }
  return <Navigate to="/portfolio" replace />;
};

export default PortfolioRoomRedirect;