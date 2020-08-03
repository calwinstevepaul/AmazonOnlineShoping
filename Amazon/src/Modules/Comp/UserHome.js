import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import InfoRestaurant from './InfoRestaurant'


export class UserHome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {           
            product:[],
            currentUser:[]   
        }
    }
    componentDidMount(){
        this.getProduct()
        this.currentUserInfo()
    }
    getProduct=()=>{
        authApi.post("/getdata/product",{}).then(res=>{
            this.setState({
                product:res.data
            })
        })
    }

    currentUserInfo=()=>{
        authApi.post("/getdata/currentUser",{}).then(res=>{
            this.setState({
                currentUser:res.data[0]
            })
        })
    }
   

    render() {
       
        return (
            <div className="info">
                <div className="category">


                    <div className="category-inner">
                        <h3>Electronics:</h3>
                        <div className="products">
                            {this.state.product.map(data=>{
                                return(
                                    data.category === "electronics"
                                    ?
                                    <InfoRestaurant data={data} category="electronics" />
                                    :
                                    <></>
                                    )
                            })}
                            
                        </div>
                    </div>


                    <div className="category-inner">
                        <h3>Fashion:</h3>
                        <div className="products">
                            {this.state.product.map(data=>{
                                return(
                                    data.category === "fashion"
                                    ?
                                    <InfoRestaurant data={data} category="fashion" />
                                    :
                                    <></>
                                    )
                            })}
                            
                        </div>
                    </div>


                    <div className="category-inner">
                        <h3>Cosmetics:</h3>
                        <div className="products">
                            {this.state.product.map(data=>{
                                return(
                                    data.category === "cosmetics"
                                    ?
                                    <InfoRestaurant data={data} category="Cosmetics" />
                                    :
                                    <></>
                                    )
                            })}
                            
                        </div>
                    </div>


                    <div className="category-inner">
                        <h3>Books:</h3>
                        <div className="products">
                            {this.state.product.map(data=>{
                                return(
                                    data.category === "books"
                                    ?
                                    <InfoRestaurant data={data} category="books" />
                                    :
                                    <></>
                                    )
                            })}
                            
                        </div>
                    </div>



                </div>
            
               
                        



            </div>
              
        )
    }
}

export default UserHome
