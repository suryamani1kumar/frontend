import React from "react";

const NewLetter = () => {
  return (
    <div className="container">
      <div className="my-10">
        <h4 className="text-center">NewsLetter</h4>
        <p className="text-center">
          Join our newsletter to get fresh travel guides, expert tips, and new
          blog updates delivered straight to your inbox.
        </p>
        <div className="flex justify-center p-4">
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="rounded me-2 w-80 py-2 px-4"
        />

        <button className="rounded py-2 px-4 bg-blue-700 text-white">Subscribe</button>
        </div>

      </div>
    </div>
  );
};

export default NewLetter;
