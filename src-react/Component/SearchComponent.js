import React, { Component } from 'react'
import ProductService from '../service/ProductService'

export class SearchComponent extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          stores: [],
          keyword: this.props.match.params.keyword
        }
      }

       //Render data calling searchCars method from car Service
       componentDidMount(){
           ProductService.searchStore(this.state.keyword)
           .then((response) => {
               console.log("Search Products from Component" + JSON.stringify(response))
               this.setState({
               stores: response.data
               })
           })
       }

  render() {
    return (
      <div>
          <h1>All Produts for the search results</h1>

          {/* Table */}
        <table class="styled-table">
            <thead>
            <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Rating</th>
            <th>Product Desccription</th>
            </tr>
            </thead>
            <tbody>
            {
        this.state.stores.map( store => 
            <tr key={store.ProductId}>
            <td>{store.productName}</td>
            <td>{store.productPrice}</td>
            <td>{store.productRating}</td>
            <td>{store.productDes}</td>
            </tr>
            )
        }
           </tbody>
        </table>
        <a href="/stores"><button type="button" class="btn btn-success">Back</button></a>

      </div>
    )
  }
}

export default SearchComponent