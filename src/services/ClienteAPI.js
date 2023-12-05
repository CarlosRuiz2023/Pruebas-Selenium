import axios from 'axios';

const API_URL = 'https://pruebatecnica-7fb2648c0c79.herokuapp.com/api/clientes'; 
const API_SERVICE = 'https://prototipo2023-d6240700184c.herokuapp.com/api/services';

const ClienteAPI = {

  obtenerClientes: async () => {
    const response = await axios.get(`${API_URL}?total=0`);
    return response.data.clientes;
  },

  obtenerCliente: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.cliente;
  },

  obtenerClientesPorNombre: async (nombre) => {
    const response = await axios.get(`${API_URL}/search/${nombre}`);
    return response.data.clientes;
  },

  insertarCliente: async (cliente) => {
    const response = await axios.post(`${API_URL}`, cliente);
    return response.data;
  },

  actualizarCliente: async (id, cliente) => {
    const response = await axios.put(`${API_URL}/${id}`, cliente);
    return response.data;
  },

  eliminarCliente: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  },

  obtenerMunicipios: async (estado) => {
    const response = await axios.get(`${API_SERVICE}/${estado}`);
    return response.data.municipios;
  },

  obtenerEstados: async () => {
    const response = await axios.get(`${API_SERVICE}`);
    return response.data.estados;
  },
};

export default ClienteAPI;
