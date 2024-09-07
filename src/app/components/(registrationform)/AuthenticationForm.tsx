"use client";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn, signOut } from "next-auth/react";

import axios from "axios";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/components/(generic)/Input";
import Button from "@/app/components/(generic)/Button";
import SocialAuth from "@/app/components/(generic)/SocialAuth";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useRouter } from "next/navigation";

type Variation = "REGISTER" | "LOGIN";

const AuthenticationForm = () => {
  const [variation, setVariation] = useState<Variation>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleVariations = useCallback(() => {
    if (variation === "LOGIN") {
      setVariation("REGISTER");
    } else {
      setVariation("LOGIN");
    }
  }, [variation]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variation === "REGISTER") {
      axios
        .post("/api/register-user", data)
        .catch(() => toast.error(`Something went wrong!!`))
        .finally(() => setIsLoading(false));
    }
    if (variation === "LOGIN") {
      // nextauth signin callback
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error(`Invalid credentials!!`);
          }
          if (callback?.ok && !callback?.error) {
            toast.success(`Logged in!!`);
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // Nextauth google signin
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(`Something went wrong!! Social Signin failed!!`);
        }
        if (callback?.ok && !callback?.error) {
          toast.success(`Logged in!!`);
        }
      })
      .finally(() => setIsLoading(false));
    // router.push("/");
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-gradient-to-r from-slate-500 via-blue-900 to-violet-600 px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variation === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              type="name"
              required={true}
              register={register}
              errors={errors}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            required={true}
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            required={true}
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variation === "LOGIN" ? `Sign in` : `Register`}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div
              className="absolute
                inset-0
                flex
                items-center
                "
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            <SocialAuth
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <SocialAuth
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-white">
          <div>
            {variation === "LOGIN"
              ? "New to CULINARY share ? "
              : "Already logged in"}
          </div>
          <div onClick={toggleVariations} className="underline cursor-pointer">
            {variation === "LOGIN" ? "Create an account" : "Sign in"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationForm;
