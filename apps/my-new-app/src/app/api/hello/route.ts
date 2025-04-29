export async function GET(request: Request) {
  try {
    const response = await fetch('http://localhost:9040/api');
    const result = await response.json();
    console.log(result);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
