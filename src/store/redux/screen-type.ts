import { createSlice } from "@reduxjs/toolkit"


const screenTypeSlice = createSlice({
    name: "screenTypeSlice",
    initialState: {
        isScreenTypeMultiCards: false
    },
    reducers: {
        setScreenTypeMultiCards: (state, action) => {
            state.isScreenTypeMultiCards = action.payload;
        }
    }
})

export const { setScreenTypeMultiCards } = screenTypeSlice.actions
export default screenTypeSlice.reducer