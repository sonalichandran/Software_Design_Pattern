import { Facebook } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center bg-secondary border border-b-2 border-secondary">
    {/* // custom height so inside square brackets */}
    {/* change primary secondary in style.css */}
    <div className="h-full w-3/4 flex flex-row justify-center items-center gap-7">
    </div>
     <div className="h-full w-1/4 flex flex-row justify-center items-center"><a href='google.com' target='_blank'/>
     <Facebook className="h-6 w-6"/></div></div>
  )
}

export default Footer