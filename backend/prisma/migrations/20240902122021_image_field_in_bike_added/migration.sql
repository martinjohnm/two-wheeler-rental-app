/*
  Warnings:

  - Made the column `image` on table `Bike` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Bike" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "image" SET DEFAULT '';
