import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as z from "zod";
import { ResetPasswordFormData } from "../types";

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      strongPasswordRegex,
      "Password must be stronger (include uppercase, lowercase, digit, and special character)"
    ),
  confirmPassword: z.string().min(8, "Confirm password is required"),
});

export const ResetPassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log(data);
    // login the user
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 bg-white flex-col justify-center items-start text-white sm:flex hidden">
        <>
          <Link
            to={"/"}
            className="flex flex-row items-center justify-center p-14"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
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

            <p className="text-primary font-bold text-xl relative bottom-2">
              Learnoso
            </p>
          </Link>
        </>
        <img src={"ResetPasswordImage"} alt="Forgot Password" />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 shadow-lg p-4 sm:p-0 sm:shadow-none">
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
            Reset your password
          </div>
          <p className="pt-2 text-sm">Please enter your new passwords.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <>
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
              <div className="flex-1">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-dark"
                  aria-autocomplete="both"
                >
                  Confirm Password
                </label>
                <Controller
                  name="confirmPassword"
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
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Sign Up
              </button>
            </div>
            <div className="flex items-center gap-2">
              <p className="">Remember your old password?</p>
              <Link
                to={"/login"}
                className="text-primary rounded hover:text-slate-600 transition-colors"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
