import { PLAY } from "../interfaces/play";
import { Box } from "../components/Box";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export const PlayAdd = ({ title }: PLAY) => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div>
          <h2 className="text-2xl text-center p-3">{title}</h2>
        </div>
        <div className="flex justify-around h-screen items-center">
          <Box id={1}/>
        </div>
      </DndProvider>
    </>
  );
};
