// Q1. Show an alert box on click on a link.

// const clickOnLink = document.createElement('a');
// clickOnLink.setAttribute("href","#");
// clickOnLink.setAttribute("onclick","myHandler()");
// clickOnLink.innerText = 'Click me';
// document.body.appendChild(clickOnLink)
// console.log(clickOnLink);
// function myHandler(){
//     alert('Welcome to our land')
// }

// const clickOnLink = document.createElement('a');
// clickOnLink.setAttribute('href', '#');
// clickOnLink.setAttribute('onclick', 'myHandler()');
// clickOnLink.textContent = 'Click ';
// document.body.appendChild(clickOnLink);
// console.log(clickOnLink);
// function myHandler(){
//     alert('hello world')
//     document.body.style.backgroundColor = 'red'
// }

// Q2 

// function phone(){
//     alert('Thank for purchasing a phone from us')
// }

// Q4

//     const picture = document.getElementById('picture');
// function myImg(){
//     picture.setAttribute('src','./Assets/img2.jpg');
//     picture.setAttribute('onmouseout','myHandle()');
// }
// function myHandle(){
//     picture.src = "./Assets/img1.jpg";
// }


// const image = document.getElementById('picture');
// function myImg(){
//     picture.setAttribute('src','./asset/phone 2.jpg');
//     picture.setAttribute('onmouseout','myHandle()');
// }
// function myHandle(){
//     picture.src = "./asset/phone.jpg";
// }

const count =document.querySelector('.count')
console.log(count)

let add = 0
function increase(){
    count.textContent = add++
    console.log('hello')

}

function decrease(){
    count.textContent = add--
    console.log('hello world')
}