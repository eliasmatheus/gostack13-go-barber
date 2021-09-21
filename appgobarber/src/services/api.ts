import axios from 'axios';

/**
 * Caso esteja rodando pelo Android Studio: http://10.0.2.2:{porta}
 * No MAC: http://localhost:{porta}
 */
const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
