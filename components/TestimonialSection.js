/** @format */

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialSection = ({ testimonials }) => {
  return (
    <div className="rounded-lg py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 bg-white">
      <div className="mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Testimonials
        </h2>
        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <Carousel
        showArrows={false}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={false}
        stopOnHover={false}
        swipeable={true}
        emulateTouch={true}
        transitionTime={500}
        showIndicators={true}
        renderThumbs={() => {}}
        selectedItem={1}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 max-w-xl mx-auto mb-8">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-gray-300 md:p-12 h-80 rounded-lg shadow-lg">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimonial.title}
                </h3>
                <p className="my-4">{testimonial.quote}</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3 w-full">
                <div className="w-14">
                  <Image
                    className="rounded-full"
                    src={testimonial.imageSrc}
                    alt="profile picture"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="space-y-0.5 font-medium text-gray-900 text-left">
                  <div>{testimonial.name}</div>
                  <div className="text-sm font-light text-gray-500">
                    {testimonial.designation}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSection;
