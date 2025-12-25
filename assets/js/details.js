const getUser = async ()=>{
    const userId = new URLSearchParams(location.search).get('userId');
    const response = await axios.get(`https://ums12.runasp.net/api/users/${userId}`);
    if(response.status !== 200){
        alert('User not found');
    }
    return response.data;
}
const displayDetails =  async ()=>{
    try {
        const user = await getUser();
        document.querySelector('.user-name').textContent = user.data.name;
        document.querySelector('.user-email').textContent = user.data.email;
        document.querySelector('.user-age').textContent = user.data.age;
    }catch(error){
        document.querySelector('.error-class').classList.remove('d-none');
        document.querySelector('.error-msg').textContent = error.message;
    }finally {
        document.querySelector('.loader').classList.add('d-none');
    }
}
displayDetails();