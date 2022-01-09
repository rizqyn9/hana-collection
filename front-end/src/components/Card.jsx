import React from "react";

export default function Card({ title, description }) {
  return (
    <div className="w-[20%] p-2">
      <div class="overflow-hidden shadow-lg rounded-lg cursor-pointer">
        <a href="#" class="w-full block h-full flex flex-col">
          <div className="pt-[100%] w-fulll relative">
            <img
              alt="blog photo"
              src="/pic1.jpg"
              class="max-h-[15rem] w-full h-full object-cover absolute top-0"
            />
          </div>
          <div class="bg-white dark:bg-gray-800 w-full p-4 flex-grow">
            <p class="text-indigo-500 text-md font-medium">Article</p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {title}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
              {description}
            </p>
            <div class="flex flex-wrap justify-starts items-center mt-4">
              <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Car
              </div>
              <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
