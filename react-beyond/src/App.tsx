import * as React from 'react';
import Select from './components/Select'

// import RowCol from './components/RowCol'
// const Col = RowCol.Col
// const Row = RowCol.Row

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        {/* <Row gutter={20}>
          <Col span={1}>1</Col>
          <Col span={2}>1</Col>
        </Row> */}
        <Select/>
      </div>
    );
  }
}

export default App;
