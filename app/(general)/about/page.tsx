import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "SEO description",
};
export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-5xl">Acerca de</h1>
    </main>
  );
}
