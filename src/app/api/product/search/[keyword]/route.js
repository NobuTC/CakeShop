export async function GET(request, { params }) {
  const keyword = params.keyword;
  return Response.json({ message: "search: " + keyword });
}
