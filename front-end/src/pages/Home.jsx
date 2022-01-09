import React from "react";
import Catalog from "../components/Catalog";
import Container from "../components/Container";

function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-5">
        <div class="banner bg-primary pt-12 relative bg-indigo-100 dark:bg-gray-900">
          <div class="container px-4 mx-auto flex flex-wrap items-center">
            <div class="w-full md:w-1/2 text-white md:pb-0 pb-6 md:pr-8">
              <h2 class="font-tenor text-blue-500 leading-snug text-4xl md:text-5xl lg:text-3-5rem">
                Lorem ipsum dolor sit amet consectetur
              </h2>

              <div class="actions mt-8">
                <a class="btn-1">Shop All</a>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <img
                src="assets/images/banner.png"
                srcset="assets/images/banner.png 1x, /assets/images/banner@2x.png 2x, /assets/images/banner@3x.png 3x"
                alt=""
                class="-mr-8 -mb-1"
              />
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-indigo-500">Katalog</h2>
        <div className="border-2 p-2">
          <Catalog />
        </div>
      </div>
    </Container>
  );
}

export default Home;
