import { fruits } from "../data/data";

export const Box = () => {
  return (
    <div
      style={{ border: "1px solid black" }}
      className="w-40 flex flex-wrap h-56 p-1 justify-center"
    >
      <>
        {fruits.map((fruit, index: number) => {
          return (
            <div key={index}>
              <img src={fruit.url} />
            </div>
          );
        })}
        <div
          style={{ border: "1px dashed black" }}
          className="p-3 w-12 h-14"
        ></div>
        <div
          style={{ border: "1px dashed black" }}
          className="p-3  w-12 h-14 text-center self-center"
        ></div>
      </>
    </div>
  );
};
