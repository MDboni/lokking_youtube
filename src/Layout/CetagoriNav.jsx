
import { useEffect, useState } from "react"
import { PostCatagoris } from "../ApiRequest/ApiRequest"
import { NavLink } from "react-router-dom"

const CetagoriNav = () => {

    const [category,setCategory]=useState([])

    useEffect(()=>{
        (async()=>{
          const res=  await PostCatagoris()
          setCategory(res.categories)
        })()
    },[])

  return (

    <>
        <div className="navbar  bg-base-100">
            
            <div className="navbar-center mx-auto  lg:flex">
                 
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={`/`}>All</NavLink></li>
                 {
                    category.map((item,i)=>(
                        <li key={i}><NavLink to={`/category/${item.category_id}`}>{item['category']}</NavLink></li>
                    ))
                   }
                    
                </ul>
            </div>
            
        </div>
    </>
  )
}

export default CetagoriNav