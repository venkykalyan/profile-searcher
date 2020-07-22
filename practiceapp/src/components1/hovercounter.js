import React from 'react'
import Updatedcomponent from './withcounter'

 class hovercounter extends React.Component {

    render() {
        const {count,clickhandler}=this.props
        return (
        <h2 onMouseOver={clickhandler}>hovered {count} times</h2>
        )
    }
}
export default Updatedcomponent(hovercounter,1)
