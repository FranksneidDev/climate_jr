import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "./Reducers/RootReducer.tsx";


export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    }),
    reducer: RootReducer
});
export type AdminState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;