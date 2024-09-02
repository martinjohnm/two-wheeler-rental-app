/*
  Warnings:

  - You are about to drop the column `Country` on the `Company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[companyId]` on the table `Bike` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "Country",
ADD COLUMN     "country" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Bike_companyId_key" ON "Bike"("companyId");
