import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import FreeQuotation from "@/components/FreeQuotation";
import AboutUs from "@/components/AboutUs";
import ServiceAreas from "../components/ServiceAreas";

import { GetStaticProps } from "next";

interface AboutProps {
  carouselImages: string[];
  textContent: string;
}

const About = ({ carouselImages }: AboutProps) => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <ImageCarousel images={carouselImages} />

        <section id="quotation" className="pt-8 bg-gray-100 text-center">
          <h2 className="text-2xl mb-4">Request a Free Quotation</h2>
          <FreeQuotation />
        </section>
        <section
          id="about"
          className="bg-gray-100 text-center md:grid md:grid-cols-6"
        >
          <div className="col-start-2 col-span-4">
            <AboutUs />
          </div>
        </section>

        <ServiceAreas />
      </main>
    </>
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

export default About;
