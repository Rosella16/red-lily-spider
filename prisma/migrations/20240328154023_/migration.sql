-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "student_name" VARCHAR(50) NOT NULL,
    "gender" VARCHAR(6) NOT NULL,
    "email" VARCHAR(50) NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);
