import axios from 'axios';

const API_URL = 'https://hiring.reachinbox.xyz/api/v1';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

export const googleLogin = (redirectUrl) => api.get(`/auth/google-login?redirect_to=${redirectUrl}`);
export const fetchMails = () => api.get('/onebox/list');
export const fetchThread = (threadId) => api.get(`/onebox/messages/${threadId}`);
export const deleteThread = (threadId) => api.delete(`/onebox/messages/${threadId}`);
export const replyThread = (threadId, data) => api.post(`/onebox/reply/${threadId}`, data);

export default api;
