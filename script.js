const colour = document.getElementById('colour');
const nav = document.getElementById('nav');
const tabl = document.getElementById('tabl');

const add = document.getElementById('add');
const delet = document.getElementById('delet');
const edit = document.getElementById('edit');

const container = document.getElementById('container');

const add_array = [];
const id_array = [];
const head_array = [];
const date_array = [];
const cont_array = [];
const priority_array = [];
let i = 0;

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

	add_array.push('e'+i);
	id_array.push(i);
	head_array.push(head);
	date_array.push(date);
	cont_array.push(cont);
	priority_array.push(priority);

	elem.id = 'e'+ i;   
    elem.innerHTML = '<table>'+'<tr>' +'<td rowspan="2" class="ico">' +'<i class="fa fa-user-circle" aria-hidden="true">'+'</i>'+'</td>'+'<td class="all">'+'<div class="headline">'+head+'</div>' +'<div class="date">'+date+'</div>' +'<div class="priority">'+priority_c+'</div>'+'<div class="status">' +'<i class="fa fa-flag" aria-hidden="true">' +'</i>' +'</div>'+'</td>' +'</tr>'+'<tr>' +'<td colspan="3" class="content">'+cont+'</td>' +'</tr>' + '</table>';

    container.appendChild(elem);

    i++;   
}

function Edit(){
	let edit_elem = prompt('Enter title:');

for (var i = 0; i < head_array.length; i++) {
		if (edit_elem == head_array[i]) {
	let s = id_array[i];

	let j = document.getElementById('e'+s);

	let x = i;

	let head = prompt('Specify a title:', head_array[x]);
	let date = prompt('Specify the date in the format DD.MM.YYYY:', date_array[x]);
	let cont = prompt('Content:', cont_array[x]);
	let priority = prompt('Specify a priority from 1 to 3 (increasing priority):', priority_array[x]);
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


	head_array[x] = head;
	date_array[x] = date;
	cont_array[x] = cont;
	priority_array[x] = priority;

    j.innerHTML = '<table>'+'<tr>' +'<td rowspan="2" class="ico">' +'<i class="fa fa-user-circle" aria-hidden="true">'+'</i>'+'</td>'+'<td class="all">'+'<div class="headline">'+head+'</div>' +'<div class="date">'+date+'</div>' +'<div class="priority">'+priority_c+'</div>'+'<div class="status">' +'<i class="fa fa-flag" aria-hidden="true">' +'</i>' +'</div>'+'</td>' +'</tr>'+'<tr>' +'<td colspan="3" class="content">'+cont+'</td>' +'</tr>' + '</table>';
	}
  }
}

function Delet(){
	if (add_array.length == 0) {
		var zzz = document.getElementById('block');
		container.removeChild(zzz);
	}

	let delet_elem = prompt('Enter title:');

	for (var i = 0; i < head_array.length; i++) {
			if (delet_elem == head_array[i]) {
		let s = id_array[i];
		let j = document.getElementById('e'+s);

		id_array.splice(s, 1);
		add_array.splice(s, 1);
		head_array.splice(s, 1);
		date_array.splice(s, 1);
		cont_array.splice(s, 1);
		priority_array.splice(s, 1);

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