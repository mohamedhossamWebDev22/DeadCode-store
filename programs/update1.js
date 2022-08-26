const txt2 = document.getElementById("txtP2"),
img2 = document.getElementById("imgP2");

var face2 = document.getElementById("face2");

var tik2 = document.getElementById("tik2");

function t(tek, fce1) {
    face2.href = fce1;
    tik2.href = tek;
}


function im2(Img2, Txt2){
    img2.src = 'img/'+ Img2;
    txt2.innerHTML = Txt2;
}



function edit(iMg, tXt) {
    if (iMg == ''  & tXt == ''){
        console.log("Please enter data %c", "color:blue; font-size:30px;")
    }
    else if(iMg == ''){
        txt2.innerHTML = tXt;
    }
    else if(tXt == ''){
        img2.src = 'img/'+iMg;
    }
    else{
        im2(iMg, tXt);
    }
}

function editSocial(face, tik) {
    if (tik == ''&face == ''){
        console.log("Please enter data!!")
    }
    else if (face == ''){
        tik2.href = tik;
    }
    else if (tik == ''){
        face2.href = face;
    }
    else{
        t(tik, face);
    }
}

//Edit social media links
editSocial('h', '')