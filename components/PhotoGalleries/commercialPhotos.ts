import type { Photo } from "react-photo-album";

function assetLink(asset: string) {
  return `/images/photos/commercial/${asset}`;
}

const aboutUsPhotos = [
  {
    asset: "GoldPhoneBox.PNG",
    width: 180,
    height: 320,
    alt: "Gold Phone Box",
  },
  {
    asset: "JubileeClock.jpg",
    width: 540,
    height: 960,
    alt: "Jubilee Clock",
  },
  {
    asset: "RamseySwingBridge.jpg",
    width: 1920,
    height: 1275,
    alt: "Ramsey Swing Bridge",
  },
  {
    asset: "SilverdaleWheel.jpg",
    width: 960,
    height: 720,
    alt: "Silverdale Wheel",
  },
  {
    asset: "Swingbridge.jpg",
    width: 1440,
    height: 1080,
    alt: "Swingbridge",
  },
  {
    asset: "Swingbridgeunderside.jpg",
    width: 640,
    height: 481,
    alt: "Swingbridge underside",
  },
  {
    asset: "TTBridge.jpg",
    width: 1290,
    height: 1702,
    alt: "TT Bridge",
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
