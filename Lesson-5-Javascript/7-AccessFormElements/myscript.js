
//document.getElementById('email').value ='test@test.com'
//document.getElementById('gender').value = 'Female'



function getData(e) {
    
    e.preventDefault();
    let user = {
        email: '',
        password: ''
        
    }
    user.email = document.getElementById('email').value;   
    user.password = document.getElementById('pwd').value;   
    
    document.getElementById('finalResult').innerText = "<b>Registered succesfully</b>"
    document.getElementById('finalResult').style.color = 'green';
    document.getElementById('finalResult').innerHTML = "<b>Registered succesfully</b>"

    console.log( document.getElementById('test').innerHTML)

    let buttonElement = document.getElementById('btnSubmit');
    buttonElement.className = "btn btn-success";
}  