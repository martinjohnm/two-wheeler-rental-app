/*
  Warnings:

  - Added the required column `locationId` to the `Bike` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bike" ADD COLUMN     "locationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
