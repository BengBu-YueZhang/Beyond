import * as React from 'react';
// import Cascader from './components/Cascader'
import TextField from './components/TextField'

// const region = [
//   {
//     label: '安徽',
//     value: '安徽',
//     children: [
//       {
//         label: '蚌埠',
//         value: '蚌埠',
//         children: [
//           {
//             label: '龙子湖区',
//             value: '龙子湖区'
//           },
//           {
//             label: '淮上区',
//             value: '淮上区'
//           }
//         ]
//       },

//     ]
//   },
//   {
//     label: '北京',
//     value: '北京',
//     children: [
//       {
//         label: '顺义区',
//         value: '顺义区'
//       }
//     ]
//   },
//   {
//     label: '深圳',
//     value: '深圳',
//     children: [
//       {
//         label: '罗湖区',
//         value: '罗湖区'
//       }
//     ]
//   }
// ]

interface InterfaceAppState {
  cascaderValue: string[]
}

class App extends React.Component<any, InterfaceAppState> {

  constructor (props: any) {
    super(props)
    this.state = {
      cascaderValue: []
    }
  }

  public handleCascaderChange = (value: string[]) => {
    this.setState({
      cascaderValue: value
    })
  }

  public render() {
    // const { cascaderValue } = this.state
    return (
      <div className="App">
        <TextField
          label={'Name'}
          error={true}
        />
        {/* <Cascader
          value={cascaderValue}
          onChange={this.handleCascaderChange}
          options={region}
        /> */}
      </div>
    );
  }
}

export default App;
