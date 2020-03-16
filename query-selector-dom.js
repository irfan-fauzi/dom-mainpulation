// querySelector
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';

// const li2 = document.querySelector('#b ul li:nth-child(2)');
// li2.style.color = 'red';

// const psemua = document.querySelectorAll('p');
// for (let i = 0; i < psemua.length; i++) {
//     psemua[i].style.color = 'blue';
//     psemua[i].style.backgroundColor = 'salmon';
// }

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'red';