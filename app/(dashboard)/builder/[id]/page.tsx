import { getFormById } from "@/actions/form";
import FormBuilder from "@/components/form-builder";

async function BuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const form = await getFormById(Number(id));

  if (!form) {
    throw new Error("Form not found");
  }

  return <FormBuilder form={form} />;
}

export default BuilderPage;
