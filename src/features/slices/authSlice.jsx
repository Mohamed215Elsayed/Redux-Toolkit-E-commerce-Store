import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
          userId.password
        );
      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      }
      else {
        state.user.authUser = true;
        const saveState = JSON.stringify(userId);

        sessionStorage.setItem("authUser", saveState);
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        image: "",
        authUser: false,
      };
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: JSON.parse(sessionStorage.getItem("authUser")) || {
//       name: "",
//       password: "",
//       image: "",
//       authUser: false,
//     },
//   },
//   reducers: {
//     login: {
//       reducer(state, action) {
//         const userId = action.payload;
//         console.log(userId);
//         const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
//         console.log(userValidation);
//         const passwordValidation =
//           /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(
//             userId.password
//           );
//         console.log(passwordValidation);
//         state.user = userId;
//         if (!userValidation || !passwordValidation) {
//           state.user.authUser = false;
//         } else {
//           state.user.authUser = true;
//           const saveState = JSON.stringify(userId);
//           sessionStorage.setItem("authUser", saveState);
//         }
//       },
//       prepare(payload) {
//         return { payload };
//       },
//     },
//     logout(state) {
//       state.user = {
//         name: "",
//         password: "",
//         image: "",
//         authUser: false,
//       };
//       sessionStorage.clear();
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;
