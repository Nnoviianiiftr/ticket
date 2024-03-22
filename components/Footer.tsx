import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="infinys-text.png" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row">
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a
                  href="https://www.instagram.com/infinyscloud/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <Image src="instagram.svg" alt="logo" width={24} height={24} />
                  <span className="sr-only">Instagram Page</span>
                </a>
                <a
                  href="https://facebook.com/infinyscloud/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <Image src="facebook.svg" alt="logo" width={24} height={24} />
                  <span className="sr-only">Facebook page</span>
                </a>
                
                <a
                  href="https://twitter.com/"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <Image src="twitter.svg" alt="logo" width={24} height={24} />
                  <span className="sr-only">Twitter page</span>
                </a>

                <a
                  href="https://open.spotify.com/show/7gC4HxVdIfaiMZ7K9Zxwb3"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <Image src="spotify.svg" alt="logo" width={24} height={24} />
                  <span className="sr-only">Spotify</span>
                </a>

                <a
                  href="https://www.youtube.com/@Infinyscloud"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <Image src="youtube.svg" alt="logo" width={24} height={24} />
                  <span className="sr-only">Youtube Channel</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          @{new Date().getFullYear()} Infinys. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
