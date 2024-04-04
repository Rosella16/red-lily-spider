import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function DELETE(request, { params: { studentId } }) {
  const result = await prisma.student.delete({
    where: {
      id: +studentId,
    },
  });
  console.log(result);
  return NextResponse.json({
    status: 200,
    message: "hello world",
    payload: result,
  });
}
