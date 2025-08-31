import React from "react";
import { db } from "@/config/db.jsx";
export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const [student] = await db.execute("select * from students");
  console.log("Dynamic Student");

  return (
    <>
      <h1 className="mb-3">Hi Dynamic Page</h1>
      <ul>
        {student.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
    </>
  );
};

export default DynamicPage;
