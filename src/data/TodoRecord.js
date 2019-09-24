import Immutable from 'immutable';

const TodoRecord = Immutable.Record({
  id: '',
  isComplete: false,
  text: '',
});

export default TodoRecord;