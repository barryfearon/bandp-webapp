import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

const photos = [
  { src: "/images/photos/aboutus/Fleet.jpg", width: 1440, height: 1080 },
  { src: "/images/photos/aboutus/Grinch.jpg", width: 1080, height: 1440 },
  { src: "/images/photos/aboutus/Team.jpg", width: 2048, height: 1536 },
];

export default function Gallery() {
  return <RowsPhotoAlbum photos={photos} />;
}
