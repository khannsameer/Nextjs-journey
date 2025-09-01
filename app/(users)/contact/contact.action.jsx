"use server";
import { db } from "@/config/db";

const contactAction = async (formData) => {
  try {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Received:", fullName, email, message);

    // Insert into MySQL
    await db.execute(
      `INSERT INTO contact (full_name, email, message) VALUES (?, ?, ?)`,
      [fullName, email, message]
    );

    console.log("✅ Data inserted successfully");
    return { success: true };
  } catch (error) {
    console.error("❌ Database insert failed:", error);
    return { success: false, error: error.message };
  }
};

export default contactAction;
