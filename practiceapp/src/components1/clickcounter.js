import React from 'react'
import Updatedcomponent from './withcounter'
 class clickcounter extends React.Component {
    
    render() {
        const {count,clickhandler}=this.props;
        return (
            <div>
                <button onClick={clickhandler}>clicked {count} times {this.props.name}</button>
            </div>
        )
    }
}

export default Updatedcomponent(clickcounter,10)
