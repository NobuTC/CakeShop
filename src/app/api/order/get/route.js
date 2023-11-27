import prisma from "../../../../../lib/prisma";

export async function GET(request) {
  try {
    const orders = await prisma.order.findMany();

    return Response.json(
      { orders },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=1",
          "CDN-Cache-Control": "public, s-maxage=60",
          "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
        },
      }
    );
  } catch (error) {
    console.error("Error finding order", error);
    return new Response("Cannot find order", { status: 404 });
  }
}
