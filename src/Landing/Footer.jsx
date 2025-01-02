import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="h-96 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <ul className="flex md:flex-row flex-col gap-3">
          {[
            "Home",
            "About",
            "Contact",
            "Blog",
            "Pricing",
            "Terms",
            "Privacy",
          ].map((item) => (
            <li
              key={item}
              className="text-center text-neutral-50 text-2xl font-semibold"
            >
              <Link to={`/${item.toLowerCase()}`} className="hover:underline">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
