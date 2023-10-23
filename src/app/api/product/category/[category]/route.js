export async function GET(request, { params }) {
  const category = params.category;
  return Response.json({ message: "category: " + category });
}
