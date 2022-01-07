import React from "react";
import Catalog from "../components/Catalog";
import Container from "../components/Container";

function Home() {
  return (
    <Container>
      <div class="banner bg-primary pt-12 relative bg-indigo-100">
        <div class="container px-4 mx-auto flex flex-wrap items-center">
          <div class="w-full md:w-1/2 text-white md:pb-0 pb-6 md:pr-8">
            <h2 class="font-tenor leading-snug text-4xl md:text-5xl lg:text-3-5rem">
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
      <div className="">
        <Catalog />
      </div>
    </Container>
  );
}

export default Home;
