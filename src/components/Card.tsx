import { CARD } from "../interfaces/card";
import { Button } from "./Button";
import { Photo } from "./Photo";
import { Link } from "react-router-dom";

export const Card = ({ exercises, description, url, path }: CARD) => {
  return (
    <div>
      <div>
        <Photo url={url} />
      </div>
      <div>
        <h2 className="text-3xl">{exercises}</h2>
        <p>{description}</p>
        <Link to={path}>
          <Button name={exercises} />
        </Link>
      </div>
    </div>
  );
};
