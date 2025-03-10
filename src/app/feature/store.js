const { configureStore } = require("@reduxjs/toolkit");
import userReducer from "./slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
      },
})