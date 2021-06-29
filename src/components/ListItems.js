import React, { Component } from "react";
import ItemService from "../services/ItemService";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {
    ItemService.getItems().then((res) => {
      this.setState({ items: res.data });
    });
  }

  addItem() {
    this.props.history.push("/addItem");
  }

  deleteItem(event) {
    //event.preventDefault();
    console.log(this.state.id);
    ItemService.deleteItem(this.state.id);
  }

  updateItem() {
    this.props.history.push("/updateItem");
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center homeBg">Items List</h2>
        <div>
          {/* <button className="btn btn-primary col-1" onClick={this.addItem}>
            Add Item
          </button>
        </div>
        <div>
          <button className="btn btn-primary col-1" onClick={this.updateItem}>
            Update Item
          </button> */}
        </div>
        <div>
          <p></p>
        </div>
        <div className="table-responsive ">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Id</th>
                <th scope="col">Item Name</th>
                <th scope="col">Item Price</th>
                <th scope="col">Item Description</th>
                <th scope="col">Item Category</th>
                <th scope="col">Item Duration</th>
              </tr>
            </thead>
            <tbody>
              {this.state.items.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>{item.description}</td>
                  <td>{item.category}</td>
                  <td>{item.duration} days</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p></p>

        <section className="container-fluid bg">
          <section className="row justify-content-center">
            <section className="col-12 col-sm-6 col-md-3">
              <form onSubmit={this.deleteItem} className="form-container">
                <div className="form-group">
                  <label>Enter Id to Delete Item</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.id}
                    onChange={this.handleChange}
                    name="id"
                  ></input>
                </div>

                <button type="submit" className="button btn btn-danger col-12">
                  Delete
                </button>
              </form>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default ListItems;
