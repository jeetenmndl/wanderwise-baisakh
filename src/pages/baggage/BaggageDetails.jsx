import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useApi from '@/hooks/useApi';
import { Loader2 } from 'lucide-react';
import React from 'react'
import { useParams } from 'react-router-dom'

const BaggageDetails = () => {

    const {tripId} = useParams();

    const { data, loading, error } = useApi(`/${tripId}/baggages`);

    if(loading){
        return <Loader2 className='animate-spin mt-40' />
    }

  return (
    <section>
        <Card>
            <CardHeader>
                <CardTitle>Baggage List</CardTitle>
                <CardDescription>All the items you need for this trip</CardDescription>
                <CardAction>
                    ...
                </CardAction>
            </CardHeader>

            <CardContent>
                {
                    data.length == 0 ?
                    <div>No baggages for this trip. Add baggage with the help of button above.</div>
                    :
                    data.map((item)=>{
                        
                    })
                }
            </CardContent>
        </Card>
    </section>
  )
}

export default BaggageDetails