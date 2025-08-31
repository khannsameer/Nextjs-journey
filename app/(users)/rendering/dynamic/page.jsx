import React from "react";
import { db } from "@/config/db.jsx";
export const dynamic = "force-dynamic";
import { cache } from "react";

const DynamicPage = async () => {
  //   const [student] = await db.execute("select * from students");
  //   console.log("Dynamic Student");
  const doctors = await getAllDoctors();

  return (
    <>
      <h1 className="mb-3">Hi Dynamic Page</h1>
      <DoctorsList doctors={doctors} />
    </>
  );
};

export default DynamicPage;

const DoctorsList = async () => {
  const doctors_db = await getAllDoctors();
  return (
    <>
      <ul>
        {doctors_db.map((doctors) => {
          return <li key={doctors.id}>{doctors.name}</li>;
        })}
      </ul>
    </>
  );
};

const getAllDoctors = cache(async () => {
  const [doctors_db] = await db.execute("SELECT * FROM doctors");
  console.log("Dynamic Doctors");
  return doctors_db;
});
