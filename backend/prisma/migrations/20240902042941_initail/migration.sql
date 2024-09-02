-- CreateTable
CREATE TABLE "Bike" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "model" INTEGER NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Bike_pkey" PRIMARY KEY ("id")
);
