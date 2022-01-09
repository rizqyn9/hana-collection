import React from "react";

export default function Container({ children }) {
  return (
    <div class="container mx-auto py-[5rem] dark:bg-black">{children}</div>
  );
}
