import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/community/${asset}`;
}

const communityPhotos = [
  {
    asset: "BoxingGroup.jpg",
    width: 1920,
    height: 1440,
    alt: "Boxing Group",
  },
  {
    asset: "CivicHallGroup.jpg",
    width: 1600,
    height: 1200,
    alt: "Civic Hall Group",
  },
  {
    asset: "PrideMoggie.jpg",
    width: 1920,
    height: 1440,
    alt: "Pride Moggie",
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

export default communityPhotos;
