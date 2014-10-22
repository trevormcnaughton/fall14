$(document).ready(function() {

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

});
