import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import CartItems from './CartItems'
import swal from 'sweetalert'


export class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cartItems:[]
        }
    }
    componentDidMount(){
        this.getCartItems()
    }
    getCartItems=()=>{
        authApi.post("/getdata/cart",{}).then(res=>{
            console.log(res)
            this.setState({
                cartItems:res.data
            })
        })
    }

    submit=async (productId,storeId,cartId)=>{
       
        try{

            await authApi.post("/update/order",{
                productId:productId,
                storeId:storeId
            })
            await authApi.post("/update/removefromcart",{
                id:cartId
            })
            swal({icon:"success",text:"Ordered Your Product !!"})   
            this.getCartItems()
        }
        catch(e){
            swal({icon:"error",text:"Your Product is not Ordered"})   

        }

        
    }
    
    render() {
        return (
            <div className="info">
                <div className="info-inner"> 
                    <table>
                        <tr>
                           
                            <th>
                                PRODUCT
                            </th>                               
                            <th>
                                PRICE
                            </th>
                            
                            <th>
                                REMOVE FROM CART
                            </th>
                        </tr>

                        {this.state.cartItems.map(data=>{
                            return <CartItems data={data} getCartItems={this.getCartItems}/>
                        })}
                        
                        


                    </table>  
                    <div className="cart-btn">
                        <button onClick={()=>{
                             if(this.state.cartItems.length === 0){
                                swal({icon:"error",text:"Your cart is empty"})   
                            }
                            else{
                                
                                this.state.cartItems.map((data)=>this.submit(data.product.id,data.product.user.id,data.id))
                            }
                            }} 
                            className="button">Order</button>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Cart
