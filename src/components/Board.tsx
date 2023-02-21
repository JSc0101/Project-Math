import { useDrop } from "react-dnd";
import { Basketball } from "./Basketball";
import { useState } from "react";
import { ITEM } from "../interfaces/item";
import { BASKETBALL } from "../interfaces/basketball";
import { basketball } from "../data/data";

function DragDrop() {
  const [board, setBoard] = useState<Array<BASKETBALL>>([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item: ITEM) => addBasketballToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addBasketballToBoard = (id: number) => {
    const newBasketball = basketball.filter(
      (basketball) => id === basketball.id
    );
    return !board.some((basketball) => basketball.id === newBasketball[0].id)
      ? setBoard((board) => [...board, newBasketball[0]])
      : console.log("error");
  };
  return (
    <>
      <div>
        {basketball.map((basketball) => {
          return (
            <Basketball
              key={basketball.id}
              url={basketball.url}
              id={basketball.id}
            />
          );
        })}
      </div>
      <div ref={drop} className="w-32 bg-gray-700 h-32">
        {board.map((basketball) => {
          return (
            <Basketball
              key={basketball.id}
              url={basketball.url}
              id={basketball.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default DragDrop;
