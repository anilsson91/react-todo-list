import React, {Component} from 'react';
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from 'uuid';


class Todo extends Component {

    state = {
        items: [],
        id: uuid(),
        item: '',
        editItem: false
    };

    handleChange = (e) => {
        this.setState({
            item:e.target.value
        })
    };


    handleSubmit = (e) => {
        e.preventDefault();


        const newItem = {
            id: this.state.id,
            title: this.state.item
        };
        const updateItems = [...this.state.items, newItem];

        this.setState({
            items: updateItems,
            item: '',
            id: uuid(),
            editItem: false
        })
    };

    handleRemoveAll = (e) => {
        const updatedItems = [];
        this.setState({
            items: updatedItems
        })

    };

    handleDelete = (id) => {
        const filterdItems = this.state.items.filter(item =>
        item.id !==id);

        this.setState({
            items: filterdItems
        })
    };

    handleEdit = (id) => {
        const filterdItems = this.state.items.filter(item =>
            item.id !==id);

        const selectedItem = this.state.items.find(item=> item.id===id);

        console.log(selectedItem);

        this.setState({
            items: filterdItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        })



    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center">todo input</h3>
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit = {this.handleSubmit}
                            editItem = {this.state.editItem}/>
                        <TodoList
                            items={this.state.items}
                            handleRemoveAll={this.handleRemoveAll}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            />
                    </div>
                </div>

            </div>
        );
    }
}

export default Todo;
