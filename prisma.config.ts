import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

import { defineConfig } from "prisma/config";

const envPath = resolve(process.cwd(), ".env.local");

if (!process.env.DATABASE_URL && existsSync(envPath)) {
  const envFile = readFileSync(envPath, "utf8");
  const match = envFile.match(/^DATABASE_URL=(.*)$/m);

  if (match?.[1]) {
    process.env.DATABASE_URL = match[1].replace(/^"|"$/g, "");
  }
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
