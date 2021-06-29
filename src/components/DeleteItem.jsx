import React, {Component} from 'react';
import ItemService from '../services/ItemService';

class DeleteItem extends Component {
    constructor(props){

        super(props)
        this.state = {
            id: 0,
            name: "",
            price: "",
            description: "",
            category: "",
            duration: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        event.preventDefault();

        let item = {
            name: this.name,
            price: this.price,
            descripion: this.descripion,
            category: this.category,
            duration: this.duration
        }

        ItemService.deleteItem(this.state.id)
        console.log(this.state.id)
        //ItemService.deleteItem()

        //console.log(this.state)
    }

    handleChange(event) {

        const {name, value} = event.target
        this.setState({
            [name] : value
        })


    }

    render() {

        return(
        <div>
        <form onSubmit={this.handleSubmit}>

            <label>Id for Item to Delete</label>
            <input type="text" value={this.state.id} onChange={this.handleChange} name="id"></input>

            <button type="submit">submit</button>
        </form>
        </div>
        )
    }
}

export default DeleteItem;