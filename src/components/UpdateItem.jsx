import React, {Component} from 'react';
import ItemService from '../services/ItemService';

class DeleteItem extends Component {
    constructor(props){

        super(props)
        this.state = {
            id: "",
            name: "",
            price: "",
            description: "",
            category: "",
            duration: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(event){

        event.preventDefault()

        let item = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            category: this.state.category,
            duration: this.state.duration
        }

        ItemService.updateItem(this.state.id, item);

        this.props.history.push('/')
    }

    handleChange(event) {

        const {name, value} = event.target
        this.setState({
            [name] : value
        })

    }

    render() {

        return(
            <section className="container-fluid bg">
                <section className="row justify-content-center">
                    <section className="col-12 col-sm-6 col-md-3">
                        <h1 className="form-h1">Update Item</h1>
                    <form onSubmit={this.handleUpdate} className="form-container">
                            <div className="form-group">
                                <label>Item Id</label>
                                <input className="form-control" type="text" value={this.state.id} onChange={this.handleChange} name="id"></input>
                            </div>
                            <div className="form-group">
                                <label>Item Name</label>
                                <input className="form-control" type="text" value={this.state.name} onChange={this.handleChange} name="name"></input>
                            </div>
                            <div className="form-group">
                                <label>Item Price</label>
                                <input className="form-control" type="text" value={this.state.price} onChange={this.handleChange} name="price"></input>
                            </div>
                            <div className="form-group">
                                <label>Item Description</label>
                                <input className="form-control" type="text" value={this.state.description} onChange={this.handleChange} name="description"></input>
                            </div>
                            <div className="form-group">
                                <label>Item Category</label>
                                <input className="form-control" type="text" value={this.state.category} onChange={this.handleChange} name="category"></input>
                            </div>
                            <div className="form-group">
                                <label>Item Duration</label>
                                <input className="form-control" type="text" value={this.state.duration} onChange={this.handleChange} name="duration"></input>
                            </div>

                        <button type="submit" className="button btn btn-primary col-12">submit</button>
                    </form>
                    </section>
                </section>
            </section>
        )
    }
}

export default DeleteItem;