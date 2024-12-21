const text = document.getElementById('text');
const com  = document.getElementById('ctext');
const btn  = document.getElementById("stn");
const dtn  = document.getElementById('dtn');

btn.addEventListener('click', function(){
    var commentt = document.createElement('p');
    text.appendChild(commentt);
    commentt.innerText = com.value.trim();
    commentt.style.color = 'black';
    commentt.classList.add('pc') 
    com.value = ''
    save();
    load();
});



function save(){
    var save =[]
    text.querySelectorAll('p').forEach(function(cm){
    save.push(cm.textContent.trim())})
    localStorage.setItem('comment', JSON.stringify(save))
}

function load(){
    const save = JSON.parse(localStorage.getItem('comment')) || [];
    save.forEach(function(){
    var sm = document.createElement('p');
    text.appendChild(sm);
    sm.innerText = com.value.trim();
    })
}

// }
// function del(){
//     comment.addEventListener('dblclick', function(){
//         text.removeChild(comment)
//     })
// }
