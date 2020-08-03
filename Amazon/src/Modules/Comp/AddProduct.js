import React, { Component } from 'react'
import InputBox from '../ReuseComp/InputBox'
import {authApi} from '../../apiCall'
import swal from 'sweetalert'


export class AddProduct extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productImage:[],
             productName:"",
             description:"",
             price:"",
             category:""
        }
    }
    eventHandle=(e)=>{
        let value = e.target.value
       
        this.setState({
            [e.target.name]: value
        })
    }
    
    submit=()=>{
        const formdata=new FormData();
        formdata.append("productImage",this.state.productImage);
        formdata.append("productName",this.state.productName);
        formdata.append("description",this.state.description);
        formdata.append("price",this.state.price);
        formdata.append("category",this.state.category);
        let config={
            headers: {
                'content-type': 'multipart/form-data',
        
            }
        }
        authApi.post("/update/addproduct",formdata,config)
        .then(res=>{
            console.log("add Product admin = ");
            swal({icon:"success",text:"Product Added"})

        })
        .catch(()=>{
            swal({icon:"error",text:"Error in Adding Product "})

        })

       
    }
    
    render() {
        return (
            <div className="moderators">
                <div className="moderators-inner">
                    <strong>
                        <h3>Add a New Product</h3>
                    </strong>
                    <div className="text-field">
                        <label>Product Image : </label>
                        <input type="file" className="inputbox-1"  onChange={(e)=>this.setState({productImage:e.target.files[0]})}/>
                    </div>
                    <div className="text-field">
                        <label>Product Name : </label>
                        <InputBox  placeholder="Product Name" name="productName" type="text" value={this.state.productName} onChange={this.eventHandle} />
                    </div>

                    <div className="text-field">
                        <label>Description : </label>
                        <InputBox  placeholder="Description" name="description" type="text" value={this.state.description} onChange={this.eventHandle} />
                    </div>
                    <div className="text-field">
                        <label>Price : </label>
                        <InputBox  placeholder="Price" name="price" type="number"  value={this.state.price} onChange={this.eventHandle} />
                    </div>
                    <div className="text-field">
                        <label>Category : </label>
                        <select className="inputbox-1" name="category" onChange={(e)=>this.eventHandle(e)}>
                            <option value="">Choose</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="books">Books</option>
                            <option value="cosmetics">Cosmetics</option>
                        </select>
                    </div>
                    <button onClick={()=>this.submit()} className="button">Add Product</button>
                </div>
            </div>
        )
    }
}

export default AddProduct
