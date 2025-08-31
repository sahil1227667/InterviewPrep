
"use client"

import type { FormType } from "@/constants"; // adjust path if you used a different file



import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {Form
  // FormControl,
  // FormDescription,
  // FormField,
  // FormItem,
  // FormLabel,
  // FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image";
import Link from "next/link";
import {toast} from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";


// Schema
// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })
const authFormSchema = (type: FormType) => {

  return z.object({
    name: type === 'sign-up' ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),  })
}


const AuthForm = ({ type }: {type: FormType}) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        if(type === 'sign-up'){
          toast.success('Account Created Successfully, Please Sign in.');
          router.push('/sign-in')
          
        } else {
           toast.success('Sign-in Successfull');
          router.push('/')
        } 

      } catch (error) {
        console.log(error);
        toast.error('There was an error: ${error}')

      }

  }
  
  const isSignIn = type === 'sign-in'; 
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
        className="w-full space-y-6 mt-4 form">

         {!isSignIn && (
          <FormField 
          control={form.control}
          name="name" 
          label="Name"
          placeholder="Your Name" />
         )}
         <p>   <FormField 
          control={form.control}
          name="email" 
          label="email"
          placeholder="Your Email address" 
          type="email"
          /></p>
         <p><FormField 
          control={form.control}
          name="password" 
          label="password"
          placeholder="Enter your password" 
          type="password"
          /></p>
          <Button className="btn" type="submit">{isSignIn ? 'Sign in': 'Create an Acoount' }
            
          </Button>
        </form>
      </Form>

<p className="text-center">
  {isSignIn ? "No account yet?" : "Have an account already?"}
  <Link
    href={!isSignIn ? "/sign-in" : "/sign-up"}
    className="font-bold text-user-primary ml-1"
  >
    {!isSignIn ? "Sign in" : "Sign up"}
  </Link>
</p>



    </div>
    </div>
  )
}

export default AuthForm
