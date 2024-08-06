/*
  Warnings:

  - You are about to drop the column `firstname` on the `appointment` table. All the data in the column will be lost.
  - Added the required column `name` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `firstname`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
