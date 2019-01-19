import * as React from 'react';
import Cascader from './components/Cascader'

const region = [
  {
    label: '安徽',
    value: '安徽',
    children: [
      {
        label: '蚌埠',
        value: '蚌埠',
        children: [
          {
            label: '龙子湖区',
            value: '龙子湖区'
          },
          {
            label: '淮上区',
            value: '淮上区'
          }
        ]
      },

    ]
  },
  {
    label: '北京',
    value: '北京',
    children: [
      {
        label: '顺义区',
        value: '顺义区'
      }
    ]
  },
  {
    label: '深圳',
    value: '深圳',
    children: [
      {
        label: '罗湖区',
        value: '罗湖区'
      }
    ]
  }
]

class App extends React.Component {

  public render() {
    return (
      <div className="App">
        <Cascader
          options={region}
        />
      </div>
    );
  }
}

export default App;
