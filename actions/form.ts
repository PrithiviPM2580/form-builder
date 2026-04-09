"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { formSchema, FormSchema } from "@/schemas/form";

export async function getFormStats() {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  const stats = await prisma.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const visits = stats._sum.visits || 0;
  const submissions = stats._sum.submissions || 0;

  const submissionRate = visits > 0 ? (submissions / visits) * 100 : 0;

  const bounceRate = 100 - submissionRate;

  return {
    visits,
    submissions,
    submissionRate,
    bounceRate,
  };
}

export async function createForm(data: FormSchema) {
  const validation = formSchema.safeParse(data);
  if (!validation.success) {
    throw new Error(validation.error.message);
  }
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  const { name, description } = data;

  const form = await prisma.form.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  });

  if (!form) {
    throw new Error("Form creation failed");
  }

  return form.id;
}

export async function getForms() {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }
  return await prisma.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
