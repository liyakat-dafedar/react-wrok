import React, { Component } from 'react'
import Product from './data/product'
import Update from './update'

class FormHandle extends Component{
    constructor(){
        super()
        this.state = {
            id: Product.length ,
            name:"",
            price:0,
            status: false
        }

    }
    handleChange = (e) => {
        let dup = Product.map((item) => {return (item.name === e.target.value)?true:false})
        
        for(var i=0;i<Product.length;i++)
            if(dup[i])
                console.log("Duplicate Product not allowed")
            else
                this.setState({[e.target.id]: e.target.value});
    }
    handleCheckChange = () => {
        this.setState({
            status: !this.state.status
        })
    }
    handlSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            id: Product.length + 1
        })
        Product.push(this.state)
        console.log(Product)
    }
    render(){
    const product = Product.map((product)=>{return <Update key={ product.id }product={ product }/>});
        return(
            <div>
                <h4>The Name of the product:<span>{ this.state.name }</span></h4>
                <form onSubmit={ this.handlSubmit } >
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={ this.handleChange } placeholder="Enter the product name" id="name" required='required'/><br/>
                    <label htmlFor="price">Price</label>
                    <input type="number" onChange={ this.handleChange } placeholder="Enter the product no" id="price" required='required'/>
                    <input type="checkbox" id="status" onChange={ this.handleCheckChange } checked={ this.state.status } />
                    <button >Submit</button>
                </form>
                { product }
            </div>
        )
    }
}

export default FormHandle