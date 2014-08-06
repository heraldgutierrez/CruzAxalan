var mongoose = require('mongoose');
var ScheduleModel = mongoose.model('Schedule');
var PlayerModel = mongoose.model('Players');
var TeamModel = mongoose.model('Teams');

exports.tryPopulate = tryPopulate;

function tryPopulate() {
	console.log('Trying to Populate...');

	ScheduleModel.find({}, function(err, result) {
		if(result.length == 0)
			populateSchedule();
	});

	PlayerModel.find({}, function(err, result) {
		if(result.length == 0)
			populatePlayers();
	});

	TeamModel.find({}, function(err, result) {
		if(result.length == 0)
			populateTeam();
	});

	console.log('Populating Complete...');
}

// Pre-populate the "Schedule" collection
function populateSchedule() {
	console.log('Starting: Populating Schedule...');
	var schedules = [
		new ScheduleModel({
			season	: 2014,
			week	: 1,
			date 	: 'February 1, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '2 pm',
					home 	: 'White',
					homeScore : 54,
					away 	: 'Green',
					awayScore : 38
				},
				{
					game 	: 2,
					time 	: '3 pm',
					home 	: 'Black',
					homeScore : 34,
					away 	: 'Yellow',
					awayScore : 33
				},
				{
					game 	: 3,
					time 	: '4 pm',
					home 	: 'Blue',
					homeScore : 47,
					away 	: 'Red',
					awayScore : 35
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 2,
			date 	: 'February 8, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'Black',
					homeScore : 37,
					away 	: 'Red',
					awayScore : 45
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'Blue',
					homeScore : 51,
					away 	: 'White',
					awayScore : 30
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Yellow',
					homeScore : 40,
					away 	: 'Green',
					awayScore : 25
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 3,
			date 	: 'February 15, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'Green',
					homeScore : 23,
					away 	: 'Blue',
					awayScore : 35
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'Yellow',
					homeScore : 24,
					away 	: 'Red',
					awayScore : 31
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Black',
					homeScore : 46,
					away 	: 'White',
					awayScore : 57
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 4,
			date 	: 'February 22, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'White',
					away 	: 'Yellow',
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'Black',
					away 	: 'Blue',
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Red',
					away 	: 'Green',
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 5,
			date 	: 'March 1, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'Green',
					away 	: 'Black',
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'White',
					away 	: 'Red',
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Yellow',
					away 	: 'Blue',
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 6,
			date 	: 'March 8, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'Red',
					away 	: 'Yellow',
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'White',
					away 	: 'Black',
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Blue',
					away 	: 'Green',
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 7,
			date 	: 'March 15, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'Green',
					away 	: 'White',
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'Yellow',
					away 	: 'Black',
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Red',
					away 	: 'Blue',
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 8,
			date 	: 'March 22, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'Blue',
					away 	: 'Black',
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'Green',
					away 	: 'Red',
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Yellow',
					away 	: 'White',
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 9,
			date 	: 'March 29, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'Yellow',
					away 	: 'Green',
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'Red',
					away 	: 'Black',
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Blue',
					away 	: 'White',
				}
			]
		}),
		new ScheduleModel({
			season	: 2014,
			week	: 10,
			date 	: 'April 5, 2014',
			games 	: [
				{
					game 	: 1,
					time 	: '1 pm',
					home 	: 'White',
					away 	: 'Red',
				},
				{
					game 	: 2,
					time 	: '2 pm',
					home 	: 'Yellow',
					away 	: 'Blue',
				},
				{
					game 	: 3,
					time 	: '3 pm',
					home 	: 'Black',
					away 	: 'Green',
				}
			]
		})
	];

	for(var i = 0; i < schedules.length; i++) {
		schedules[i].save(function(err, result) {});
	}

	console.log('Done: Populating Schedule...');
}

function populatePlayers() {
	console.log('Starting: Populating Players...');
	var players = [
		// Black
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Ilagan, Ali',
			number 		: '1',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 8,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Cabaguio, Michael',
			number 		: '4',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 10,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 12,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 13,
					fouls 	: 4,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Agbay, Ramil',
			number 		: '11',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 16,
					fouls 	: 3,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Tumambing, Amiel',
			number 		: '',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 3,
					fouls 	: 4,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Cabaguio, Eddie',
			number 		: '14',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 2,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Castillo, Glen',
			number 		: '15',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 4,
					fouls 	: 4,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 4,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 2,
					fouls 	: 2,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Fresno, Riccie',
			number 		: '18',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 14,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 2,
					fouls 	: 3,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 8,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Magsumbol, Germain',
			number 		: '22',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 2,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 0,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Ilagan, Alfred',
			number 		: '28',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 4,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 8,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 6,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Black',
			name 		: 'Cabaguio, Rico',
			number 		: '32',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'White',
					points 	: 0,
					fouls 	: 1,
					started : false
				}
			]
		}),
		
		// Blue
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Marqueses, Mico',
			number 		: '4',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 2,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 8,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 1,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Presto, Allan',
			number 		: '7',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Axalan, Jekko',
			number 		: '8',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 7,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Ilagan, PD',
			number 		: '00',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 4,
					fouls 	: 3,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Conching, Ronald',
			number 		: '10',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 23,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 12,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Balita, Kenneth',
			number 		: '12',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 4,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Axalan, Marlon',
			number 		: '13',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 4,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 4,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 5,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Madayag, Jason',
			number 		: '15',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 2,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 9,
					fouls 	: 4,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Gutierrez, Herald',
			number 		: '23',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 11,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 2,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 8,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Blue',
			name 		: 'Devilla, Jess',
			number 		: '24',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Red',
					points 	: 10,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'White',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Green',
					points 	: 12,
					fouls 	: 1,
					started : false
				}
			]
		}),
		
		// Green
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Fai Blay, Jhonny',
			number 		: '4',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 2,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 4,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 4,
					fouls 	: 2,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Malaso, Paul',
			number 		: '7',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 4,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 2,
					fouls 	: 3,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Balita, Totoy',
			number 		: '8',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 6,
					fouls 	: 3,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 0,
					fouls 	: 2,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Balita, Benjo',
			number 		: '10',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 3,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 5,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Castro, Drexler',
			number 		: '11',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 2,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 3,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 0,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Gutierrez, Art',
			number 		: '12',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 2,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 3,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 2,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Ilagan, Jhenix',
			number 		: '16',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 6,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 4,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 4,
					fouls 	: 2,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Gardiola, Mark',
			number 		: '23',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 12,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 9,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Green',
			name 		: 'Tumambing, Angel',
			number 		: '24',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'White',
					points 	: 4,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Blue',
					points 	: 6,
					fouls 	: 0,
					started : false
				}
			]
		}),
		
		// Red
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Gutierrez, Harvey',
			number 		: '5',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 8,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 12,
					fouls 	: 4,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 7,
					fouls 	: 3,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Dino, Nilo',
			number 		: '6',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 2,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Magbojos, Vic',
			number 		: '8',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 0,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 2,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Tubo, Ric',
			number 		: '9',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 2,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 2,
					fouls 	: 2,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Tubo, Kurt',
			number 		: '11',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 9,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 13,
					fouls 	: 4,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 8,
					fouls 	: 2,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Gutierrez, Herschel',
			number 		: '12',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 8,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 15,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 14,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Dabu, Raymond',
			number 		: '24',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 2,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 3,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Red',
			name 		: 'Castillo, Crispin',
			number 		: '30',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Blue',
					points 	: 4,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Yellow',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		
		// White
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Ylagan, Jedd',
			number 		: '4',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 2,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 2,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 4,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Tubo, Patrick',
			number 		: '6',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 9,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 7,
					fouls 	: 3,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Comia, Ian',
			number 		: '8',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 23,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 18,
					fouls 	: 0,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Marqueses, June',
			number 		: '00',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 10,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 7,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 8,
					fouls 	: 2,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Marqueses, Jerry',
			number 		: '12',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 10,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 2,
					fouls 	: 3,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Tumambing, Mark',
			number 		: '14',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 6,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 4,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 8,
					fouls 	: 1,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Tumambing, Nelson',
			number 		: '25',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Marqueses, Mike',
			number 		: '29',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 5,
					fouls 	: 0,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 4,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'White',
			name 		: 'Pangan, Ronnie',
			number 		: '32',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Blue',
					points 	: 4,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Black',
					points 	: 2,
					fouls 	: 2,
					started : true
				}
			]
		}),
		
		// Yellow
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Atienza, Celmar',
			number 		: '10',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Atienza, Israel',
			number 		: '5',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 4,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 6,
					fouls 	: 2,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Guerra, Roderick',
			number 		: '24',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 9,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 2,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 3,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Cleodoro, Jomar',
			number 		: '4',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 8,
					fouls 	: 5,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 3,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 12,
					fouls 	: 3,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'DeLos Reyes, Gener',
			number 		: '11',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 4,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 2,
					fouls 	: 2,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Guerra, Joseph',
			number 		: '26',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 4,
					fouls 	: 2,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 17,
					fouls 	: 3,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 2,
					fouls 	: 5,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Tumambing, Lorenzo',
			number 		: '29',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 4,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Tumambing, Ryan',
			number 		: '9',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : false
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Tumambing, Robert',
			number 		: '8',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 4,
					started : true
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 4,
					fouls 	: 1,
					started : true
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 2,
					fouls 	: 5,
					started : true
				}
			]
		}),
		new PlayerModel({
			season		: 2014,
			team 		: 'Yellow',
			name 		: 'Tumambing, Oscar',
			number 		: '17',
			stats 		: [
				{
					week 	: 1,
					date	: 'February 1, 2014',
					opp 	: 'Black',
					points 	: 0,
					fouls 	: 1,
					started : false
				},
				{
					week 	: 2,
					date	: 'February 8, 2014',
					opp 	: 'Green',
					points 	: 0,
					fouls 	: 0,
					started : false
				},
				{
					week 	: 3,
					date	: 'February 15, 2014',
					opp 	: 'Red',
					points 	: 0,
					fouls 	: 0,
					started : true
				}
			]
		})
	];

	for(var i = 0; i < players.length; i++) {
		players[i].save(function(err, result) {});
	}

	console.log('Done: Populating Players...');
}

function populateTeam() {
	console.log('Starting: Populating Teams...');
	var teams = [
		new TeamModel({
			team 		: 'Black',
			season 		: 2014,
			wins		: 1,
			losses		: 2,
			games		: [
				{
					week		: 1,
					date 		: 'February 1, 2014',
					home 		: true,
					opp			: 'Yellow',
					teamScore 	: 34,
					oppScore	: 33,
					winner 		: true
				},
				{
					week		: 2,
					date 		: 'February 8, 2014',
					home 		: true,
					opp			: 'Red',
					teamScore 	: 37,
					oppScore	: 45,
					winner 		: false
				},
				{
					week		: 3,
					date 		: 'February 15, 2014',
					home 		: true,
					opp			: 'White',
					teamScore 	: 46,
					oppScore	: 57,
					winner 		: false
				}
			]
		}),
		new TeamModel({
			team 		: 'Blue',
			season 		: 2014,
			wins		: 3,
			losses		: 0,
			games		: [
				{
					week		: 1,
					date 		: 'February 1, 2014',
					home 		: true,
					opp			: 'Red',
					teamScore 	: 47,
					oppScore	: 35,
					winner 		: true
				},
				{
					week		: 2,
					date 		: 'February 8, 2014',
					home 		: true,
					opp			: 'White',
					teamScore 	: 51,
					oppScore	: 30,
					winner 		: true
				},
				{
					week		: 3,
					date 		: 'February 15, 2014',
					home 		: false,
					opp			: 'Green',
					teamScore 	: 35,
					oppScore	: 23,
					winner 		: true
				}
			]
		}),
		new TeamModel({
			team 		: 'Green',
			season 		: 2014,
			wins		: 0,
			losses		: 3,
			games		: [
				{
					week		: 1,
					date 		: 'February 1, 2014',
					home 		: false,
					opp			: 'White',
					teamScore 	: 38,
					oppScore	: 53,
					winner 		: false
				},
				{
					week		: 2,
					date 		: 'February 8, 2014',
					home 		: false,
					opp			: 'Yellow',
					teamScore 	: 25,
					oppScore	: 40,
					winner 		: false
				},
				{
					week		: 3,
					date 		: 'February 15, 2014',
					home 		: true,
					opp			: 'Blue',
					teamScore 	: 23,
					oppScore	: 35,
					winner 		: false
				}
			]
		}),
		new TeamModel({
			team 		: 'Red',
			season 		: 2014,
			wins		: 2,
			losses		: 1,
			games		: [
				{
					week		: 1,
					date 		: 'February 1, 2014',
					home 		: false,
					opp			: 'Blue',
					teamScore 	: 35,
					oppScore	: 47,
					winner 		: false
				},
				{
					week		: 2,
					date 		: 'February 8, 2014',
					home 		: false,
					opp			: 'Black',
					teamScore 	: 45,
					oppScore	: 37,
					winner 		: true
				},
				{
					week		: 3,
					date 		: 'February 15, 2014',
					home 		: false,
					opp			: 'Yellow',
					teamScore 	: 31,
					oppScore	: 24,
					winner 		: true
				}
			]
		}),
		new TeamModel({
			team 		: 'White',
			season 		: 2014,
			wins		: 2,
			losses		: 1,
			games		: [
				{
					week		: 1,
					date 		: 'February 1, 2014',
					home 		: true,
					opp			: 'Green',
					teamScore 	: 54,
					oppScore	: 38,
					winner 		: true
				},
				{
					week		: 2,
					date 		: 'February 8, 2014',
					home 		: false,
					opp			: 'Blue',
					teamScore 	: 30,
					oppScore	: 51,
					winner 		: false
				},
				{
					week		: 3,
					date 		: 'February 15, 2014',
					home 		: false,
					opp			: 'Black',
					teamScore 	: 57,
					oppScore	: 46,
					winner 		: true
				}
			]
		}),
		new TeamModel({
			team 		: 'Yellow',
			season 		: 2014,
			wins		: 1,
			losses		: 2,
			games		: [
				{
					week		: 1,
					date 		: 'February 1, 2014',
					home 		: false,
					opp			: 'Black',
					teamScore 	: 33,
					oppScore	: 34,
					winner 		: false
				},
				{
					week		: 2,
					date 		: 'February 8, 2014',
					home 		: true,
					opp			: 'Green',
					teamScore 	: 40,
					oppScore	: 25,
					winner 		: true
				},
				{
					week		: 3,
					date 		: 'February 15, 2014',
					home 		: true,
					opp			: 'Red',
					teamScore 	: 24,
					oppScore	: 31,
					winner 		: false
				}
			]
		})
	];

	for(var i = 0; i < teams.length; i++) {
		teams[i].save(function(err, result) {});
	}

	console.log('Done: Populating Teams...');
}