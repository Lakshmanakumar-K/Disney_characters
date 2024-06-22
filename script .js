
let characters = {};

let sel = document.getElementById("character");

async function res() {
    try {
        let data = await fetch("https://api.disneyapi.dev/character");
        let data1 = await data.json();
        characters = data1.data;
        console.log(characters);
        //console.log(characters[0].name);

        //console.log(sel.innerHTML);
        //let content = sel.innerHTML;
        for (let i = 0; i < characters.length; i++) {
            sel.innerHTML = `${sel.innerHTML}
        <option value="${characters[i].name}">${characters[i].name}</option>`;
            //console.log(characters[i].name);
        }
        //row.append(sel);
    }
    catch (error) {

    }
}

res();

let row = document.querySelector(".sec_row");

let con = document.querySelector(".mycontainer");

let col = document.createElement("div");
col.className = "col-lg-4";

document.querySelector(".btn-primary").addEventListener("click", foo);

function foo() {

    let obj ={};

    for(let i=0; i < characters.length; i++){
        if (sel.value == characters[i].name){
            obj = characters[i];
            console.log(obj);

            col.innerHTML = `<div class="card" style="width: 18rem;margin:20px; background-color:gray; color:white">
    <h3 class="card-title" style="text-align:center">${obj.name}</h3>
  <img src="${obj.imageUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <p><b>Films : </b>${obj.films}</p>
	<p><b>TV Shows : </b>${obj.tvShows}</p>
	<p><b>Video Games : </b>${obj.videoGames}</p>
	<p><b>URL : </b>${obj.sourceUrl}</p>
	<p><b>Allies : </b>${obj.allies}</p>
	<p><b>Enemies : </b>${obj.enemies}</p>
  </div>
</div>`;

row.append(col);
        }
        else if(sel.value == "notselected") {
            console.log(sel.value);
            col.innerHTML = `<div class="card" style="width: 18rem;margin:20px; background-color:gray; color:white">
            <p> Select character from above dropdown list</p>
            </div>`;
            row.append(col);
        }
    }

    //con.append(row);
}