import React from "react";
import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [student] = await db.execute("select * from students");
  console.log("Static Student");

  return (
    <>
      <h1 className="m-5">Hi Static Page</h1>
      <ul>
        {student.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
    </>
  );
};

export default StaticPage;
