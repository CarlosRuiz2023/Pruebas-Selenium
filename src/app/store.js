import { configureStore } from "@reduxjs/toolkit";
import clienteReducer from "../features/cliente/clienteSlice";
import loginReducer from "../features/login/loginSlice";

export default configureStore({
    reducer: {
        clientes: clienteReducer,
        login: loginReducer,
    },
});
