import Immutable from 'immutable';

const TodoRecord = Immutable.Record({
  id: '',
  isComplete: false,
  text: '',
  dateCreated: 0,
  dateModified: 0,
});

export default TodoRecord;