import React from "react";
import Image from "next/image";
import Link from "next/link";
import LinkFooter from "./LinkFooter";

const HomePage = () => {
  return (
    <div className="home-page min-h-screen ">
      <div className="head w-full text-center pt-2 bg-gray-800 pb-10">
        <div className="logo">
          <Link href="https://p2pclouds.com/">
            <Image
              src={"/p2plogo.png"}
              className="rounded"
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="text text-white text-xl mt-2 cursor-pointer select-none">
          Sales Management Software
        </div>
      </div>

      <div className="user-panels w-full mx-auto flex flex-wrap justify-center mt-1 gap-3 container">
        <Link href="sadmin/login">
          <div className="superadmin px-20 py-3   bg-blue-500 rounded text-white md:mr-3 cursor-pointer select-none">
            Super Admin Login
          </div>
        </Link>
        <Link href="admin/login">
          <div className="admin bg-orange-400 px-24 text-center py-3 rounded text-white md:mr-3 select-none cursor-pointer">
            Admin Login
          </div>
        </Link>
        <Link href="user/login">
          <div className="user bg-purple-600 px-24 py-3 rounded text-white select-none cursor-pointer">
            User Login
          </div>
        </Link>
      </div>

      {/*Link Footer Component */}
      <div className="mt-[54px]">
        
      <LinkFooter />
      </div>
    </div>
  );
};

export default HomePage;
