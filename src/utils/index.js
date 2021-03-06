export const createUser = async (username, email, pass, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: pass
            })
        });
        const data = await response.json();
        setter(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
}

export const login = async (username, pass, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: pass
            })
        });
        const data = await response.json();
        setter(data.token);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

// export const logOut = () => {
//     localStorage.clear();
//     window.location.reload(false);
// };

export const tokenLogin = async (setter) => {
    try {
        const token = localStorage.getItem("myToken");
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {"Authorization": `Bearer ${token}`}
        });
        const data = await response.json();
        setter(data.token);
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (username, pass, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                username: username, 
                password: pass}),
        });
        const data = await response.json();
        setter(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};




export const deleteUser = async (user) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/username/${user}`, {
            method: "DELETE",
            headers: {"Authorization": `Bearer ${localStorage.getItem("myToken")}`}, });
            localStorage.clear();
            window.location.reload(false);
         await response.json();
    } catch (error) {
        console.log(error);
    }
};
