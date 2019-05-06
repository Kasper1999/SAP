const colour = document.getElementById('colour');
const nav = document.getElementById('nav');
const tabl = document.getElementById('tabl');

const add = document.getElementById('add');
const delet = document.getElementById('delet');
const edit = document.getElementById('edit');

const container = document.getElementById('container');

const memory = [];

var i = 0;

function Add(){
	const elem = document.createElement('aside');

	let head = prompt('Specify a title:');
	let date = prompt('Specify the date in the format DD.MM.YYYY:');
	let cont = prompt('Content:');
	let priority = prompt('Specify a priority from 1 to 3 (increasing priority):');
	let priority_c;

	switch(priority){
  		case '1':  
    	priority_c = 'Low priority';
    	break;

  		case '2':  
    	priority_c = 'Medium priority';
    	elem.style.backgroundColor = '#e2edff';
    	break;

  		case '3':  
   	 	priority_c = 'Hight priority';
   	 	elem.style.backgroundColor = '#ffe2e2';
    	break;

  		default:
    	priority_c = 'Low priority';
    	break;
	}

	function Add_el(i_e, head_e, date_e ,cont_e, priority_e) {
		this.add_array = 'e'+i_e;
		this.id_array = i_e;
		this.head_array = head_e;
		this.date_array = date_e;
		this.cont_array = cont_e;
		this.priority_array = priority_e;
	}

	memory[i] = new Add_el(i, head, date,cont, priority);

	for(let k in memory[i]){
		alert(k+':'+memory[i][k]);
	}

	elem.id = 'e'+ i;   
    elem.innerHTML = '<table>'+'<tr>' +'<td rowspan="2" class="ico">' +'<i class="fa fa-user-circle" aria-hidden="true">'+'</i>'+'</td>'+'<td class="all">'+'<div class="headline">'+head+'</div>' +'<div class="date">'+date+'</div>' +'<div class="priority">'+priority_c+'</div>'+'<div class="status">' +'<i class="fa fa-flag" aria-hidden="true">' +'</i>' +'</div>'+'</td>' +'</tr>'+'<tr>' +'<td colspan="3" class="content">'+cont+'</td>' +'</tr>' + '</table>';

    container.appendChild(elem);

    i++;   
}

function Edit(){
	let edit_elem = prompt('Enter title:');

for (let n = 0; n < memory.length; n++) {
	alert(memory[n].head_array);
		if (edit_elem == memory[n].head_array) {
	let s = memory[n].id_array;
	alert(memory[n].head_array+'  '+1);
	let j = document.getElementById('e'+s);

	let x = n;
	alert(memory[x].head_array+'  '+2);
	let head = prompt('Specify a title:', memory[x].head_array);
	alert(memory[n].head_array+3);
	let date = prompt('Specify the date in the format DD.MM.YYYY:', memory[x].date_array);
	let cont = prompt('Content:', memory[x].cont_array);
	let priority = prompt('Specify a priority from 1 to 3 (increasing priority):', memory[x].priority_array);
	let priority_c;

	switch(priority){
  		case '1':  
    	priority_c = 'Low priority';
    	j.style.backgroundColor = 'white';
    	break;

  		case '2':  
    	priority_c = 'Medium priority';
    	j.style.backgroundColor = '#e2edff';
    	break;

  		case '3':  
   	 	priority_c = 'Hight priority';
   	 	j.style.backgroundColor = '#ffe2e2';
    	break;

  		default:
    	priority_c = 'Low priority';
    	break;
	}

	memory[x] = {
		head_array: head,
		date_array: date,
		cont_array: cont,
		priority_array: priority
	};

    j.innerHTML = '<table>'+'<tr>' +'<td rowspan="2" class="ico">' +'<i class="fa fa-user-circle" aria-hidden="true">'+'</i>'+'</td>'+'<td class="all">'+'<div class="headline">'+head+'</div>' +'<div class="date">'+date+'</div>' +'<div class="priority">'+priority_c+'</div>'+'<div class="status">' +'<i class="fa fa-flag" aria-hidden="true">' +'</i>' +'</div>'+'</td>' +'</tr>'+'<tr>' +'<td colspan="3" class="content">'+cont+'</td>' +'</tr>' + '</table>';
	}
  }
}

function Delet(){
	if (memory.add_array.length == 0) {
		var zzz = document.getElementById('block');
		container.removeChild(zzz);
	}

	let delet_elem = prompt('Enter title:');

	for (var i = 0; i < memory.head_array.length; i++) {
			if (delet_elem == memory[i].head_array) {
		let s = memory[i].id_array;
		let j = document.getElementById('e'+s);

		memory.splice(s, 1);

		container.removeChild(j);
		}
	}
}

function Color(){
 let c = prompt('background color?', '#051231'); 
 nav.style.backgroundColor = c;
 tabl.style.backgroundColor = c;

}


add.addEventListener('click', e => {Add()}); 

edit.addEventListener('click', e => {Edit()});

delet.addEventListener('click', e => {Delet()});  

colour.addEventListener('click', e => {Color()}); 