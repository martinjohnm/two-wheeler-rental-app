-- DropForeignKey
ALTER TABLE "Bike" DROP CONSTRAINT "Bike_companyId_fkey";

-- AddForeignKey
ALTER TABLE "Bike" ADD CONSTRAINT "Bike_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
