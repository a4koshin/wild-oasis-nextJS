import Link from "next/link";
import Navigations from "./_components/Navigations";
export default function Home() {
  return (
    <>
      <Navigations />
      <h1>Hello Next!</h1>
      <Link href="/cabins">Explore to the Page</Link>
    </>
  );
}
