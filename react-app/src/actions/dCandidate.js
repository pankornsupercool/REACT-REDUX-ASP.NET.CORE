export const ACTION_TYPES ={
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}
// import to reducers.


export const fetchAll = () => dispatch => {
    // get  api req 
    dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: []
    })
}