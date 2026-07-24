import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useApi from '@/hooks/useApi';
import { formatDate } from '@/lib/formatter';
import { Loader2 } from 'lucide-react';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ItineraryDetails = () => {

    const { tripId } = useParams();
    const navigate = useNavigate();

    const { data, error, loading } = useApi(`/${tripId}/itineraries`);

    console.log(data)

    if(loading){
      return <Loader2 className='animate-spin' />
    }

  return (
    <div className='px-20 py-20'>
        <Card>
          <CardHeader>
            <CardTitle className={"text-xl font-semibold"}>Itineraries for this trip</CardTitle>
            <CardDescription>View and manage itineraries for this trip.</CardDescription>

            <CardAction>
                <Button onClick={()=>{navigate(`/itinerary/add/${tripId}`)}}>Add Itinerary</Button>
            </CardAction>
          </CardHeader>

          <CardContent className={"grid grid-cols-2 gap-4"}>
            {
              data?.length == 0 ?
              <div>No itineraries to show for this trip. Add one first.</div>
              :
              data?.map((item, index)=>{
                return (
                  <Card key={item._id}>
                    <CardHeader>
                      <CardTitle>{item.title} - {formatDate(item.date)}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      {
                        item.activities.map((activity, activityIndex)=>{
                          return (
                            <div className='border border-gray-200 p-4 rounded'>
                                <p className='text-lg font-medium'>{activity.name}</p>
                                <p>{activity.time}</p>

                                <ul className='list-disc pl-6'>
                                  {
                                    activity.notes.map((note, noteIndex)=>{
                                      return (
                                        <li key={noteIndex}>{note}</li>
                                      )
                                    })
                                  }
                                </ul>
                            </div>
                          )
                        })
                      }
                    </CardContent>
                  </Card>
                )
              })
            }
          </CardContent>
        </Card>
    </div>
  )
}

export default ItineraryDetails