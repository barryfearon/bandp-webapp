import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/aboutus/${asset}`;
}

const aboutUsPhotos = [
  {
    asset: "Fleet.jpg",
    width: 1440,
    height: 1080,
    alt: "Our Fleet",
  },
  {
    asset: "Grinch.jpg",
    width: 1080,
    height: 1440,
    alt: "The Grinch at Christmas",
  },
  {
    asset: "Team.jpg",
    width: 2048,
    height: 1563,
    alt: "Our Team",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset),
      alt,
      width,
      height,
    }) as Photo,
);

export default aboutUsPhotos;
