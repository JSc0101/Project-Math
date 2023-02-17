import { CARD } from "@interfaces/card";
import { Photo } from "@components/Photo";
import { Button } from "./Button";
const Card = ({ exercises, description }: CARD) => {
  return (
    <div>
      <div>
        <Photo url="https://robothas/sebastian" />
      </div>
      <div>
        <h2></h2>
        <Button name={description} />
      </div>
    </div>
  );
};
