import React, { Component } from 'react';

class TeaDisplay extends Component {
  constructor() {
    super();
    this.state = {
      teaName: null,
      teaImg: null,
      teaDesc: null
    };
  }

  componentDidMount() {
    const name = this.props.name;
    const img = this.props.img;
    const desc = this.props.desc;
    this.setState({ teaName: name });
    this.setState({ teaImg: img });
    this.setState({ teaDesc: desc });
  }

  render() {
    return (
      <div className="center">
        <h3>Displaying information for {this.state.teaName}:</h3>
        <img src={this.state.teaImg} width="75%" height="400px" background-size="cover" alt={this.state.teaName} />
        <p>{this.state.teaDesc}:</p>
        <a href="http://theteaspot.com/about-tea.html" target="_blank" rel="noopener noreferrer">A little more about these teas</a>
      </div>
    );
  }

}

export default TeaDisplay;