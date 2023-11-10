import ProductPage from "../../_components/pages/ProductPage";

async function getProduct(id) {
  try {
    const res = await fetch(process.env.URL + "/api/product/" + id);
    if (res.status === 200) {
      return res.json();
    } else {
      return { product: null };
    }
  } catch (error) {
    console.error("Error fetching product data by id : " + id);
    return { product: null };
  }
}

export default async function Product({ params: { id } }) {
  const { product } = await getProduct(id);
  return <ProductPage product={product} />;
}
