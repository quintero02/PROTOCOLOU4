import axios from 'axios';

const API = 'http://localhost:4000/products';

export const getAll = () => axios.get(API);
