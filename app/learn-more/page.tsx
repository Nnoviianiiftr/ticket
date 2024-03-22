import { Metadata } from "next";
import { LEARNMORE } from "@/constants";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Learn More | Ticket",
};

const Learnmore = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          {/* <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          /> */}
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/infinys.png"
              alt="infinys"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Learn More</h2>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
              Empower your business with secure, scalable, and reliable cloud
              solutions.
            </p>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {LEARNMORE.map((learnmore) => (
              <LearnmoreItem
                key={learnmore.title}
                title={learnmore.title}
                icon={learnmore.icon}
                description={learnmore.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type LearnmoreItem = {
  title: string;
  icon: string;
  description: string;
};

const LearnmoreItem = ({ title, icon, description }: LearnmoreItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Learnmore;
