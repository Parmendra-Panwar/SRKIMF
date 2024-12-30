import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface UserState {
  user: {
    _id: string;
    email: string;
    username: string;
    orders: { item: string; quantity: number }[]; // Ensure this is serializable
  } | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        _id: string;
        email: string;
        username: string;
        orders: { item: string; quantity: number }[];
      }>
    ) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const fetchInitialUserState = async () => {
  try {
    const response = await fetch("http://localhost:3000/session", {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data.user || null;
    }
  } catch (error) {
    console.error("Failed to fetch user session:", error);
  }
  return null;
};

export default userSlice.reducer;

// Hook to initialize the user state (no async logic in slice)
export const useInitializeUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeUser = async () => {
      const user = await fetchInitialUserState();
      if (user) {
        dispatch(setUser(user));
      }
    };

    initializeUser();
  }, [dispatch]);
};
