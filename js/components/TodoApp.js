import React,{Component} from 'react';
import Relay from 'react-relay';

class TodoApp extends Component{
  render(){
    return(
      <div>hello</div>
    )
 }
}

export default Relay.createContainer(TodoApp,{
  fragments : {
    viewer : () => Relay.QL`
      fragment on User{
        totalCount
      }
    `
  }
})
