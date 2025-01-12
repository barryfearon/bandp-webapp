import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/interior/${asset}`;
}

const interiorPhotos = [
  {
    asset: "Hallandstairs.jpg",
    width: 968,
    height: 1274,
    alt: "Hall and stairs",
  },
  {
    asset: "Hallandstairs.jpg",
    width: 968,
    height: 1274,
    alt: "Hall and stairs",
  },
  {
    asset: "Hallandstairs.jpg",
    width: 968,
    height: 1274,
    alt: "Hall and stairs",
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

export default interiorPhotos;
