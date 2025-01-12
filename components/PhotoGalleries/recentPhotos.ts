import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/recent-work/${asset}`;
}

const recentPhotos = [
  {
    asset: "FairyBridge.jpg",
    width: 1290,
    height: 1692,
    alt: "Fairy Bridge",
  },
  {
    asset: "GaietyFrontVan.jpg",
    width: 1270,
    height: 1693,
    alt: "Gaiety Front with Van",
  },
  {
    asset: "Hydrooutside.jpg",
    width: 1078,
    height: 1440,
    alt: "Hydro Outside",
  },
  {
    asset: "Red.jpg",
    width: 1920,
    height: 1659,
    alt: "Hydro Outside",
  },
  {
    asset: "SalisburyHouse.jpg",
    width: 1600,
    height: 1562,
    alt: "Salisbury House",
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

export default recentPhotos;
