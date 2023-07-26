/** @format */

import TestimonialSection from "./TestimonialSection";

export default function Testimonials() {
  const testimonialsData = [
    {
      title: "Solid foundation for any project",
      quote:
        "FlowBite provides a robust set of design tokens and components...",
      imageSrc: "/images/person1.png",
      name: "Roberta Casas",
      designation: "Lead designer at Dropbox",
    },
    {
      title: "Mindblowing workflow and variants",
      quote:
        "As someone who mainly designs in the browser, I've been a casual user of Figma...",
      imageSrc: "/images/person2.png",
      name: "Jese Leos",
      designation: "Software Engineer at Facebook",
    },
    {
      title: "Efficient Collaborating",
      quote: "This is a very complex and beautiful set of elements...",
      imageSrc: "/images/person3.png",
      name: "Joseph McFall",
      designation: "CTO at Google",
    },
  ];

  return <TestimonialSection testimonials={testimonialsData} />;
}
