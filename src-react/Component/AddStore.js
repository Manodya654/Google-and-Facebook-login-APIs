import React, { Component } from 'react'
import ProductService from '../service/ProductService';

export class AddStore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            ProductId: this.props.match.params.ProductId,
            productName: '',
            productPrice: '',
            productRating: '',
            productDes: ''
        }
        this.changeproductNameHandler = this.changeproductNameHandler.bind(this);
        this.changeproductPriceHandler = this.changeproductPriceHandler.bind(this);
        this.changeproductRatingHandler = this.changeproductRatingHandler.bind(this);
        this.changeproductDesHandler = this.changeproductDesHandler.bind(this);
    }

    componentDidMount(){

        if(this.state.ProductId === '_add'){
            return
        }else{
            ProductService.getProductId(this.state.ProductId).then( (res) =>{
                let store = res.data;
                this.setState({productName: store.productName,
                    productPrice: store.productPrice,
                    productRating : store.productRating, 
                    productDes : store.productDes
                });
            });
        }        
    }

    save = (e) => {
        e.preventDefault();
        let store = {productName: this.state.productName, productPrice: this.state.productPrice, productRating: this.state.productRating, productDes: this.state.productDes };
        console.log('store => ' + JSON.stringify(store));

    
        if(this.state.id === '_add'){
            ProductService.addStore(store).then(res =>{
                this.props.history.push('/stores');
            });
        }else{
            ProductService.updateStore(store, this.state.ProductId).then( res => {
                this.props.history.push('/stores');
            });
        }
    }
    
    changeproductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeproductPriceHandler= (event) => {
        this.setState({productPrice: event.target.value});
    }

    changeproductRatingHandler= (event) => {
        this.setState({productRating: event.target.value});
    }

    changeproductDesHandler= (event) => {
        this.setState({productDes: event.target.value});
    }

    cancel(){
        this.props.history.push('/stores');
    }

    getTitle(){
        if(this.state.ProductId === '_add'){
            return <h3 className="text-center">Add Stores</h3>
        }else{
            return <h3 className="text-center">Update Stores</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Product Name: </label>
                                            <input placeholder="Product Name" name="productName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeproductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Price: </label>
                                            <input placeholder="Product Price" name="productPrice" className="form-control" 
                                                value={this.state.productPrice} onChange={this.changeproductPriceHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Rating: </label>
                                            <input placeholder="Product Rating" name="productRating" className="form-control" 
                                                value={this.state.productRating} onChange={this.changeproductRatingHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Product Description : </label>
                                            <input placeholder="Product Description" name="productDes" className="form-control" 
                                                value={this.state.productDes} onChange={this.changeproductDesHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.save}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddStore