import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <Link href="/product/1">Go to product ID 1</Link>
      </div>
    </main>
  );
}

export const metadata = {
  title: "CakeApp",
  description: " Nextgen ecom",
};
