
    
//     window.onload = function () {
//         var chart = new CanvasJS.Chart("chartContainer1", {
        
//             title:{
//                 text: "Genesis production line",
//                 textFontFamily: "tahoma",
//                 textFontWeight: "normal"         
//             },
//             data: [              
//             {
//                 // Change type to "doughnut", "line", "splineArea", etc.
//                 type: "column",
//                 dataPoints: [
//                     { label: "Delhi",  y: 38  },
//                     { label: " ", y: 26  },
//                     { label: "Gurugram", y: 22  },
//                     { label: " ",  y: 15  },
//                     { label: "vikas care",  y: 10  }
//                 ]
//             }
//             ]
//         });
//         chart.render();



// var chart = new CanvasJS.Chart("chartContainer2", {
// 	animationEnabled: true,  
// 	title:{
// 		text: "Employee Homepage"
// 	},
	
// 	data: [{
// 		type: "splineArea",
// 		color: "rgba(54,158,173,.7)",
// 		markerSize: 5,
// 		xValueFormatString: "YYYY",
// 		yValueFormatString: "$#,##0.##",
// 		dataPoints: [
// 			{ x: (0.5, 0), y: 3289000 },
// 			{ x: new Date(2001, 0), y: 3830000 },
// 			{ x: new Date(2002, 0), y: 2009000 },
// 			{ x: new Date(2003, 0), y: 2840000 },
// 			{ x: new Date(2004, 0), y: 2396000 },
// 			{ x: new Date(2005, 0), y: 1613000 },
// 			{ x: new Date(2006, 0), y: 2821000 },
// 			{ x: new Date(2007, 0), y: 2000000 },
// 			{ x: new Date(2008, 0), y: 1397000 },
// 			{ x: new Date(2009, 0), y: 2506000 },
// 			{ x: new Date(2010, 0), y: 2798000 },
// 			{ x: new Date(2011, 0), y: 3386000 },
// 			{ x: new Date(2012, 0), y: 6704000},
// 			{ x: new Date(2013, 0), y: 6026000 },
// 			{ x: new Date(2014, 0), y: 2394000 },
// 			{ x: new Date(2015, 0), y: 1872000 },
// 			{ x: new Date(2016, 0), y: 2140000 }
// 		]
// 	}]
// 	});
//         chart.render();
//     }
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawAxisTickColors);

function drawAxisTickColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      
      data.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options = {
        hAxis: {
          title: '',
          textStyle: {
            color: '#01579b',
            fontSize: 20,
            fontName: 'Arial',
            bold: true,
            italic: true
          },
          titleTextStyle: {
            color: '#01579b',
            fontSize: 16,
            fontName: 'Arial',
            bold: false,
            italic: true
          }
        },
        vAxis: {
          title: 'GenReporting',
          textStyle: {
            color: '#1a237e',
            fontSize: 24,
            bold: true
          },
          titleTextStyle: {
            color: '#1a237e',
            fontSize: 24,
            bold: true
          }
        },
        colors: ['', '#097138']
      };
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }