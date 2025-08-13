"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputAdornment, IconButton } from "@mui/material";
import { CheckIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import TextField from "@mui/material/TextField";
import axios from "axios";

export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (!formData.agreedToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    try {
      const res = await axios.post("/api/auth/signup", {
        username: formData?.userName,
        email: formData?.email,
        password: formData?.password,
        confirmPassword: formData?.confirmPassword,
      });
      // toast.success(res.data.message)

      toast.success("Account created successfully!");
      
      localStorage.setItem(
        "jotter_user",
        JSON.stringify({ username: formData.userName, email: formData.email })
      );
      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Something went wrong");
      console.log(err.response);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border-gray-200 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">
        Create Your Account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-4 flex flex-col mb-4">
          <TextField
            id="userName"
            name="userName"
            type="text"
            value={formData.userName}
            onChange={handleInputChange}
            required
            fullWidth
            label="Username"
            variant="outlined"
            placeholder="Username"
            className="mb-4"

            // InputLabelProps={{ shrink: true }}
          />

          {/* <TextField id="outlined-basic" label="Username" variant="outlined" /> */}
        </div>

        <div>
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            label="Email"
            //   InputLabelProps={{ shrink: true }}
          />
        </div>

        <div>
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            fullWidth
            label="Password"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    type="button"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div>
          <TextField
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
            label="Confirm Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    type="button"
                  >
                    {showConfirmPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <input
            type="checkbox"
            id="terms"
            name="agreedToTerms"
            checked={formData.agreedToTerms}
            onChange={handleInputChange}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-500 leading-none cursor-pointer select-none"
          >
            I have read & agreed to Jotter Terms & Condition
          </label>
        </div>

        <button
          type="submit"
           className="w-full h-12 text-lg font-medium bg-black text-white  hover:cursor-pointer transition rounded-4xl"
        >
          Sign Up
        </button>

        <div className="text-center pt-4">
          <span className="text-gray-500">Already have an account? </span>
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-gray-900 font-medium hover:underline"
          >
            Log In
          </button>
        </div>

        <div className="flex items-center justify-center my-6">
          <div className="border-t border-gray-300 flex-1"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="border-t border-gray-300 flex-1"></div>
        </div>

        <button
          type="button"
          className="w-full h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition"
        >
          <svg
            className="mr-2 h-4 w-4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign Up With Google
        </button>
      </form>
    </div>
  );
}
