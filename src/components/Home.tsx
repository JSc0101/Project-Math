import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Photo } from "./Photo";

export const Root = () => {
  return (
    <>
      <div>
        <h2>PROJECT MATH</h2>
        <Link to="/exercises">
        <Button name="welcome" />
        </Link>
      </div>
      <div>
        <Photo url="https://" />
      </div>
    </>
  );
};
