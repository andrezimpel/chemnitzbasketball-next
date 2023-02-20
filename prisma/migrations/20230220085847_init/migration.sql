-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "starts_at" TIMESTAMP(3),
    "ends_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_signups" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "eventsId" TEXT NOT NULL,

    CONSTRAINT "event_signups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "votes" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "age" INTEGER,
    "message" TEXT,

    CONSTRAINT "votes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "events_id_key" ON "events"("id");

-- CreateIndex
CREATE UNIQUE INDEX "event_signups_id_key" ON "event_signups"("id");

-- CreateIndex
CREATE UNIQUE INDEX "votes_id_key" ON "votes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "votes_email_key" ON "votes"("email");

-- AddForeignKey
ALTER TABLE "event_signups" ADD CONSTRAINT "event_signups_eventsId_fkey" FOREIGN KEY ("eventsId") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
