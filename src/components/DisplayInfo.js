import React, { Component } from 'react'
import '../index.css'

class DisplayInfo extends Component {





    render() {


        return (
            <div className="list">
                <img className="imagelist" src={this.props.img} alt={this.props.val}></img>
                <div className="itemlist"> {this.props.val}</div>
            </div>
            // personas.map((item, index) => {

            //     return (<li>{item.login}</li>)
            // })



        )
    }

}

export default DisplayInfo 