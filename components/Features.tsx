import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="padding-container max-container w-full pb-24">
        <div className="relative">
          <Image
            src="/infinys.png"
            alt="infinys"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 lg:bold-64">Application</h2>
          <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
            Our experts implement the applications listed below to ensure your
            investment in Infinyscloud is maximized and run in adherence to our
            quality standards.
          </p>
        </div>
        <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
          {FEATURES.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              icon={feature.Image}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div>
        <Image src={icon} alt="icon" width={100} height={100} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
