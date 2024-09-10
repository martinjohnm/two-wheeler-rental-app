-- DropForeignKey
ALTER TABLE "Bike" DROP CONSTRAINT "Bike_locationId_fkey";

-- CreateTable
CREATE TABLE "BikeOnLocation" (
    "bikeId" INTEGER NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "BikeOnLocation_pkey" PRIMARY KEY ("bikeId","locationId")
);

-- AddForeignKey
ALTER TABLE "BikeOnLocation" ADD CONSTRAINT "BikeOnLocation_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BikeOnLocation" ADD CONSTRAINT "BikeOnLocation_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
