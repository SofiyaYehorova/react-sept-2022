import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentsService} from "../../services";

const initialState = {
    comments: [],
    errors: null,
    loading: null,
    selectedComment: null
};

const getAll = createAsyncThunk(
    'commentSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await commentsService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'commentSlice/getById',
    async ({id}, {rejectWithValue, dispatch, getState}) => {
        try {
            const {data} = await commentsService.getById(id);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setSelectedComment: (state, action) => {
            state.selectedComment = action.payload
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.comments = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.selectedComment = action.payload
            })

});

const {reducer: commentReducer, actions: {setSelectedComment}} = commentSlice;

const commentActions = {
    setSelectedComment,
    getAll,
    getById

};

export {
    commentReducer,
    commentActions,
    commentSlice
}
