import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/speciality/${asset}`;
}

const specialityPhotos = [
  {
    asset: "CameraObscura.jpg",
    width: 1080,
    height: 1440,
    alt: "Camera Obscura",
  },
  {
    asset: "Tram.jpg",
    width: 900,
    height: 1600,
    alt: "Tram",
  },
  {
    asset: "Trampainting.jpg",
    width: 1600,
    height: 1200,
    alt: "Tram Painting",
  },
  {
    asset: "Trams.jpg",
    width: 1198,
    height: 1600,
    alt: "Trams",
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

export default specialityPhotos;
