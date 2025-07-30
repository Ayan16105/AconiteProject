// src/app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Your Dashboard!</h1>
      <p className="text-xl text-gray-600">This is where your management tools will appear.</p>
      <div className="mt-8 text-lg text-blue-600">
        {/* We'll add navigation links to other sections soon */}
        <p>You are successfully logged in.</p>
      </div>
    </div>
  );
}