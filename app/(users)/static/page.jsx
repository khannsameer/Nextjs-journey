import React from "react";
import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [doctors_db] = await db.execute("SELECT * FROM doctors");
  console.log("Static Doctors");

  return (
    <>
      <h1 className="m-5">Hi Static Page</h1>
      <ul>
        {doctors_db.map((doctors) => {
          return <li key={doctors.id}>{doctors.name}</li>;
        })}
      </ul>
    </>
  );
};

export default StaticPage;
