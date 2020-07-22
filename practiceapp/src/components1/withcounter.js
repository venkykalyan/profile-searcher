import React from 'react'



const updatedcomponent=(Originalcomponent,k)=>{

 class newcomponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    clickhandler = ()=>{this.setState(prevstate=>{
        return ({count:prevstate.count+k});
    })
   }
    
    render() {
        return (
            <div>
                <Originalcomponent count={this.state.count} clickhandler={this.clickhandler} {...this.props}/>
                
            </div>
        )
    }
    
}
return newcomponent
}


export default updatedcomponent
