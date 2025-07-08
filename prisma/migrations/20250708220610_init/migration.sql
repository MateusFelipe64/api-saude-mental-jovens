-- CreateTable
CREATE TABLE "Apoio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "contato" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Autocuidado" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Bullying" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "como_agir" TEXT NOT NULL
);
