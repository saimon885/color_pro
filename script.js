// dom project 1

const body = document.getElementById('body');
const buttons = document.querySelectorAll('li');

// const redcolor = document.querySelector('.red');
// redcolor.addEventListener('click',function(){
//     body.style.backgroundColor = 'red'
// });

// buttons.forEach(function(value){
//     value.addEventListener('click',function(){
//         let className = this.classList.value;
//         body.style.backgroundColor = className;
//         console.log(className);
//     })
// })

buttons.forEach(function(value){
    value.addEventListener('click',function(){
        let className = this.classList[0];
        let color = '';
        if(className === 'red'){
            color = '#EA2027'
        }

        if(className === 'Green'){
            color = 'rgb(22, 95, 22)'
        }

        if(className === 'pink'){
            color = 'rgb(209, 95, 114)'
        }
        
        if(className === 'gray'){
            color = 'rgb(92, 72, 72)'
        }
        
        if(className === 'blue'){
            color = 'rgb(66, 66, 245)'
        }
        
        if(className === 'tomato'){
            color = 'rgb(196, 55, 30)'
        }
        body.style.backgroundColor = color;
    })
})

