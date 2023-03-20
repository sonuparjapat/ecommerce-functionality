import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { homedata } from '../Redux/Homereducer/action'
import { Location } from 'react-router-dom'
import Filter from './Filter'
export default function Homepage() {
    const data=useSelector((state)=>state.homereducer.homedata)
    const dispatch=useDispatch()
    const [searcParms]=useSearchParams()
    console.log(searcParms.getAll("gender"))
 const location=useLocation()
    let obj={
        params:{
            gender:searcParms.getAll("gender"),
        _sort:"price",
    _order:searcParms.get("order")}
    }
    useEffect(()=>{

    dispatch(homedata(obj))
    },[location.search])
    // console.log(data)
  return (
    <>
    <div>Homepage</div>
    <div style={{display:"flex",margin:"auto",justifyContent:"space-between"}}>
<div style={{width:"20%",border:"1px solid black"}}>
    <p>filterby</p>
    <Filter/>
</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"10px",width:"70%",border:"1px solid red"}}>
{data.map((item)=>
<div>
    <img src={item.image}/>
    <p>{item.title}</p>
    <p>{item.price}</p>
    <p>{item.gender}</p>
    <button><Link to={`/extra/${item.id}`}>See More Information</Link></button>
 
    </div>)}

</div>


    </div>
    </>
  )
}
