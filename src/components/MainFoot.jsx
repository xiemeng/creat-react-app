import React, { Component } from 'react';
import 'style/foot.less';
import { NavLink } from 'react-router-dom';

class Foot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };

    }
    componentDidMount() {  //挂载成功
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000)
    }
    componentWillUnmount() {  //卸载
        clearInterval(this.timerID)
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
        this.setState((prevState, props) => {
            return {
                date: new Date()
            }
        })
    }
    render() {
        return (
            <div>
                <footer id="foot" className="vue-1px-t">

                    <NavLink to="/Home">
                        首页
						</NavLink>


                    <NavLink to="/Invest">
                        投资
					  </NavLink>

                    <NavLink to="/Mine">
                        我的
					  </NavLink>

                </footer>

            </div>
        )
    }
}
export default Foot