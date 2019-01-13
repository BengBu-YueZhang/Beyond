import * as React from 'react';
import ReactAnimate from './components/Animate';

const Animate = ReactAnimate.Animate

class App extends React.Component {

  public state = {
    animate: true
  }

  public handleClick = () => {
    const prevAnimate = this.state.animate
    this.setState({
      animate: !prevAnimate
    })
  }

  public render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>button</button>
        <Animate animate={this.state.animate} keep={true}>
          <div>123</div>
        </Animate>
      </div>
    );
  }
}

export default App;
