/*
  Warnings:

  - You are about to drop the column `accountId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_accountId_key` ON `User`;

-- AlterTable
ALTER TABLE `Hotel` ADD COLUMN `paymentAccount` VARCHAR(191) NULL,
    ADD COLUMN `paymentProvider` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `accountId`;
