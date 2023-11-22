import prisma from "../../../../../lib/prisma";

export async function GET(request) {
  try {
    const orders = await prisma.order.findMany();

    return Response.json({ orders });
  } catch (error) {
    console.error("Error finding order", error);
    return new Response("Cannot find order", { status: 404 });
  }
}
