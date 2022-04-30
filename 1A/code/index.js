const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

//validate name
name.addEventListener('blur',()=>{
    // contain only small and upper case letters and length is less than 20
    let regex = /([a-zA-Z]){2,20}/;
    let str = name.value;

    if(regex.test(str)){
        console.log('it matched');
        document.getElementById('invalidname').style.display="none";
        name.classList.remove('is-invalid');
    }
    else{
        console.log('it not matched');
        document.getElementById('invalidname').style.display="block";
        name.classList.add('is-invalid');
    }
})

//validate email
email.addEventListener('blur',()=>{
    // Email must contain @ and .domain and valid characters _ . a-z A-z 0-9 
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    if(regex.test(str)){
        console.log('it matched');
        document.getElementById('invalidemail').style.display="none";
        email.classList.remove('is-invalid');
    }
    else{
        console.log('it not matched');
        document.getElementById('invalidemail').style.display="block";
        email.classList.add('is-invalid');
    }
})

//validate mobile number
mobile.addEventListener('blur',()=>{
    // Mobile must be 10 digit long
    let regex = /^([0-9]){10}$/;
    let str = mobile.value;

    if(regex.test(str)){
        console.log('it matched');
        document.getElementById('invalidmobile').style.display="none";
        mobile.classList.remove('is-invalid');
    }
    else{
        console.log('it not matched');
        document.getElementById('invalidmobile').style.display="block";
        mobile.classList.add('is-invalid');
    }
})

//to show alert when send message
let submit = document.getElementById('submit');

submit.addEventListener('click', (e)=>{
    e.preventDefault();

    let success = document.getElementById('success');
    success.classList.add('show');

    
})

//search bar


console.log('hello world');