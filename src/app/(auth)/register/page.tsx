"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import AppWrapper from "@/components/AppWrapper";
import { authRegister } from "@/features/auth/server/auth";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const result = await authRegister(formData);
    if (result) {
      setLoading(false);
      const { errors, message } = result;

      errors && setError(errors);

      if (message !== "User already exists") {
        router.push("/login");
      }
    }
  };

  return (
    <AppWrapper backLink="login" heading="Register">
      <div className="min-h-screen">
        <div className="max-w-md mx-auto space-y-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="bg-white bg-opacity-[0.07] border-none text-white"
              onChange={handleChange}
              required
            />
            <span className="text-red-500 text-xs">{error?.email}</span>

            <Input
              type="text"
              placeholder="Create Username"
              name="username"
              className="bg-white bg-opacity-[0.07] border-none text-white"
              onChange={handleChange}
              required
            />
            <span className="text-red-500 text-xs">{error?.username}</span>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                name="password"
                className="bg-white bg-opacity-[0.07] border-none text-white pr-10"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="text-gradient-custom" size={20} />
                ) : (
                  <Eye className="text-gradient-custom" size={20} />
                )}
              </button>
              <span className="text-red-500 text-xs">{error?.password}</span>
            </div>

            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                className="bg-white bg-opacity-[0.07] border-none text-white pr-10"
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              <span className="text-red-500 text-xs">
                {error?.confirmPassword}
              </span>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r  from-[#62CDCB] to-[#4599DB] text-white"
            >
              Register
            </Button>

            <div className="text-center text-sm">
              <span className="text-gray-400">Have an account? </span>
              <Link
                href="/login"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </AppWrapper>
  );
}
