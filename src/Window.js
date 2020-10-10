import React, { Component } from 'react'
import InputForm from './InputForm'
import Result from './Result'

class Window extends Component {

    state = {
        result: ''
    }

    getResult = (value) => {
        this.setState({result: value})
    }

    render() {
        return (
            <React.Fragment>
                <InputForm parentCallBack={this.getResult} />
                <Result value={this.state.result} />
            </React.Fragment>
        )
    }
}

export default Window