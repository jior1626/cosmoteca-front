import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface LoadingState {
    isLoading: boolean;
    error: string
}

export const initialState: LoadingState = {
    isLoading: false,
    error: ""
}

const LoadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        setLoading: (state: LoadingState, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload;
        },
        setLoadingError: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = payload;
        }
    }
})

export const { setLoading, setLoadingError } = LoadingSlice.actions

export const loadingSelector = (state: RootState) => state.loading

export default LoadingSlice.reducer;