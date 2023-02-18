import { NOT } from "interfaces/not";
import { Photo } from "./Photo";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const NotFound = ({ home }: NOT) => {
  return (
    <div>
      <h2>{home}</h2>
      <Link to="/exercises">
        <Button name="Volver a la pagina principal" />
      </Link>
      <Photo url="https://i.postimg.cc/hjDJm3wF/notFound.png" />
    </div>
  );
};
