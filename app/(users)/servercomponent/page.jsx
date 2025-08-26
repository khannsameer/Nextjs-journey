const ServerComponent = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts"; // in server component we cannot see the url but in the client component the url will expose
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>Server Component</h1>

      <ul className="grid grid-cols-3 gap-5 mt-3">
        {data.map((post) => (
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

export default ServerComponent;
