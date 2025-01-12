import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/preparation/${asset}`;
}

const preparationPhotos = [
  {
    asset: "SnaefellSummit.jpg",
    width: 960,
    height: 432,
    alt: "Snaefell Summit",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset),
      alt,
      width,
      height,
    } as Photo)
);

export default preparationPhotos;
