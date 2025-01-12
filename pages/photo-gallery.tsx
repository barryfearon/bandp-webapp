import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import AboutUsPhotoGallery from "@/components/PhotoGalleries/AboutUsPhotoGallery";
import CommercialPhotoGallery from "@/components/PhotoGalleries/CommercialPhotoGallery";
import CommunityPhotoGallery from "@/components/PhotoGalleries/CommunityPhotoGallery";
import ExteriorPhotoGallery from "@/components/PhotoGalleries/ExteriorPhotoGallery";
import InteriorPhotoGallery from "@/components/PhotoGalleries/InteriorPhotoGallery";
import PreparationPhotoGallery from "@/components/PhotoGalleries/PrepPhotoGallery";
import RecentPhotoGallery from "@/components/PhotoGalleries/RecentPhotoGallery";
import SignwritingPhotoGallery from "@/components/PhotoGalleries/SignwritingPhotoGallery";
import SpecialityPhotoGallery from "@/components/PhotoGalleries/SpecialityPhotoGallery";
import WallpaperPhotoGallery from "@/components/PhotoGalleries/WallpaperPhotoGallery";

const PhotoGallery = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUsPhotoGallery />
      <CommercialPhotoGallery />
      <CommunityPhotoGallery />
      <ExteriorPhotoGallery />
      <InteriorPhotoGallery />
      <PreparationPhotoGallery />
      <RecentPhotoGallery />
      <SignwritingPhotoGallery />
      <SpecialityPhotoGallery />
      <div className="mb-8">
        <WallpaperPhotoGallery />
      </div>
    </>
  );
};

export default PhotoGallery;
