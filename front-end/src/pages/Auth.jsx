import React from "react";
import { Navigate } from "react-router-dom";
import Button from "../components/Button";

export default function Auth() {
  return <div>Login</div>;
}

function Login() {
  const handleBack = () => {
    <Navigate to={"/login"} replace={true} />;
  };
  return (
    <div className="bg-indigo-300 w-[100vw] h-[100vh] grid place-content-center">
      <form className="bg-green-50 p-10 rounded-xl min-w-[max-content] flex flex-col gap-2">
        <button onClick={handleBack} className="self-start">
          back
        </button>
        <h1 className="text-xl font-bold mb-4">Masuk</h1>
        <Input label={"Hahah"} type="email" required={true} />
        <Input />
        <Input />
        <Button.Type1 text={"Masuk"} />
      </form>
    </div>
  );
}

function Input({
  name,
  id,
  placeholder,
  label = "label not set",
  type = "text",
  required = false,
}) {
  return (
    <label className="block">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
      />
    </label>
  );
}

export { Login };
