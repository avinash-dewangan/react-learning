import React, { Component } from "react";
import Counter from "./components/Counter";
import CounterFunCom from "./components/CounterFunCom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 3,
      show: true,
    };
  }

  componentDidMount() {
    console.info("componentDidMount : When Render first time");
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  delCounterComponent() {
    this.setState({
      show: false,
    });
  }

  render() {
    let counterCom;
    let counterFunCom;
    if (this.state.show) {
      counterCom = <Counter number={this.state.count}></Counter>;
    }
    if (this.state.show) {
      counterFunCom = <CounterFunCom number={this.state.count}></CounterFunCom>;
    }
    return (
      <>
        <h1>Parent Component</h1>
        <hr />
        <div class="container text-center">
          <div class="row">
            <div class="col">{counterCom}</div>
            <div class="col">{counterFunCom}</div>
          </div>
          <div class="row">
            <div class="col">
              {/* <Counter number={this.state.count}></Counter> */}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.increment.bind(this)}
              >
                Click Me Normal Bind Fun Call
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.increment();
                }}
              >
                Click Me Via Arrow Function Call
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.delCounterComponent.bind(this)}
              >
                Delete Counter Component
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
