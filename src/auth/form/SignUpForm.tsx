import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import { SignupSchema } from "@/lib/validation/index"

import Loader from "@/components/shared/Loader"

import {Link} from "react-router-dom"

import { createUserAccount } from "@/lib/appwrite/api"

const SignUpForm = () => {

    const isLoading:boolean=false;


    const form = useForm<z.infer<typeof SignupSchema>>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
          name: "",
          username: "",
            email: "",
            password: "",
        },
      })
     
      // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof SignupSchema>) {
        const newUser = await createUserAccount(values)
        
        console.log(newUser)
      }
  return (
      
      <Form {...form}>

        <div className="sm:w-420 flex-center flex-col">
            <img src="/assets/images/logo.svg" alt="logo"/>
            <h2 className="h3-bold md:h2:bold pt-5 sm:pt-8 text-white">
              Create a New Account </h2>
            <p className="text-light-3 small-medium md:base-regular mt-2 ">To use Snapgram, please Enter your Details</p>
        
        

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-3 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ramu Chand" className="shad-input"   {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ramu12" className="shad-input"   {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="ramu1@gmail.com" className="shad-input"   {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input"   {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="shad-button_primary" disabled={isLoading}>
        {isLoading ? <Loader/> : "Sign Up"}
        </Button>

        <p className="text-small-regular text-light02 text-center mt-1">
          Already Have an Account?
          <Link to="/login" className="text-light-3  mx-2 hover:underline font-semibold">Login</Link>
        </p>
      </form>
    </div>
    </Form> 
  
  )
}

export default SignUpForm
