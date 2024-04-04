import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST(req, res) {
  const { email, gender, student_name } = await req.json();
  console.log(email, gender, student_name);
  const insert = await prisma.student.create({
    data: {
      email: email,
      student_name: student_name,
      gender: gender,
    },
  });
  return NextResponse.json({
    status: 200,
    message: "Hello",
  });
}
