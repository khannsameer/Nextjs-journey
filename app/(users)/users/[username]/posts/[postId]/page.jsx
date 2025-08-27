"use client";

import { use } from "react";

//this is for server component

// const SingleProfilePost = async (props) => {
//   const user = await props.params;
//   console.log(user);

//   return (
//     <>
//       <h1>Hello Dynamic Routes</h1>
//       <h2>
//         User: {user.username}, PostId: {user.postId}{" "}
//       </h2>
//     </>
//   );
// };

// export default SingleProfilePost;

//dynamic routes in client components using react use API

const SingleProfilePost = (props) => {
  const user = use(props.params);
  console.log(user);

  return (
    <>
      <h1>Hello Dynamic Routes</h1>
      <h2>
        User: {user.username}, PostId: {user.postId}{" "}
      </h2>
    </>
  );
};

export default SingleProfilePost;
