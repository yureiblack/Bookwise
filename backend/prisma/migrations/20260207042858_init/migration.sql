-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `reviewed` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `Review` ADD COLUMN `bookingId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
