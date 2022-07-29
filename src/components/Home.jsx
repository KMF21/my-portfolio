import React from "react";
import image from "../img/sebastian-unrau-v4e3JI7DDHI-unsplash.jpg";

function Home() {
  return (
    <main>
      <img
        src={image}
        alt="backgroung image"
        className="absolute object-cover w-full h-full lg:h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1
          className=":text-6xl  text-green-100 font-bold cursive leading-none lg:leading-snug
          home-name"
        >
          Hello! I'm Mr.Monday
        </h1>
      </section>
    </main>
  );
}

export default Home;
