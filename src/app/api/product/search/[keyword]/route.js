import prisma from "../../../../../../lib/prisma";

export async function GET(request, { params }) {
  const keyword = params.keyword;

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: keyword,
        mode: "insensitive",
      },
    },
  });

  if (!products) {
    return new Response("Cannot find product", { status: 404 });
  }
  console.log("Found product with search", products);
  return Response.json({ products: products, count: products.length });
}
