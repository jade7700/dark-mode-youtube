const boton_dark = document.querySelector('#bt_dark');
const configUser = window.matchMedia('(prefers-color-scheme: dark)');
const localConfig = localStorage.getItem('tema');

if(localConfig == null){
	if(configUser.matches == true){
		document.body.classList.add('dark-mode');
		document.getElementById("bt_dark").classList.add("light_im");
	}else{
		document.getElementById("bt_dark").classList.add("dark_im");
		document.body.classList.add('light-theme');
	}
}else{
	if (localConfig == 'dark') {
		document.body.classList.add('dark-mode');
		document.getElementById("bt_dark").classList.add("light_im");
	} else if (localConfig == 'light') {
		document.getElementById("bt_dark").classList.add("dark_im");
		document.body.classList.add('light-theme');
	}
}

boton_dark.addEventListener('click', () => {
    let colorTema;
	
	if(document.body.classList.contains('light-theme')){
		colorTema = 'dark';
		document.body.classList.remove('light-theme');
		document.body.classList.add('dark-mode');
		document.getElementById("bt_dark").classList.remove("dark_im");
		document.getElementById("bt_dark").classList.add("light_im");	
	}else{
		colorTema = 'light';
		document.body.classList.remove('dark-mode');
		document.body.classList.add('light-theme');
		document.getElementById("bt_dark").classList.remove("light_im");
		document.getElementById("bt_dark").classList.add("dark_im");	
	}
		
    localStorage.setItem('tema', colorTema);
	
})
