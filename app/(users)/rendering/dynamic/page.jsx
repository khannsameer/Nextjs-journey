import React from "react";
import { db } from "@/config/db.jsx";
export const dynamic = "force-dynamic";
import { cache } from "react";

const DynamicPage = async () => {
  //   const [student] = await db.execute("select * from students");
  //   console.log("Dynamic Student");
  const student = await getAllStudent();

  return (
    <>
      <h1 className="mb-3">Hi Dynamic Page</h1>
      <StudentList student={student} />
    </>
  );
};

export default DynamicPage;

const StudentList = async () => {
  const student = await getAllStudent();
  return (
    <>
      <ul>
        {student.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
    </>
  );
};

const getAllStudent = cache(async () => {
  const [student] = await db.execute("select * from students");
  console.log("Dynamic Student");
  return student;
});
