
const iconArray = document.getElementsByClassName('animated-icon'); //returns array
const iconOpenArray = document.getElementsByClassName('animated-icon-open');
const subMenuArray = document.getElementsByClassName('item-content');



for(let subMenu of subMenuArray)
{
    subMenu.style.display = 'none';
}

for(let icon of iconArray){
    icon.addEventListener('click',(event) =>
        { 
            for(let subMenu of subMenuArray)
            {
                if(subMenu != event.target.parentElement.nextElementSibling)
                {
                    subMenu.style.display = 'none';
                }
            }

            for(let icon of iconOpenArray)
            {
                if(icon != event.target)
                {
                    icon.className = "animated-icon";
                }
            }

           
            event.target.className = (event.target.className == "animated-icon") ? "animated-icon-open" : "animated-icon";
            event.target.parentElement.nextElementSibling.style.display = (event.target.parentElement.nextElementSibling.style.display == 'none') ? 'flex' : "none";

       });

}



   