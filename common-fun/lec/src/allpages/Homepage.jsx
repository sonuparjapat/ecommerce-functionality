import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { homedata } from '../Redux/Homereducer/action'
export default function Homepage() {
    const data=useSelector((state)=>state.homereducer.homedata)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(homedata)
    },[])
    console.log(data)
  return (
    <>
    <div>Homepage</div>
    <div style={{display:"flex",margin:"auto",justifyContent:"space-between"}}>
<div style={{width:"20%",border:"1px solid black"}}>
    <p>filterby</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",width:"70%",border:"1px solid red"}}>
{data.map((item)=>
<div>
    <img src={item.image}/>
    <p>{item.title}</p>
    <p>{item.price}</p>
    <p>{item.gender}</p>
    <button>See More Information</button>
 
    </div>)}

</div>


    </div>
    </>
  )
}
