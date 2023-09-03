import React from "react";

class Boton extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return <div className="col-4">
            <button onClick={this.props.evento} className="btn btn-success w-100">{this.props.children}</button>
        </div>
    }
}

export default Boton