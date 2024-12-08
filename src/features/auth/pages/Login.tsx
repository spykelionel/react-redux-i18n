import { saveUser, useLoginMutation } from "@/app/services/auth";
import { AppDispatch } from "@/app/types";
import { AppButton } from "@/components/atoms";
import Spinner from "@/components/atoms/Spinner";
import useQuery from "@/hooks/useQuery";
import { RequestInterceptor } from "@/lib/api/interceptor";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";
import { LoginFormData } from "../types";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .regex(emailRegex, "Email must be a valid email address"),
  password: z.string(),
});

export const LoginPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const [login, { isLoading: isAuthenticatingUser }] = useLoginMutation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const query = useQuery();
  const returnUrl = query.get("return");

  const onSubmit = async (data: LoginFormData) => {
    const {
      success,
      data: response,
      message,
    } = await RequestInterceptor.handleRequest(
      () => login(data).unwrap(),
      {},
      "LOGIN"
    );

    if (success) {
      dispatch(saveUser(response));
      const roles = response?.user?.roles as string[];
      const otherRoles = roles?.filter((role: string) => role !== "guest");
      if (returnUrl) {
        navigate(returnUrl, { replace: true });
        return;
      }

      navigate(`/${otherRoles[0]}/dashboard`, { replace: true });
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-slate-200">
      <div className="flex shadow-xl rounded-lg">
        <div className="flex-1 rounded-l-lg bg-primary flex-col justify-center items-center text-white sm:flex hidden">
          <Link to={"/"}>
            <div className="mb-4 flex flex-row gap-3">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9763 16.2472C20.9763 16.4518 20.8978 16.6601 20.7424 16.8167C19.6584 17.8988 10.6257 26.9024 6.36112 31.1524C2.52695 27.9649 0.0678615 23.1899 0 17.8418C0 17.7653 0 17.6905 0 17.614C0 17.5517 0 17.4894 0 17.4271C0.00535748 17.1103 0.0160729 16.7953 0.0339312 16.4821C0.0339312 16.4696 0.0339316 16.459 0.0357174 16.4465C0.039289 16.3824 0.0446465 16.3201 0.0482181 16.2579C0.473245 10.682 3.50379 5.8304 7.92908 2.91164L20.6942 15.6349L20.7353 15.6759C20.8942 15.8343 20.9728 16.0372 20.9728 16.2472H20.9763Z"
                  fill="white"
                />
                <path
                  d="M35.3611 17.614C35.3611 17.7101 35.3611 17.8045 35.3593 17.9006C35.3593 17.9593 35.3575 18.0162 35.3557 18.0732C35.3557 18.1479 35.3522 18.2227 35.3486 18.2974C35.3468 18.3562 35.3432 18.4149 35.3415 18.4736C35.3361 18.5662 35.3325 18.6605 35.3254 18.7548C35.3165 18.8954 35.3057 19.036 35.2932 19.1748C35.2807 19.3297 35.2629 19.4845 35.2468 19.6376C35.2379 19.7088 35.2307 19.7782 35.2218 19.8494C35.2111 19.9277 35.2022 20.0042 35.1915 20.0807C35.1915 20.0861 35.1897 20.0932 35.1897 20.1003C35.17 20.2338 35.1504 20.3673 35.1289 20.5007C33.7467 28.8602 26.4623 35.2369 17.6832 35.2369C14.433 35.2369 11.3881 34.3631 8.77191 32.8396C14.5901 27.0413 21.4227 20.2284 25.3194 16.3433C25.3265 16.3344 25.3265 16.3237 25.3194 16.3148L10.4809 1.52345C12.6811 0.544598 15.1205 0 17.685 0C26.4641 0 33.7467 6.37678 35.1307 14.7362C35.1522 14.8679 35.1718 15.0014 35.1915 15.1349C35.1915 15.1402 35.1915 15.1473 35.1932 15.1544C35.2057 15.2399 35.2165 15.3253 35.2272 15.4107C35.2343 15.4712 35.2415 15.5317 35.2486 15.594C35.2647 15.7471 35.2825 15.9001 35.295 16.0568C35.3075 16.1991 35.3182 16.3415 35.3272 16.4874C35.3325 16.58 35.3379 16.6743 35.3433 16.7686C35.3468 16.8309 35.3486 16.8932 35.3522 16.9555C35.354 17.0196 35.3575 17.0854 35.3575 17.1495C35.3575 17.21 35.3593 17.2705 35.3611 17.3328C35.3611 17.4271 35.3629 17.5233 35.3629 17.6176L35.3611 17.614Z"
                  fill="white"
                />
              </svg>
              <div className="text-2xl font-bold mb-4">learnoso</div>
            </div>
          </Link>
          <p className="text-center max-w-md px-4">
            Welcome back to Learnoso, please enter the required details to
            access your account. Don't have an account?
          </p>
          <Link
            to={"/register"}
            className="mt-4 px-6 py-2 bg-white text-primary rounded hover:bg-gray hover:text-white transition-colors"
          >
            Sign up
          </Link>
        </div>
        <div className="flex-1 bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24 rounded-r-lg">
          <div className="mx-auto w-full max-w-sm lg:w-96 p-4 sm:p-0 sm:shadow-none">
            <div className="mt-6 text-3xl font-bold text-dark flex items-center gap-2">
              <div className="inline sm:hidden ">
                <Link to={"/"}>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9763 16.2472C20.9763 16.4518 20.8978 16.6601 20.7424 16.8167C19.6584 17.8988 10.6257 26.9024 6.36112 31.1524C2.52695 27.9649 0.0678615 23.1899 0 17.8418C0 17.7653 0 17.6905 0 17.614C0 17.5517 0 17.4894 0 17.4271C0.00535748 17.1103 0.0160729 16.7953 0.0339312 16.4821C0.0339312 16.4696 0.0339316 16.459 0.0357174 16.4465C0.039289 16.3824 0.0446465 16.3201 0.0482181 16.2579C0.473245 10.682 3.50379 5.8304 7.92908 2.91164L20.6942 15.6349L20.7353 15.6759C20.8942 15.8343 20.9728 16.0372 20.9728 16.2472H20.9763Z"
                      fill="#FF7F00"
                    />
                    <path
                      d="M35.3611 17.614C35.3611 17.7101 35.3611 17.8045 35.3593 17.9006C35.3593 17.9593 35.3575 18.0162 35.3557 18.0732C35.3557 18.1479 35.3522 18.2227 35.3486 18.2974C35.3468 18.3562 35.3432 18.4149 35.3415 18.4736C35.3361 18.5662 35.3325 18.6605 35.3254 18.7548C35.3165 18.8954 35.3057 19.036 35.2932 19.1748C35.2807 19.3297 35.2629 19.4845 35.2468 19.6376C35.2379 19.7088 35.2307 19.7782 35.2218 19.8494C35.2111 19.9277 35.2022 20.0042 35.1915 20.0807C35.1915 20.0861 35.1897 20.0932 35.1897 20.1003C35.17 20.2338 35.1504 20.3673 35.1289 20.5007C33.7467 28.8602 26.4623 35.2369 17.6832 35.2369C14.433 35.2369 11.3881 34.3631 8.77191 32.8396C14.5901 27.0413 21.4227 20.2284 25.3194 16.3433C25.3265 16.3344 25.3265 16.3237 25.3194 16.3148L10.4809 1.52345C12.6811 0.544598 15.1205 0 17.685 0C26.4641 0 33.7467 6.37678 35.1307 14.7362C35.1522 14.8679 35.1718 15.0014 35.1915 15.1349C35.1915 15.1402 35.1915 15.1473 35.1932 15.1544C35.2057 15.2399 35.2165 15.3253 35.2272 15.4107C35.2343 15.4712 35.2415 15.5317 35.2486 15.594C35.2647 15.7471 35.2825 15.9001 35.295 16.0568C35.3075 16.1991 35.3182 16.3415 35.3272 16.4874C35.3325 16.58 35.3379 16.6743 35.3433 16.7686C35.3468 16.8309 35.3486 16.8932 35.3522 16.9555C35.354 17.0196 35.3575 17.0854 35.3575 17.1495C35.3575 17.21 35.3593 17.2705 35.3611 17.3328C35.3611 17.4271 35.3629 17.5233 35.3629 17.6176L35.3611 17.614Z"
                      fill="#21409A"
                    />
                  </svg>
                </Link>
              </div>
              Sign in to{" "}
              <span className="text-primary">
                <Link to={"/"}>Learnoso</Link>
              </span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark"
                  aria-autocomplete="both"
                >
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      placeholder="example@gmail.com"
                      autoComplete="email"
                    />
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <div className="flex-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-dark"
                    aria-autocomplete="both"
                  >
                    Password
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        type="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                        autoComplete="password"
                      />
                    )}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <Link
                  to={"/forgot-password"}
                  className="my-1 text-sm text-primary"
                >
                  Forgot Password?
                </Link>
              </div>
              <div>
                {isAuthenticatingUser ? (
                  <Spinner size="small" />
                ) : (
                  <AppButton type="submit" title="Sign in" animated />
                )}
              </div>
              <div className="flex items-center gap-2">
                <p className="">Don't have an account?</p>
                <Link
                  to={"/register"}
                  className="text-primary rounded hover:text-slate-600 transition-colors"
                >
                  Sign up
                </Link>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray">OR</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 shadow-lg rounded-md bg-white text-sm font-medium text-dark">
                  <span className="sr-only">Sign in with Google</span>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_62_261)">
                      <path
                        d="M24.9868 13.2432C24.9868 12.178 24.9018 11.4007 24.7177 10.5946H12.749V15.4024H19.7744C19.6328 16.5972 18.8679 18.3966 17.1682 19.6057L17.1444 19.7666L20.9286 22.746L21.1908 22.7726C23.5987 20.5126 24.9868 17.1874 24.9868 13.2432Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12.749 25.9107C16.1908 25.9107 19.0803 24.7591 21.1908 22.7726L17.1682 19.6057C16.0917 20.3686 14.647 20.9012 12.749 20.9012C9.37797 20.9012 6.51684 18.6413 5.49692 15.5176L5.34743 15.5305L1.41248 18.6254L1.36102 18.7708C3.45729 23.0029 7.7632 25.9107 12.749 25.9107Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.49691 15.5177C5.22779 14.7116 5.07205 13.8478 5.07205 12.9554C5.07205 12.0628 5.22779 11.1992 5.48275 10.3931L5.47562 10.2214L1.49136 7.07678L1.361 7.1398C0.497031 8.89599 0.00128174 10.8681 0.00128174 12.9554C0.00128174 15.0426 0.497031 17.0146 1.361 18.7708L5.49691 15.5177Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.749 5.00937C15.1427 5.00937 16.7574 6.06018 17.6781 6.93833L21.2758 3.36839C19.0662 1.28115 16.1908 0 12.749 0C7.76319 0 3.45729 2.90773 1.36102 7.13978L5.48277 10.3931C6.51684 7.26938 9.37797 5.00937 12.749 5.00937Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_62_261">
                        <rect width="25" height="26" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
