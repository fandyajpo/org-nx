export async function GET(request: Request) {
  try {
    console.log(request);
    return new Response('das');
  } catch (error) {
    return Response.json(error);
  }
}
