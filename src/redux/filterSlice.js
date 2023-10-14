const { createSlice } = require("@reduxjs/toolkit");


const initialStateFilter = { filter: '' };

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialStateFilter,
    reducers:{
        setFilter(state, action){
            state.filter = action.payload;
        }
    }
})

export const filtersReducer = filterSlice.reducer;
export const {setFilter} = filterSlice.actions;