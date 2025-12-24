const inputs = document.forms['create-form']
inputs.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const formData = new FormData(inputs);
    const response = await axios.post('https://ums12.runasp.net/api/users',formData);
    console.log(response);
})