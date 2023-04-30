import axios from "axios";
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
  baseURL: `${process.env.REACT_APP_URL}`,
  withCredentials: true,
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response) {
    if (error.response.status === 403 || error.response.status === 401) {
      window.location.href = "login?unauthorized=true";
    }
  }

  return Promise.reject(error);
});

// Also add/ configure interceptors && all the other cool stuff

export default instance;
