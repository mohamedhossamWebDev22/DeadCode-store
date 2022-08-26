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



//Add funny game
addGame('icon2.png', 'catch the mouse', 'catch the mouse before escape and take chess(Android)', 'https://doc-14-7s-docs.googleusercontent.com/docs/securesc/cmcebddu0756v57dti70ssfce0kh88lt/1h28l3jcsulh3rmnvg4ga2mcmc22a66l/1661527425000/13206948309297713483/13206948309297713483/1Z_rNt7xhbLm9w0kc7JoYYeIaEZp5wY8s?e=download&ax=AI9vYm6D7C7r1YFiqyarQUonIuj5FhHtx5U6je_4jxieOL0P4yEx_fEaX81o4jsV3F5gzpF_B743-6Ksah7dZLeAOKp-o1Sh45UC4Kn-nSDMnt_4rm6WDc4n-XQNuMjkDLnMPyE0b0eWPLJqaH8URkP7GMF6OTQRhTsKz_xvkQxDiOFoWXBXH_dA3opYStmeyF_AajfUIICPYkSmL7g8cSUkpNLvIJFD4exWNaHhGx9q5R0UfgtF2yLIeF8RdM3eo1sdUKibGaO_KfIx7JajB8-CtCp_MjCUEV3IagJyq359Rybtc6HGEoC4UDnwiJXSFY72LkEXxnLjcfxvYb3YzRZp0yo4yWq4lh2OY7sE-ZniMbLWWuety-DyLAieUKyZmxGJeA2ua0XRMYVimwGbxZvyBMxoe_0eO8hzztJmeuHsxctLZ6ZSZDMVjSpMQqyc-HRfIK2Xy9bP3tKszwCQTrbOwQpjdp1o6u8yhEbOOiStJDnc5wGkElxUsNmli5clcDzLM6zpc9MtfRUNBOHwXEMHlxV9eX6to9gtMgUeM9LrU0H0xMvi2c-LjuWFAQsKwnxGpyvZOWbsK4LLVSQooIGMbhP5fhU5o8uA76Kk4JOKYdBc1rW_RM1jJlnevlu8NoN5klQxmacHy3pzy-uXyWKifZHBV5l7NKG2MaKNIuYRSjvmiDEWC5rXObKRkGZHKQH3KqBUwtVlUL5dFJlaOXVSV6QSno-BYL0xFj0bZ1cr6RBDYofKeLWp1sk&uuid=e0ac9662-351d-47ff-916d-9cbf094a8d2b&authuser=0&nonce=og0h69vs689f2&user=13206948309297713483&hash=ouqpedrvh8hrck20euu6js8hpvita1uh')