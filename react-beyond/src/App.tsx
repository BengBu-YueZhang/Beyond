import * as React from 'react';
import RowCol from './components/RowCol'
// import ReactAnimate from './components/Animate';

// const Animate = ReactAnimate.Animate
// const AnimateGroup = ReactAnimate.AnimateGroup
// const AnimateGroups = ReactAnimate.AnimateGroups

// const Col = RowCol.Col
const Row = RowCol.Row

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <Row/>
      </div>
    );
  }
}

export default App;
