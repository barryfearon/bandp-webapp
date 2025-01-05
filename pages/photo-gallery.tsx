import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutUsPhotoGallery from "@/components/PhotoGalleries/AboutUsPhotoGallery";
import CommercialPhotoGallery from "@/components/PhotoGalleries/CommercialPhotoGallery";
import CommunityPhotoGallery from "@/components/PhotoGalleries/CommunityPhotoGallery";
import ExteriorPhotoGallery from "@/components/PhotoGalleries/ExteriorPhotoGallery";

const PhotoGallery = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUsPhotoGallery />
      <CommercialPhotoGallery />
      <CommunityPhotoGallery />
      <ExteriorPhotoGallery />
    </>
  );
};

export default PhotoGallery;
