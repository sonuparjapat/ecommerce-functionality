import React from 'react'
import { useState,useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
const initialstate={
    Image:"",

}
export default function Filter() {
   
    
    const [searchParmas,setSearchParams]=useSearchParams()
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
        gender:category
    }
setSearchParams(params)
},[category])
// console.log(category)
  return (
    <div>
    <div>Filter</div>
    <div>
    <input value="male" onChange={handlechange} type="checkbox" />
    <label>Male</label></div>
   <div><input value="female" onChange={handlechange} type="checkbox" />
    <label>female</label></div>
     <div><input value="kids" onChange={handlechange} type="checkbox" />
     <label>kids</label></div>

    </div>
  )
}
