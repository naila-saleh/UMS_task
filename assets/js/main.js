const getUsers = async ()=>{
    const response = await axios.get('https://ums12.runasp.net/api/users?limit=500');
    console.log(response.data);
    return response.data;
}
const deleteUser = async (id)=>{
    const response = await axios.delete(`https://ums12.runasp.net/api/users/${id}`);
    console.log(response);
    alert(`User with id ${id} deleted`);
}
const displayUsers = async ()=>{
    const data = await getUsers();
    const users = data.users.map((user)=>{
        return `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td><img src="${user.imageUrl}" class="w-25"/></td>
            <td>
                <button class="btn btn-outline-danger" onclick=deleteUser(${user.id})>Delete</button>
            </td>
        </tr>`
    }).join('');
    document.querySelector('.users-data').innerHTML = users;
}
displayUsers()