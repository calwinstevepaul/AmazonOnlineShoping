import React, { Component } from 'react'
import Navbar from './Comp/Navbar'
import './Home.css'
import Cart from './Comp/Cart'
import UserHome from './Comp/UserHome'
import OrderStatus from './Comp/OrderStatus'
 


export class Home extends Component {
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
          case 1:return <UserHome/>
          case 2:return <Cart/> 
          case 3:return <OrderStatus/>
          default:return  <UserHome/>
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

export default Home
