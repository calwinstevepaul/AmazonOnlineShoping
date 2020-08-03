import React, { Component } from 'react'
import Navbar from './Comp/Navbar'
import Orders from './Comp/Orders'
import AddProduct from './Comp/AddProduct'
import DeliveryBoy from './Comp/DeliveryBoy'


export class AdminHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            page:1

        }
    }
    
    changePage=(value)=>{
        this.setState({
            page:value
        })
    }
    renderSwitch(param) {
        switch(param) {
          case 1:return <Orders />
          case 2:return <AddProduct />
          case 3:return <DeliveryBoy />
          default:return <Orders />
        }
    }
    render() {
        return (
            <div className="home">
                <Navbar changePage={this.changePage} {...this.props}/>  
                <div className="body">
                    {this.renderSwitch(this.state.page)}
                </div>                            
            </div>
        )
    }
}

export default AdminHome
