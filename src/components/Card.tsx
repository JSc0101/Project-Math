import { CARD } from "../interfaces/card";
import { Button } from "./Button";
import { Photo } from "./Photo";

export const Card = ({ exercises, description, url }: CARD) => {
  return (
    <div>
      <div>
        <Photo url={url} />
      </div>
      <div>
        <h2 className="text-3xl">{exercises}</h2>
        <Button name={exercises} />
        <p>{description}</p>
      </div>
    </div>
  );
};
