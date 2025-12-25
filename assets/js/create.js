const inputs = document.forms['create-form']
inputs.image.addEventListener('change',()=>{
    const file = inputs.image.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        document.querySelector('.img-preview').setAttribute('src',e.target.result)
    }
})
inputs.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const formData = new FormData(inputs);
    const response = await axios.post('https://ums12.runasp.net/api/users',formData);
    if(response.status === 200){
        location.href = './index.html';
    }
    console.log(response);
})