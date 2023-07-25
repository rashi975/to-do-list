let input=document.querySelector('.entered-list');
let addBtn=document.querySelector('.add-list');
let tasks=document.querySelector('.tasks');

//add button disdabled

input.addEventListener('keyup' , () => {                             //when user releases a key this function is called
    if(input.value.trim() !== 0 ){                                //trim is used to remove whitespaces
        addBtn.classList.add('active')
    }else{
        addBtn.classList.remove('active')
    }
})

//add new item to list

addBtn.addEventListener('click' , ( )=> {
    if (input.value.trim() !== 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.innerHTML = `
        <p> ${input.value} </p>
                <div class="items-button">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <i class="fa-solid fa-xmark"></i>
                </div>
        
        `
        tasks.appendChild(newItem);
        input.value = '';
    }else{
        alert('Please enter a task')
    }
})


//delete item from list

tasks.addEventListener('click' , (e) => {
    if (e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})

//mark item as completed
tasks.addEventListener('click' , (e) => {
    if(e.target.classList.contains('fa-pen-to-square')
    ){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})