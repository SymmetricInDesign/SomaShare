
import axios from 'axios';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

// export const signup = (user) =>(
//     $.ajax({
//         url: "/api/users",
//         method: "POST",
//         data: {user}
//     })
// )

// export const login = (user) =>(
//     $.ajax({
//         url: "/api/session",
//         method: "POST",
//         data: {user}
//     })
// )

// export const logout = () =>(
//     $.ajax({
//         url: "api/session",
//         method: "DELETE"
//     })
// )