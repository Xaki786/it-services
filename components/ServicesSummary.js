/** @format */

import ServiceCard from "./ServiceCard";

const services = [
  {
    label: "Web Development",
    key: "Web Development",
    img: "/images/web_dev.png",
    alt: "Web Development Image",
    href: "#",
    content: "This is the content for Web Development",
    callToActionText: "Read More",
  },
  {
    label: "Mobile Apps",
    key: "Mobile Apps",
    img: "/images/mob_dev2.jpg",
    alt: "Mobile Apps Image",
    href: "#",
    content: "This is the content for Mobile Apps",
    callToActionText: "Read More",
  },
  {
    label: "Cloud Services",
    key: "Cloud Services",
    img: "/images/web_dev.png",
    alt: "Cloud Services Image",
    href: "#",
    content: "This is the content for Cloud Services",
    callToActionText: "Read More",
  },
  {
    label: "IOT Development",
    key: "IOT Development",
    img: "/images/mob_dev2.jpg",
    alt: "IOT Development Image",
    href: "#",
    content: "This is the content for IOT Development",
    callToActionText: "Read More",
  },
];
const ServicesSummary = () => {
  return (
    <section className="services-summary text-center py-12 pb-0">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map(
          ({ label, key, img, callToActionText, content, href }) => (
            <ServiceCard
              label={label}
              key={key}
              img={img}
              callToActionText={callToActionText}
              content={content}
              href={href}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ServicesSummary;
