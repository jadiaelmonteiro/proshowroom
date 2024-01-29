const baseUrl = 'http://localhost:3000/';

export const http = {
    get: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${params.jwt}`
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },

    post: async (endpoint, body) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },

    getById: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${params.jwt}`
                    },
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },
};
