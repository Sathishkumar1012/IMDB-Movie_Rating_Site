import axios from 'axios';
import { useState,useEffect } from 'react';

const api = axios.create({
    baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    header: {
    "ngrok-skip-browser-warning": true}
});

export default api;