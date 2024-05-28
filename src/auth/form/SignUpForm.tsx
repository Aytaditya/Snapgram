import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import { SignupSchema } from "@/lib/validation/index"

import Loader from "@/components/shared/Loader"

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
      function onSubmit(values: z.infer<typeof SignupSchema>) {
        // Do something with the form values.
        
        console.log(values)
      }
  return (
      
      <Form {...form}>

        <div className="sm:w-420 flex-center flex-col">
            <img src="/assets/images/logo.svg" alt="logo"/>
            <h2 className="h3-bold md:h2:bold pt-5 sm:pt-10 text-white">
              Create a New Account </h2>
            <p className="text-light-3 small-medium md:base-regular mt-2 ">To use Snapgram Enter your Details</p>
        
        

      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4 ">
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
      </form>
    </div>
    </Form> 
  
  )
}

export default SignUpForm
