import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const LinksData=[
        {
            title:"Home",
            link:'/'
        },
        {
            title:"Register",
            link:'/register'
        },
        {
            title:"Login",
            link:'/login'
        }
    ]
  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center bg-secondary border border-b-2 border-secondary">
    {/* // custom height so inside square brackets */}
    {/* change primary secondary in style.css */}
     <div className="h-full w-1/4 flex flex-row justify-center items-center">Logo</div>
     <div className="h-full w-3/4 flex flex-row justify-center items-center gap-7">
     {
        LinksData.map((data,index)=>(
            <li key={index} className="list-none">
                <NavLink to={data.link}></NavLink>
                {data.title}
            </li>
        ))
}</div>
    </div>
  )
}

export default Navbar