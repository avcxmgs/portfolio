import React from "react";

export default function Resources() {
  return (
    <section id="resources">
      <div className="container px-5 py-10 mx-auto lg:px-40>">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Resources
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the resources that I used to create this demo
            website. Any photos used in this portfolio are either my own
            photography, or graphics created by myself.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <a
            href="https://www.freecodecamp.org/news/build-portfolio-website-react/"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="screenshot of freecodecamp"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="freecodecamp.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-rose-900 opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  Free Code Camp Tutorial
                </h1>
                <p className="leading-relaxed">
                  This is one of the tutorials linked by my instructor to help
                  with building this portfolio.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/avcxmgs/ui_component_library"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="screenshot of ui component library repo"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="uicomprepo.png"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-rose-900 opacity-0 hover:opacity-100">
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  UI Component Library Project
                </h1>
                <p className="leading-relaxed">
                  The codebase of this website is built on this previous project
                  of mine.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
