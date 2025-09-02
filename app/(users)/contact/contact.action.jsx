"use server";
import { db } from "@/config/db";
import { redirect } from "next/navigation";

// const contactAction = async (formData) => {
//   //   const fullName = formData.get("fullName");
//   //   const email = formData.get("email");
//   //   const message = formData.get("message");

//   const { fullName, email, message } = Object.fromEntries(formData.entries());
//   //   console.log(fullName, email, message);

//   await db.execute(
//     `insert into contact_form (full_name, email, message) values (?, ? , ?)`,
//     [fullName, email, message]
//   );
// };

//for client component

const contactAction = (previousState, formData) => {
  try {
    const { fullName, email, message } = Object.fromEntries(formData.entries());
    //   console.log(fullName, email, message);
    db.execute(
      `insert into contact_form (full_name, email, message) values (?, ? , ?)`,
      [fullName, email, message]
    );
    redirect("/");
    // return { success: true, message: "Form Submitted Successfully" };
  } catch (error) {
    // console.log("server action", error);
    if (error.message === "NEXT_REDIRECT") throw error;
    return { success: false, message: "error while submiting" };
  }
};

export default contactAction;
