import CustomCard from "../../_components/customCard/CustomCard";

async function getProducts(categoryId) {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_URL + "/api/product/category/" + categoryId,
      {
        cache: "no-store",
        next: { revalidate: 1 }, // Recheck every second
      }
    );
    if (res.status === 200) {
      return res.json();
    } else {
      return { products: null };
    }
  } catch (error) {
    console.error("Error fetching products data by id : " + categoryId);
    return { products: null };
  }
}

// nextjs obj ===> params ===> categoryId
export default async function CategoryPage({ params: { categoryId } }) {
  const { products } = await getProducts(categoryId);

  if (!products) {
    return null;
  }

  return (
    <div className="container mx-auto">
      <div className="p-4">
        <h1 className="text-3xl text-center"> {categoryId}</h1>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-10">
        {products.map((product, index) => (
          <CustomCard key={index} item={product} />
        ))}
      </div>
    </div>
  );
}
