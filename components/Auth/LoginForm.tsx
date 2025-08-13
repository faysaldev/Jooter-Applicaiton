"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputAdornment, IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import {
  EyeIcon,
  EyeSlashIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { toast } from "sonner";
import axios from "axios";

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    // Simple demo login - in real app, authenticate with backend

    try {
      const res = await axios.post('/api/auth/login', formData)

      console.log(res?.data?.user?.username)
          localStorage.setItem(
      "jotter_user",
      JSON.stringify({
        username:res?.data?.user?.username,
        email: formData.email,
      })
    );
      toast.success('Logged in successfully!')
      // Redirect or load user data here if needed
    router.push("/dashboard");

    } catch (err: any) {
      toast.error(err.response?.data?.error || 'Login failed')
    }

  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border-gray-200 max-w-md mx-auto">


      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Continue Your Journey
        </h1>
        <p className="text-lg text-gray-500">Let's Sign In</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <TextField
            name="email"
            type="email"
            label="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            fullWidth
            variant="outlined"
          />
        </div>

        <TextField
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
          fullWidth
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  aria-label={showPassword ? "Hide password" : "Show password"}
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

        <div className="text-right">
          <button
            type="button"
            onClick={()=> router.push('/forgot-password')}
            className="text-sm text-gray-500 cursor-pointer hover:text-gray-900 transition-colors underline"
          >
            Forgot Password
          </button>
        </div>

        <div className="pt-4">
          <button
            type="submit"
      className="w-full h-12 text-lg font-medium bg-black text-white  hover:cursor-pointer transition rounded-4xl"
          >
            Log In
          </button>
        </div>

        <div className="text-center pt-4">
          <span className="text-gray-500">Don't have any account? </span>
          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="text-gray-900 cursor-pointer font-medium hover:underline"
          >
            Sign Up
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

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { EyeIcon, EyeSlashIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// export default function LoginForm() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simple demo login
//     localStorage.setItem(
//       "jotter_user",
//       JSON.stringify({
//         name: "Daniel Martinez",
//         email: formData.email,
//       })
//     );

//     toast.success("Successfully logged in", {
//       description: "Welcome back!",
//     });

//     router.push("/dashboard");
//   };

//   return (
//     <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-md mx-auto">
//       {/* Back Button */}
//       <div className="flex items-center mb-6">
//         <button
//           type="button"
//           onClick={() => router.push("/")}
//           className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
//         >
//           <ArrowLeftIcon className="h-5 w-5 text-gray-500" />
//         </button>
//         <span className="text-sm text-gray-500 ml-4">Log In</span>
//       </div>

//       {/* Heading */}
//       <div className="text-center mb-8">
//         <h1 className="text-2xl font-semibold text-gray-900 mb-2">
//           Continue Your Journey
//         </h1>
//         <p className="text-lg text-gray-500">Let's Sign In</p>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Email */}
//         <div>
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className="w-full h-12 px-4 rounded-lg bg-gray-100 border border-transparent focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none text-gray-900 placeholder-gray-400"
//           />
//         </div>

//         {/* Password */}
//         <div className="relative">
//           <input
//             name="password"
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleInputChange}
//             required
//             className="w-full h-12 px-4 pr-10 rounded-lg bg-gray-100 border border-transparent focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none text-gray-900 placeholder-gray-400"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
//           >
//             {showPassword ? (
//               <EyeSlashIcon className="h-5 w-5" />
//             ) : (
//               <EyeIcon className="h-5 w-5" />
//             )}
//           </button>
//         </div>

//         {/* Forgot Password */}
//         <div className="text-right">
//           <button
//             type="button"
//             className="text-sm text-gray-500 hover:text-gray-800 underline"
//           >
//             Forgot Password
//           </button>
//         </div>

//         {/* Login Button */}
//         <div className="pt-4">
//           <button
//             type="submit"
//             className="w-full h-12 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Log In
//           </button>
//         </div>

//         {/* Sign Up Link */}
//         <div className="text-center pt-4">
//           <span className="text-gray-500">Don't have an account? </span>
//           <button
//             type="button"
//             onClick={() => router.push("/signup")}
//             className="text-blue-600 font-medium hover:underline"
//           >
//             Sign Up
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="flex items-center justify-center my-6">
//           <div className="border-t border-gray-300 flex-1"></div>
//           <span className="px-4 text-sm text-gray-500">or</span>
//           <div className="border-t border-gray-300 flex-1"></div>
//         </div>

//         {/* Google Login */}
//         <button
//           type="button"
//           className="w-full h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
//         >
//           <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
//             <path
//               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               fill="#4285F4"
//             />
//             <path
//               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               fill="#34A853"
//             />
//             <path
//               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               fill="#FBBC05"
//             />
//             <path
//               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               fill="#EA4335"
//             />
//           </svg>
//           Sign In with Google
//         </button>
//       </form>
//     </div>
//   );
// }
