import axios from 'axios'
import React, {Component } from 'react';

const ITEM_API_BASE_URL = "http://localhost:8081/api/allitems";
const ITEM_API_ADD_URL = "http://localhost:8081/api/additem";
const ITEM_API_DELETE_URL = "http://localhost:8081/api/item/";
const ITEM_API_UPDATE_URL = "http://localhost:8081/api/item/"
class ItemService extends Component{

    getItems(){
        return axios.get(ITEM_API_BASE_URL);
    }

    addItem(item){
        axios.post(ITEM_API_ADD_URL, item);
        console.log(item)
    }

    updateItem(id, item){
        axios.put(ITEM_API_UPDATE_URL + id, item);
    }

    deleteItem(id){
        console.log(id)
        axios.delete(ITEM_API_DELETE_URL + id)
            .then(() => {
                console.log("Item with id: " + id + " has been deleted")
            });
    }
}

export default new ItemService();