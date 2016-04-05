var party;
var name;
var randomrepublicanNoun;
var randomrepublicanNoun2;
var randomrepublicanNoun3;
var randomrepublicanAdjective;
var randomrepublicanAdjective2;
var randomrepublicanAdjective3;
var randomrepublicanVerb;
var randomrepublicanVerb2;
var randomrepublicanVerb3;
var randomdemocratNoun;
var randomdemocratNoun2;
var randomdemocratNoun3;
var randomdemocratAdjective;
var randomdemocratAdjective2;
var randomdemocratAdjective3;
var randomdemocratVerb;
var randomdemocratVerb2;
var randomdemocratVerb3;

var democratNouns = ['America', 'Leader', 'Leadership', 'Prosperity', 'Future', 'Hope', 'Tomorrow', 'Equality', 'Hope', 'Experience', 'Change', 'Tomorrow', 'Future', 'Smartness', 'Education', 'Revolution', 'Peace', 'Politics', 'Atheism', 'Godlessness', 'ISIS', 'Terrorism', 'Obama', 'Clinton', 'Russia', 'Iran', 'Readiness', 'Scholar', 'Fraud', 'Abuse', 'Disgrace', 'Catastrophe', 'Inversion', 'Surplus', 'Formula', 'Architect', 'Welfare', 'Socialism', 'Immigration'];
var democratAdjectives = ['American', 'Smart', 'Educated', 'Intelligent', 'Moderate', 'Amazing', 'Incredible', 'Hopeful', 'Real', 'New', 'Experienced', 'Sudden', 'Nasty', 'Nice', 'Eminent'];
var democratVerbs = ['Believe ', 'Make', 'Reignite', 'Hope', 'Tell', 'Come', 'Strive', 'Earn', 'Try', 'Share', 'Surrender', 'Pacify', 'Equalize'];
var republicanNouns = ['America', 'Leader', 'Leadership', 'Experience', 'Change', 'Reform', 'Winner', 'Peace', 'Experience', 'Protection', 'Security', 'War', 'Today', 'Consistency', 'Moderation', 'Money', 'Religion', 'God', 'Revolution', 'Peace', 'Politics', 'Outsider', 'Health', 'Anger', 'Fear', 'Ingenuity', 'ISIS', 'ABORTION', 'Terrorism', 'Bible', 'Bush', 'Obama', 'Loser', 'Liar', 'Muslims', '9/11', 'Businessman', 'Disgrace', 'Catastrophe', 'Patriot'];
var republicanAdjectives = ['American', 'Great', 'Amazing', 'Incredible', 'Moderate', 'Hopeful', 'Real', 'New', 'Angry', 'Scared', 'Deviant', 'Fantastic', 'Strong', 'Unbelievable', 'Tremendous', 'Nasty', 'Incumbent', 'Clandestine', 'Imperialist'];
var republicanVerbs = ['Believe ', 'Make', 'Reignite', 'Hope', 'Tell', 'Come', 'Strive', 'Earn', 'Try', 'Do', 'Attach', 'Declare', 'Separate', 'Persecute'];


$('button').on('click',function(){
	if ($(this).hasClass('democrat')){
		$(this).css('color','white');
		$(this).css('background-color','#093E80');
		$(this).css('border-color','#093E80');
		$('.republican').css('color','white');
		$('.republican').css('background-color','white');
		$('.republican').css('border-color','white');
		$(this).animate({left: '1000px'},750);
		$('.republican').animate({left: '1000px'},750,function(){
			$('.yourName').animate({bottom: '100px'},750);
			$('.yourName h2').css('color','#333333');
			$('#name').css('border-color','#333333');
			$('#submit').css('border-color','#333333');
			$('#submit').css('color','#333333');
		});
	} else if ($(this).hasClass('republican')){
		$(this).css('color','white');
		$(this).css('background-color','#E10A19');
		$(this).css('border-color','#E10A19');
		$('.democrat').css('color','white');
		$('.democrat').css('background-color','white');
		$('.democrat').css('border-color','white');
		$(this).animate({left: '1000px'},750);	
		$('.democrat').animate({left: '1000px'},750, function(){
			$('.yourName').animate({bottom: '100px'},750);
			$('.yourName h2').css('color','#333333');
			$('#name').css('border-color','#333333');
			$('#submit').css('border-color','#333333');
			$('#submit').css('color','#333333');
		});	
	}
	party = $(this).text();
});

$('#submit').on('click',function(){
	event.preventDefault();
	name = $('#name').val();
	$('.yourName').animate({left: '1000px'},750,function(){
		if (party === "Republican"){
			randomrepublicanNoun = republicanNouns[Math.floor(Math.random()*republicanNouns.length)];
			randomrepublicanNoun2 = republicanNouns[Math.floor(Math.random()*republicanNouns.length)];
			randomrepublicanNoun3 = republicanNouns[Math.floor(Math.random()*republicanNouns.length)];
			randomrepublicanAdjective = republicanAdjectives[Math.floor(Math.random()*republicanAdjectives.length)];
			randomrepublicanAdjective2 = republicanAdjectives[Math.floor(Math.random()*republicanAdjectives.length)];
			randomrepublicanAdjective3 = republicanAdjectives[Math.floor(Math.random()*republicanAdjectives.length)];
			randomrepublicanVerb = republicanVerbs[Math.floor(Math.random()*republicanVerbs.length)];
			randomrepublicanVerb2 = republicanVerbs[Math.floor(Math.random()*republicanVerbs.length)];
			randomrepublicanVerb3 = republicanVerbs[Math.floor(Math.random()*republicanVerbs.length)];
			var republicanChoices = [randomrepublicanVerb + ". " + randomrepublicanVerb2 + ". " + randomrepublicanVerb3 + ".", randomrepublicanAdjective + " " + randomrepublicanNoun + ". " + randomrepublicanAdjective2 + " " + randomrepublicanNoun2 + ".", "Reigniting the " + randomrepublicanNoun + " of America.", "A " + randomrepublicanAdjective + " " + randomrepublicanAdjective2 + " " + randomrepublicanNoun + ".", "From " + randomrepublicanNoun + " to " + randomrepublicanNoun2 + ".", "Believe in " + name + ".", name + " for Us.", "A " + randomrepublicanAdjective + " " + randomrepublicanNoun + " is Coming.", name + " for " + randomrepublicanNoun + ".", randomrepublicanVerb + " " + randomrepublicanNoun + " " + randomrepublicanAdjective + " Again.", randomrepublicanVerb + " America Now.", "The People's " + randomrepublicanNoun + ".", randomrepublicanNoun + " Matters.", randomrepublicanVerb + " Our " + randomrepublicanNoun + ".", "Obama is " + randomrepublicanAdjective + ".", randomrepublicanNoun + ". " + randomrepublicanNoun2 + ". " + randomrepublicanNoun3 + ".", "A " + randomrepublicanAdjective + " " + randomrepublicanNoun + " for America."];
			$('.yourName').remove();
			$('.republican').remove();
			$('.democrat').remove();
			$('.myname').html(name);
			$('.response').html(republicanChoices[Math.floor(Math.random()*republicanChoices.length)]);
		} else if (party === "Democrat") {
			randomdemocratNoun = democratNouns[Math.floor(Math.random()*democratNouns.length)];
			randomdemocratNoun2 = democratNouns[Math.floor(Math.random()*democratNouns.length)];
			randomdemocratNoun3 = democratNouns[Math.floor(Math.random()*democratNouns.length)];
			randomdemocratAdjective = democratAdjectives[Math.floor(Math.random()*democratAdjectives.length)];
			randomdemocratAdjective2 = democratAdjectives[Math.floor(Math.random()*democratAdjectives.length)];
			randomdemocratAdjective3 = democratAdjectives[Math.floor(Math.random()*democratAdjectives.length)];
			randomdemocratVerb = democratVerbs[Math.floor(Math.random()*democratVerbs.length)];
			randomdemocratVerb2 = democratVerbs[Math.floor(Math.random()*democratVerbs.length)];
			randomdemocratVerb3 = democratVerbs[Math.floor(Math.random()*democratVerbs.length)];
			var democratChoices = [randomdemocratVerb + ". " + randomdemocratVerb2 + ". " + randomdemocratVerb3 + ".", randomdemocratAdjective + randomdemocratNoun + ". " + randomdemocratAdjective2 + randomdemocratNoun2 + ".", "Reigniting the " + randomdemocratNoun + " of America.", "A " + randomdemocratAdjective + " " + randomdemocratAdjective2 + " " + randomdemocratNoun + ".", "From " + randomdemocratNoun + " to " + randomdemocratNoun2 + ".", "Believe in " + name + ".", name + " for Us.", "A " + randomdemocratAdjective + " " + randomdemocratNoun + " is Coming.", name + " for " + randomdemocratNoun + ".", randomdemocratVerb + " " + randomdemocratNoun + " " + randomdemocratAdjective + " Again.", randomdemocratVerb + " America now.", "The People's " + randomdemocratNoun + ".", randomdemocratNoun + " Matters.", randomdemocratVerb + " Our " + randomdemocratNoun + ".", "Obama is " + randomdemocratAdjective + ".", randomdemocratNoun + ". " + randomdemocratNoun2 + ". " + randomdemocratNoun3 + ".", "A " + randomdemocratAdjective + " " + randomdemocratNoun + " for America."];
			$('.yourName').remove();
			$('.republican').remove();
			$('.democrat').remove();
			$('.myname').html(name);
			$('.response').html(democratChoices[Math.floor(Math.random()*democratChoices.length)]);
		}
	});
	});
