const games = document.getElementById("gameP"),
txt = document.getElementById("txtP1"),
img = document.getElementById("imgP");


var face1 = document.getElementById("face1");

var tik1 = document.getElementById("tik1");


function f(fce, tek1) {
    face1.href = fce;
    tik1.href = tek1
}


function im1(Img, Txt){
    img.src = 'img/'+ Img;
    txt.innerHTML = Txt;
}

function addGame(img, name, describe, link) {
    games.innerHTML += `<div class="card">
    <img src="img/${img}" height="160px" alt="game img">
    <h1>${name}</h1>
    <h3>${describe}</h3>
    <a class="down" target="_blank" href="${link}"><i class="fa fa-download"></i> Download</a>
</div>`
}

let i;

function edit(iMg, tXt) {
    if (iMg == ''  & tXt == ''){
        console.log("Please enter data %c", "color:blue; font-size:30px;")
    }
    else if(iMg == ''){
        txt.innerHTML = tXt;
    }
    else if(tXt == ''){
        img.src = 'img/'+iMg;
    }
    else{
        im1(iMg, tXt);
    }
}

function editSocial(face, tik) {
    if (tik == ''&face == ''){
        console.log("Please enter data!!")
    }
    else if (face == ''){
        tik1.href = tik;
    }
    else if (tik == ''){
        face1.href = face;
    }
    else{
        f(face, tik);
    }
}

//Action



