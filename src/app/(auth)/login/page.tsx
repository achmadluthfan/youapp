"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { authLogin } from "@/features/auth/server/auth";
import AppWrapper from "@/components/AppWrapper";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const result = await authLogin(formData);
    setLoading(false);
    if (result.error) {
      setError(result.error);
      console.log(result);
    }
  };

  return (
    <AppWrapper backLink="login" heading="Login">
      <div className="max-w-md mx-auto space-y-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="bg-white bg-opacity-[0.07] border-none text-white"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="bg-white bg-opacity-[0.07] border-none text-white"
            onChange={handleChange}
            required
          />

          <div className="relative">
            <Input
              type={showPassword ? "password" : "text"}
              placeholder="Enter Password"
              className="bg-white bg-opacity-[0.07] border-none text-white pr-10"
              name="password"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-full bg-gradient-to-r from-[#62CDCB] to-[#4599DB] text-white"
          >
            Login
          </Button>
        </form>
        <div className="text-center text-sm">
          <span className="text-gray-400">No account? </span>
          <Link href="/register" className="text-blue-400 hover:text-blue-300">
            Register here
          </Link>
        </div>
      </div>
    </AppWrapper>
  );
}
