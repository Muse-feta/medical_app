/*
  Warnings:

  - You are about to drop the column `status` on the `appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `status`;

-- AlterTable
ALTER TABLE `appointmentinfo` ADD COLUMN `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING';
