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
                        'Authorization': `Bearer ${body.jwt}`
                    },
                    body: JSON.stringify(body.body),
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

    updatedById: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${params.jwt}`
                    },
                    body: JSON.stringify(params.body)
                });
                const data = await response.json();
                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error.message));
            }
        })
    },

    deleteById: async (endpoint, params) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'DELETE',
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

    updatedFile: async (endpoint, params) => {

        return new Promise(async (resolve, reject) => {
            try {
                const form = new FormData();
                form.append('file', params.file);
                form.append('id', params.id);

                const response = await fetch(`${baseUrl}${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${params.jwt}`,
                    },
                    body: form

                });

                const data = await response.json();

                if (!response.ok) {
                    reject(`Error in request: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error.message));
            }
        });
    },
};
