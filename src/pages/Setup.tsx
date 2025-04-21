import React from "react";

export default function Setup() {
  return (
    <section id="setup">
      <div className="container px-5 py-10 mx-auto lg:px-40>">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Developer Setup
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="flex relative sm:w-1/2 w-100 p-4">
            <img
              alt="screenshot vscode setup"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="vscode.png"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-rose-900 opacity-0 hover:opacity-100">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                VSCode Setup
              </h1>
            </div>
          </div>

          <div className="flex relative sm:w-1/2 w-100 p-4">
            <img
              alt="screenshot of terminal setup"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="terminal.png"
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-rose-900 opacity-0 hover:opacity-100">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                Bash Terminal Setup
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
