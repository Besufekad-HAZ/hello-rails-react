import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'http://127.0.0.1:3000/api/v1/random_greeting';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Failed to fetch random greeting');
    }
    const data = await response.json();
    console.log(data.content);
    return data.content;
  },
);

const initialState = {
  greeting: '',
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
    builder.addCase(getRandomGreeting.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default greetingsSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const URL = 'http://127.0.0.1:3000/api/v1/random_greeting';

// const initialState = {
//   greeting: '',
//   error: null,
// }

// export const getGreetings = createAsyncThunk('greetings/getGreetings', async () => {
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error('Failed to fetch random greeting');
//     }
//     const data = await response.json();
//     console.log(data.greeting);
//     return data.greeting;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// });

// const greetingsSlice = createSlice({
//   name: 'greetings',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getGreetings.fulfilled, (state, action) => {
//       state.greeting = action.payload;
//     });
//     builder.addCase(getGreetings.rejected, (state, action) => {
//       state.error = action.error.message;
//     });
//   },
// });

// export default greetingsSlice.reducer;
