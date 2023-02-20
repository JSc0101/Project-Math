import { PLAY } from "../interfaces/play";
import { Box } from "../components/Box";
import { DragOn } from "../components/Drag";

export const PlayAdd = ({ title }: PLAY) => {
  return (
    <>
      <div>
        <h2 className="text-2xl text-center p-3">{title}</h2>
      </div>
      <div className="flex justify-around h-screen items-center">
        <div>
          <Box />
        </div>
        <div>
          <DragOn />
        </div>
      </div>
    </>
  );
};
