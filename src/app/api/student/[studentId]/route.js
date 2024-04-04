import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(request, { params: { studentId } }) {
  const result = await prisma.student.findUnique({
    where: {
      id: +studentId,
    },
  });

  return NextResponse.json({
    status: 200,
    message: "FOUND",
    payload: result,
  });
}
