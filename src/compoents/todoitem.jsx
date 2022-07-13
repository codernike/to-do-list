import React, {Component} from "react";

class TodoItems extends Component {
	constructor(props){
		super(props);
		this.createTasks = this.createTasks.bind(this);
	}
	createTasks(item){
		return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
	}
	delete(key){
		this.props.delete(key);
	}
	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return(
     
			<ol className="theList  mt-3 bg-gradient form-control ">
                <li className="mb-2 w-100 bg-danger text-white">to-do-list</li>
				{listItems} 
			</ol>
		);
	}
};

export default TodoItems;