import axios from 'axios';

const API_URL = 'https://pruebatecnica-7fb2648c0c79.herokuapp.com/api/ventas'; 

const VentasAPI = {

    obtenerVentas: async () => {
        const response = await axios.get(`${API_URL}`);
        return response.data.ventas;
    },
}

export default VentasAPI;
