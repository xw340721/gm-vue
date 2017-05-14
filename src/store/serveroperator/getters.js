export default{
	mix_server: function (state) {
		let mix_items = state.mix_server,
		    options   = [];
		mix_items.forEach(function (value, key) {
			let option   = {};
			option.value = value.opgame_id;
			option.label = value.opgame_name
			options.push(option);
		});
		return options;
	},
	servers: function (state) {
		let orgin_servers = [],
		    servers       = [];
		if (state.choose_mix_server) {
			orgin_servers = state.servers.filter(function (value, key) {
				if (value.opgame_id == state.choose_mix_server) {
					return true
				}
				return false;
			});
			
			if (orgin_servers.length) {
				orgin_servers.forEach(function (value) {
					let option   = {};
					option.value = value.server_id;
					option.label = value.server_title
					servers.push(option);
				});
			}
		}
		return servers;
	},
	operator: function (state, getter, store) {
		//TODO 出现错误
		let orgin_operator = state.operator,
		    operator       = [];
		if (store.userModel.user.game_type == "m") {
			let op = store.userModel.user.op;
			if (op != "ADMIN") {
				op             = op.split(',');
				orgin_operator = state.operator.filter(function (value) {
					if (op.indexOf(value.op_id) != -1) {
						return true
					}
					return false;
				});
			}
		}
		console.log(operator);
		return operator;
	}
};