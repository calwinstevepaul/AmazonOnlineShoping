import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'
import OrderStatusList from './OrderStatusList'

export class OrderStatus extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            OrderStatus:{}
        }
    }
    componentDidMount(){
        this.getOrderStatus()
    }
    getOrderStatus=()=>{
        authApi.post("/getdata/orderstatus",{}).then(res=>{
            console.log(res)
            this.setState({
                OrderStatus:res.data[0]
            })
        })
    }
    render() {
        return (
            <div className="moderators">
            <div className="moderators-inner-2"> 
                <table>
                    <tr>
                        <th>
                            ORDER NUMBER 
                        </th>
                        <th>
                            SELLER
                        </th>
                        <th>
                            ITEM
                        </th>
                        <th>
                            PRICE
                        </th>
                        <th>
                            OUT FOR DELIVERY
                        </th>
                        <th>
                            DELIVERED
                        </th>
                       
                    </tr>
                    
                    { this.state.OrderStatus.orders ? (this.state.OrderStatus.orders.map(data=>{
                        return <OrderStatusList data={data} getOrderStatus={this.getOrderStatus} />
                    })) : <></>}
                    
                    


                </table>                    
            </div>

        </div>
        )
    }
}

export default OrderStatus
