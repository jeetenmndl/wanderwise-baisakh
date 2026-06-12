import React from 'react'

const CustomButton = ({text, color}) => {
  return (
    <button className="bg-blue-700 px-5 py-1.5 rounded-sm text-white cursor-pointer hover:bg-blue-400">
        {text} 
    </button>
  )
}

export default CustomButton