import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/exterior/${asset}`;
}

const aboutUsPhotos = [
  {
    asset: "InsideWheel.jpg",
    width: 540,
    height: 960,
    alt: "Inside Wheel",
  },
  {
    asset: "PalaceHotel.jpg",
    width: 1080,
    height: 1440,
    alt: "Palace Hotel",
  },
  {
    asset: "Picker.jpg",
    width: 1080,
    height: 1440,
    alt: "Picker",
  },
  {
    asset: "VillaMarina.jpg",
    width: 1440,
    height: 1080,
    alt: "Villa Marina",
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
