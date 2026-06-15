import { MapPinned, Plane, Users, Wallet } from 'lucide-react'
import React from 'react'

const Features = () => {

    const featuresData = [
  {
    icon: MapPinned ,
    title: "Smart Itineraries",
    description: "Build organized travel plans with destinations, activities, schedules, and recommendations in one place."
  },
  {
    icon: Users,
    title: "Group Planning",
    description: "Coordinate trips with friends, share updates, assign tasks, and manage decisions collaboratively."
  },
  {
    icon: Wallet,
    title: "Expense Tracking",
    description: "Monitor travel budgets, record shared expenses, split costs fairly, and avoid overspending."
  },
  {
    icon: Plane,
    title: "Booking Manager",
    description: "Keep flights, accommodations, and reservations organized with quick access throughout your journey."
  }
]

  return (
    <section className='px-20 py-32'>
        <div>
            <h2 className='text-5xl font-bold mb-24 text-center'>Features</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
                featuresData.map((feature, index)=>{
                    return (
                        <div>
                            {feature.title}
                        </div>
                    )
                })
            }
        </div>


    </section>
  )
}

export default Features