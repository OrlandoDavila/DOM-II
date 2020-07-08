// Your code goes here

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('mousedown', (e) => {
    e.target.style.fontWeight = 'bold';
  });
})

const hTwos = document.querySelectorAll('h2');
hTwos.forEach((heading) => {
  heading.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'lightblue';
    e.stopPropagation();
  });
});

const pics = document.querySelectorAll('img');
pics.forEach((picture) => {
  picture.addEventListener('click', (e) => {
    e.target.style.border = '2px dashed black';
  });
});


buttons.forEach((button) => {
  button.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'red';
    e.stopPropagation();
  });
})


const paras = document.querySelectorAll('p');
paras.forEach((para) => {
  para.addEventListener('mouseover', (e) => {
    e.target.style.fontWeight = 'bold';
  });
});

const everything = document.querySelector('html');
everything.addEventListener('keydown', (e) => {
  e.target.style.backgroundColor = "lightblue";
})

paras.forEach((para) => {
  para.addEventListener('mouseleave', (e) => {
    e.target.style.fontWeight = 'normal';
  });
});


paras.forEach((para) => {
  para.addEventListener('copy', (e) => {
    e.clipboardData.setData('text/plain', 'Nice try copycat!');
    e.preventDefault();
  });
});



everything.addEventListener('keyup', (e) => {
  e.target.style.backgroundColor = "white";
})



everything.addEventListener('dblclick', (e) => {
  e.target.style.backgroundColor = 'gray';
});

const header = document.querySelector('header');


window.addEventListener('scroll', (e) => {
  header.style.border = '2px solid gray';
}) 

const footerP = document.querySelector('.footer p')


footerP.addEventListener('wheel', (e) => {
  e.target.textContent = "You're at the bottom!";
})


window.addEventListener('resize', (e) => {
  everything.style.fontSize = "100%";
})