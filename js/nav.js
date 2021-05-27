let link = 1;
let cJudge = 1;
let open_judge = -1, child_judge = false, child_open = false, open_name;

document.addEventListener('DOMContentLoaded', function(){
 	let start_pos = 0;
 	window.addEventListener('scroll', function(e){
	    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      	let current_pos =scrollTop;
      	const eleNav = document.querySelector(".nav");
      	const eleblur = document.querySelector('.blur');

 	   	eleNav.classList.remove('down', 'up'); // navを消去
		eleblur.classList.replace('show', 'hide');　// blurを消去
		if (link === -1) {　　　　　　　　　　　　　　// linkboxがあれば消去
 			let eleLinkc = document.querySelector('.link_box.show');
 			let eletrgc = document.querySelector('.trg.show');
 			eleLinkc.style.transition = "0s";
 			eleLinkc.classList.replace('show', 'hide');
 			eletrgc.classList.replace('show', 'hide');
 		}
 		if (cJudge === -1) { // childがあるなら消去
			document.querySelector('.child.show').classList.replace('show', 'hide');
			cJudge*=-1;
		}
    	if (current_pos > start_pos) eleNav.classList.add('down'); // 画面が下がっている
      	else　eleNav.classList.add('up');						   // 画面が上がっている
 		link = 1;												   // link類はすべて隠れた
      	start_pos = current_pos;								   // 高さ情報を更新
  	});
});

function linkShow(name) {
	let eleLink, eletrg;
	if (name === false) {
		eleLink = document.querySelector('.link_box.show');
		eletrg = document.querySelector('.trg.show');
	} else {
		eleLink = document.querySelector(`#L${name}`);
		eletrg = document.querySelector(`#trg_${name}`);
	}
	const eleblur = document.querySelector('.blur');
	const eleNav = document.querySelector(".nav");
	if (cJudge === -1) {
		document.querySelector('.child.show').classList.replace('show', 'hide');
		cJudge*=-1;
	}
	if (link === 1) { // hide → show
		eleLink.style.transition = '.4s';
		eleNav.style.backgroundColor = "rgb(255, 255, 255)";
		eleblur.classList.replace('hide', 'show');
		eleLink.classList.replace('hide', 'show');
		eletrg.classList.replace('hide', 'show');
		link = -1;
	} else {
		let nowLink = document.querySelector('.link_box.show');
		let nowtrg = document.querySelector('.trg.show');
		if (eleLink === nowLink) { // show → hide
			eleLink.style.transition = '0s';
			eleblur.classList.replace('show', 'hide');
			eleLink.classList.replace('show', 'hide');
			eletrg.classList.replace('show', 'hide');
			eleNav.style.backgroundColor = "rgba(255, 255, 255, .95)";
			link = 1;
		} else { //show → show
			eleLink.style.transition = '0s';
			nowLink.style.transition = '0s';
			eleLink.classList.replace('hide', 'show');
			nowLink.classList.replace('show', 'hide');
			eletrg.classList.replace('hide', 'show');
			nowtrg.classList.replace('show', 'hide');
		}
	}
}

function childShow(cName) {
	let elechild = document.querySelector(`#child_${cName}`);
	if (cJudge === 1) { //hide → show
		console.log('A');
		elechild.style.transition = '.4s';
		elechild.classList.replace('hide', 'show');
		cJudge*=-1;
	} else {
		let nowchild = document.querySelector('.child.show');
		if (elechild === nowchild) { // show → hide
			console.log('B');
			elechild.style.transition ='0s';
			elechild.classList.replace('show', 'hide');
			cJudge*=-1;
		} else { // show → show
			console.log('C');
			nowchild.style.transition = '0s';
			elechild.style.transition = '0s';
			nowchild.classList.replace('show', 'hide');
			elechild.classList.replace('hide', 'show');
		}
	}
}

// port
function open_menu() {
	console.log('port');
	if (open_judge === -1) {
		document.getElementById('menu_L').classList.add('open');
		document.querySelector('body').classList.add('open');
	}
	else {
		document.getElementById('menu_L').classList.remove('open');
		document.querySelector('body').classList.remove('open');
	}
	open_judge*=-1;
}

function port_link_child(child_name) {
	if (child_judge === false) {
		document.getElementById(`ul_div_${child_name}`).classList.replace('close', 'open');
		open_name = child_name;
		child_judge = true;
	} else {
		if (child_name === open_name) {
			document.getElementById(`ul_div_${child_name}`).classList.replace('open', 'close');
			child_judge = false;
		} else {
			document.querySelector('.ul_div.open').classList.replace('open', 'close');
			document.getElementById(`ul_div_${child_name}`).classList.replace('close', 'open');
			open_name = child_name;
			child_judge = true;
		}
	}
}