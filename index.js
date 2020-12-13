module.exports = function gourd(mod) {
	let enabled = false,
		userName = "";

	mod.command.add("mg", {
		$none() {
		enabled = !enabled
		mod.command.message(`mongord enabled: ${enabled}`)
		},
		hh(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/950/4000/1/${name}`)
		})
		},
		tshm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/456/1003/1/${name}`)
		})
		},
		fanuw(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3203/1000/1/${name}`)
		})
		},
		fauw(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3103/1000/1/${name}`)
		})
		},
		dahm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3202/1000/1/${name}`)
		})
		},
		danm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3102/1000/1/${name}`)
		})
		},
		cshm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3126/1000/1/${name}`)
		})
		},
		csnm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3026/1000/1/${name}`)
		})
		},
		fa(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3027/1000/1/${name}`)
		})
		},
		bahaar(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/444/2000/1/${name}`)
		})
		},
		AQ(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3023/1000/1/${name}`)
		})
		},
		gvhm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/3201/1000/1/${name}`)
		})
		},
		aahm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/920/1000/1/${name}`)
		})
		},
		glsh(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/982/1000/1/${name}`)
		})
		},
		tsnm(name) {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/756/1003/1/${name}`)
		})
		},
		help() {
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://cdn.discordapp.com/attachments/732814199591272549/785982720546308116/unknown.png`)
		})		
		},		
		i(name) {			
		mod.toClient('S_SHOW_AWESOMIUMWEB_SHOP', 1, {
		link: encodeURI(`https://moongourd.com/search/${name}`)
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
			link: encodeURI(`https://moongourd.com/search/${name}`)
		})
	}
}
