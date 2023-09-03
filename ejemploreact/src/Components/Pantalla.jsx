import React from "react";

class Pantalla extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <input type="text" value={this.props.children} readOnly className="form-control"/>

        </div>
    }

}

export default Pantalla