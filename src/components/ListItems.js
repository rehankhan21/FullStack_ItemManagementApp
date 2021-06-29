import React, {Component } from 'react';
import ItemService from '../services/ItemService';

class ListItems extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id: "",
            items: []
        }
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.handleChange=this.handleChange.bind(this)
        this.updateItem= this.updateItem.bind(this)
    }

    componentDidMount(){
        ItemService.getItems().then((res) => {
            this.setState({items:res.data});
        })
    }

    addItem()
    {
        //this.props.history.push('/add-item');
        this.props.history.push('/addItem')
    }

    deleteItem(event)
    {
        //event.preventDefault();
        console.log(this.state.id)
        ItemService.deleteItem(this.state.id);
    }

    updateItem()
    {
        this.props.history.push('/updateItem')
    }

    handleChange(event)
    {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Items List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addItem}>Add Item</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.updateItem}>Update Item</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Item Id</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Description</th>
                                <th>Item Category</th>
                                <th>Item Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>$ {item.price}</td>
                                        <td>{item.description}</td>
                                        <td>{item.category}</td>
                                        <td>{item.duration} days</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <p></p>
                <form onSubmit={this.deleteItem}>

                    <label>Id for Item to Delete</label>
                    <input type="text" value={this.state.id} onChange={this.handleChange} name="id"></input>

                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default ListItems;