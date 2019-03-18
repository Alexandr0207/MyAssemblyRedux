export default function input(state = '', action){
  switch(action.type){
    case 'input':
    return action.payload;
    default: 
      return state;
  }
}