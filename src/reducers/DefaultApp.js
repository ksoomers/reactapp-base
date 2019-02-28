// Define the initial state
const initialState = {
  cover: 'https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274',
  title: 'React.js for the Visual Learner',
  author: 'Mike Mangialardi',
  link: 'https://leanpub.com/reactjsforthevisuallearner',
};

// define a reducer with an initialized state action
function DefaultApp(state = initialState, action) {
  // eventually adding logic to handle create, update, and delete
  const selectedObject = Object.assign({}, state);
  switch (action.type) {
    case 'ADD':
      selectedObject.books.push(selectedObject.books.length);
      return selectedObject;
    case 'DELETE':
      selectedObject.books.pop();
      return selectedObject;
    default:
      return state;
  }
}

export default DefaultApp;
