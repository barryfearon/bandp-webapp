// components/ServiceAreas.tsx
const services = [
  { title: "Interior Painting", icon: "/interior-icon.svg" },
  { title: "Exterior Painting", icon: "/exterior-icon.svg" },
  { title: "Wallpapering", icon: "/wallpaper-icon.svg" },
];

const ServiceAreas = () => (
  <section className="p-8 bg-white">
    <div className="container mx-auto">
      <h2 className="text-center text-2xl mb-6">Our Services</h2>
      <div className="flex justify-around">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img
              src={service.icon}
              alt={service.title}
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
