import { Image, Link } from "@nextui-org/react";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="w-screen py-2 flex justify-between items-center px-16  bg-[#163450]">
        <div>
          <Image src={Logo} height={130} width={130} />
        </div>
        <div onClick={() => setShowSidebar(true)} className="cursor-pointer">
          <HiOutlineMenuAlt4 color="white" size={25} />
        </div>
      </div>
      {/* sidebar */}
      <div
        className={`absolute inset-0 bg-[#163450] z-30 flex flex-col justify-start items-end pt-12 pr-28 gap-10 ${
          showSidebar ? "flex" : "hidden"
        }`}
      >
        <span
          onClick={() => setShowSidebar(false)}
          className="pb-8 cursor-pointer"
        >
          <IoMdClose color="white" size={25} />
        </span>
        <Link
          href="http://mostaqillapaaet.com/#Welcome"
          className="text-white underline text-5xl"
        >
          الصفحة الترحيبية
        </Link>
        <Link
          href="http://mostaqillapaaet.com/#Summary"
          className="text-white underline text-5xl"
        >
          نبذة عامة عن القائمة
        </Link>
        <Link href="#" className="text-white underline text-5xl">
          حساب المعدل التراكمي
        </Link>
        <Link
          href="http://mostaqillapaaet.com/#generalInformation"
          className="text-white underline text-5xl"
        >
          ملفات عامة
        </Link>
        <Link
          href="https://mostaqillapaaet.com/guidelines-videos/"
          className="text-white underline text-5xl"
        >
          فيديوهات
        </Link>
      </div>
    </>
  );
}

export default Header;
