import { result } from "../data/data";

export const DragOn = () => {
  return (
    <div
      style={{ border: "1px solid black" }}
      className="w-40 flex flex-wrap h-56 p-1 justify-center"
    >
      {result.map((fruit, index) => {
        return (
          <div key={index}>
            <img src={fruit.url} />
          </div>
        );
      })}
    </div>
  );
};
