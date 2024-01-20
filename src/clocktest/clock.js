import { Component } from 'react'
import './index.css'

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()

        }
        console.log("constractor")
    }
    componentDidMount() {
        this.timerId = setInterval(this.tick, 1000);
        console.log("didmount")
    }
    componentWillUnmount() {
        console.log("unmuont")
        clearInterval(this.timerId)
    }
    tick = () => {
        this.setState({ date: new Date() })
    }

    render() {
        const { date } = this.state
        console.log(date)
        return (
            <div className="clock-container">
                <h1 className="heading">Clock</h1>
                <p className='time'>{date.toLocaleDateString()}</p>
                <p className='time'>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
export default Clock