import React, {Component, component} from 'react'
import './Editor.css'
export default class Editor extends Component{
  constructor(props) {
    super(props);
    this.state = 
    {
      value: ''
    };

    this.change = this.change.bind(this);
  }

  change = (e)=> {
    this.setState({
      value : e.target.value
    })
  }

  render() {
    return(
    <>
    <header className="header">
      <h1>Note's App</h1>
    </header>

    <div className="body">
      <div className="type" onSubmit={this.submit}>

        <div className="box">
          <div className="write">
            Input
          </div>
        </div>

      </div>

      <div className="ca">
        <input className="int"onChange={this.change}/>
        <div className="note">
          Pro Note
        </div>
        <div className="imple">{this.state.value}</div>
      </div>
    </div>
    </>
    )
  }
}
