import React from 'react'
import { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
const initialstate={
    Image:"",

}
export default function Filter() {
   
    
    const [searchParmas,setSearchParams]=useSearchParams()
    const initialorder=searchParmas.get("order")
    const [order,setOrder]=useState(initialorder||"")
    const initialcategory=searchParmas.getAll("gender")
    // console.log(initialcategory)
    const [category,setCategory]=useState(initialcategory||[])
const handlechange=(e)=>{
   let value=e.target.value
   let newcategory=([...category])
    if(newcategory.includes(value)){
        newcategory=newcategory.filter((el)=>el!=value)
    }
    else {newcategory.push(value)}
    setCategory(newcategory)

}
useEffect(()=>{
    let params={
        gender:category,
 
        
    }
    order&&(params.order=order)
setSearchParams(params)
},[category,order])
// console.log(category)
  return (
    <div>
    <div>Filter</div>
    <div>
    <input value="male" onChange={handlechange} type="checkbox"   checked={category.includes("male")}/>
    <label>Male</label></div>
   <div><input value="female" onChange={handlechange} type="checkbox"  checked={category.includes("female")}/>
    <label>female</label></div>
     <div><input value="kids" onChange={handlechange} type="checkbox" checked={category.includes("kids")} />
     <label>kids</label></div>
     <div>
        <div><input name="name" onChange={(e)=>setOrder(e.target.value)} value={"asc"} checked={order=="asc"} type="radio"/><label>ascending</label></div>
        <div><input name="name" onChange={(e)=>setOrder(e.target.value)}  value={"desc"} checked={order=="desc"} type="radio"/><label>descending</label></div>

     </div>

    </div>
  )
}
