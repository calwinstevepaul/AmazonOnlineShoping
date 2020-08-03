import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'

export class OrderList extends Component {
    submit=(id)=>{
        authApi.post("/update/prepared",{
            id:id
        }).then(()=>{            
            this.props.getOrders()
            swal({icon:"success",text:"Order out for Delivery!!"})   
        })
    }
    render() {
        return (
            <tr>
                <td><strong>{this.props.data.id}</strong></td>
                <td>{this.props.data.user.name}</td>
                <td><strong>{this.props.data.product.productName}</strong></td>
                <td>Rs {this.props.data.product.price} /-</td>
                <td> 
                    <button onClick={()=>this.submit(this.props.data.id)} className="button">Out For Delivery</button>
                </td>

            </tr>
        )
    }
}

export default OrderList
