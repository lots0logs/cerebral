import submitTodo from './chains/submitTodo'
import changeTitle from './chains/changeTitle'

export default (options = {}) => {
  return (module) => {
    module.addState({
      title: '',
      isSaving: false
    })

    module.addSignals({
      titleChanged: {
        chain: changeTitle,
        immediate: true
      },
      submitted: submitTodo
    })
  }
}
