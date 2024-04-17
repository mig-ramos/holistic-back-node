-- CreateTable
CREATE TABLE "map-local" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "photo" TEXT,
    "apiKey" TEXT,
    "lat" DECIMAL(65,30),
    "lng" DECIMAL(65,30),
    "info" TEXT,
    "mapId" TEXT DEFAULT 'DEMO_MAP_ID',

    CONSTRAINT "map-local_pkey" PRIMARY KEY ("id")
);
