-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "repoUrl" TEXT,
    "demoUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechStack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "TechStack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTechStack" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechStack_AB_unique" ON "_ProjectToTechStack"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechStack_B_index" ON "_ProjectToTechStack"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTechStack" ADD CONSTRAINT "_ProjectToTechStack_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechStack" ADD CONSTRAINT "_ProjectToTechStack_B_fkey" FOREIGN KEY ("B") REFERENCES "TechStack"("id") ON DELETE CASCADE ON UPDATE CASCADE;
