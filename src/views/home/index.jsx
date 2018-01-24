import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import 'style/model.less';
import MainFoot from '@/components/MainFoot.jsx';
import {userAddrList} from '@/api/address.js';
import { Button} from 'antd-mobile';


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
        userAddrList().then((res)=>{
        	
        	if(res.code == 1000){
        		
        	}
        })
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
				<h1>首页</h1>
				<h2>it is {this.state.date.toLocaleTimeString()}.</h2>
                <Button type="primary">default</Button>
				<Link 
                        to={{
                            pathname: '/Mine',
                            search: 'sort=name&zer=23',
                            state: { fromDashboard: 12 }
                        }}
                        >进入我的页面</Link><br/>
                <Link 
                        to={{
                            pathname: '/Invest',
                            search: 'sort=name&zer=23',
                            state: { fromDashboard: 12 }
                        }}
                        >进入投资页面</Link>
                <MainFoot title="Home"/>
			</div>
		)
    }
}
export default connect(
    (state)=>{
        return {
            inputVal: state.inputVal,
            CHANGE_CHICSHI:state.CHANGE_CHICSHI,
        }
    }
)(Clock)