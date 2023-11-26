import ProductPage from "../../_components/clientPages/ProductPage";

async function getProduct(productId) {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL + "/api/product/" + productId,
      {
        next: { revalidate: 1 }, // Recheck every second
      }
    );
    if (res.status === 200) {
      return res.json();
    } else {
      return { product: null };
    }
  } catch (error) {
    console.error("Error fetching product data by id : " + productId);
    return { product: null };
  }
}

export default async function Product({ params: { productId } }) {
  const { product } = await getProduct(productId);
  return <ProductPage product={product} />;
}
