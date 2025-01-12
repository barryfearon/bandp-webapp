import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/signwriting/${asset}`;
}

const signwritingPhotos = [
  {
    asset: "Electrictramsideboards.jpg",
    width: 720,
    height: 960,
    alt: "Electric Trams IDE Boards",
  },
  {
    asset: "Moggie2.jpg",
    width: 1032,
    height: 581,
    alt: "Moggie",
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

export default signwritingPhotos;
