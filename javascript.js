$(window).load(function(){
  alert("If operating on https please switch to http.");
});
var currentcity,obj1,obj2;
function imgurl(des){
  if(des==="Haze"||des==="Mist"||des==="Smoke"||des==="Fog"){
    $("h1").css("color","black");
    return "http://cdn.asiancorrespondent.com/wp-content/uploads/2016/04/DSC_0145-940x580.jpg";
  }
  else if(des==="Sand"||des==="Dust"){
    $("h1").css("color","black");
    return "http://www.go-green.ae/uploads/image/imageforweather.jpg";
  }
  else if(des==="Rain"||des==="Drizzle"){
    $("h1").css("color","white");
    return "http://i.ytimg.com/vi/bcFK_zOocL8/maxresdefault.jpg";
  }
  else if(des==="Overcast"){
    $("h1").css("color","white");
    return "http://www.sitkanature.org/wordpress/wp-content/gallery/20100923/20100923-overcast-2.jpg";
  }
  else if(des==="Thunderstorm"){
    $("h1").css("color","white");
     return "http://cdn.arstechnica.net/wp-content/uploads/2016/11/GettyImages-502285303-800x534.jpg";     
  }
  else if(des==="Snow"){
    $("h1").css("color","white");
    return "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ-1d627kSyvlmLezWnoYHeii11W6sxZoLi9KnLEt97AJhdnL5P";
  }
  $("h1").css("color","black");
  return "http://offthegridchicago.files.wordpress.com/2012/03/cimg1342.jpg";
}
$.getJSON("http://ip-api.com/json/?callback=?",function(data){
  currentcity=data.city;
  $(".place").html(data.city+" , "+data.country);
  obj1=data;
});
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+currentcity+"&units=imperial&APPID=061f24cf3cde2f60644a8240302983f2&callback=",function(a){
    obj2=a;
    console.log(obj2);
    $("#temp").html(a.main.temp);
    $("#unit").html(" F");
    //$(".place").html(a.name+" , "+a.sys.country);
    var url="http://openweathermap.org/img/w/"+a.weather[0].icon+".png";
    $(".description").html(a.weather[0].main+"<img src="+url+">"); 
  //$("body").toggleClass("img-responsive");
  $("body").css("background","url("+imgurl(a.weather[0].main)+")");
  //$("body").css("background","url("+imgurl("Clear")+")");
  $("body").css("background-size","cover");
    $(".wind").html("Wind-speed : "+a.wind.speed);
  });
  $(".btn").click(function(){
    var num=(((obj2.main.temp)-32)*5)/9;
    $("#temp").text(num.toPrecision(3));
    $("#unit").text(" C");
  });
  