const backgroundPhoto = document.querySelector('.photo-background'); 

const grayScaleSlider = document.querySelector('.grayScaleSlider')
const blurSlider = document.querySelector('.blurSlider')
const addPhotoInput = document.querySelector('.addPhoto');




// const adjustBlur = (e)=> { 
    
//     document.documentElement.style.setProperty('--blur', `${e.target.value}px` )
// }


// const adjustGrayScale = (e)=>{
//     document.documentElement.style.setProperty('--grayscaleValue', `${e.target.value/10}` )
    
//  }



 const  handleInput = (e)=>{ 
   
    if(e.target.dataset.key === "blur") return document.documentElement.style.setProperty('--blur', `${e.target.value}px` )

    else if (e.target.dataset.key === "grayScale") return document.documentElement.style.setProperty('--grayscaleValue', `${e.target.value/10}` )

    else if (e.target.dataset.key === "addPhoto")document.documentElement.style.setProperty('--photo', `url(${e.target.value})` )

 }

blurSlider.addEventListener('input', handleInput)
grayScaleSlider.addEventListener('input', handleInput); 
addPhotoInput.addEventListener('input', handleInput)

