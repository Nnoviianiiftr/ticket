"use client";

import Image from "next/image";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/infinys.png"
          alt="infinys"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Need Help?</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Implementing a robust ticketing system website streamlines customer
          inquiries, ensures timely responses, and enhances overall support
          efficiency, ultimately leading to improved customer satisfaction and
          loyalty.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            10k+
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <a
            href="#form"
            title="Create Ticket"
            style={{display : 'inline-block', width: '100%', padding : '25px 0', backgroundColor: '#30AF5B', color: 'white', textAlign: 'center', textDecoration: 'none', borderRadius: '9999px'}}>
            Create Ticket
          </a>
          <a
            href="/learn-more"
            title="Learn More"
            style={{display : 'inline-block', width: '100%', padding : '25px 0', backgroundColor: 'GrayText', color: 'white', textAlign: 'center', textDecoration: 'none', borderRadius: '9999px'}}>
            Learn More
          </a>

          {/* <Button type="button" title="Create Ticket" variant="btn_green" />
          <Button type="button" title="Learn More" variant="btn_white_text" /> */}
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-16 text-white">
              Pakuwon Tower 9th floor. Unit F & G,
            </p>
            <p className="bold-16 text-white">
              Casablanca Raya Kav. 88, South Jakarta 12870, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
