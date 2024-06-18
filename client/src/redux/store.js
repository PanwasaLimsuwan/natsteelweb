// import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import orebiReducer from "./orebiSlice";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, orebiReducer);

// export const store = configureStore({
//   reducer: { orebiReducer: persistedReducer },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export let persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import orebiReducer from "./orebiSlice";

// ลบการนำเข้า redux-persist
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// ลบ persistConfig และ persistedReducer
// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, orebiReducer);

export const store = configureStore({
  // ใช้ orebiReducer โดยตรง
  reducer: { orebiReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// ลบ persistor
// export let persistor = persistStore(store);

export default store;
