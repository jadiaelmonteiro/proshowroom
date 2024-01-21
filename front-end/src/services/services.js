const baseUrl = 'http://localhost:3000/';

export const http = {
    get: async (endpoint) => {
        try {
            const response = await fetch(`${baseUrl}${endpoint}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error during GET request:', error);
            throw error;
        }
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
                    reject(`Erro na requisição: ${response.status} - ${response.statusText}`);
                } else {
                    resolve(data);
                }
            } catch (error) {
                reject(new Error(error));
            }
        })
    },
};
