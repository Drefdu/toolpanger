'use client'

import { Button } from "@/components/ui/button"
import { Spinner } from "./ui/spinner"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, SubmitHandler } from "react-hook-form"
import { authClient } from "@/lib/auth-client";
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema, User } from "@/lib/zod"
import { useState } from "react"

enum SignUpErrors {
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL = "User already exists",
  SERVER_ERROR = "Sorry, please try it again later"
}

type ErrorCode = keyof typeof SignUpErrors

export default function SignUpCard({ changeTab }: { changeTab: (tab: string) => void }) {
  const [registerError, setRegisterError] = useState<null | string>(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isLoading },
  } = useForm<User>({
    resolver: zodResolver(UserSchema)
  })

  const getErrorMessage = (code: string | undefined): string => {
    if (code === undefined || !(code in SignUpErrors)) {
      return SignUpErrors.SERVER_ERROR
    }

    return SignUpErrors[code as ErrorCode]
  }

  const onSubmit: SubmitHandler<User> = async (formData) => {
    const { email, password, given_name, last_name } = formData;
    const name = `${given_name} ${last_name}`;

    const { data, error } = await authClient.signUp.email({
      email,
      password, // user password -> min 8 characters by default
      name, // user display name
      callbackURL: "/projects" // A URL to redirect to after the user verifies their email (optional)
    });

    if (error) {
      setRegisterError(getErrorMessage(error.code || ""))
      return
    }

    console.log(data)

  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>
          Enter your information below to register your account
        </CardDescription>
        <CardAction>
          <Button onClick={() => changeTab('login')} variant="link">Login</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                <Label htmlFor="given_name">Given name</Label>
                <Input
                  id="given_name"
                  type="text"
                  placeholder="Given Name"
                  {...register("given_name")}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last_name">Last name</Label>
                <Input
                  id="givelast_namen_name"
                  type="text"
                  placeholder="Last Name"
                  {...register("last_name")}
                />
              </div>
              <div className="col-span-2">
                {errors.given_name && <p className="text-red-500">{errors.given_name?.message}</p>}
                {errors.last_name && <p className="text-red-500">{errors.last_name?.message}</p>}
              </div>
            </div>
            <div className="grid gap-2 grid-cols-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="password" {...register("password")} />
              {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" {...register("confirm")} placeholder="confirm password" />
              {errors.confirm && <p className="text-red-500">{errors.confirm?.message}</p>}
            </div>
            {registerError && <p className="text-red-500">{registerError}</p>}
            <div className="grid gap-2">
              <Button type="submit" className={`w-full`} disabled={isLoading}>
                { isLoading && <Spinner data-icon="inline-start"/> }
                Register
              </Button>
              <Button variant="outline" className="w-full">
                Register with Google
              </Button>
            </div>

          </div>
        </form>
      </CardContent>
    </Card>
  )
}
