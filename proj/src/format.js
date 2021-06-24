//formatting.js
//universal website formatting

function format(a){
	var hd = 
	"<title>" + a + "</title>"+
	"<link rel=\"shortcut icon\" href=\"assets/images/masq.ico\">"+
	"<link href=\"https://fonts.googleapis.com/css?family=Bree+Serif|Cormorant+Unicase|Dancing+Script|Great+Vibes|Miss+Fajardose\" rel=\"stylesheet\">";
	document.getElementById("head").innerHTML += (hd);
	
	
	var e = 
	"<figure><img id = \"hImg\"/></figure>"+
	"<hgroup>"+
	"<h1 align=\"center\" class = \"shadow\">Learning Center</h1>"+
	"<h2 align=\"center\" class = \"shadow\">Trademark here(tm)</h2>"+
	"</hgroup>";
	document.getElementById("header").innerHTML = (e);
	
	document.getElementById("hImg").src = ("assets/images/trademark.png");
	document.getElementById("hImg").height = (90);
	
	var content = 
	"<ul>"+
	"<li><a routerLink=\"/home\"  action=\"currentUrl == '/home'\" routerLinkActive=\"active\">Home</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Sign In</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Learning Categories</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Inventory</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Check Out</a></li>" +
	"</ul>";
	document.getElementById("nav_list").innerHTML = (content);

	var gl =
	"<h1 id=\"Games\" class = \"shadow\">Categories</h1>"+
	"<ul>"+
	"<li><a routerLink=\"thankyou\" [class.activated]=\"currentUrl == '/thankyou'\">Design</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Illustration</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Business</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Technology</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Photo & Film</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Entrepreneurship</a></li>" +
	"<li><a routerLink=\"/thankyou\" href=\"#\">Writing</a></li>" +
	"</ul>";
	document.getElementById("game_list").innerHTML = (gl);
		
	document.getElementById("footer").innerHTML = ("Copyright &copy; 2019 Solomon Williams</br> <a href=\"mailto:Yeet@Haw.com\">Charli@Horss.com</a>");	
}













