import { configureStore } from '@reduxjs/toolkit'
import gameDataSliceReducer from './Data/gameDataSlice'
// ...

export const store = configureStore({
  reducer: {
    gameState: gameDataSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch