export default async function ServerHelloPage() {
  try {
    const res = await fetch("http://nginx/api/", {
      method: "GET",
      next: { revalidate: 0 },
    });
    const data = await res.text();
    if (!res.ok) {
      throw new Error(data);
    }
    return <h1 className="text-3xl font-bold">{data}</h1>;
  } catch (error) {
    console.error(error);
    return <h1 className="text-3xl font-bold">Error</h1>;
  }
}
