import * as React from 'react';
import ReactAnimate from './components/Animate';

const Animate = ReactAnimate.Animate
const AnimateGroup = ReactAnimate.AnimateGroup
// const AnimateGroups = ReactAnimate.AnimateGroups

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
        <Animate animate={this.state.animate}>
          <div>123</div>
        </Animate>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <AnimateGroup animate={this.state.animate}>
          <div>123</div>
          <div>123</div>
          <div>123</div>
        </AnimateGroup>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        {/* <AnimateGroups animate={this.state.animate} interval={400}>
          <AnimateGroup>
            <div>456</div>
            <div>456</div>
            <div>456</div>
          </AnimateGroup>
          <AnimateGroup>
            <div>789</div>
            <div>789</div>
            <div>789</div>
          </AnimateGroup>
        </AnimateGroups> */}
      </div>
    );
  }
}

export default App;
