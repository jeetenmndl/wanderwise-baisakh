import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const activitySchema = z.object({
    name: z.string().min(5, "Must be atleast 5 characters"),
    time: z.string().min(5, "Must be atleast 5 characters"),
    notes: z.array(
        z.string().min(5, "Must be at least 5 characters")
    )
})

const formSchema = z.object({
    title: z.string().min(5, "Must be atleast 5 characters"),
    description: z.string().optional(),
    activities: z.array(activitySchema),
    date: z.coerce.date()
})

const ItineraryForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            activities: [
                {
                    name:"",
                    time: "",
                    notes: [""]
                }
            ],
            date: new Date().toISOString().split("T")[0]
        }
    })

    const onSubmit = async (data) => {
        console.log(data)
    }


  return (
    <div>ItineraryForm</div>
  )
}

export default ItineraryForm