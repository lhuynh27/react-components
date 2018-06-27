class GListItem extends React.Component {
	constructor(props) {
		super(props); //taking from React.Component; GListItem is subclass of it
		this.state = {
			done: false
		};
	}

	onListItemHover() {
		this.setState({
			done: !this.state.done
		});
	}

	offListItemHover() {
		this.setState({
			done: !this.state.done
		});
	}

	render () {
		//ASK ABOUT SNAKE-CASE
		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		};

		return (
			<li style={style} onMouseEnter={this.onListItemHover.bind(this)} onMouseLeave={this.offListItemHover.bind(this)}> {this.props.groceryItems}</li>
		);
	}
}

var GroceryListItem = (props) => {
	return( 	//with curly brackets, it will render itself with return()
		<ul>
			{props.groceryItems.map(groceryItems =>
				<GListItem groceryItems={groceryItems} />
			)}
		</ul>
	)		
};

var GroceryList = () => (
	<div>
		<h2>Grocery List</h2>
		<GroceryListItem groceryItems={['Cheese', 'Wine']}/>
	</div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));

