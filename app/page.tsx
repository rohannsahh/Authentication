import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
<div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-gray-600 border rounded-md bg-green-200 p-2 m-2 text-2xl">Assignment</h1>
      <LoginForm/>
    </div>
  );
}
