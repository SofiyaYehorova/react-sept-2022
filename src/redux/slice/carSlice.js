import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carsService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carsService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const create = createAsyncThunk(
    'carSlice/create',
    async ({car}, thunkAPI) => {
        try {
            await carsService.create(car);
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, thunkAPI) => {
        try {
            await carsService.deleteById(id)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, thunkAPI) => {
        try {
            await carsService.updateById(id, car)
            thunkAPI.dispatch(getAll())
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
                state.loading = false
            })
            .addDefaultCase((state, action) => {
                const [actionStatus] = action.type.split('/').splice(-1);
                state.loading = actionStatus === 'pending';
            })
});

const {reducer: carReduces, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteById,
    setCarForUpdate,
    updateById
}

export {
    carReduces,
    carActions
}