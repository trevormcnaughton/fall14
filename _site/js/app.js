$(document).ready(function() {
	var DID = {
		createPairs: function() {
			var $pairList = $('.partner-list');
			var $partnerButton = $('.partner-button');
			var pairs = [];
			var shuffled = [];
			var people = [
			'AJ',
			'Shayne',
			'Raciel',
			'Luke',
			'Dante',
			'Elijah',
			'David',
			'Claudia',
			'Tim',
			'Adam',
			'Becca',
			'Stephen',
			'Jake',
			'Jordan',
			'Eric',
			'Zach',
			'Mary'
			];

			while (people.length > 0) {
				var idx = _.random(0, people.length - 1);
				shuffled.push(people[idx]);
				people.splice(idx, 1);
			}

			pairs = _.chain(shuffled)
			.map(function (person, i) {
				if (i % 2 === 0) {
					return {
						a: person,
						b: shuffled[i + 1] || '¯\\_(ツ)_/¯ '
					};
				}
			})
			.compact()
			.value();

			function createPairs() {
				for(var i = 0; i < pairs.length; ++i) {
					$pairList.append('<div class="partner-group"><h3>' + pairs[i].a + '</h3>' + '<h3>' + pairs[i].b + '</h3></div>');
				}
			}

			$partnerButton.on('click', function(e) {
				e.preventDefault();
				createPairs();
				$(this).hide();
			});
		},
		particles: function() {

			var self = window.self;

			(function(self) {


				var points = [], numPoints = 60, i, canvas, context, width, height, bounce = -0.9, particleSize = [];

				canvas = document.getElementById("canvas");
				width = self.innerWidth;
				height = $('.masthead').outerHeight();
				context = canvas.getContext("2d");

				context.canvas.width = width;
				context.canvas.height = height;

				self.addEventListener('resize', function() {
					width = self.innerWidth;
					context.canvas.width = width;
				});

				for(i = 0; i < numPoints; i += 1) {
					points.push({
						x:Math.random() * width,
						y:Math.random() * height,
						vx:Math.random() * 0.75 - 0.25,
						vy:Math.random() * 0.75 - 0.25
					});
					particleSize.push( Math.random() * 10 + 5 );
				}

				function drawCircle(x, y, radius) {
					context.beginPath();
					context.arc(x, y, radius, 0, Math.PI * 2, false);
					context.fillStyle="rgba(255, 255, 255, 0.5)";
					context.fill();
					context.closePath();
				}


				function update() {
					var i, point;

					for(i = 0; i < numPoints; i += 1) {

						point = points[i];
						point.x += point.vx;
						point.y += point.vy;

						if( point.x >= width ) {
							point.x = width;
							point.vx *= bounce;
						}
						else if(point.x <= 0) {
							point.x = 0;
							point.vx *= bounce;
						}
						if(point.y > height) {
							point.y = height;
							point.vy *= bounce;
						}
						else if(point.y < 0) {
							point.y = 0;
							point.vy *= bounce;
						}
					}
					draw();
				}

				function draw() {
					context.clearRect(0, 0, width, height);
					var i, point, sides = 6, a = ((Math.PI * 2)/sides);
					for(i = 0; i < numPoints; i += 1) {
						point = points[i];
						var size = particleSize[i];
						drawCircle(point.x, point.y, size);
					}
				}

				function render () {
					update();
					requestAnimationFrame(render);
				}

				requestAnimationFrame(render);

			})(self);

			return;
		},
		init: function() {
			this.particles();
			this.createPairs();
			console.log('init');
		}
	};

DID.init();

});
