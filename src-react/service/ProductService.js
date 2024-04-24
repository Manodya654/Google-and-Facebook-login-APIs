import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/online"

class ProductService {

    //View product API which comes from Spring Boot
    viewStores(){
        console.log("All products can be retrieved by Service")
        return axios.get(API_BASE_URL + '/view')
    }
    
    //Search products by Keyword API which calls from Spring Boot 
    searchStore(keyword){
        console.log("Search product by Service")
        return axios.get(API_BASE_URL + '/key/' + keyword )
        //return axios.get(API_BASE_URL + '/search/?key=' + keyword)
    }

    // updateStore(keyword){
    //     console.log("Update product by Service")
    //     return axios.get(API_BASE_URL + '/key/' + keyword )
    //     //return axios.get(API_BASE_URL + '/search/?key=' + keyword)
    // }

    // deleteStore(keyword){
    //     console.log("Delete product by Service")
    //     return axios.get(API_BASE_URL + '/key/' + keyword )
    //     //return axios.get(API_BASE_URL + '/search/?key=' + keyword)
    // }
    
}

export default new ProductService();