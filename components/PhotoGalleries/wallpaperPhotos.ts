import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/wallpaper/${asset}`;
}

const wallpaperPhotos = [
  {
    asset: "Featurewall.jpg",
    width: 1280,
    height: 960,
    alt: "Camera Obscura",
  },
  {
    asset: "Hall.jpg",
    width: 720,
    height: 1600,
    alt: "Tram",
  },
  {
    asset: "Texturedwallpaper.jpg",
    width: 960,
    height: 1280,
    alt: "Tram Painting",
  },
  {
    asset: "Wallpaper.jpg",
    width: 720,
    height: 1600,
    alt: "Trams",
  },
  {
    asset: "Wallpapering.jpg",
    width: 1600,
    height: 720,
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

export default wallpaperPhotos;
