import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div>
        <Link href="/product/1">Go to product ID 1</Link>
        <Link href="/category">Go to category</Link>
        <Link href="checkout">Go to checkout</Link>
      </div>
    </main>
  );
}

export const metadata = {
  title: "CakeApp",
  description: " Nextgen ecom",
};
