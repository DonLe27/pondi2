const BASE_URL = 'http://localhost:8000';

export const login = (username, password) => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Credentials" : true, 'Accept': 'application/json' };
    let body = JSON.stringify({username, password});
    // let headers = {
    //   "Content-Type": "application/json",
    //   // 'Accept': 'application/json',
    //   'Access-Control-Allow-Origin': '*'
    // };
    console.log('BODY:', body);

    fetch(BASE_URL + "/api/auth/login/", {headers, body, method: "POST"})
      .then(function(res) {
        if (res.status < 500) {
          return res.json().then(data => {
            return {
              status: res.status,
              data
            }
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(function(res) {
        if (res.status === 200) {
          console.log("LOGIN SUCCESSFUL");
          dispatch({type: 'LOGIN_SUCCESSFUL', data: res.data });
          //dispatch({type: 'USER_LOADED', user: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          console.log("AUTH ERROR");
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        } else {
          console.log("LOGIN FAIL");
          dispatch({type: "LOGIN_FAILED", data: res.data});
          throw res.data;
        }
      })
  }
}

export const loadUser = () => {
  return (dispatch, getState) => {
    dispatch({type: "USER_LOADING"});

    const token = getState().auth.token;

    let headers = {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    return fetch(BASE_URL + '/api/auth/profile/', {headers, method: "GET"})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({type: 'USER_LOADED', user: res.data });
          return res.data;
        } else if (res.status >= 400 && res.status < 500) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        }
      })
  }
}


export const register = (username, password, firstName, lastName, email) => {
  return (dispatch, getState) => {
    let body = JSON.stringify({username, password, firstName, lastName, email});
    let headers = {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    return fetch(BASE_URL + "/api/auth/register/", {headers, body, method: "POST"})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({type: 'REGISTRATION_SUCCESSFUL', data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        } else {
          dispatch({type: "REGISTRATION_FAILED", data: res.data});
          throw res.data;
        }
      })
  }
}

// TODO: Finish update request to update the color and the avatar for the newly-registered profile

/*
export const updateAvatarColor = (avatar, color) => {
  return (dispatch, getState) => {
    let body = JSON.stringify({avatar, color});
    let headers = {
      "Content-Type": "application/json",
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    return fetch(BASE_URL + "/api/auth/update/", {headers, body, method: "PATCH"})
      .then(res => {
        if (res.status < 500) {
          return res.json().then(data => {
            return {status: res.status, data};
          })
        } else {
          console.log("Server Error!");
          throw res;
        }
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({type: 'REGISTRATION_SUCCESSFUL', data: res.data });
          return res.data;
        } else if (res.status === 403 || res.status === 401) {
          dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
          throw res.data;
        } else {
          dispatch({type: "REGISTRATION_FAILED", data: res.data});
          throw res.data;
        }
      })
  }
}
*/



export const logout = () => {
  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    dispatch({type: 'LOGOUT_SUCCESSFUL'});
  }
}