import React from "react";
import { Spotlight } from "../components/ui/SpotlightEffect";
import { AnimatedTooltip } from "../components/ui/AnimatedToolTip";
import Button from "../components/ui/Button";
import { ContainerScroll } from "../components/ui/ScrollTablet";
import { BackgroundBeams } from "../components/ui/BackgroundBeams";
import Pricing from "./Pricing";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  const nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div>
      <div className="relative">
        <nav className="backdrop-blur-md backdrop-saturate-200 absolute top-[50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 rounded-full z-[9999]">
          <div className="p-4 max-w-7xl  mx-auto relative z-10 w-full md:flex items-center justify-between hidden">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-base text-neutral-300 antialiased hover:text-white transition-colors ease-linear duration-75"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                  <Link to="/login">Login</Link>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
              </li>
              hi this is a change fjsadj
            </ul>
          </div>
        </nav>
      </div>
      <section className="md:min-h-screen w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-1">
            Your very own <br /> blog application
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
          <p className="mt-4 font-bold text-base text-neutral-300 max-w-lg text-center mx-auto">
            Used by thounsands, and counting
          </p>
          <div className="flex flex-row items-center justify-center mt-3 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <div className="flex items-center justify-center mt-5 gap-3">
            <Button>Read blogs</Button>
            <a
              href="https://github.com/OINDIL"
              className="text-neutral-50 hover:underline font-semibold"
            >
              Visit our Github
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col overflow-hidden bg-neutral-950">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-2">
                Leave your regular boring <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Blogs
                </span>
              </h1>
            </>
          }
        >
          <img
            src={"https://placehold.co/1400x720"}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      <section className="bg-neutral-950">
        <Pricing />
      </section>

      <section>
        <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              Join the waitlist
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              We are trying our best to provide you with the best experience as
              soon as possible. Enter your email to be part of the waitlist. We
              will notify you when we launch.
            </p>
            <input
              type="text"
              placeholder="Enter your email and hit Enter"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-3 py-1 focus:outline-none text-white"
            />
          </div>
          <BackgroundBeams />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
