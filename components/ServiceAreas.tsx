import Image from "next/image";

const services = [
  { title: "Interior Painting", icon: "/images/interior-icon.svg" },
  { title: "Exterior Painting", icon: "/images/exterior-icon.svg" },
  { title: "Wallpapering", icon: "/images/wallpaper-icon.svg" },
];

const ServiceAreas = () => (
  <section className="p-8 bg-white">
    <div className="container mx-auto">
      <h2 className="text-center text-2xl mb-6">Our Services</h2>
      <div className="flex justify-around">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
              className="w-16 h-16 mx-auto mb-2"
            />
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreas;
