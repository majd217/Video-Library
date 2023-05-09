
const iconArray = document.getElementsByClassName('animated-icon'); //returns array
const subMenuArray = document.getElementsByClassName('item-content');
console.log(iconArray);

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
                    console.log(subMenu);
                    subMenu.style.display = 'none';
                }
            }
            
            for(let icon of iconArray)
            {
                if(icon != event.target)
                {
                    icon.className = "animated-icon";
                }
            }

            if(event.target.className == "animated-icon")
            {
                event.target.className = "animated-icon-open";
            }
            else 
            {
                event.target.className = "animated-icon";

            }
            console.log(event.target.parentElement.nextElementSibling.style.display)
            event.target.parentElement.nextElementSibling.style.display = (event.target.parentElement.nextElementSibling.style.display == 'none') ? 'flex' : "none";
            console.log(event.target.className);

        
       });

}


//Its applied thru

   