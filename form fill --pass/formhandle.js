import React, { Component } from 'react'
import Update from './update'

class FormHandle extends Component{
    constructor(){
        super()
        this.state = {
            firstname : "",
            lastname: "",
            gender: "",
            isfriendly: false,
            location: ""
            
        }

    }
    handleChange = (e) => {
        const {name, value, type, checked} = e.target
        
        type==="checkbox"?
        this.setState({
            [name] : checked
        }):
        this.setState({
            [name] : value
        })
        
    }
    render(){
        
        return(
            <main>
                <h4>The Name is:<span>{ this.state.firstname }</span>  <span>{ this.state.lastname }</span></h4>
                <form onSubmit={ this.handlSubmit } >
                    
                    <label htmlFor="firstname">FirstName :</label>
                    <input  type="text" 
                            onChange={ this.handleChange } 
                            placeholder="Enter your your firstname" 
                            name="firstname" 
                            id="firstname" 
                            required='required'
                            value={this.state.firstname}
                    />
                    <br/>

                    <label htmlFor="lastname">LastName :</label>
                    <input  type="text" 
                            onChange={ this.handleChange } 
                            placeholder="Enter your your lastname" 
                            name="lastname" 
                            id="lastname"
                            value={this.state.lastname}
                    />
                    <br/>

                    <label>
                    <input  type="checkbox" 
                            onChange={ this.handleChange } 
                            name="isfriendly" 
                            value={this.state.isfriendly}
                    />IsFriendly
                    <br/>
                    <input  type="radio" 
                            onChange={ this.handleChange } 
                            name="gender" 
                            value="male"
                    />Male
                    <br/>
                    <input  type="radio" 
                            onChange={ this.handleChange } 
                            name="gender" 
                            value="female"
                    />Female
                    <br/>
                    </label>
                    <label >Address:</label>
                    <textarea   onChange={ this.handleChange } 
                                name="location" 
                                value={this.state.location}
                    />
                </form>
                <Update firstname={this.state.firstname}
                        lastname={this.state.lastname}
                        isfriendly={this.state.isfriendly}
                        gender={this.state.gender}
                        location={this.state.location}
                />
            </main>
        )
    }
}

export default FormHandle