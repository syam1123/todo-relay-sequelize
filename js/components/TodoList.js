import React,{Component} from 'react'
import Relay from 'react-relay'
import Todo from './Todo'

class TodoList extends Component{

  getTodos(){
    return this.props.viewer.todos.edges.map((todo,index)=>{
      const _todo = todo.node
      return (

          <Todo todo={_todo} key={index}/>
        )
    })

  }

  render(){
    const todos = this.getTodos()
    return(
      <div>
        {this.getTodos()}
      </div>
    )
  }
}

export default Relay.createContainer(TodoList,{
  initialVariables: {
      status : null,
  },

  prepareVariables(obj){
    const {status} = obj
    let nextStatus = null
    if(status == 'completed' || status == 'pending'){
        nextStatus = status
    }
    else{
        nextStatus = 'any'
    }

    return {
      status : nextStatus
    }
  },

  fragments : {
    viewer : () => Relay.QL`
      fragment on User{
        todos(status:$status,first:10){
          edges{
            node{
              ${Todo.getFragment('todo')}
            }
          }
        }
      }
    `
  }
})
