/*
* @Author: yizeqing
* @Date:   2017-04-15 13:47:13
* @Last Modified by:   yizeqing
* @Last Modified time: 2017-04-15 14:09:19
*/

'use strict';
const Key = React.createClass({
	getDefault(){
		return{

		}
	},
	getInitialState(){
		return{
			top:0,
			left:0
		}
	},
	changeDir(e){
		switch(e.keyCode){
			case 37:this.setState({
				left:this.state.left-5
			})
			break;
			case 38:this.setState({
				top:this.state.top-5
			})
			break;
			case 39:this.setState({
				left:this.state.left+5
			})
			break;
			case 40:this.setState({
				top:this.state.top+5
			})
			break;
		}
	},
	render(){
		return <div  style={{margin:'100px auto',position:'relative',width:'200px',height:'200px',background:'yellow'}} tabIndex={1} onKeyUp={this.changeDir}>
		<div style={{top:this.state.top,left:this.state.left,position:'absolute',width:'40px',height:'40px',background:'red'}}></div>
		</div>
	}
});
ReactDOM.render(
	<Key/>,document.getElementById('key')
	)