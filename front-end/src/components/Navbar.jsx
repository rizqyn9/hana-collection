import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="flex bg-red-100 flex-wrap items-center justify-between p-5 dark:bg-gray-800 shadow">
      <div class="lg:order-2 w-auto lg:w-1/5 lg:text-center">
        <Link class="text-xl text-gray-800 font-semibold font-heading" href="/">
          Hana Collection
        </Link>
      </div>
      <div class="block lg:hidden">
        <button class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right">
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          Daftar
        </a>
        <a
          class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-indigo-600"
          href="#"
        >
          Masuk
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
