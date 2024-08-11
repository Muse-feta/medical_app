/*
  Warnings:

  - You are about to drop the column `status` on the `appointmentinfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `appointment` ADD COLUMN `status` ENUM('PENDING', 'ACCEPTED', 'REJECTED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `appointmentinfo` DROP COLUMN `status`;
