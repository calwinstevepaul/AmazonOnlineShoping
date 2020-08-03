import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'


export class CartItems extends Component {
    removeFromCart=(id)=>{
        console.log(id)
        authApi.post("/update/removefromcart",{
            id:id
        }).then(res=>{
            swal({icon:"success",text:"Removed from cart!"}) 
            this.props.getCartItems()  
        })

    }
    render() {
        return (
          <tr>
             
              <td>
                    {this.props.data.product.productName}
              </td>

              <td>
                    {this.props.data.product.price}
              </td>

              <td>
                   <button onClick={()=>this.removeFromCart(this.props.data.id)} className="closeBtn"><i class="fas fa-times"></i> </button>
              </td>

             
          </tr>
            
        )
    }
}

export default CartItems
