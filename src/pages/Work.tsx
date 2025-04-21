import React from "react";

export default function Work() {
  return (
    <section id="work">
      <div className="container px-5 py-10 mx-auto lg:px-40>">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Work
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This is a collection of some of my projects that I made during my
            time in my program. Not listed here is the work that I participated
            in during my Industry Project work term with the College.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <a
            href="https://github.com/avcxmgs/webdev1proj"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="screenshot of the project"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="webdev1proj.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-rose-900 opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  First Website
                </h1>
                <p className="leading-relaxed">
                  I created this website as my final project for the Web
                  Development 1 course. <br /> Tech: HTML, CSS, JavaScript
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://github.com/avcxmgs/webdev1form"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="screenshot of the project"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="orderform.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-rose-900 opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Order Form Project
                </h1>
                <p className="leading-relaxed">
                  With some starter files, I was able to create a functioning
                  order form. <br /> Tech: HTML, CSS, JavaScript
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
