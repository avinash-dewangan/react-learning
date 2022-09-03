import React, { Component } from 'react'

export default class Counter extends Component {
  
    constructor(){
        super();
        this.state={
            mountPhase:'',
        }
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.number !== this.props.number){
            this.setState({
                mountPhase:"componentDidUpdate"
            })
            console.info("componentDidUpdate : Component Updated")
        }
    }
    componentWillUnmount() {
        console.info("componentWillUnmount : The component named Counter is about to be unmounted.");
        this.setState({
            mountPhase:"componentWillUnmount"
        })
      }
    render() {
    return (
        <>
        <h1>Child Component Show Increment Number Class Based Component</h1>
        <hr/>
        <h2>Counter : {this.props.number}</h2>
        <h3>Mounting Phase : {this.state.mountPhase}</h3>
        </>
    )
  }
}
