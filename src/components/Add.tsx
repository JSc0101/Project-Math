import { PLAY } from "../interfaces/play";
import { Box } from "../components/Box";

export const PlayAdd = ({ title }: PLAY) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <Box />
        <Box />
      </div>
    </div>
  );
};
