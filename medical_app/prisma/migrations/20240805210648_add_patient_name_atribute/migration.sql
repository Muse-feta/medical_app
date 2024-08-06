/*
  Warnings:

  - You are about to drop the column `name` on the `appointment` table. All the data in the column will be lost.
  - Added the required column `patientName` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `name`,
    ADD COLUMN `patientName` VARCHAR(191) NOT NULL;
