import {createSlice} from '@reduxjs/toolkit'
import { calculateWorldArray } from './calculationUtils';
import { jsonFullDetail } from '../data/jsonFullDetail';

// default value for the global store
const initialObj={
    value:5,
    jsonData:[],
    // worldArray:[]
};

// create reducer and actions using createSlice method
const counterSlice = createSlice({
    name: 'worldData',
    initialState: initialObj,
    reducers: {
      updateData(state, action){
        state.jsonData = action.payload
        state.worldArray = calculateWorldArray(state.jsonData)
        state.jsonFreq = jsonFullDetail(state.jsonData)
      },
    },
})

export default counterSlice