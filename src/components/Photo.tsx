import { PHOTO } from "@interfaces/photo";

export const Photo = ({ url }: PHOTO) => {
  return <img src={url} />;
};
