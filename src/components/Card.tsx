import { CARD } from "../interfaces/card";
import { Button } from "./Button";
import { Photo } from "./Photo";

export const Card = ({ exercises, description }: CARD) => {
  return (
    <div>
      <div>
        <Photo url="https://robothas/sebastian" />
      </div>
      <div>
        <h2>{exercises}</h2>
        <Button name={description} />
      </div>
    </div>
  );
};
