import prisma from "../../../../../lib/prisma";

export async function GET(request, { params }) {
  const id = params.id;

  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!product) {
    return new Response("Cannot not find product", {
      status: 404,
    });
  }

  console.log("Found product by id ", product);

  return Response.json({ product });
}
