import { getDonorDocument } from "@/lib/actions/admin.actions";

export default async function Home() {
  const doc = await getDonorDocument();
  console.log(doc);
  return <main></main>;
}
