import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import ServiceAreas from "../components/ServiceAreas";

import { GetStaticProps } from "next";

import prep from "../public/images/services-preparation.jpg";
import interior from "../public/images/services-interior-painting.jpg";
import exterior from "../public/images/photos/exterior/VillaMarina.jpg";
import wallpaper from "../public/images/services-wallpapering.jpg";
import commercial from "../public/images/photos/commercial/RamseySwingBridge.jpg";
import special from "../public/images/photos/signwriting/Moggie2.jpg";
import hAnds from "../public/images/services-healthandsafety.jpg";

interface ServicesProps {
  carouselImages: string[];
  textContent: string;
}

const Services = ({ carouselImages }: ServicesProps) => {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <ImageCarousel images={carouselImages} />
        <div className={`flex bg-gray-100`}>
          <div className={`columns-2 gap-0`}>
            <div className={``}>
              <Image
                src={prep}
                width={800}
                alt={`preparation`}
                className={`object-cover w-full`}
              />
            </div>
            <div className="bg-gray-100 text-container p-8">
              <h3 className="text-3xl mb-2">Preparation</h3>
              <hr className="mb-2" />
              <p className="leading-loose">
                Preparation is the most important part of any decorating
                project. It has been said that preparation work is 70% with the
                actual task of decorating being the remaining 30% We believe
                that a good finish is not only down to the decorator but the
                effort that goes into the preparation. From high pressure rinses
                or mechanically sanding surfaces. This all helps to give the
                longevity and the desired superior finish.
              </p>
            </div>
          </div>
        </div>
        <div className={`flex bg-gray-100`}>
          <div className={`columns-2 gap-0`}>
            <div className="bg-gray-100 text-container p-8">
              <h3 className="text-3xl mb-2">Interior Painting</h3>
              <hr />
              <p className="leading-loose">
                We cover all aspects of interior painting and decorating,
                whether it be adding a splash of colour in the basement or re
                painting kitchen units, we have it covered. We understand that
                when our customers open their doors to us we have a duty of care
                to respect the privacy and cleanliness of the residents and
                their property alike.
              </p>
            </div>
            <div className={``}>
              <Image
                src={interior}
                width={800}
                alt={`preparation`}
                className={`object-cover w-full max-h-min`}
              />
            </div>
          </div>
        </div>
        <div className={`flex bg-gray-100`}>
          <div className={`columns-2 gap-0`}>
            <div className={``}>
              <Image
                src={exterior}
                width={800}
                alt={`preparation`}
                className={`object-cover w-full max-h-min`}
              />
            </div>
            <div className="bg-gray-100 text-container p-8">
              <h3 className="text-3xl mb-2">Exterior Painting</h3>
              <hr />
              <p className="leading-loose">
                A house is a home and with that in mind it needs to look good on
                the outside as well as inside. A clean finish is fundamental to
                the up keep of the property – keeping the damp out and the warm
                in! We work closely with the Islands leading scaffold companies.
                We can supply static or mobile scaffold or our own mobile hoist
                for the hard to reach areas.
              </p>
            </div>
          </div>
        </div>
        <div className={`flex bg-gray-100`}>
          <div className={`columns-2 gap-0`}>
            <div className="basis-8/12 bg-gray-100 text-container p-8">
              <h3 className="text-3xl mb-2">Wallpapering</h3>
              <hr />
              <p className="leading-loose">
                Wallpapering takes skill and experience to achieve a great
                finish. Our team have a wealth of knowledge when it comes to
                giving advice and fitting the right paper. From fabric wall
                coverings & printed murals to preparatory papers we can fit it!
                We also offer free measures for all accepted work. We can supply
                you with a choice of papers or you may have bought a paper and
                only need it us to hang it.
              </p>
            </div>
            <div className={``}>
              <Image
                src={wallpaper}
                width={800}
                alt={`preparation`}
                className={`object-cover w-full max-h-min`}
              />
            </div>
          </div>
        </div>
        <div className={`flex bg-gray-100`}>
          <div className={`columns-2 gap-0`}>
            <div className={``}>
              <Image
                src={commercial}
                width={800}
                alt={`preparation`}
                className={`object-cover w-full max-h-min`}
              />
            </div>
            <div className="bg-gray-100 text-container p-8">
              <h3 className="text-3xl mb-2">Commercial & Industrial</h3>
              <hr />
              <p className="leading-loose">
                As the largest painting and decorating contractors on the Island
                we can cope with any size of project. In the past we have
                decorated the Great Laxey Wheel - the world’s largest water
                wheel, entire housing estates, Strand Shopping Centre, Ramsey
                Swing Bridge and the complete exterior of Ronaldsway Airport to
                name a few. Buchanan & Pitts have the experience and knowhow to
                specify the correct product and procedure for the task in hand.
              </p>
            </div>
          </div>
        </div>
        <div className={`flex bg-gray-100`}>
          <div className={`columns-2 gap-0`}>
            <div className="basis-8/12 bg-gray-100 text-container p-8">
              <h3 className="text-3xl mb-2">
                Speciality Wood Grain & Signwriting
              </h3>
              <hr />
              <p className="leading-loose">
                Some say that graining and sign writing is a dying art. We
                disagree – for us this is part of our heritage and should be
                embraced. Refurbishment of the Isle of Man Steam, Electric &
                Snaefell Railways rolling stock is part of our day today work.
                This includes signwriting and lining out of trams or a train
                carriages. We have decorators who carry these works out on the
                Island. Like many residents of the Island we pride ourselves in
                our history. From signwriting doors at the Gaiety Theatre or
                refurbishing the Great Camera Obscurer these projects are more
                than just a job to us.
              </p>
            </div>
            <div className={``}>
              <Image
                src={special}
                width={800}
                alt={`preparation`}
                className={`object-cover w-full max-h-min`}
              />
            </div>
          </div>
        </div>
        <div className={`flex bg-gray-100`}>
          <div className={`columns-2 gap-0`}>
            <div className={``}>
              <Image
                src={hAnds}
                width={800}
                alt={`preparation`}
                className={`object-cover w-full max-h-min`}
              />
            </div>
            <div className="bg-gray-100 text-container p-8">
              <h3 className="text-3xl mb-2">Health & Safety</h3>
              <hr />
              <p className="leading-loose mb-2">
                With fully trained CITB and IOSH staff members you can be sure
                that your work will be carried out using the most up to date
                health and safety practices. Below are a number of training
                accreditations held within the company.
              </p>
              <ul className="list-disc">
                <li>
                  IPAF up to 26 meters – Self Propelled Boom and Scissor Lift.
                </li>
                <li>NPORS – Sign Light and Guarding</li>
                <li>Asbestos Awareness</li>
                <li>First Aid</li>
                <li>Working at Height</li>
                <li>Abrasive Wheels</li>
                <li>IOSH Working Safely</li>
                <li>IOSH Managing Safely</li>
                <li>CITB Site Manger</li>
              </ul>
              <p>
                We believe that the safety and wellbeing of our customers and
                employees is paramount. We carry out regular site visits and
                provide Risk Assessments, Methods Statements &amp; COSHH
                Assessments.
              </p>
            </div>
          </div>
        </div>
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

export default Services;
