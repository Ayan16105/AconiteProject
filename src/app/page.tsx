export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Integrated PG & Tiffin Management</h1>
      <p className="mt-4 text-xl">Welcome to your management dashboard!</p>
      <div className="mt-8">
        {/* We'll add navigation links here later */}
        <a href="/login" className="text-blue-500 hover:underline">Go to Login</a>
      </div>
    </main>
  );
}