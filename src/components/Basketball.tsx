import { useDrag } from "react-dnd";
import { BASKETBALL } from "../interfaces/basketball";

export function Basketball({ id, url }: BASKETBALL) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      ref={drag}
      src={url}
      style={{cursor: isDragging ? "crosshair" : "opacity"  }}
    />
  );
}


