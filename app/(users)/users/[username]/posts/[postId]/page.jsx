const SingleProfilePost = async (props) => {
  const user = await props.params;
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
