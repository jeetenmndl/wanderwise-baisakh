import React from 'react'
import * as z from "zod"

const budgetSchema = z.object({
    total: z.coerce.number(),
    spent: z.coerce.number(),
})

const formSchema = z.object({
    title: z.string().min(5, "Title must be atleast 5 characters"),
    description: z.string().min(20, "Description must be atleast 5 characters"),
    startDate: z.date(),
    endDate: z.date(),
    destinations: z.array(
        z.string().min(3, "Destination must be atleast 3 characters")
    ),
    budget: budgetSchema,

})

const TripForm = () => {
  return (
    <div>TripForm</div>
  )
}

export default TripForm