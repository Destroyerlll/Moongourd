module.exports = function gourd(mod) {
	let enabled = false,
		userName = "",
		boss = "",
		region = mod.region;
		

	switch (region) {
		case "na":
			region = "/"
			break;
		case "eu":
			region = "/" + region + "/"
			break;
		case "ru":
			region = "/" + region + "/"
			break;
		default:
			mod.warn("This region is not supported by moongourd.")
			break;
	}
	
	

	mod.command.add("mg", {
		$none() {
		enabled = !enabled
		mod.command.message(`mongord enabled: ${enabled}`)
		},
		hh(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/950/4000/1/${name}?server=Velik`)
		})
		},
		tshm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/456/1003/1/${name}?server=Velik`)
		})
		},
		fanuw(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3203/1000/1/${name}?server=Velik`)
		})
		},
		fauw(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3103/1000/1/${name}?server=Velik`)
		})
		},
		dahm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3202/1000/1/${name}?server=Velik`)
		})
		},
		danm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3102/1000/1/${name}?server=Velik`)
		})
		},
		cshm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3126/1000/1/${name}?server=Velik`)
		})
		},
		csnm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3026/1000/1/${name}?server=Velik`)
		})
		},
		fa(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3027/1000/1/${name}?server=Velik`)
		})
		},
		bahaar(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/444/2000/1/${name}?server=Velik`)
		})
		},
		AQ(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3023/1000/1/${name}?server=Velik`)
		})
		},
		gvhm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3201/1000/1/${name}?server=Velik`)
		})
		},
		aahm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/920/1000/1/${name}?server=Velik`)
		})
		},
		glsh(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/982/1000/1/${name}?server=Velik`)
		})
		},
		tsnm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/756/1003/1/${name}?server=Velik`)
		})
		},
		help() {
		mod.command.message(`mg = Toggle on/off (it's on by default)`)
		mod.command.message(`mg = Toggle on/off (it's on by default)`)
		mod.command.message(`mg i (nickname) = inpect manual of the most recent history`)
		mod.command.message(`mg hh (nickname) = Harrowhold`)
		mod.command.message(`mg tshm (nickname) = Timescape Hard mode`)
		mod.command.message(`mg tsnm (nickname) = Timescape Normal Mode`)
		mod.command.message(`mg fanuw (nickname) = Forbidden Arena Nightmare Undying Warlord`)
		mod.command.message(`mg fauw (nickname) = Forbidden Arena Undying Warlord`)
		mod.command.message(`mg fa (nickname) = Forbidden Arena (Hagufna)`)
		mod.command.message(`mg dahm (nickname) = Drakon Arena Hard Mode`)
		mod.command.message(`mg danm (nickname) = Drakon Arena Normal Mode`)
		mod.command.message(`mg cshm (nickname) = Corrupted Skynest Hard Mode`)
		mod.command.message(`mg csnm (nickname) = Corrupted Skynest normal Mode`)
		mod.command.message(`mg bahaar (nickname) = Bahaar's Sanctum`)
		mod.command.message(`mg aq (nickname) = Akalath Quarantine`)
		mod.command.message(`mg gvhm (nickname) = Gossamer Vault Hard Mode`)
		mod.command.message(`mg aahm (nickname) = Antaroth's Abyss Hard Mode`)
		mod.command.message(`mg glshm (nickname) = Grotto of Lost Souls Hard Mode`)		
		},		
		i(name) {			
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/${name}?server=Velik`)
		})		
		}
	}, this);

	mod.game.on('enter_game', () => {
        	userName = mod.game.me.name
    	})

	mod.hook('S_USER_PAPERDOLL_INFO', 11, event => {
		if (enabled && event.name != userName) Open(event.name)
	})

	function Open(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
			link: encodeURI(`https://moongourd.com/search/${name}?server=Velik`)
		})
	}
}
