/** @format */

import Image from "next/image";
import Container from "./Container";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-gray-100 lg:h-screen-75  py-20 sm:mb-10 lg:mb-0">
      <Container>
        <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm md:max-w-md lg:max-w-lg xl:max-w-2xl lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Welcome to our{" "}
              <span className="text-primaryHover">IT Services</span>
            </h1>
            <p className="mt-6 mb-8 text-base md:text-lg lg:text-xl">
              <br className="sm:inline" /> Your partner in software development
              excellence
            </p>
            <div className="flex flex-col space-y-4 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-6 py-3 text-lg font-semibold rounded bg-primaryHover text-gray-900"
              >
                Contact Us
              </a>
              {/* <a
                rel="noopener noreferrer"
                href="#"
                className="px-6 py-3 text-lg font-semibold border rounded border-gray-100"
              >
                Malesuada
              </a> */}
            </div>
          </div>
          <div className="flex items-center justify-center p-6 pt-18 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-lg">
            <Image
              src="/images/hero-image.jpg"
              alt="Hero Image"
              width={800}
              height={800}
              className="object-contain h-72 sm:h-80 lg:h-max xl:h-112 2xl:h-128 "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
