import React,{Component} from 'react';
import Relay from 'react-relay';

class TodoApp extends Component{
  render(){
    return(
      this.props.children
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
