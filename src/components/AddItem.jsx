import React, {Component} from 'react';
import ItemService from '../services/ItemService';

class AddItem extends Component {
    constructor(props){

        super(props)
        this.state = {
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
            name: this.state.name,
            price: this.state.price,
            descripion: this.state.descripion,
            category: this.state.category,
            duration: this.state.duration
        }

        ItemService.addItem(item);
        console.log(item)

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
            <form onSubmit={this.handleSubmit}>
            <label>Item Name</label>
            <input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input>

            <label>Item Price</label>
            <input type="text" value={this.state.price} onChange={this.handleChange} name="price"></input>

            <label>Item Description</label>
            <input type="text" value={this.state.description} onChange={this.handleChange} name="description"></input>

            <label>Item Category</label>
            <input type="text" value={this.state.category} onChange={this.handleChange} name="category"></input>

            <label>Item Duration</label>
            <input type="text" value={this.state.duration} onChange={this.handleChange} name="duration"></input>

            <button type="submit">submit</button>
        </form>
        )
    }
}

export default AddItem;