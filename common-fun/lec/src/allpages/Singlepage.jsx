import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { homedata } from '../Redux/Homereducer/action'
import { singledata } from '../Redux/Homereducer/Singleproduce/action'
export default function Singlepage() {
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.singlereducer.singledata)
    console.log(data)
    const {id}=useParams()
    // console.log(id)
    useEffect(()=>{
   dispatch(singledata(id))     
    },[id])
  return (
    <div>
    <div>Singlepage</div>
    <div>
        <img src={data.image}/>
        <p>Title:{data.title}</p>
        <p>Brand:{data.brand}</p>
        <p>Gender:{data.gender}</p>
        <p>Price:{data.prcie}</p>
        <h3>Discount:{data.discount}</h3>
        <button>ADD TO CART</button>
        <button>EDIT</button>
    </div>
    </div>
  )
}
