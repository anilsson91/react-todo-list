import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {

        const {items, handleRemoveAll, handleDelete, handleEdit} = this.props;

        return (
            <div >

                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">todo list</h3>

                    {
                        items.map(item=> {
                            return(
                                <TodoItem
                                    key={item.id}
                                    title={item.title}
                                    handleDelete={()=>handleDelete(item.id)}
                                    handleEdit={()=>handleEdit(item.id)}
                                    />
                            )
                        })
                    }

                    <button
                        type="buton"
                        className="btn btn-danger btn-block text-capitalize mt-5"
                        onClick={handleRemoveAll}>clear list</button>
                </ul>

            </div>
        );
    }
}

export default TodoList;
