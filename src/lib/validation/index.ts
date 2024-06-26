import { z } from "zod"

export const SignupSchema = z.object({
    name: z.string().min(5,{message:'Enter min 5 Characters'}).max(50),
    username: z.string().min(8,{message:'Username should be of Min 8 Characters'}).max(50),
    email: z.string().email(),
    password: z.string().min(8,{message:'Password should be of Min 8 Characters'})

  })