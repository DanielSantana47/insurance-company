"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"

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

const formSchema = z.object({
  name: z.string().min(2, 'write a a minimum range of 2 caracters').max(50, 'write a a maximum range of 50 caracters'),
  email: z.string().email('write a correct email.'),
  message: z.string().min(3, 'write a minumum range of 3 caracters.')
})

const onSubmit = (values: z.infer<typeof formSchema>)=> {
  console.log(values)
}



export const LoginForm = ()=>{
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="type your name" {...field} />
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
                <Input placeholder="type your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>

          )}
          />
           <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea className="resize-none" placeholder="type your messsage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        
          )}
          />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

