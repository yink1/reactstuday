
const Inputs = React.createClass({
	getDefaultProps(){
		return{
			group:'we'
		}
	},
	getInitialState(){
		return{
			age:23,
			valued:'sd',
			checkboxV:false,
			checkboxV2:false,
			radioV:false,
			checkboxValue:[],
			B:'be',
			C:'c'
		}
	},
	componentDidUpdate(){
		console.log('this.setState 会走update');
		
	},
	onChangeValue(e){
		/*this.setState({
			valued:e.target.value
		})*/
		this.state.valued=e.target.value//不走更新 最后一个input的value不会变
		this.forceUpdate();//强制刷新
		this.refs.localDom.focus();
	},
	changBoxV(e){
		this.setState({
			checkboxV :!this.state.checkboxV

		});
		//this.state.checkboxV === true ? this.state.checkboxValue.push(e.target.value):null
		
		console.log(e.target.value)
	},
	changBoxV2(e){
		this.setState({
			checkboxV2 :!this.state.checkboxV2

		});
		//this.state.checkboxV === true ? this.state.checkboxValue.push(e.target.value):null
		
		console.log(e.target.value)
	},
	save(e){
		/*const list = document.getElementsByName('sex');
		for (var i = 0; i < list.length; i++) {
			if(list[i].checked == true){
				this.state.checkboxValue.push(list[i].value);
				console.log(this.state.checkboxValue)
			}else{

			}
			
		};
		console.log(this.state.checkboxValue)*/
	},
	render(){
		return <form>
			<div onClick={this.onChangeValue}>123</div>
			<input /*ref={function(dom){dom.focus()}}*/ type="text" onChange={this.onChangeValue} placeholder='请输入'/>
			<input type="checkbox" value='ww' name="sex" checked={this.state.checkboxV} onChange={this.changBoxV}/>
			<input type="checkbox" value='ee' name="sex" checked={this.state.checkboxV2} onChange={this.changBoxV2}/>
			<input type="radio" name="ra" value='w'/>
			<input type="radio" name="ra" value='q'/>
			<input type="radio" name="ra" value='a'/>
			<input ref='localDom' type="text" value={this.state.valued}/>
			<select name="" id="" value='be'>
				<option value="a">a</option>
				<option value="be">b</option>
				<option value="c">c</option>
			</select>
			<select name="" id="" multiple value={['be','c']}>
				<option value="a">a</option>
				<option value="be">b</option>
				<option value="c">c</option>
			</select>
			<button onClick={this.save}>保存</button>
			</form>
	}
});

ReactDOM.render(
	<Inputs/>,document.getElementById('in')
	)