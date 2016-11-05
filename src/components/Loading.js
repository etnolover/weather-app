import React from 'react'
import '../styles/Loading.css'

class Loading extends React.Component {
  constructor(props) {
    super();
    this.originalText = props.text;
    this.state = {
      text: this.originalText
    }
  }

  componentDidMount() {
    const stopper = this.originalText + '...';
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h2 className="Loading__text">{this.state.text}</h2>
    );
  }
}

Loading.propTypes = {
  text: React.PropTypes.string,
  speed: React.PropTypes.number
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

export default Loading;