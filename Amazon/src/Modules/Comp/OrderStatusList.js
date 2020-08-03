import React, { Component } from 'react'

export class OrderStatusList extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.product.user.name}</td>
                <td>{this.props.data.product.productName}</td>
                <td>Rs {this.props.data.product.price} /-</td>
                <td>{this.props.data.isDespatched ? <div className="selected"><i class="fas fa-check"></i></div> : "Pending..."}</td>
                <td>{this.props.data.isDelivered ? <div className="selected"><i class="fas fa-check"></i></div> : "Pending..."}</td>

            </tr>
        )
    }
}

export default OrderStatusList
