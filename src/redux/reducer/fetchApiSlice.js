import { createSlice } from "@reduxjs/toolkit";

const apiFetchSLice = createSlice({
    name: "fetch",
    initialState: {
        loading: false,
        error: null,
        data: null
    },
    reducers: {
        getApiStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        getApiSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getApiFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getApiUpdate: (state, action) => {
            state.data = { ...state.data, title: action.payload };
        },
    }
})
export const { getApiStart, getApiSuccess, getApiFail, getApiUpdate } = apiFetchSLice.actions;


export const fetchData = () => async (dispatch) => {
    dispatch(getApiStart());
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        dispatch(getApiSuccess(data))
    } catch (error) {
        dispatch(getApiFail(error.message))
    } finally {

    }
}

export default apiFetchSLice.reducer;