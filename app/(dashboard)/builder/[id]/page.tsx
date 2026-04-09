import { getFormById } from "@/actions/form";

async function BuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log("Form ID from URL:", id);
  const form = await getFormById(Number(id));

  if (!form) {
    throw new Error("Form not found");
  }

  return <div>page</div>;
}

export default BuilderPage;
