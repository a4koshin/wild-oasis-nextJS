import Link from "next/link";
export default function Navigations() {
  return (
    <ul>
      <li>
        <Link href="/cabins">Cabins</Link>
        <Link href="/about">About</Link>
        <Link href="/accounts">Your account</Link>
      </li>
    </ul>
  );
}
