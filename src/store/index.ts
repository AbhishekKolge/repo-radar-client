import { configureStore } from '@reduxjs/toolkit';
import { apiSlice, graphqlApiSlice } from '@/api';
import { authReducer } from '@/modules/auth/service';
import { isProduction } from '@/shared/utils/environment';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [graphqlApiSlice.reducerPath]: graphqlApiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware, graphqlApiSlice.middleware);
  },
  devTools: !isProduction,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
