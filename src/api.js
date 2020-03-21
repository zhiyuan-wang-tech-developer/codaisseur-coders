/**
 * For this API details, please refer to
 * 'https://codaisseur-coders-network.herokuapp.com/'
 */
function api(endpoint, { method = "GET", body, jwt } = {}) {
    return fetch("https://codaisseur-coders-network.herokuapp.com" + endpoint,
        {
            method: method,
            headers: {
                Authorization: `Bearer ${jwt}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => Promise.all([response.status, response.json()]))
        .then(([status, json_data]) => {
            console.log('@api status: ', status)
            console.log('@api data: ', json_data)
            if (status >= 400) {
                throw Object.create(
                    {
                        api_error: json_data
                    }
                )
            } else {
                return json_data
            }
        })
}

export default api
