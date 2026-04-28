import { useParams, Navigate } from "react-router-dom";
import { getObjectById, getObjectByRoomId } from "@/data/objects";
import ObjectPage from "./ObjectPage";

/**
 * /portfolio/:id resolves to either an object (new URL) or a room (legacy URL).
 * - If `id` is an object → render ObjectPage.
 * - If `id` is a room → redirect to canonical /portfolio/:objectId/:roomId.
 * - Otherwise → back to /portfolio.
 */
const PortfolioObjectOrRoomResolver = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/portfolio" replace />;

  if (getObjectById(id)) {
    return <ObjectPage />;
  }

  const owner = getObjectByRoomId(id);
  if (owner) {
    return <Navigate to={`/portfolio/${owner.id}/${id}`} replace />;
  }
  return <Navigate to="/portfolio" replace />;
};

export default PortfolioObjectOrRoomResolver;