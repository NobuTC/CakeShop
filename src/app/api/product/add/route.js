import prisma from "../../../../../lib/prisma";

export async function POST(request) {
  const { name, image_url, size, info_allergic, price, category, info } =
    await request.json();

  const productData = {
    name,
    image_url,
    size,
    info_allergic,
    price,
    category,
    info,
  };

  try {
    const newProduct = await prisma.product.create({
      data: productData,
    });
    console.log("created product!", newProduct);
    return Response.json({ newProduct });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response("Cannot add product", {
      status: 400,
    });
  }
}
