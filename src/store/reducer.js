const initialState = {
    one: 1
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        return {
            one: state.one + 1
        }
    }
    return state;
};

export default reducer; 