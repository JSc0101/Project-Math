import { useState } from "react";
import { fruits } from "../data/data";
import { result } from "../data/data";
import { Photo } from "./Photo";
import { useDrag, useDrop } from "react-dnd";

interface ID {
  id: number
}
export const Box = ({ id }: ID) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => handleAddImage(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const handleAddImage = (id: number) => {
    console.log(id);
  };
  return (
    <>
      <div
        style={{ border: "1px solid black" }}
        className="w-40 flex flex-wrap h-56 p-1 justify-center"
      >
        {fruits.map((fruit, index: number) => {
          return (
            <div key={index}>
              <Photo url={fruit.url} />
            </div>
          );
        })}
        <div
          style={{ border: isOver ? "1px dashed black" : "0px" }}
          className="p-3 w-12 h-14"
        ></div>
        <div
          style={{ border: "1px dashed black" }}
          className="p-3  w-12 h-14 text-center self-center"
        ></div>
      </div>
      <div
        style={{ border: "1px solid black" }}
        className="w-40 flex flex-wrap h-56 p-1 justify-center"
      >
        {result.map((fruit, index) => {
          return (
            <div
              key={index}
              style={{ border: isDragging ? "5px solid blue" : "0px" }}
            >
              <Photo url={fruit.url} />
            </div>
          );
        })}
      </div>
    </>
  );
};
