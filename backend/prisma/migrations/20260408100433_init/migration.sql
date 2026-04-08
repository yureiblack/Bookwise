/*
  Warnings:

  - You are about to drop the column `paymentAccount` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `paymentProvider` on the `Hotel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Hotel` DROP COLUMN `paymentAccount`,
    DROP COLUMN `paymentProvider`;
