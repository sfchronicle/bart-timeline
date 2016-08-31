require("component-responsive-frame/child");
// var d3 = require('d3');

var events = [];
var years = []; // x-axis text values
var t = []; // circles on axis

for (var i = 0; i < timelineBart.length; i++) {
	events.push(timelineBart[i].id);
	years.push(timelineBart[i].y);
	t.push(timelineBart[i].t);
}

for (var i = 0; i < timelineBart.length; i++) {
	var a = document.getElementById(events[i]);
  var x = i - 1;

  if ((x == -1) || (timelineBart[i].date != timelineBart[x].date)) {
  	a.insertAdjacentHTML("beforeend","<div class='eventtext'><div class='date'>" + timelineBart[i].date + "</div> <div class='text'>" + timelineBart[i].event + "</div></div>"); // <br>" + timelineBart[i].words + "</div>");
  }
  else {
    a.insertAdjacentHTML("beforeend","<div class='eventtext'><div class='text'>" + timelineBart[i].event + "</div></div>"); // <br>" + timelineBart[i].words + "</div>");
    a.style.borderTop = "0";
    a.style.marginTop = "-40px";
  }


// TEMPORARILY REMOVED FOR TESTING
 
  if (timelineBart[i].image != '') {
		a.insertAdjacentHTML("beforeend","<img src='" + timelineBart[i].image + "'><br><div class='caption'>" + timelineBart[i].caption + " <span class='attr'> " + timelineBart[i].credit + "</span></div>");
	}
	else {
		a.style.paddingBottom = "30px";
	}
}

// // code for timeline

// var xScale = d3.scaleLinear()
//   .domain([1896,2015])
//   .range([0,645]);

// // setting dimensions for the svg
// if (screen.width > 600) {
//   var width = 460;
//   var margin = {
//     top: -10,
//     right: 45,
//     bottom: 20,
//     left: 45
//   };
// } else if (screen.width <= 600 && screen.width > 480) {
//   var width = 430;
//   var margin = {
//     top: -10,
//     right: 25,
//     bottom: 20,
//     left: 25
//   };
// } else if (screen.width <= 480 && screen.width > 370) {
//     var width = 320;
//     var margin = {
//       top: -10,
//       right: 25,
//       bottom: 20,
//       left: 25
//     };
// } else if (screen.width <= 370) {
//   var width = 280;
//   var margin = {
//     top: -10,
//     right: 20,
//     bottom: 20,
//     left: 20
//   };
// }

// var height = 50;

// var xAxisGroup = d3.select("#ticker").append("svg")
//     .attr("width",width + margin.left + margin.right)
//     .attr("height",height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// // x-axis scale
// var x = d3.scaleLinear()
//     .rangeRound([0,width]);

// x.domain(d3.extent(timelineData, function(d) {
//   return d.date;
// }));

// var xAxis = d3.axisTop()
//   .scale(x)
//   .tickFormat(d3.format(".0f"))
//   .tickValues(["1896","1972","1974","1984","1991","1991","1995","1996","1996","1996","1999","2000","2012","2015"]
//   )
//   .tickSize(0)
//   .tickPadding(15);

// xAxisGroup.append("g")
//     .attr("class", "axistop")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);

// var axistop = xAxisGroup.selectAll(".axistop");

// var ticks = axistop.selectAll(".tick")

// ticks.selectAll("line").remove();
// ticks.each(function() {
//   d3.select(this)
//     .append("circle")
//       .attr("r", 5)
//       .attr("fill","white")
//       .style("stroke","slategray")
//       .style("stroke-width","1px");
//   d3.selectAll("circle")
//     .attr("id", function(d,i) {return "t-" + i})
//   d3.selectAll("text")
//     .attr("id", function(d,i) {return "y-" + i})
// });

// sticky timeline

var marker = document.getElementsByClassName('marker');

for (var i = 0; i < timelineBart.length; i++) {
  marker[i].style.left = timelineBart[i].position + "%";
}

function activate() {
  var window_top = document.body.scrollTop;
  var div_top = document.getElementById('stick-here').getBoundingClientRect().top + window_top;
  var timeline = document.getElementById('ticker');
//  var timeline_ph = document.getElementById('timeline-placeholder');

  if (window_top > div_top) {
      timeline.style.display = "block";
      timeline.classList.add('sticky');
      // timeline_ph.style.display = 'block'; // puts in a placeholder for where sticky used to be for smooth scrolling
  } else {
      timeline.classList.remove('sticky');
      timeline.style.display = "none";
      // timeline_ph.style.display = 'none'; // removes placeholder
  }

  for (var i = 0; i < events.length; i++ ) {
  	var a = document.getElementById(events[i]);
  	var at = document.getElementById(t[i]);
  	// var ay = document.getElementById(years[i]);

  var ed_top = a.getBoundingClientRect().top + window_top - 60;
	var ede_top = a.getBoundingClientRect().bottom + window_top - 60;

	var r = document.getElementById('t-5');
    var u = document.getElementById('t-9');
    var v = document.getElementById('t-8');
    var w = document.getElementById('t-7');

    if (window_top > ed_top && window_top < ede_top) {
	        at.classList.add('active');
          a.classList.add('active');
	        // ay.classList.add('active');
    	}
  	else {
          at.classList.remove('active');
          a.classList.remove('active');
          // ay.classList.remove('active');
  	}

    // // removes years if there is an overlap
    // if (document.getElementById(years[12]).classList.contains('active') ) {
    //   document.getElementById(years[13]).style.display = "none";
    // }
    // else {
    //   document.getElementById(years[13]).style.display = "";
    // }

  }

}

window.onscroll = function() {activate()};

// Twitter Intent
// (function() {
//   if (window.__twitterIntentHandler) return;
//   var intentRegex = /twitter\.com\/intent\/(\w+)/,
//       windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
//       width = 550,
//       height = 420,
//       winHeight = screen.height,
//       winWidth = screen.width;

//   function handleIntent(e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//         m, left, top;

//     while (target && target.nodeName.toLowerCase() !== 'a') {
//       target = target.parentNode;
//     }

//     if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
//       m = target.href.match(intentRegex);
//       if (m) {
//         left = Math.round((winWidth / 2) - (width / 2));
//         top = 0;

//         if (winHeight > height) {
//           top = Math.round((winHeight / 2) - (height / 2));
//         }

//         window.open(target.href, 'intent', windowOptions + ',width=' + width +
//                                            ',height=' + height + ',left=' + left + ',top=' + top);
//         e.returnValue = false;
//         e.preventDefault && e.preventDefault();
//       }
//     }
//   }

//   if (document.addEventListener) {
//     document.addEventListener('click', handleIntent, false);
//   } else if (document.attachEvent) {
//     document.attachEvent('onclick', handleIntent);
//   }
//   window.__twitterIntentHandler = true;
// }());
