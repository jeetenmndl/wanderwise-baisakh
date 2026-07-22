import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import * as z from 'zod'
import { CardFooter } from '../ui/card'
import { Field, FieldError, FieldLabel } from '../ui/field'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

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
                    name: "",
                    time: "",
                    notes: [""]
                }
            ],
            date: new Date().toISOString().split("T")[0]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "activities"
    })

    const onSubmit = async (data) => {
        console.log(data)
    }


    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="w-1/2 mx-auto mt-40 mb-20">
                <CardHeader>
                    <CardTitle>
                        Create Itinerary
                    </CardTitle>
                    <CardDescription>Fill in the details for your itinerary</CardDescription>

                </CardHeader>
                <CardContent className="space-y-3">

                    <Controller
                        name="title"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Enter Trip Title</FieldLabel>
                                <Input
                                    {...field}
                                    id={field.name}
                                    type="text"
                                    placeholder="Trip to Bali."
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    <Controller
                        name="description"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor={field.name}>Enter Description</FieldLabel>
                                <Textarea
                                    {...field}
                                    id={field.name}
                                    placeholder="Trip to Bali."
                                    aria-invalid={fieldState.invalid}
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    {
                        fields.map((activity, index) => {
                            return (
                                <div key={index} className='border border-gray-200 p-4 rounded'>
                                    <Controller
                                        name={`activities[${index}].name`}
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel htmlFor={field.name}>Name of activity</FieldLabel>
                                                <Input
                                                    {...field}
                                                    id={field.name}
                                                    type="text"
                                                    placeholder="Trip to Bali."
                                                    aria-invalid={fieldState.invalid}
                                                />
                                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />
                                </div>
                            )
                        })
                    }



                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </form>
    )
}

export default ItineraryForm