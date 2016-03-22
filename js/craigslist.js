$('#answers').hide();

$('.image1 img').on('click',function(){
	$('#answers').slideDown();
	$('html, body').animate({scrollTop: '+=500px'}, 800);
  $('.topsection').animate({height:'500'});
});

$('#answers button').on('click',function(){
	if ($(this).parents().hasClass('single')){
		$(this).siblings().css('color','#694489');
		$(this).siblings().css('background-color','white');
		$(this).css('background-color','#694489'); 
		$(this).css('color','white'); 	
	} else {
		$(this).css('background-color','#694489'); 
		$(this).css('color','white'); 
	}
});

$('#question1 button').on('click',function(){
  $('#answers').slideDown();
  $('html, body').animate({scrollTop: '+=500px'}, 800);
  $('.topsection').animate({height:'500'});
  $('.city').hide();
    if ($(this).parents().hasClass('single')){
    $(this).siblings().css('color','#C3BDFB');
    $(this).siblings().css('background-color','white');
    $(this).css('background-color','#694489'); 
    $(this).css('color','white');   
  } else {
    $(this).css('background-color','#4288D6'); 
    $(this).css('color','white'); 
  }
});

var question_1;
var answer_1;
var random_1;
var random1Fun = [" I'm also selling my Beanie Baby collection - yes, I still have a Beanie Baby collection and no, I am not selling it of my own free will.", " Please note that if you own a teacup pig and/or house in Bora Bora, you may receive an unfair advantage."," Please be advised that there is a secret door in my closet that we have never been able to open but that does sometimes emit strange noises, so it could be a portal to another dimension."];
var random1Serious = [" Please only email with serious inquiries and be prepared to provide proof of income immediately.", " Please link to your LinkedIn profile in any emails you send. Emails without a LinkedIn profile attached will be deleted."," Please provide phone number as well."];
var random1Normal = [" This is a great place and I'm sad to be leaving, but I'll be happy knowing that someone else gets to enjoy it."," Please get in touch if you're interested. I'm happy to chat over email or on the phone."," I'm looking to find a subletter as quickly as possible, so please get in touch if interested!"];

$('#question1 button').on('click',function(){
	question_1 = $(this).text();
  console.log(question_1);
});

var answer_2to5;
var answer_2;
var answer_3;
var answer_4;
var answer_5;
var answer_6;	
var answer_5to6;
var answer_5to6followup;
var multiAnswers;
var answer_7 = "";
var answer_7array = [];
var answer_8;
var answer_8followup;
var answer_9 = "";
var answer_9array = [];
var answer_10intro;
var answer_10 = "";
var answer_10array = [];
var answer_11 = "";
var answer_11array = [];
var answer_12;
var answer_12followup;
var ending_greeting;
/* JSON */

var multiAnswers = {
  "question1": {
    "fun": "Sentence about fun",
    "serious": "Sentence about serious",
    "normal": "Sentence about normal"
  },
  "question2": {
    "apartment": "Sentence about apartment",
    "house": "Sentence about house",
    "highrise": "Sentence about highrise"
  },
  "question6": {
    "Fun":{
      "Hipster": {
        "type":"Hipster",
        "description":"If you're young, the hipster vibe should be perfect. Obviously a lot of handlebar mustaches everywhere but you also get the perks of hipsterdom, like craft beer, young attractive folks everywhere, and great restaurants opening every day."
      },
      "Families": {
        "type":"Families",
        "description":"Definitely a ton of families and not quite as many shops as other nearby areas, but if you like the quiet after coming home from work, you'll love it."
      },
      "Downtown": {
        "type":"Downtown",
        "description":"You're in a pretty busy part of the city, so this is definitely for folks who like hustle and bustle and don't mind sirens late at night. ;-) But don't worry, our walls are super thick."
      },
      "Commercial": {
        "type":"Commercial",
        "description":"Since it's a business area, that means not a ton of restaurants opened nearby on weekends, but also not a lot of people on weekends, so it's a great escape from the madness of downtown."
      },
      "Suburban": {
        "type":"Suburban",
        "description":"You're a decent distance from downtown, which is great if you like the quiet, and things are also a bit cheaper so that's awesome!"
      }
    },
    "Serious":{
      "Hipster": {
        "type":"Hipster",
        "description":"I honestly don't love hipsters, but the food and drinks around here are amazing as a result, so that's cool"
      },
      "Families": {
        "type":"Families",
        "description":"But this area is definitely very residential so expect lots of families."
      },
      "Downtown": {
        "type":"Downtown",
        "description":"There are lots of noises late at night, people screaming, ambulances, etc. But obviously that also means you've got an amazing number of shopping opportunities nearby, and the apartment blocks sound very well."
      },
      "Commercial": {
        "type":"Commercial",
        "description":"Lots of banks nearby as well, so expect a sea of people in suits on your daily commute."
      },
      "Suburban": {
        "type":"Suburban",
        "description":"The neighborhood is super quiet and truly has a suburban feel which is great."
      }
    },
    "Normal":{
      "Hipster": {
        "type":"Hipster",
        "description":"To be honest, I kind of love the hipster feel because everything looks so damn pretty and tastes so good."
      },
      "Families": {
        "type":"Families",
        "description":"Lots of families. Lots of strollers. Lots of uncrowded bars. Overall, awesome."
      },
      "Downtown": {
        "type":"Downtown",
        "description":"You're in the center of a lot of action, so be ready for some noise, but the apartment blocks sound very well so don't worry too much. You know what you're getting when you live in this area."
      },
      "Commercial": {
        "type":"Commercial",
        "description":"Not a ton of energy on the weekends, but maybe you like that! I sure do."
      },
      "Suburban": {
        "type":"Suburban",
        "description":"You get all the benefits of living in the city, but with a nice quiet place to go home to after a long day."
      }
    }
  },
  "question7": {
    "Fun":{
      "Laundry": {
        "type":"Laundry",
        "description":"There's amazing laundry spots within a few blocks (hint: they fold everything for you!)"
      },
      "Bars/Restaurants": {
        "type":"Bars/Restaurants",
        "description":"And the bars - don't get me started on the bars. So many amazing bars within walking distance, so you can stumble home after a late night of fun."
      },
      "Groceries": {
        "type":"Groceries",
        "description":"You'll never go hungry because there are tons of amazing grocery stores just around the corner. From organic abodes to kale-free zones."
      },
      "Subway": {
        "type":"Subway",
        "description":"The subway is also super close and the commute to other areas of the city is a breeze."
      },
      "Park": {
        "type":"Park",
        "description":"If you like running or just being near nature, the park is super close too. Just don't go in after dark or the park goblins will eat you."
      },
      "Coffeeshops": {
        "type":"Coffeeshops",
        "description":"The morning caffeine stations are super close, and the coffee is great at most of them. Also, recommend you work on a screenplay if you're going to sit inside of one, or else you'll be kicked out."
      },
      "Shopping": {
        "type":"Shopping",
        "description":"There are also a good number of shops nearby, so you can buy clothes/trinkets/hats/whatever you enjoy! Even Beanie Babies! (just kidding)."
      }
    },
    "Serious":{
      "Laundry": {
        "type":"Laundry",
        "description":"Laundry is very close and super cheap."
      },
      "Bars/Restaurants": {
        "type":"Bars/Restaurants",
        "description":"A good number of bars as well, if you're into that."
      },
      "Groceries": {
        "type":"Groceries",
        "description":"There are a few good grocery stores as well, for your cooking needs."
      },
      "Subway": {
        "type":"Subway",
        "description":"The subway is close as well."
      },
      "Park": {
        "type":"Park",
        "description":" Also, there's a nice park nearby that is beautiful during the summer."
      },
      "Coffeeshops": {
        "type":"Coffeeshops",
        "description":"The area also has a good number of coffeeshops."
      },
      "Shopping": {
        "type":"Shopping",
        "description":"Finally, a nice amount of shopping choices nearby."
      }
    },
    "Normal":{
      "Laundry": {
        "type":"Laundry",
        "description":"Laundry is nearby and there are many options for self-service or full-service."
      },
      "Bars/Restaurants": {
        "type":"Bars/Restaurants",
        "description":"There are some great bars nearby that make drinking very easy (too easy?)."
      },
      "Groceries": {
        "type":"Groceries",
        "description":"Although I don't cook a lot, there are a lot of grocery stores for the times when you don't want to order delivery."
      },
      "Subway": {
        "type":"Subway",
        "description":"The subway is really close and makes getting to and from the city a breeze."
      },
      "Park": {
        "type":"Park",
        "description":"The park is great for picnics, running, etc."
      },
      "Coffeeshops": {
        "type":"Coffeeshops",
        "description":"I love coffee and this area does not leave me wanting."
      },
      "Shopping": {
        "type":"Shopping",
        "description":"Finally, tons of great places to shop nearby!"
      }
    }
  },
  "question8": {
    "Fun":{
      "Social butterfly": {
        "type":"Social butterfly",
        "description":"Ideally you are a pretty social person who works hard but also likes to have a good time. I'd say a perfect fit would be someone who likes to keep their door open and go out most weekend nights, but can appreciate a good Netflix and Chill as well. Totally fine if you want to have friends over from time to time."
      },
      "Keeps to themselves": {
        "type":"Keeps to themselves",
        "description":"We're looking for someone who's pretty quiet, respectful, and generally likes to keep the apartment as calm as possible. No ragers at home (totally fine if you like to rage outside!)."
      },
      "A good mix": {
        "type":"A good mix",
        "description":"We're not looking for someone who's a manic social butterfly (Manic Social Butterfly - term copyrighted by me) or for someone who's a total shut-in and/or debbie-downer. Hopefully you like making new friends, love to hang and destress after a long day, and are an all-a round delight of a person!"
      }
    },
    "Serious":{
      "Social butterfly": {
        "type":"Social butterfly",
        "description":"A social butterfly. The roommates want someone social, fun, outgoing, and ready to party!"
      },
      "Keeps to themselves": {
        "type":"Keeps to themselves",
        "description":"A quiet presence. The roommates want someone, like them, who is quiet, respectful, and keeps the party outside of the apartment."
      },
      "A good mix": {
        "type":"A good mix",
        "description":"A fun presence in the apartment. You like to chat/hang/drink/party but also know when to chill."
      }
    },
    "Normal":{
      "Social butterfly": {
        "type":"Social butterfly",
        "description":"Ideally, you are energetic and always ready to party! The roommates love to go wild from time to time, so if you can hang with them, then that'd be amazing!"
      },
      "Keeps to themselves": {
        "type":"Keeps to themselves",
        "description":"Ideally, you are a quiet person. Someone who works outside of the apartment, and their idea of a wild night is Netflix + a glass of Chardonnay."
      },
      "A good mix": {
        "type":"A good mix",
        "description":"Ideally, you are a fun presence in the apartment. You have a good number of friends and know that just because it's friday, doesn't mean you have to go rage - a night of hanging in and playing Arrested Development drinking games is just as fun."
      }
    }
  },
  "question9": {
    "Fun":{
      "20s": {
        "type":"20s",
        "description":"They are in their 20s and have a good group of friends in the city (mostly from college)."
      },
      "30s": {
        "type":"30s",
        "description":"They are in their 30s and therefore a bit more settled than a couple of wild college kids. Ideally, you're in your 30s as well - no frat bros here!"
      },
      "Creatives": {
        "type":"Creatives",
        "description":"They work in creative fields and it's not too weird to see crazy art flowing in and out of the apartment on a weekly basis."
      },
       "Professionals": {
        "type":"Professionals",
        "description":"They work as business professionals and most of their friends do too. Suits rule!"
      }
    },
    "Serious":{
      "20s": {
        "type":"20s",
        "description":"They are in their 20s and would like someone who is the same."
      },
      "30s": {
        "type":"30s",
        "description":"They are in their 30s and would like someone who is the same."
      },
      "Creatives": {
        "type":"Creatives",
        "description":"They work in creative fields so someone very creative would be great."
      },
       "Professionals": {
        "type":"Professionals",
        "description":"They work as business professionals and have pretty crazy hours, so don't be surprised if you don't see them during the week a lot."
      }
    },
    "Normal":{
      "20s": {
        "type":"20s",
        "description":"They are in their 20s and would love for you to be too! Everyone has busy lives but likes to hang together when the situation calls for it."
      },
      "30s": {
        "type":"30s",
        "description":"They are in their 30s and would like someone who is the same - settled, sure of themself, and able to have some good deep conversations about life/marriage/passion from time to time."
      },
      "Creatives": {
        "type":"Creatives",
        "description":"They work in creative fields so someone very creative would be great. Ideal candidate would be an art director at a design agency ;-)"
      },
       "Professionals": {
        "type":"Professionals",
        "description":"They work as business professionals and have pretty crazy hours, since they're very focused on their careers right now."
      }
    }
  },
  "question10": {
    "Fun":{
      "Dogs": {
        "type":"Dogs",
        "description":"Dogs are okay as long as they're not massive and/or shed a ton."
      },
      "Cats": {
        "type":"Cats",
        "description":"Cats are okay as long as they don't shed a ton and pee errywhere!"
      },
      "Couples": {
        "type":"Couples",
        "description":"We are open to chatting with couples about the room, so long as you don't fight all the time ;-) And can cook really well, and provide relationship advice upon request."
      },
       "Smokers": {
        "type":"Smokers",
        "description":"Smokers are okay so long as you never smoke in the apartment."
      },
       "420": {
        "type":"420",
        "description":"And we are, of course, 420 friendly (that can happen in the apartment)."
      }
    },
    "Serious":{
      "Dogs": {
        "type":"Dogs",
        "description":"Dogs are okay if they spend most of their time in your room, unless agreed upon by the roommates."
      },
      "Cats": {
        "type":"Cats",
        "description":"Cats are okay if they spend most of their time in your room and don't shed."
      },
      "Couples": {
        "type":"Couples",
        "description":"We are open to couples as well, as long as the pair pays their share of utilities for two people."
      },
       "Smokers": {
        "type":"Smokers",
        "description":"The roommates are okay if you smoke, but obviously only outside."
      },
       "420": {
        "type":"420",
        "description":"420 is okay too."
      }
    },
    "Normal":{
      "Dogs": {
        "type":"Dogs",
        "description":"Dogs are okay as long as they are cute and not rabid."
      },
      "Cats": {
        "type":"Cats",
        "description":"Cats are okay as long as they are super cute."
      },
      "Couples": {
        "type":"Couples",
        "description":"Cool couples can apply as well, but will be held to higher coolness standards."
      },
       "Smokers": {
        "type":"Smokers",
        "description":"The roommates are okay if you smoke, but obviously only outside. However, we'd recommend you quit because smoking is bad for you."
      },
       "420": {
        "type":"420",
        "description":"420 is okay, if you share. ;-)"
      }
    },
  },
  "question11": {
    "Fun":{
      "Dogs": {
        "type":"Dogs",
        "description":"Unfortunately no dogs (but pets are okay if it can live in a small glass cage in your room. i.e. tarantulas)."
      },
      "Cats": {
        "type":"Cats",
        "description":"Cats are unfortunately not allowed"
      },
      "Couples": {
        "type":"Couples",
        "description":"No couples! We love couples, but don't want to deal with coupley nonsense. Too risky!"
      },
       "Smokers": {
        "type":"Smokers",
        "description":"NO smokers. Sorry!"
      },
       "Drugs": {
        "type":"Drugs",
        "description":"No hard drugs (except for the really light stuff. See above)."
      },
       "Children": {
        "type":"Children",
        "description":"Children are cool, but this abode is no place for a child :-D"
      }
    },
    "Serious":{
      "Dogs": {
        "type":"Dogs",
        "description":"No dogs at all."
      },
      "Cats": {
        "type":"Cats",
        "description":"No cats allowed."
      },
      "Couples": {
        "type":"Couples",
        "description":"No couples!"
      },
       "Smokers": {
        "type":"Smokers",
        "description":"NO smokers."
      },
       "Drugs": {
        "type":"Drugs",
        "description":"No hard drugs in the house, obviously."
      },
       "Children": {
        "type":"Children",
        "description":"No kids."
      }
    },
    "Normal":{
      "Dogs": {
        "type":"Dogs",
        "description":"No dogs unless they're the size of a teacup, literally."
      },
      "Cats": {
        "type":"Cats",
        "description":"Cats are unfortunately not allowed in our casa."
      },
      "Couples": {
        "type":"Couples",
        "description":"Couples need not apply."
      },
       "Smokers": {
        "type":"Smokers",
        "description":"No smoking (there's like 10 smoke alarms in this apartment!)."
      },
       "Drugs": {
        "type":"Drugs",
        "description":"No hard drugs in the house, obviously."
      },
       "Children": {
        "type":"Children",
        "description":"No kids either."
      }
    },
  }
}

/* end JSON */

$('#answers #question2 button').on('click',function(){
	answer_2 = $(this).text();
	console.log(answer_2);
});

$('#answers #question3 button').on('click',function(){
	answer_3 = $(this).text();
});

$('#answers #question6 button').on('click',function(){
	answer_6 = $(this).text();
	answer_5to6followup = (multiAnswers['question6'][question_1][answer_6]['description']);
});

$('#answers #question7 button').on('click',function(){
	answer_7array.push($(this).text());
	console.log(answer_7array);
	});

$('#answers #question8 button').on('click',function(){
	answer_8 = $(this).text();
	console.log(answer_8);
	answer_8followup = (multiAnswers['question8'][question_1][answer_8]['description']);
	console.log(answer_8followup);
});
	
function answer_7followup(){
  answer_7 = "";
  for (var i = 0; i<answer_7array.length; i++){
    answer_7 = answer_7 + ' ' + multiAnswers['question7'][question_1][answer_7array[i]]['description'];
  }
  return answer_7;
};

$('#answers #question9 button').on('click',function(){
	answer_9array.push($(this).text());
	console.log(answer_9array);
	});

function answer_9followup(){
  answer_9 = "";
  for (var i = 0; i<answer_9array.length; i++){
    answer_9 = answer_9 + ' ' + multiAnswers['question9'][question_1][answer_9array[i]]['description'];
  }
  return answer_9;
};

$('#answers #question10 button').on('click',function(){
	answer_10array.push($(this).text());
	console.log(answer_10array);
	});

function answer_10followup(){
  answer_10 = "";
  for (var i = 0; i<answer_10array.length; i++){
    answer_10 = answer_10 + ' ' + multiAnswers['question10'][question_1][answer_10array[i]]['description'];
  }
  return answer_10;
};

$('#answers #question11 button').on('click',function(){
	answer_11array.push($(this).text());
	console.log(answer_11array);
	});

function answer_11followup(){
  answer_11 = "";
  for (var i = 0; i<answer_11array.length; i++){
    answer_11 = answer_11 + ' ' + multiAnswers['question11'][question_1][answer_11array[i]]['description'];
  }
  return answer_11;
};

$('#generatebutton').on('click',function(){

  $('html, body').animate({
    scrollTop: $(window).scrollTop() + 550
	});

	if (question_1 === "Fun") {
		random_1 = random1Fun[Math.floor(Math.random()*random1Fun.length)];
		var answer_1 ="Hello Craigslisters! Much to my dismay, I am moving out of my wonderful home for a new adventure. I'll be subletting it for the remainder of the lease and am looking for someone awesome to take my place." + random_1 + "Here's a bit more about the space:";
	} else if (question_1 === "Serious"){
		random_1 = random1Serious[Math.floor(Math.random()*random1Serious.length)];
		var answer_1 = "I am moving and am looking for a subletter to take over my room for the remainder of our lease." + random_1 + " Here is a bit more information about the room:";
	} else if (question_1 === "Normal"){
		var answer_1 = "Hi there, I am putting my room up for sublet. Unfortunately, I have to move for personal reasons or else I'd definitely be staying. We're looking for a subletter to take over my lease and stay until the lease ends. After that, you can likely take over the lease." + random_1 + " A bit more info about the apartment:";
		random_1 = random1Normal[Math.floor(Math.random()*random1Normal.length)];	
	}

	answer_4 = $('#rent').val();
	answer_5 = $('#hood').val();
	answer_12 = $('#lease').val();

	if (question_1 === "Fun") {
			answer_2to5 = "The room is in a wonderful " + answer_2 + " in the heart of " + answer_5 + ". You'll be sharing it with " + answer_3 + " other roommates, who are all awesome, like you (hopefully)! Total rent for the room is a cool " + answer_4 + " per month, which is honestly kind of a steal for a neighborhood/building this sweet.";
		} else if (question_1 === "Serious"){
			answer_2to5 = "The room is in a " + answer_2 + " in " + answer_5 + ". The unit has " + answer_3 + " total rooms, so you'll be sharing the place with" + answer_3 + " other roommates (duh). Total rent for the room is " + answer_4 + " per month.";
		} else if (question_1 === "Normal"){
			answer_2to5 = "My (your future) room is in a " + answer_2 + " in " + answer_5 + ". I have " + answer_3 + " other roommates, who you'll be sharing the place with. We pay " + answer_4 + " per month for rent.";
		};

	if (question_1 === "Fun") {
		answer_5to6 = "In case you're unfamiliar with " + answer_5 + ", the neighborhood is super awesome and getting better all the time. I'd probably categorize the vibe of the overall neighborhood as " + answer_6 + ", so if you're looking for that kind of feel, it should be perfect!";
	} else if (question_1 === "Serious"){
		answer_5to6 =  answer_5 + " is a very " + answer_6 + " neighborhood, but take that with a grain of salt because every part of this city is basically a melting pot at this point. ";
	} else if (question_1 ==="Normal"){
		answer_5to6 = "If you don't know a lot about " + answer_5 + ", I'd probably describe it as a very " + answer_6 + " area, so if a " + answer_6 + " area seems like your cup of tea, it should be perfect.";
	}

	if (question_1 === "Fun") {
		answer_7 = "There's tons of stuff nearby, which makes this apartment even harder to leave! In the event of a zombie apocalypse, I think you could survive on the stores within 50 feet of the building. ";
	} else if (question_1 === "Serious"){
		answer_7 =  "The neighborhood also has many options for spending money. A few of the things that you'll find in the area... ";
	} else if (question_1 ==="Normal"){
		answer_7 = "I love this neighborhood and you will too. You may never want to leave once you move in! ";
	}

	if (question_1 === "Fun") {
		answer_10intro = "The apartment is pretty loose with some things, and so these things are okay but we'd want heads up: ";
	} else if (question_1 === "Serious"){
		answer_10intro =  "The roommates are okay with the following: ";
	} else if (question_1 ==="Normal"){
		answer_10intro = "We're okay with the following, so long as you're cool about it: ";
	}

	if (question_1 === "Fun") {
		answer_12followup = "Finally, you'll obviously want to know about the length of the sublet. The lease ends on " + answer_12 + " and after that you can talk with the roommates about extending the lease under your name. Yay!!! Dang, I'm jealous you get to live here and I don't  :-(";
	} else if (question_1 === "Serious"){
		answer_10intro =  "Finally, the lease ends on " + answer_12 + " and after that you can talk with the roommates about extending the lease under your name. ";
	} else if (question_1 ==="Normal"){
		answer_10intro = "Finally, the lease ends on " + answer_12 + " and after that you can talk with the roommates about extending the lease under your name. Not sure if they're staying yet, but you can definitely talk to them about it!";
	}

	if (question_1 === "Fun") {
		ending_greeting = "Thanks for reading! If you're still interested please shoot me an email with some info about you, scan of social security card, etc. and we'll be in touch soon!";
	} else if (question_1 === "Serious"){
		ending_greeting =  "If you're interested, please send me an email with some info about yourself (job, income, current situation, etc.) and I'll be in touch if it sounds like a good fit.";
	} else if (question_1 ==="Normal"){
		ending_greeting = "Please shoot me an email if you're interested and we'll get back to you soon if it sounds like a good fit. Looking for housing sucks so let's make this as painless as possible!";
	}

	$('.answer').html("<h1>Voila! A custom Craigslist post, just for you...</h1>" + "<br>" + "<br>" + answer_1 + "<br>" + "<br>" + "<strong>The room: </strong>" +answer_2to5 + "<br>" + "<br>" + "<strong>The hood: </strong>" + answer_5to6 + " " + answer_5to6followup + "<br>" + "<br>" + "<strong> You: </strong>" + answer_7followup() + "We're looking for someone who is a good match for the current roommates." + answer_8followup + "<br>" + "<br>" + "<strong>The roomies/rules: </strong>" + "A bit more info about the current roommates... " + answer_9followup() + "<br>" + "<br>" + answer_10intro + answer_10followup() + "<br>" + "<br>" + "A few things that we are NOT okay with are:" + answer_11followup() + "<br>" + "<br>" + "<strong>Timing: </strong>" + answer_12followup + "<br>" + "<br>" + ending_greeting + "<br>" + "<br>");

});

