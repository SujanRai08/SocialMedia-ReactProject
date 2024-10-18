import React from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { SignupValidation } from '@/lib/validation'
import Loader from '@/components/shared/Loader'
import { createUserAccount } from '@/lib/appwrite/api'


const SignupForms = () => {
    const isLoading = false;// not submitting yet so false
    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
          name: "",
          username: "",
          email:"",
          password: ""
        },
      })
     
      // 2. Define a submit handler.
      async function onSubmit(user: z.infer<typeof SignupValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        const newUser = await createUserAccount(user);

        console.log(newUser);
       
      }
      
      return (
        <Form {...form}>
            <div className='sm:w-420 flex-center flex-col'>
                <img src="/assets/images/logo.svg" alt="logo" />
                <h2 className='h2-bold md:h2-bold pt-5 sm:pt-12'>Create a new account</h2>
                <p className='text-light-3 small-medium md:base-regular mt-2'> To use application, please enter your details</p>

            </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-auto mt-2">
        
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type='text' className='shad-input' {...field} />
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
                  <FormLabel>UserName</FormLabel>
                  <FormControl>
                    <Input type='text' className='shad-input' {...field} />
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
                    <Input type='email' className='shad-input' {...field} />
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
                    <Input type='password' className='shad-input' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='shad-button_primary'>
                {
                    isLoading ?(
                        <div className='flex flex-center gap-2'><Loader/>Loading...</div>

                    ): "Sign-up"
                }
                </Button>
                <p className='text-small-regular text-light-2 text-center mt-2'>already have an account ?
                   <Link to="/sign-in" className='text-primary-500 text-small-semibold ml-1' >Login in </Link>
                </p>
          </form>
        </Form>
      )
}

export default SignupForms