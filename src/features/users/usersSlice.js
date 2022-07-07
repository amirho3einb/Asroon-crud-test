import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AddUsersService } from "../../services/AddUsers";
import { deleteUserService } from "../../services/deleteUser";
import { editUserService } from "../../services/EditUser";
import { getAllUsersService } from "../../services/getAllUsers";

export const getAsyncUsers = createAsyncThunk(
  "users/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllUsersService();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAsyncUsers = createAsyncThunk(
  "users/addAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await AddUsersService(payload);
      return response;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
export const editAsyncUsers = createAsyncThunk(
  "users/editAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await editUserService(payload.id, payload.userData);
      return response;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);
export const deleteAsyncUsers = createAsyncThunk(
  "users/deleteAsyncUsers",
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const response = await deleteUserService(payload.id);
      return payload.id;
    } catch (error) {
      return rejectWithValue([], error.message);
    }
  }
);

const initialState = {
  users: [],
  error: null,
  loading: false,
};
const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAsyncUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        users: action.payload.data,
        loading: false,
        error: null,
      };
    },
    [getAsyncUsers.pending]: (state, action) => {
      return { ...state, users: [], loading: true, error: null };
    },
    [getAsyncUsers.rejected]: (state, action) => {
      return {
        ...state,
        users: [],
        loading: false,
        error: action.payload.message,
      };
    },
    [deleteAsyncUsers.fulfilled]: (state, action) => {
      state.users = state.users.filter((t) => t.id !== action.payload);
    },
    [addAsyncUsers.fulfilled]: (state, action) => {
      state.users.push(action.payload.data);
    },
    [editAsyncUsers.fulfilled]: (state, action) => {
      console.log(action);
      let selectedUser = state.users.find(
        (u) => u.id === action.payload.data.id
      );
      selectedUser.firstName = action.payload.data.firstName;
      selectedUser.lastName = action.payload.data.lastName;
      selectedUser.mobile = action.payload.data.mobile;
      selectedUser.email = action.payload.data.email;
      selectedUser.age = action.payload.data.age;
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
