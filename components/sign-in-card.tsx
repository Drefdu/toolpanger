'use client'

import { Button } from "@/components/ui/button"
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
import { authClient } from "@/lib/auth-client"; //import the auth client
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, Login } from "@/lib/zod"

export default function SingInCard({ changeTab }: { changeTab: (tab: string) => void }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(LoginSchema)
  })

  const onSubmit: SubmitHandler<Login> = async (formData) => {
    const { email, password } = formData;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      rememberMe: false,
      callbackURL: "/projects"
    })
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button onClick={() => changeTab('register')} variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" placeholder="password" {...register("password")} />
              {errors.password && <p className="text-red-500">{errors.password?.message}</p>}

            </div>

            <div className="grid gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
