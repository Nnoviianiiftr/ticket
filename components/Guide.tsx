import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/infinys.png" alt="infinys" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Ready To Solve Your Problem
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with Infinys, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed
            id semper risus in hendrerit gravida rutrum. Senectus et netus et
            malesuada fames ac turpis.
          </p>
        </div>
      </div>

      {/* relative is optional */}
      <div className="flexCenter relative max-container w-full">
        <Image
          src="/office.jpg"
          alt="office"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
    </section>
  );
};

export default Guide;
