import React, { Component } from 'react'

class InputForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            value: 0,
            convert: 'Kilos to Pounds'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDropdown = this.handleDropdown.bind(this)
    }

    convertValue(value, convert) {
        switch(convert) {
            case 'Kilos to Pounds':
                return (value * 2.20462262185).toFixed(3) + ' lbs.'
            case 'Celsius to Fahrenheit':
                return (value * 9 / 5 + 32) + ' degrees.'
            case 'Kilometers to Miles':
                return (value * 0.62137).toFixed(2) + ' miles.'
            default:
                return ''
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleDropdown(e) {
        this.setState({convert: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        
        let val = (!isNaN(this.state.value)) ? this.convertValue(this.state.value, this.state.convert) : 'You must enter a number'
        this.props.parentCallBack(val)
    }

    render() {
        const options = ['Kilos to Pounds', 'Celsius to Fahrenheit', 'Kilometers to Miles']

        return (
            <form onSubmit={this.handleSubmit}>
                <select onChange={this.handleDropdown} placeholder="Choose">
                    {options.map((label, index) => {
                        return <option key={index} value={label}>{label}</option>
                    })}
                </select>
                <input type="float" onChange={this.handleChange} value={this.state.value} placeholder="Enter the value" /><br/>
                <button type="submit">Convert</button>
            </form>
        )
    }
}

export default InputForm