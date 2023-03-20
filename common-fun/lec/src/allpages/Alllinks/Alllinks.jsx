import { Link } from "react-router-dom";

export default function (){
    return (
        <>
        <div style={{display:"flex",justifyContent:"space-around",border:"1px solid black"}}>
         <Link to="/">Homepage</Link>
         <Link to="cart">cart</Link>
         <Link to="login">login</Link>
         <Link to="admin">admin</Link>
         </div>
         </>
    )
}