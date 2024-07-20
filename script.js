const button = document.querySelectorAll('.box')
const body = document.querySelector("body")

button.forEach(function(vk)
{
    vk.addEventListener('click', function(color){
        if(color.target.id === 'box1')
        {
            body.style.backgroundColor = 'antiquewhite'
        }
        if(color.target.id === 'box2')
        {
                body.style.backgroundColor = 'aquamarine'
        }
        if(color.target.id === 'box3')
        {
                body.style.backgroundColor = 'cadetblue'
        }
        if(color.target.id === 'box4')
        {
                body.style.backgroundColor = 'cornflowerblue'
        }
        if(color.target.id === 'box5')
        {
                body.style.backgroundColor = 'lightblue'
        }
    })
})