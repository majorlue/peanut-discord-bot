/*
  Warnings:

  - You are about to drop the `Birthdays` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Birthdays";

-- CreateTable
CREATE TABLE "DiscordUser" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "birthday" TIMESTAMP(3),
    "remindTime" INTEGER,

    CONSTRAINT "DiscordUser_pkey" PRIMARY KEY ("id")
);
