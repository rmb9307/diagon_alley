'use strict';

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
	user: {
		type: Sequelize.INTEGER, // if session converts to user, update user & userType
	},
	userType: {
		type: Sequelize.STRING // 'session' vs 'user'
	},
	status: {
		type: Sequelize.STRING,
		defaultValue: 'pending' // 'pending' vs 'completed'
	},
	dateCompleted: {
		type: Sequelize.DATE,
		defaultValue: null
	}
}, {
	getterMethods: {

	}
});


// Automatically set date Completed (once) when status is complete and
// dateCompleted hadn't already been set
Order.addHook("afterUpdate", "addDateCompleted", function(order){
	if(order.status === "completed" && !order.dateCompleted){
		order.dateCompleted = new Date();
	}
});

module.exports = Order;