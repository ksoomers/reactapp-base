// Define the initial state
const initialState = {
    cover: "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
    title: "React.js for the Visual Learner",
    author: "Mike Mangialardi",
    link: "https://leanpub.com/reactjsforthevisuallearner"
};

//define a reducer with an initialized state action
function DefaultApp(state = initialState, action) {
    //eventually adding logic to handle create, update, and delete
    switch(action.type) {
        case 'ADD':
            let incremented = Object.assign({}, state);
            incremented.books.push(incremented.books.length);
            return incremented;
        case 'DELETE':
            let decremented = Object.assign({}, state);
            decremented.books.pop();
            return decremented;
        default:
            return state
    }
}

export default DefaultApp
