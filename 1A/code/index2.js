person = [
    {name:"Shubham", marks:97},
    {name:"Rutvik", marks:92},
    {name:"Tanmay", marks:91},
    {name:"Pratham", marks:95},
    {name:"Kartik", marks:96}
];


for(let x=0;x<person.length;x++){
    
}


console.log(person.length);


searchbtn.addEventListener('click',()=>{ 
   
    let input = searchbar.value;
    input=input.toLowerCase();
    console.log(input);
    
    let x = document.getElementsByClassName('students');
    console.log(x);
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
})