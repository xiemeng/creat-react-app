import React, { Component } from 'react';
import 'style/model.less';

class Clock extends Component {
	constructor(props){    
		super(props);      
		this.state = {  
            date:new Date()
        };   
        
	}
    componentDidMount(){  //挂载成功
        this.timerID = setInterval(()=>{    
            this.tick()
        },1000)
    }
    componentWillUnmount(){  //卸载
        clearInterval(this.timerID)
    }
    tick = ()=>{      
        this.setState({    
            date:new Date()
        })
        this.setState((prevState,props)=>{   
            return {
                date:new Date()
            }
        })
    }
	render(){     
		return(
			<div>
				<h1>hello,world!</h1>
				<h2>it is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
    }
}
export default Clock