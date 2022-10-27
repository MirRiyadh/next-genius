import React from "react";

const Posts = ({ posts }) => {
  const { id, qus, ans } = posts;
  return (
    <div className="w-11/12 md:w-9/12 lg:w-6/12 p-5 m-auto bg-gradient-to-r from-sky-400 to-blue-500 my-4 text-white rounded-lg box-shadow">
      <h1 className="text-2xl font-bold">
        Q{id}-{qus}
      </h1>
      <p>{ans}</p>
    </div>
  );
};

export default Posts;
