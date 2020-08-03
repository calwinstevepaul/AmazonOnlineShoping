import React, { Component } from 'react'
import '../Home.css'
import logo from '../../Images/amazonLogo.png'
export class Navbar extends Component {
    
    
    logout=()=>{
        this.props.changeLoginState(false)
        localStorage.clear();

    }

    

    render() {
        return (
            <div className="navbar">
                <div className="navbar-innet-1">
                   <img src={logo}  alt="logo" height="30px" width="100px"/>
                </div>
               
               
                <div className="navbar-inner-2">
                   
                        <button onClick={()=>this.props.changePage(1)}>
                            {JSON.parse(localStorage.getItem('admin'))?
                                "Orders"
                            :
                                <><i class="fas fa-home"> </i> Home</>
                            }
                        </button>       
                        
                        <button onClick={()=>this.props.changePage(3)}>
                            {JSON.parse(localStorage.getItem('admin'))?
                                "DeliveryBoy"
                            :
                                "Order Status"
                            }
                        </button>       
                              
                        <button onClick={()=>this.props.changePage(2)}>
                            {JSON.parse(localStorage.getItem('admin'))?
                                <>Product <i class="fas fa-plus"></i> </>
                            :
                                "Cart"
                            }
                        </button>     

                </div>
                <div className="navbar-inner-3">
                    <button onClick={()=>{this.logout()}}>Log Out</button>
                </div>
            </div>
        )
    }
}

export default Navbar
