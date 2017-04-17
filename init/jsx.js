const Item = React.createClass({
	getDefaultProps(){
		console.log(0)
		return{
			age:'44'
		}
	},
	getInitialState(){
		console.log(1)
		return{
			named:'yi'
		}
	},
	render(){
		return <div>
			<div>{this.props.age}</div>
			<div>{this.state.named}</div>
		</div>
	}
});
ReactDOM.render(<div><Item/><Item/><Item/></div>,document.getElementById('ex'))
;