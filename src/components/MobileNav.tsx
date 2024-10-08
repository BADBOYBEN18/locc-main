/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { IoIosClose } from 'react-icons/io';
const MobileNav = ({ handleOpen }: any) => {
  return (
    <div className="bg-white lg:hidden  text-black items-center h-full fixed  z-[99] py-9 px-4 md:px-[3rem] w-full">
      <div className="flex justify-between mb-[4rem]">
        <Link href="/">
          <div className="">
            <h1 className="font-sora text-[24px] font-semibold ">L.O.C.C</h1>
            <p className="font-sora text-xs font-semibold">
              Light Olives Child Center.
            </p>
          </div>
        </Link>
        <button onClick={handleOpen}>
          <IoIosClose className="w-8 h-8" />
        </button>
      </div>

      <div className="space-y-9 mb-6 text-[14px] font-light">
        <Link href="/about">
          <p>Home</p>
        </Link>

        <p>
          <Link href="contact">Location</Link>
        </p>

        <p>
          <Link href="activities">About Us</Link>
        </p>
        <p>
          <Link href="activities">Career</Link>
        </p>

        <p>
          <Link href="resources">Contact Us</Link>
        </p>
      </div>
      <Link href="/donate">
        <button className="bg-[#E62074] text-white  py-[16px] px-[24px] rounded-lg ">
          Stay in Touch
        </button>
      </Link>
    </div>
  );
};

export default MobileNav;
