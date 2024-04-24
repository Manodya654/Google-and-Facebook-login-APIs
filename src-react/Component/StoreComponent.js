import React, { Component } from 'react'
import './StoreComponent.css'
import ProductService from '../service/ProductService'

export class StoreComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      stores : [],
      keyword : ''
    }
    this.addStore = this.addStore.bind(this);
    this.updateStore = this.updateStore.bind(this);
    this.deleteStore = this.deleteStore.bind(this);

  }

  componentDidMount(){
    ProductService.viewStores()
    .then((response) => {
      console.log("All stores by Component" + JSON.stringify(response))
      this.setState({
        stores : response.data
      })
    })
  }

  searchStore = (keyword) => {
    this.props.history.push(`/search/${keyword}`)
  }

  searchChangeHandler = (event) =>{
    this.setState({
      keyword : event.target.value
    })
  }

  deleteStore(ProductId){
    ProductService.deleteStore(ProductId).then( res => {
        this.setState({stores: this.state.stores.filter(store => store.ProductId !== ProductId)});
    });
  }

  updateStore(ProductId){
  this.props.history.push(`/addstore/${ProductId}`);
  }

  addStore(){
  this.props.history.push('/addstore/add');
  }

render() {
return (
  <div class="stores"><br></br>
     {/* Search Text Box and Search Button */}
    <form className="col-md-6">
          {/* Input Search Box */}
          <input type = "text" placeholder='Search stores' value={this.state.keyword} 
            onChange={this.searchChangeHandler}></input>
          { /* Search Button - Take note to use button types instead of input type */}
          <button onClick={ () => this.searchStore(this.state.keyword)} className="btn btn-primary">Search</button><br></br>
    </form>
       <a href="/post"><button type="button" class="btn btn-success" onClick={this.addStore}>Add store</button></a>
        <h3>View All stores</h3>

    {/* Table */}
    <table class="styled-table"> 
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Product Price</th>
        <th>Product Rating</th>
        <th>Product Desccription</th>
        <th>Update</th>
        <th>Delete</th>
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
        <td><button onClick={ () => this.updateStore(this.state.keyword)} className="btn btn-secondary">Update</button></td>
        <td><button onClick={ () => this.deleteStore(this.state.keyword)} className="btn btn-secondary">Delete</button></td>
    </tr>
    )
    }
    </tbody>
    </table> 
  </div>
)
}
}

export default StoreComponent