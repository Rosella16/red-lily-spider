import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET() {
  //   const res = await prisma.student.createMany({
  //     data: [
  //       {
  //         student_name: "Zoro",
  //         email: "test1234@gmail.com",
  //         gender: "male",
  //       },
  //       {
  //         student_name: "Chopper",
  //         gender: "female",
  //         email: "test234@gmail.com",
  //       },
  //       {
  //         student_name: "Ling",
  //         gender: "female",
  //         email: "test235@gmail.com",
  //       },
  //     ],
  //   });
  const results = await prisma.student.findMany();
  console.table(results);
  return NextResponse.json({
    status: 200,
    message: "CREATE",
    payload: results,
  });
}
