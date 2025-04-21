import React from "react";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of the coding skills that I learned during my program,
            as well as some graphic design tools that I honed in my own free
            time.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div key="HTML" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">HTML</span>
            </div>
          </div>

          <div key="CSS" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">CSS</span>
            </div>
          </div>

          <div key="JS/TS" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                JavaScript and TypeScript
              </span>
            </div>
          </div>

          <div key="Ruby" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">Ruby</span>
            </div>
          </div>

          <div key="Python" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">Python</span>
            </div>
          </div>

          <div key="GitHub" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">GitHub</span>
            </div>
          </div>

          <div key="VSCode" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                Visual Studio Code
              </span>
            </div>
          </div>

          <div key="Docker" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">Docker</span>
            </div>
          </div>

          <div key="GIMP" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">GIMP</span>
            </div>
          </div>

          <div key="PS" className="p-2 sm:w-1/2 w-full">
            <div className="bg-rose-900 rounded flex p-4 h-full items-center">
              <span className="title-font font-medium text-white">
                Adobe Photoshop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
