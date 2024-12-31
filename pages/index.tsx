import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import TextArea from "../components/TextArea";
import ServiceAreas from "../components/ServiceAreas";
import FreeQuotation from "../components/FreeQuotation";
import { GetStaticProps } from "next";

interface HomeProps {
  carouselImages: string[];
  textContent: string;
}

const Home = ({ carouselImages, textContent }: HomeProps) => {
  return (
    <div className={`bandp-web`}>
      <Navbar />
      <Header />
      <main>
        <ImageCarousel images={carouselImages} />
        <section id="quotation" className="pt-8 bg-gray-100 text-center">
          <h2 className="text-2xl mb-4">Request a Free Quotation</h2>
          <FreeQuotation />
        </section>
        <TextArea content={textContent} />
        <ServiceAreas />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch data from Hygraph CMS
  const carouselImages = [
    "/images/bandp-carousel-001.jpg",
    "/images/bandp-carousel-002.jpg",
    "/images/bandp-carousel-003.jpg",
  ];

  return {
    props: {
      carouselImages,
    },
  };
};

export default Home;
