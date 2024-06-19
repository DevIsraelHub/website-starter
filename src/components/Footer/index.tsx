import React from "react";
import Logo from "../Logo";
import Section from "../Section";
import Link from "next/link";
import { company, contact, site, siteAbbreviation, socialLink, support } from "@/constant";

function Footer() {
  return (
    <Section classNames="border-t mx-auto">
      <div className="h-1/2 w-full flex flex-wrap md:flex-row flex-col justify-between items-start py-20">
        <div className="py-5">
          <ul>
            <div className="max-w-[300px] space-y-3">
              <Logo />
              <p className="text-brandTextDull text-sm pb-6">
                {site.description}
              </p>
            </div>
            <div className="flex gap-5 pb-5">
              {
                socialLink.map((item, index) => (
                  <Link href={item.href} key={index} target="_blank" className="text-primary cursor-pointer">
                    {item.icon}
                    {/* <p className="text-xs text-brandTextDull text-center">{item.title}</p> */}
                  </Link>
                ))
              }
              {/* <FaInstagram className="text-primary text-3xl cursor-pointer hover:text-red-500" />
              <FaTwitter className="text-primary text-3xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-primary text-3xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-primary text-3xl cursor-pointer hover:text-red-600" /> */}
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-brandText font-bold text-xl pb-6">Company</p>
            {
              company.map((item, index) => (
                <li className="text-brandTextDull text-sm pb-4 hover:underline hover:text-primary cursor-pointer" key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-brandText font-bold text-xl pb-6">Support</p>
            {
              support.map((item, index) => (
                <li className="text-brandTextDull text-sm pb-4 hover:underline hover:text-primary cursor-pointer" key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-brandText font-bold text-xl pb-6">Contact Us</p>
            {
              contact.map((item, index) => (
                <Link href={item.href} className="flex items-center gap-x-3 text-brandTextDull text-sm pb-4 hover:underline hover:text-primary cursor-pointer" key={index}>
                  {item.icon}
                  <p>{item.name}</p>
                </Link>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center px-1 xs:px-3 md:px-5 p-5 border-t">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-brandText gap-y-1 text-xs md:text-sm">
          <p>© 2024 {siteAbbreviation} All rights reserved</p>
          <span className="font-medium text-brandTextDull">
            Built by{" "}
            <Link className="text-primary" target="_blank" href="https://ejeh.vercel.app">Ejeh</Link>{" "}
          </span>
        </div>
      </div>
    </Section>
  );
}

export default Footer;