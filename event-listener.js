const p2 = document.querySelector('.paragraf2');
// method addEventListener
p2.addEventListener('click', changeStyle);

function changeStyle() {
  p2.style.backgroundColor = 'salmon';
}



// perubahan / penambahan elemen disimpan dalam satu fungsi
function createNewList() {
  // create new element
  const newli = document.createElement('li');
  newli.style.backgroundColor = 'salmon';
  const textNewli = document.createTextNode('ditambahkan setelah di klik');
  newli.appendChild(textNewli);
  // seleksi ul/ tempat elemen baru akan diletakan
  const ul = document.querySelector('#b ul');
  // dalam ul , tolong letakan new elemen 
  ul.appendChild(newli);
}
const paragraf4 = document.querySelector('#b p');
paragraf4.addEventListener('click', createNewList);