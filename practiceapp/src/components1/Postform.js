import React, { Component } from 'react'
import Axios from 'axios'

class Postform extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid:'',
             name:'',
             body:''

        }
    }
    changehandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
        submithandler = e=>{
            e.preventDefault()
            console.log(this.state)
        
            Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
                 .then( response =>{console.log(response)})
                 .catch(error =>{console.log(error)})
        }
    
    render() {
        const {userid,name,body}=this.state;
        return (
            <div>
                <form onSubmit={this.submithandler}>
                    <div>
                        <input type="text" name="userid"  value={userid}onChange={this.changehandler}/>
                    </div>
                    <div>
                        <input type="text" name="name" value={name} onChange={this.changehandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changehandler} />
                    </div>
                    <button type="submit" >submit</button>



                </form>
                
            </div>
        )
    }
}

export default Postform
