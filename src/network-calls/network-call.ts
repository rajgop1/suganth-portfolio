import appsettings from "./app-settings";

const URL_TO_USE = appsettings.REACT_APP_BACKEND_URL

export const postReq = (route = "", body = {}) => {
    const url = new URL(route, URL_TO_USE);
    console.log(`POSTING ${url} ${JSON.stringify(body)} ${route}`);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
    });
};


export const getReq = (route = "", { params = null } = {}, credentials = true) => {
    const url = new URL(route, URL_TO_USE);
    console.log(`GETTING ${url}`);
    if (params) {
        Object.keys(params).forEach((key) =>
            url.searchParams.append(key, params[key])
        );
    }
    if (credentials) {
        return fetch(url, {
            method: "GET",
            credentials: "include",
        });
    } else {
        return fetch(url, {
            method: "GET",
        });
    }
};

export const deleteReqAuth = async (route = "", params = null) => {
    const token = localStorage.getItem("token");
    const url = new URL(route, URL_TO_USE);
    console.log(`DELETE ${url} ${params}}`);

    if (params) {
        Object.keys(params).forEach((key) =>
            url.searchParams.append(key, params[key])
        );
    }
    return fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
    });
};

export const putReqAuth = async (route = "", body = {}) => {
    const token = localStorage.getItem("token");
    const url = new URL(route, URL_TO_USE);
    console.log(`PUT ${url} ${body}}`);

    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });
};

export const fileUploadReq = (route = "", formData = new FormData()) => {
    const url = new URL(route, URL_TO_USE);

    return fetch(url, {
        method: "POST",
        credentials: "include",
        body: formData,
    });
};

export const postReqAuthWithoutToken = async (route = "", body = {}) => {
    const url = new URL(route, URL_TO_USE);
    console.log(`POSTING ${url} ${JSON.stringify(body)} ${route}`);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
};

export const postReqAuth = async (route = "", body = {}) => {
    const token = localStorage.getItem("token");
    const url = new URL(route, URL_TO_USE);
    console.log(`POSTING ${url} ${JSON.stringify(body)} ${route}`);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
    });
};

export const patchReqAuth = async (route = "", body = {}) => {
    const token = localStorage.getItem("token");
    const url = new URL(route, URL_TO_USE);
    console.log(`PATCHING ${url} ${JSON.stringify(body)} ${route}`);
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
        body: JSON.stringify(body),
    });
};

export const postReqAuthWithFilesWithoutToken = async (route = "", formData = new FormData()) => {
    const url = new URL(route, URL_TO_USE);
    console.log(`POSTING ${url} ${JSON.stringify(formData)} ${route}`);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });
};

export const postReqAuthWithFiles = async (route = "", formData = new FormData()) => {
    const token = localStorage.getItem("token");
    const url = new URL(route, URL_TO_USE);
    console.log(`POSTING ${url} ${JSON.stringify(formData)} ${route} with token ${token}`);
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
        },
        body: formData,
    });
};

export const patchReqAuthWithFiles = async (route = "", formData = new FormData()) => {
    const token = localStorage.getItem("token");
    const url = new URL(route, URL_TO_USE);
    console.log(`PATCHING ${url} ${JSON.stringify(formData)} ${route} with token ${token}`);
    return fetch(url, {
        method: "PATCH",
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
        },
        body: formData,
    });
};

export const getReqAuth = async (route = "", { params = null } = {}) => {
    const token = localStorage.getItem("token");
    const url = new URL(route, URL_TO_USE);
    if (params) {
        console.log("params", params)
        Object.keys(params).forEach((key) =>
            url.searchParams.append(key, params[key])
        );
    }
    console.log(`GETTING ${url} with token ${token}`);
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        },
    });
};

export const getReqAuthWithoutToken = async (route = "", { params = null } = {}) => {
    const url = new URL(route, URL_TO_USE);
    if (params) {
        console.log("params", params)
        Object.keys(params).forEach((key) =>
            url.searchParams.append(key, params[key])
        );
    }
    console.log(`GETTING ${url}`);
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    });
};
