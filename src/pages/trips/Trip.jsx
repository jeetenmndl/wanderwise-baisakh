import useApi from '@/hooks/useApi'
import { Loader2 } from 'lucide-react';
import React from 'react'

const Trip = () => {

    const {data, errror, loading} = useApi("/trips");

    if(loading){
        return <Loader2 />
    }

  return (
    <div>Trip</div>
  )
}

export default Trip