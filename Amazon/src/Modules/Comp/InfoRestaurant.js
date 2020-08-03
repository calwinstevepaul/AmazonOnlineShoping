import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'


export class  InfoRestaurant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isProduct:false
        }
    }
    changeIsFood=(value)=>{
        this.setState({
            isProduct:value
        })
    }

    addToCart=(id)=>{
        authApi.post("/update/addtocart",{
            productId:id
        }).then(res=>{
            swal({icon:"success",text:"Added in cart!"})   
        })
    }
    
    render() {
        return (
            <>
                <div onClick={()=>this.changeIsFood(true)} className="products-items">
                    <div className="product-image">
                        <img src={this.props.data.productImage}  alt="product img" height="100px" width="150px"/>
                    </div>
                    <h3>
                        <strong>{this.props.data.productName}</strong>
                    </h3>
                    <p>
                        Rs {this.props.data.price}/-
                    </p>
                    <button className="button">View details</button>
                </div>
                {this.state.isProduct
                ?
                    <>
                        <div onClick={()=>this.changeIsFood(false)} className="productModel">
                        </div>
                        <div className="productModel-inner">
                            <img className="productModel-inner-1" src={this.props.data.productImage} height="40%" width="40%"/>
                            <div className="productModel-inner-2">
                                <div>
                                    <h3>
                                        <strong>{this.props.data.productName.toUpperCase()}</strong>
                                    </h3>
                                    <strong>Details:</strong>
                                    <p>
                                    {this.props.data.description}
                                    </p>
                                    <strong>Price:</strong>
                                    <p>
                                    Rs {this.props.data.price   }/-
                                    </p>
                                </div>
                                <button onClick={()=>this.addToCart(this.props.data.id)} className="button">Add to Cart</button>
                            </div>
                        </div>
                    </>
                :
                    <></>
                }
            </>    
           
        )
    }
}

export default InfoRestaurant
