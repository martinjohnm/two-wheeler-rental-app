/*
  Warnings:

  - You are about to drop the `BikeOnLocation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BikeOnLocation" DROP CONSTRAINT "BikeOnLocation_bikeId_fkey";

-- DropForeignKey
ALTER TABLE "BikeOnLocation" DROP CONSTRAINT "BikeOnLocation_locationId_fkey";

-- AlterTable
ALTER TABLE "Bike" ADD COLUMN     "locationId" INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE "BikeOnLocation";

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
