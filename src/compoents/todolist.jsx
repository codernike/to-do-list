import React, {Component} from "react";
import TodoItems from "./todoitem";

class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {items: []};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e){
		if(this._inputElement.value !== ""){
			var newItem = {
				text: this._inputElement.value, 
				key: Date.now()
			};
	
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		
			this._inputElement.value = "";
		}
		console.log(this.state.items);
		e.preventDefault();
	}
	deleteItem(key){
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});
		
		this.setState({
			items: filteredItems
		});
	}
	render(){
		return(
            <>
		<center>

            	<div style={{marginTop:'150px',maxWidth:'350px',minWidth:'300px'}} className="todoListMain">
                    <div className="fw-4 mb-4">Enter your tasks in input box</div>
			  <div className="header">
			    <form onSubmit={this.addItem}>
			      <input className="form-control " ref={(a) => this._inputElement = a} placeholder="Enter task">
			      </input>
			      <button type="submit" className="btn btn-outline-primary mt-4 w-75">add</button>
			    </form>
			    <TodoItems entries={this.state.items} delete={this.deleteItem} />
			  </div>
		        </div></center></>
		);
	}
}

export default TodoList; 