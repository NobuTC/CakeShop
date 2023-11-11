import CustomCard from "../../_components/customCard/CustomCard";

async function getProducts(id) {
  try {
    const res = await fetch(
      process.env.VERCEL_URL + "/api/product/category/" + id
    );
    if (res.status === 200) {
      return res.json();
    } else {
      return { products: null };
    }
  } catch (error) {
    console.error("Error fetching products data by id : " + id);
    return { products: null };
  }
}

export default async function Category({ params: { id } }) {
  console.log(id);
  const { products } = await getProducts(id);

  if (!products) {
    return null;
  }

  console.log(products);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl text-center"> {id}</h1>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mt-10">
        {products.map((item, index) => (
          <CustomCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
