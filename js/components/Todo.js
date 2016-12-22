import React,{Component} from 'react'
import Relay from 'react-relay'

class Todo extends Component{
  render(){
    const {todo} = this.props
    const {text} = todo
    return(
      <div>{text}</div>
    )
  }
}

export default Relay.createContainer(Todo,{
  fragments: {
    todo: () => Relay.QL`
      fragment on Todo{
          text
          complete
      }
    `
  }
})
