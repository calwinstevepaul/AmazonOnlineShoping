import React, { Component } from 'react'
import DeliveryBoyList from './DeliveryBoyList'
import {authApi} from '../../apiCall'


export class DeliveryBoy extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            DeliveryBoyList:[]
        }
    }
    componentDidMount(){
        this.getDeliveryBoyList()
    }
    getDeliveryBoyList=()=>{
        authApi.post("/getdata/delivery",{}).then(res=>{
            this.setState({
                DeliveryBoyList:res.data
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
                    {this.state.DeliveryBoyList.map(data=>{
                        return <DeliveryBoyList data={data} getDeliveryBoyList={this.getDeliveryBoyList}/>
                    })}
                    


                </table>                    
            </div>

        </div>
        )
    }
}

export default DeliveryBoy
