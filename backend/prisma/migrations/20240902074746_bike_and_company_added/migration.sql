/*
  Warnings:

  - You are about to drop the column `company` on the `Bike` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Bike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Bike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bike" DROP COLUMN "company",
ADD COLUMN     "companyId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "Country" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
