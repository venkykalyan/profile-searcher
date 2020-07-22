import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'



const Login =()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const history =useHistory()
    const postdata =()=>{
        if(email){
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
    }
        fetch('http://localhost:4000/signin',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            
            },
            body: JSON.stringify({
                
                email:email,
                password:password
            })

            }).then(res=>res.json())
             .then(data=>{
                 console.log(data)
                 if(data.error){
                 M.toast({html:data.error,classes:"#c62828 red darken-3"})
                 }
                 else{
                     localStorage.setItem("jwt",data.token)
                     localStorage.setItem("user",JSON.stringify(data.user))
                     M.toast({html:"login successful",classes:"#00897b teal darken-1"})
                
                     history.push("/")
                 }
             })
             .catch(err=>{
                 console.log(err)
             })
       
    }

    return(
        <div>
            <div className="card auth-card input-field">
            <h2>Profile Searcher</h2>
            <input
            type="text"
            placeholder="email"
            value ={email}
            onChange={e=>{setEmail(e.target.value)}}
        
            />
            <input
            type="password"
            placeholder="password"
            value ={password}
            onChange={e=>{setPassword(e.target.value)}}
            
            />

            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={()=>postdata()}
        
        
            >
                Login
            </button>
            <h5>
                <Link to="/signup">Dont have an account ?</Link>
            </h5>
            <h6>
                <Link to="/reset">Forgot password ?</Link>
            </h6>
            
    
        </div>
      </div>
        
    )

}
export default Login