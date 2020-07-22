const express =require('express')
const router =express.Router()
const mongoose =require('mongoose')
const User =  mongoose.model("user")
const jwt=  require('jsonwebtoken')
const {JWT_SECRET} =require('../config/keys')
const bcrypt = require('bcryptjs')
const requirelogin =require ('../middleware/requirelogin')






router.get('/protected',requirelogin,(req,res)=>{
  res.send("hello user")
})
router.post('/signup',(req,res)=>{
  const {name,email,password} = req.body
  
  
  if(!email || !password || !name){
     return res.status(422).json({error:"please add all the fields"})
  }
  User.findOne({email:req.body.email})
  .then((savedUser)=>{
      if(savedUser){
        return res.status(422).json({error:"user already exists with that email"})
      }
      bcrypt.hash(req.body.password,12)
      .then(hashedpassword=>{
            const user = new User({
              
                name:name,
                email:email,
                password:hashedpassword
                
                
            })
    
            user.save()
            .then(user=>{
                
                res.json({message:"saved successfully"})
            })
            .catch(err=>{
                console.log(err)
            })
      })
      .catch(err=>{
        console.log(err)
      })
     
  })
  .catch(err=>{
    console.log(err)
  })
})

router.post('/signin',(req,res)=>{
  const {email,password}=req.body
  if(!email||!password)
  {
     return res.status(422).json({error:"please add email or password"})
  }
  User.findOne({email:email})
    .then(saveduser=>{
      if(!saveduser)
      {
       return  res.status(422).json({error:"invalid email or password"}) 
      }
      bcrypt.compare(password,saveduser.password)
       .then(didmatch=>{
         if(didmatch)
         {
           const token =jwt.sign({_id:saveduser._id},JWT_SECRET)
           const {_id,name,email}=saveduser
           res.send({token:token,user:{_id,name,email}})
         }
         else{
           res.status(422).json({error:"invalid email or password"})
         }
       })
         .catch(err=>{
           console.log(err)
         })
    })
})
module.exports=router