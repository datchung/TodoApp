import Immutable from 'immutable';

const Todo = Immutable.Record({
  id: '',
  isComplete: false,
  text: '',
});

export default Todo;