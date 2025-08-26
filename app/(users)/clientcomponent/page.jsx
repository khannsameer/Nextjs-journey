"use client";

import { useEffect, useState } from "react";
import Counter from "./Counter";

const URL = "https://jsonplaceholder.typicode.com/posts";

const ClientComponent = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      setPostData(data);

      return data;
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Client Component</h1>
      <button
        className="bg-amber-300 p-2 rounded-xl mr-2"
        onClick={() => alert("Hello")}
      >
        Click Me
      </button>
      <Counter />

      <ul className="grid grid-cols-3 gap-5 mt-3">
        {postData.map((post) => (
          <li
            key={post.id}
            className="border p-3 rounded-lg shadow-sm hover:shadow-md"
          >
            <h2 className="font-bold text-lg">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.body}</p>
            <small className="block text-gray-500">
              User ID: {post.userId}
            </small>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientComponent;
