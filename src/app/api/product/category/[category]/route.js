import prisma from "../../../../../../lib/prisma";

export async function GET(request, { params }) {
  const { category } = params;
  const normalizedCategory = category.toLowerCase(); // BiGaPplE -->bigapple

  // query database
  const products = await prisma.$queryRaw`
  SELECT *
  FROM "Product"
  WHERE LOWER("category") = ${normalizedCategory}
`;

  if (!products) {
    return new Response("Cannot not find product by category", {
      status: 404,
    });
  }

  console.log("Found product by id ", products);

  return Response.json({ products, count: products.length });
}
