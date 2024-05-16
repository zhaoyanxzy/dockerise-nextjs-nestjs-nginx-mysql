export default async function UserPage({ params }: { params: { id: string } }) {
  try {
    const res = await fetch(`http://nginx/api/users/${params.id}`, {
      method: "GET",
      next: { revalidate: 0 },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data);
    }
    return (
      <h1 className="text-3xl font-bold">
        {data.firstName} {data.lastName}
      </h1>
    );
  } catch (error) {
    console.error(error);
    return <h1 className="text-3xl font-bold">Error</h1>;
  }
}
