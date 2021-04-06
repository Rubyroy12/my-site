const box=document.getElementById('connect');

box.addEventListener('click', function(){
    alert("Phone Number: 0717899250 " + "Email: ibrakipz7@gmail.com")
});


// modal box actions

var modalink = document.getElementById('modal-box');
var modal = document.getElementsByClassName('modalbox');
var close = document.getElementsByClassName('closebox');

modalink.addEventListener('click',openModal());

// function to open the modal box
function openModal(){
    modal.style.display = "show";
    return true;
}

 


// function to close the box