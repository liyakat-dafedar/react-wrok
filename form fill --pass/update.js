import React, { Component } from 'react'

class Update extends Component{
    render(){
        return(
                <main>
                        <h3>Name : </h3>
                        <h4> 
                            { this.props.firstname }   { this.props.lastname }
                        </h4>
                        <br/>
                        Gender:
                        <h4>
                            { this.props.gender }
                        </h4>
                        <br/>
                        Is Friend:
                        <h4>
                            { this.props.isfriendly?<span>is a friend</span>:<span>is not a friend</span> }
                        </h4>
                        Address:
                        <h4>
                            { this.props.location }
                        </h4>
                    </main> 
            
        )
    }
}

export default Update