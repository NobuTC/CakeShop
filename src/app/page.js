import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <ul>
        <li>
          <Link href="/product/1">Go to product ID 1</Link>
        </li>
        <li>
          <Link href="/category">Go to category</Link>
        </li>
        <li>
          <Link href="checkout">Go to checkout</Link>
        </li>
      </ul>
    </main>
  );
}

export const metadata = {
  title: "CakeApp",
  description: " Nextgen ecom",
};
