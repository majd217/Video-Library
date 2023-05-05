
const iconArray = document.getElementsByClassName('animated-icon'); //returns array
const subMenuArray = document.getElementsByClassName('item-content');

for(let icon of iconArray){
    icon.addEventListener('click',(event) =>
        { 
            for(let subMenu of subMenuArray)
            {
               if(subMenu != event.target.parentElement.nextElementSibling)
                subMenu.style.display = 'none';
            }
            event.target.parentElement.nextElementSibling.style.display = (event.target.parentElement.nextElementSibling.style.display == 'none') ? 'flex' : "none";
            console.log(event.target.parentElement.nextElementSibling);
       });

}
