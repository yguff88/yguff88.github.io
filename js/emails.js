$('#answers').hide();

$('.image1 img').on('click',function(){
	$('#answers').slideDown();
	$('html, body').animate({scrollTop: '+=500px'}, 800);
	  $('.topsection').animate({height:'500'});
});

$('#answers button').on('click',function(){
	if ($(this).parents().hasClass('single')){
		$(this).siblings().css('color','#4288D6');
		$(this).siblings().css('background-color','white');
		$(this).css('background-color','#4288D6'); 
		$(this).css('color','white'); 	
	} else {
		$(this).css('background-color','#4288D6'); 
		$(this).css('color','white'); 
	}
});

$('#question1 button').on('click',function(){
  $('#answers').slideDown();
  $('html, body').animate({scrollTop: '+=500px'}, 800);
  $('.topsection').animate({height:'500'});
  $('.desk').hide();
  if ($(this).parents().hasClass('single')){
    $(this).siblings().css('color','#FFC161');
    $(this).siblings().css('background-color','white');
    $(this).css('background-color','#C07E19'); 
    $(this).css('color','white');   
  } else {
    $(this).css('background-color','#4288D6'); 
    $(this).css('color','white'); 
  }
});

var question_1;
var answer_1;

$('#question1 button').on('click',function(){
	question_1 = $(this).text();
	console.log(question_1)
});

var answer_2;
var answer_2followup;
var answer_3;
var answer_3followup;
var answer_4;
var answer_4followup;
var answer_5;
var answer_5followup;
var answer_6;	
var answer_6followup;
var answer_ending;

var multiAnswers = {
  "question4": {
    "Serious":{
      "Podcast": {
        "type":"Podcast",
        "description":"on your podcast."
      },
      "Website": {
        "type":"Website",
        "description":"on your website."
      },
      "Magazine": {
        "type":"Magazine",
        "description":"in your publication."
      },
      "YouTube": {
        "type":"YouTube",
        "description":"on your YouTube channel."
      },
      "Outdoor": {
        "type":"Outdoor",
        "description":"on your outdoor network."
      },
      "Video": {
        "type":"Video",
        "description":"on your platform."
      },
      "Audio": {
        "type":"Audio",
        "description":"on your platform."
      }
    },
    "Passionate":{
      "Podcast": {
        "type":"Podcast",
        "description":"your podcast audience."
      },
      "Website": {
        "type":"Website",
        "description":"your web audience."
      },
      "Magazine": {
        "type":"Magazine",
        "description":"your magazine readers."
      },
      "YouTube": {
        "type":"YouTube",
        "description":"your YouTube audience."
      },
      "Outdoor": {
        "type":"Outdoor",
        "description":"your outdoor network audience."
      },
      "Video": {
        "type":"Video",
        "description":"your viewers."
      },
      "Audio": {
        "type":"Audio",
        "description":"your listeners."
      }
    }
  },
  "question5": {
    "Serious":{
      "Photography": {
        "type":"Photography",
        "description":"We have a huge number of photographers on our platform and I think your audience would love Squarespace's functionality."
      },
      "Design": {
        "type":"Design",
        "description":"We have a huge number of designers and artists on our platform and I think your audience would love Squarespace's functionality."
      },
      "Music": {
        "type":"Music",
        "description":"We have a huge number of musicians on our platform and I think your audience would love Squarespace's functionality."
      },
      "Tech": {
        "type":"Tech",
        "description":"We have a huge number of tech-focused customers and developers on our platform and I think your audience would love Squarespace's functionality."
      },
      "Commerce": {
        "type":"Commerce",
        "description":"We have a huge number of startups and small businesses on our platform and I think your audience would love Squarespace's functionality."
      },
      "Generic": {
        "type":"Generic",
        "description":"We have a broad range of customers on our platform, using it to create everything from portfolios to ecommerce sites, and I think your audience would love Squarespace's functionality."
      }
    },
    "Passionate":{
      "Photography": {
        "type":"Photography",
        "description":"Squarespace was built for creatives and photographers, and I think your audience would love Squarespace's templates and functionality."
      },
      "Design": {
        "type":"Design",
        "description":"Squarespace was build for designers and artists, and I think your audience would love Squarespace's templates and functionality."
      },
      "Music": {
        "type":"Music",
        "description":"We have a huge number of amazing musicians on our platform and I think your audience would love Squarespace's music-focused functionality."
      },
      "Tech": {
        "type":"Tech",
        "description":"We have a huge number of tech-focused customers and developers on our platform using Squarespace for a huge range of purposes, and I'd love to help expose it to your like-minded audience."
      },
      "Commerce": {
        "type":"Commerce",
        "description":"Squarespace has a comprehensive and easy-to-use ecommerce platform and I think your audience would love it."
      },
      "Generic": {
        "type":"Generic",
        "description":"We have a broad range of customers on our platform, using it to create everything from portfolios to ecommerce and nonprofit sites."
      }
    }
  },
  "question6": {
    "Serious":{
      "Media Kit": {
        "type":"Media Kit",
        "description":" I'd love to take a look at a recent media kit if you have one available, "
      },
      "A time for a meeting": {
        "type":"A time for a meeting",
        "description":"I'd love to set up time to chat in the next few weeks, "
      },
      "Just a response!": {
        "type":"Just a response!",
        "description":"I'd love to start a conversation to discuss possible opportunities, "
      },
    },
    "Passionate":{
      "Media Kit": {
        "type":"Media Kit",
        "description":"If you have a recent media kit, I'd love to find out more about your audience."
      },
      "A time for a meeting": {
        "type":"A time for a meeting",
        "description":"I'd love to set up time to chat in the next few weeks to hear more about your audience and company background."
      },
      "Just a response!": {
        "type":"Just a response!",
        "description":"I'd love to start a conversation to discuss possible opportunities to work together."
      },
    }
  },
  "question7": {
    "Serious":{
      "Advertising": {
        "type":"Advertising",
        "description":" as we'd love to find out more about advertising opportunities on your platform."
      },
      "Partnership": {
        "type":"Partnership",
        "description":" as we'd love to chat about possible partnership opportunities."
      },
      "Not sure yet": {
        "type":"Not sure yet",
        "description":" as I think our audiences have a lot in common."
      },
    },
    "Passionate":{
      "Advertising": {
        "type":"Advertising",
        "description":"I think there are some great advertising opportunities we could work on together."
      },
      "Partnership": {
        "type":"Partnership",
        "description":"I think there are some great possible partnership opportunities between our companies."
      },
      "Not sure yet": {
        "type":"Not sure yet",
        "description":"I think our audiences have a lot in common and would love to learn more."
      }
    }
  }
};

$('#answers #question4 button').on('click',function(){
	answer_4 = $(this).text();
	answer_4followup = (multiAnswers['question4'][question_1][answer_4]['description']);
});

$('#answers #question5 button').on('click',function(){
	answer_5 = $(this).text();
	answer_5followup = (multiAnswers['question5'][question_1][answer_5]['description']);
});

$('#answers #question6 button').on('click',function(){
	answer_6 = $(this).text();
	answer_6followup = (multiAnswers['question6'][question_1][answer_6]['description']);
});

$('#answers #question7 button').on('click',function(){
	answer_7 = $(this).text();
	answer_7followup = (multiAnswers['question7'][question_1][answer_7]['description']);
});

$('#generatebutton').on('click',function(){
	$('html, body').animate({
    scrollTop: $(window).scrollTop() + 550
	});

	answer_2 = $('#name').val();
	answer_3 = $('#company').val();

	if (question_1 === "Serious") {
			answer_1 = "Dear " + answer_3 + " team, ";
		} else if (question_1 === "Passionate"){
			answer_1 = "Hi " + answer_3 + " team,";
		};

	if (question_1 === "Serious") {
		answer_2followup = "My name is " + answer_2 + " and I work on the marketing team at Squarespace. In case you're unfamiliar with us, Squarespace is a website publishing platform that makes it easy for anyone to create a beautiful website. ";
	} else if (question_1 === "Passionate"){
		answer_2followup =  answer_2 + " from the Squarespace marketing team here! In case you're unfamiliar with us, Squarespace is a website publishing platform that makes it easy for anyone to create a beautiful website. We strive to empower people to realize their dreams online, even if they have absolutely no coding experience. ";
	}

	if (question_1 === "Serious") {
		answer_3followup = "We're big fans of " + answer_3 + " and would love to talk about advertising opportunities ";
	} else if (question_1 === "Passionate"){
		answer_3followup =  "We love " + answer_3 + " and would be thrilled to talk about opportunities to expose Squarespace to ";
	}

	if (question_1 === "Serious") {
		answer_ending = " Looking forward to hearing from you." + "<br>" + "<br>" + "Sincerely," + "<br>" + answer_2;
	} else if (question_1 === "Passionate"){
		answer_ending =  " Looking forward to starting a conversation!" + "<br>" + "<br>" + "Best," + "<br>" + answer_2;
	}



	$('.answer').html(answer_1 + "<br>" + "<br>" + answer_2followup + answer_3followup + " " + answer_4followup + " " + answer_5followup + "<br>" + "<br>" + answer_6followup + " " + answer_7followup + answer_ending);

});



