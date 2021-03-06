const Item = React.createClass({
	getDefaultProps(){
		return{
			age:'44'
			//建立组件时readonly 只初始化一次
		}
	},
	getInitialState(){
		return{
			named:'yi'
			//建立组件时通过构造函数实现的 new Item
		}
	},
	componentWillMount(){
		this.props.age='3'
		console.log('componentWillMount,props可修改一次')
	},
	componentDidMount(){
		this.props.age='3333'
		this.state.named='32'
		console.log('componentDidMount，props无法修改,对DOM进行操作,属性类无法操作,/操作对象：ajax  DOM  DATA  别的 库 框架/')
		const dom = ReactDOM.findDOMNode(this);
		let yellow = false;
		setInterval(function(){
			if(yellow){
				dom.style.background='red';
				yellow = false;
			}else{
				dom.style.background='yellow';
				yellow=true;
			}
		}, 1000);
		const de = document.getElementById('example');
		de.onmouseover=function(){
			this.style.background='green'
		}
		de.onmouseleave=function(){
			this.style.background='#fff'
		}
	},
	render(){
		console.log('render')
		return <div>
			<div>{this.props.age}</div>
			<div>{this.state.named}</div>
		</div>
	}
});
ReactDOM.render(<div><Item/></div>,document.getElementById('ex'))
;