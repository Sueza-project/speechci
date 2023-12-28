import React, { useState } from "react";

const MyReactComponent = () => {
  const [name, setName] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <h1 className="text-2xl mb-4 text-center">Speech text</h1>
        <div className="relative sm:absolute md:fixed lg:absolute xl:relative">
          <input
            className="block mx-auto mb-4 bg-blue-600 p-2 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter your name"
          />
          <p className="text-center">Hello {name || "stranger"}!</p>
        </div>
      </div>
    </div>
  );
};

export default MyReactComponent;
