import { createSlice } from "@reduxjs/toolkit";

export const clienteSlice = createSlice({
  name: "clientes",
  initialState: [],
  reducers: {
    agregarCliente: (state, action) => {
      state.push(action.payload);
    },
    eliminarCliente: (state, action) => {
      const clienteEncontrado = state.find(
        (cliente) => cliente.id === action.payload
      );
      if (clienteEncontrado) {
        state.splice(state.indexOf(clienteEncontrado), 1);
      }
    },
    actualizarCliente: (state, action) => {
      const index = state.findIndex(
        (cliente) => cliente.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { agregarCliente, eliminarCliente, actualizarCliente } =
  clienteSlice.actions;
export default clienteSlice.reducer;
