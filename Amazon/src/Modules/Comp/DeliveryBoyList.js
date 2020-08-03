import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'


export class DeliveryBoyList extends Component {
    submit=(id)=>{
        authApi.post("/update/delivered",{
            id:id
        }).then(()=>{            
            this.props.getDeliveryBoyList()
            swal({icon:"success",text:"Delivered!!"})   
        })
    }
    render() {
        return (
            <tr>
                <td><strong>{this.props.data.id}</strong></td>
                <td>{this.props.data.user.name}</td>
                <td><strong>{this.props.data.product.productName}</strong></td>
                <td>{this.props.data.product.price}</td>
                <td> 
                    <button onClick={()=>this.submit(this.props.data.id)} className="button">Delivered</button>
                </td>

            </tr>
        )
    }
}


export default DeliveryBoyList
