const toggleBtn= document.getElementById('drop-btn')
const toggleLines= document.getElementById('rotating')
const dropLinks= document.getElementById('droped-links')

let rotated = false;

toggleBtn.addEventListener('click' , ()=>{
      console.log('kamran')
      rotated ?  toggleLines.style.transform= 'rotate(0deg)': toggleLines.style.transform = 'rotate(90deg)'
      rotated ? dropLinks.style.display='none': dropLinks.style.display='block'
      
      rotated=!rotated
      
})
