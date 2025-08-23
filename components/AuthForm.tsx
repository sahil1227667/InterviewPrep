
"use client"
import Image from "next/image";


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Schema
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

// 👇 New: define props type
type AuthFormProps = {
  type: "sign-in" | "sign-up"
}

const AuthForm = ({ type }: AuthFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-col gap-2 justify-center">
               <Image
                src="/logo.svg"
               alt="logo"
               height={32}
               width={38}
               />
               <h2 className="text-primary-100">
                InterviewPrep
               </h2>
        </div>
          <h3>Practicing for Job Interviews made easier with AI</h3>
      

    
    
    
    
    
   
    
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} 
        className="w-full">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {type === "sign-in" ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
    </div>
  )
}

export default AuthForm
