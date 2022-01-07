import React from "react";
import Card from "./Card";

export default function Catalog() {
  return (
    <div
      className="container grid grid-flow-row-dense gap-2 md:gap-6 place-content-center md:place-content-between py-10"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(5rem, 20rem))",
      }}
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
