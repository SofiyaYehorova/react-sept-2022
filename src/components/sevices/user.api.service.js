let _url = `https://jsonplaceholder.typicode.com/users`
const getUsers = () => {
    return fetch(_url)
        .then(response => response.json())

}

const getUser = (id) => {
    return fetch(_url + `/` + id)
        .then(response => response.json())
}
export {getUsers, getUser};