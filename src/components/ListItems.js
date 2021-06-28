import React, {Component } from 'react';
import ItemService from '../services/ItemService';

class ListItems extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            items: []
        }
        this.addItem=this.addItem.bind(this);
    }

    componentDidMount(){
        ItemService.getItems().then((res) => {
            this.setState({items:res.data});
        })
    }

    addItem()
    {
        this.props.history.push('/add-item');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Items List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addItem}>Add Item</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thread>
                            <tr>
                                <th>Item Id</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Item Description</th>
                                <th>Item Category</th>
                                <th>Item Duration</th>
                            </tr>
                        </thread>
                    </table>
                </div>
            </div>
        )
    }
}