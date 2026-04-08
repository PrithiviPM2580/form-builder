import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="w-full h-dvh flex items-center justify-center">
      <SignIn />
    </section>
  );
}
