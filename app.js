
const allInputs = document.querySelectorAll('input'); 
const basicUrl = "./background.jpg";






 const  handleInput = (e)=>{ 
   
    if(e.target.dataset.key === "blur") return document.documentElement.style.setProperty('--blur', `${e.target.value}px` )

    if (e.target.dataset.key === "grayScale") return document.documentElement.style.setProperty('--grayscaleValue', `${e.target.value/10}` )


    if (e.target.dataset.key === "color")  document.documentElement.style.setProperty('--borderColor', `${e.target.value}`)

    if (e.target.dataset.key === "addPhoto") {document.documentElement.style.setProperty('--photo', `url(${e.target.value})` ) } 
    
    if (e.target.dataset.key === "addPhoto" && e.target.value === "") {document.documentElement.style.setProperty('--photo', `url(${basicUrl})` ) } 
    

 }


allInputs.forEach(input => input.addEventListener('input', handleInput))




