/** @format */

import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  label,
  img,
  alt,
  content = "This is the content for Column 1.",
  callToActionText = "Read More",
  href = "#",
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div>
        <div className="w-full h-40 relative rounded-t-lg overflow-hidden">
          <Image
            src={img}
            alt={alt}
            fill={true}
            className="bg-cover object-fill"
          />
        </div>
        <h2 className="text-lg font-semibold my-2">{label}</h2>
        <p>{content}</p>
      </div>
      <div className="mt-4">
        <Link href={href} className="block text-blue-500 font-semibold">
          {callToActionText}
        </Link>
      </div>
    </div>
  );
}
