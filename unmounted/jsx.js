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
	componentWillMount(){//主要是更改初始化里的值
		this.props.age='3';
		this.state.named='wr'
		console.log('componentWillMount,props可修改一次')
	},
	componentDidMount(){
		//this.props.age='3333'
		//this.state.named='32'
		console.log('componentDidMount，props无法修改,对DOM进行操作,属性类无法操作,/操作对象：ajax  DOM  DATA  别的 库 框架/')
		const dom = ReactDOM.findDOMNode(this);
		let yellow = false;
		this.state.loop = setInterval(function(){
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
	componentWillReceiveProps(nextprops){
		console.log('在本地不会执行，作为别的组件时会执行')
	},
	shouldComponentUpdate(nextProps,nextState){
		
		
		console.log('强制更新forceUpdate时不会执行,false时 update里的setState不会执行');
		return false
	},
	componentWillUpdate(nestProps,nextState){
		console.log('willupdate')
	},
	componentDidUpdate(oldProps,oldState){
		console.log('didupdate');
		const dom = ReactDOM.findDOMNode(this);
		dom.style.border='2px solid #000'
	},
	componentWillUnmount(){
		console.log(9)
		clearInterval(this.state.loop)
	},
	update(){
		this.setState({named:'zongyoudiaomin'})//会重新运行componentDidUpdate里的内容
		//this.forceUpdate();//强制刷新
	},
	render(){
		console.log('render')
		return <div>
			<div>{this.props.age}</div>
			<div>{this.state.named}</div>
			<button onClick={this.update}>点击</button>
		</div>
	}
});

	ReactDOM.render(<div><Item/></div>,document.getElementById('ex'));



