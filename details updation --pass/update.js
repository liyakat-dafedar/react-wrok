import React, { Component } from 'react'

class Update extends Component{
    render(){
        return(
            <p>
                <table  style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ borderCollapse: 'collapse' }}>P-No</th><th>Product Name</th><th>Price</th>
                        </tr>
                    </thead>
                    <tbody  style={this.props.product.status?{border:" 1px solid blue"}:{border:" 1px solid red"}}>
                        <tr>
                            <td style={{ borderCollapse: 'collapse' }}> 
                                { this.props.product.id + 1 }
                            </td>
                            <td style={{ borderCollapse: 'collapse' }}>
                                { this.props.product.name }
                            </td>
                            <td style={{ borderCollapse: 'collapse' }}>
                                { this.props.product.price }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </p>
        )
    }
}

export default Update