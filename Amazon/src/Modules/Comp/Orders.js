import React, { Component } from 'react'
import {authApi} from '../../apiCall'
import OrderList from './OrderList'

export class Orders extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             orders:[]
        }
    }
    componentDidMount(){
        this.getOrders()
    }
    getOrders=()=>{
        authApi.post("/getdata/orders",{}).then(res=>{
            console.log(res)
            this.setState({
                orders:res.data
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
                                USER NAME
                            </th>
                            <th>
                                ITEM
                            </th>
                            <th>
                                PRICE
                            </th>
                            <th>
                                STATUS
                            </th>
                           
                        </tr>
                        {this.state.orders.map(data=>{
                            return <OrderList data={data} getOrders={this.getOrders}/>
                        })}
                        


                    </table>                    
                </div>

            </div>
        )
    }
}

export default Orders
