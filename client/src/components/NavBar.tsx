import React, { KeyboardEvent, useState } from "react";
import Link from "next/link";
import { useAuthDispatch, useAuthState } from "../context/auth";
import axios from "axios";
import Image from "next/image";

import Logo from "../assets/lounge_w.png";
import Router, { useRouter } from "next/router";

const NavBar: React.FC = () => {
  const { loading, authenticated } = useAuthState();
  const dispatch = useAuthDispatch();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    axios
      .post("/auth/logout")
      .then(() => {
        dispatch("LOGOUT");
        window.location.reload(); // Page Refresh
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchPost = (e: KeyboardEvent) => {
    if (searchTerm.trim() === "") {
      setSearchTerm("");
      return;
    }
    if (e.key === "Enter") {
      router.push(`/s/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between  h-16 px-8 bg-white">
      <span className="p-2 text-2xl font-semibold text-gray-400">
        <Link href="/">
          <Image src={Logo} alt="service logo" width={130} height={50} />
        </Link>
      </span>

      <div className=" px-4 invisible w-5 md:visible md:w-80">
        <div className="relative flex items-center bg-gray-100 border rounded hover:border-gray-700 hover:bg-white">
          <i className="ml-0 md:ml-5 text-gray-400 fas fa-search cursor:pointer"></i>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => searchPost(e)}
            className=" px-10 py-1 bg-transparent rounded focus:outline-none"
          />
        </div>
      </div>

      <div className="flex">
        {!loading && authenticated ? (
          <button
            className="text-xs md:text-base w-20 p-2 text-center  mr-2 text-white bg-gray-300 rounded hover:bg-mint"
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              href="/login"
              className="text-s md:text-base md:w-20 p-1.5 md:p-1.5 mr-2 text-center text-gray-400 border border-gray-400 rounded hover:text-mint hover:border-mint"
            >
              Login
            </Link>
            <Link
              href="/register"
              className=" md:w-20 p-1.5 text-center text-white bg-mint rounded hover:bg-pblue"
            >
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
