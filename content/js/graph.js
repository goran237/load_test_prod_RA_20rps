/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 29821.0, "minX": 0.0, "maxY": 59728.0, "series": [{"data": [[0.0, 29821.0], [0.1, 29821.0], [0.2, 29821.0], [0.3, 29821.0], [0.4, 29821.0], [0.5, 29821.0], [0.6, 29821.0], [0.7, 29821.0], [0.8, 29821.0], [0.9, 29821.0], [1.0, 30286.0], [1.1, 30286.0], [1.2, 30286.0], [1.3, 30286.0], [1.4, 30286.0], [1.5, 30286.0], [1.6, 30286.0], [1.7, 30286.0], [1.8, 30286.0], [1.9, 30286.0], [2.0, 30344.0], [2.1, 30344.0], [2.2, 30344.0], [2.3, 30344.0], [2.4, 30344.0], [2.5, 30344.0], [2.6, 30344.0], [2.7, 30344.0], [2.8, 30344.0], [2.9, 30344.0], [3.0, 31223.0], [3.1, 31223.0], [3.2, 31223.0], [3.3, 31223.0], [3.4, 31223.0], [3.5, 31223.0], [3.6, 31223.0], [3.7, 31223.0], [3.8, 31223.0], [3.9, 31223.0], [4.0, 37359.0], [4.1, 37359.0], [4.2, 37359.0], [4.3, 37359.0], [4.4, 37359.0], [4.5, 37359.0], [4.6, 37359.0], [4.7, 37359.0], [4.8, 37359.0], [4.9, 37359.0], [5.0, 39601.0], [5.1, 39601.0], [5.2, 39601.0], [5.3, 39601.0], [5.4, 39601.0], [5.5, 39601.0], [5.6, 39601.0], [5.7, 39601.0], [5.8, 39601.0], [5.9, 39601.0], [6.0, 40303.0], [6.1, 40303.0], [6.2, 40303.0], [6.3, 40303.0], [6.4, 40303.0], [6.5, 40303.0], [6.6, 40303.0], [6.7, 40303.0], [6.8, 40303.0], [6.9, 40303.0], [7.0, 41397.0], [7.1, 41397.0], [7.2, 41397.0], [7.3, 41397.0], [7.4, 41397.0], [7.5, 41397.0], [7.6, 41397.0], [7.7, 41397.0], [7.8, 41397.0], [7.9, 41397.0], [8.0, 41573.0], [8.1, 41573.0], [8.2, 41573.0], [8.3, 41573.0], [8.4, 41573.0], [8.5, 41573.0], [8.6, 41573.0], [8.7, 41573.0], [8.8, 41573.0], [8.9, 41573.0], [9.0, 51519.0], [9.1, 51519.0], [9.2, 51519.0], [9.3, 51519.0], [9.4, 51519.0], [9.5, 51519.0], [9.6, 51519.0], [9.7, 51519.0], [9.8, 51519.0], [9.9, 51519.0], [10.0, 52085.0], [10.1, 52085.0], [10.2, 52085.0], [10.3, 52085.0], [10.4, 52085.0], [10.5, 52085.0], [10.6, 52085.0], [10.7, 52085.0], [10.8, 52085.0], [10.9, 52085.0], [11.0, 52328.0], [11.1, 52328.0], [11.2, 52328.0], [11.3, 52328.0], [11.4, 52328.0], [11.5, 52328.0], [11.6, 52328.0], [11.7, 52328.0], [11.8, 52328.0], [11.9, 52328.0], [12.0, 54694.0], [12.1, 54694.0], [12.2, 54694.0], [12.3, 54694.0], [12.4, 54694.0], [12.5, 54694.0], [12.6, 54694.0], [12.7, 54694.0], [12.8, 54694.0], [12.9, 54694.0], [13.0, 55163.0], [13.1, 55163.0], [13.2, 55163.0], [13.3, 55163.0], [13.4, 55163.0], [13.5, 55163.0], [13.6, 55163.0], [13.7, 55163.0], [13.8, 55163.0], [13.9, 55163.0], [14.0, 58358.0], [14.1, 58358.0], [14.2, 58358.0], [14.3, 58358.0], [14.4, 58358.0], [14.5, 58358.0], [14.6, 58358.0], [14.7, 58358.0], [14.8, 58358.0], [14.9, 58358.0], [15.0, 58634.0], [15.1, 58634.0], [15.2, 58634.0], [15.3, 58634.0], [15.4, 58634.0], [15.5, 58634.0], [15.6, 58634.0], [15.7, 58634.0], [15.8, 58634.0], [15.9, 58634.0], [16.0, 58636.0], [16.1, 58636.0], [16.2, 58636.0], [16.3, 58636.0], [16.4, 58636.0], [16.5, 58636.0], [16.6, 58636.0], [16.7, 58636.0], [16.8, 58636.0], [16.9, 58636.0], [17.0, 58644.0], [17.1, 58644.0], [17.2, 58644.0], [17.3, 58644.0], [17.4, 58644.0], [17.5, 58644.0], [17.6, 58644.0], [17.7, 58644.0], [17.8, 58644.0], [17.9, 58644.0], [18.0, 58645.0], [18.1, 58645.0], [18.2, 58645.0], [18.3, 58645.0], [18.4, 58645.0], [18.5, 58645.0], [18.6, 58645.0], [18.7, 58645.0], [18.8, 58645.0], [18.9, 58645.0], [19.0, 58648.0], [19.1, 58648.0], [19.2, 58648.0], [19.3, 58648.0], [19.4, 58648.0], [19.5, 58648.0], [19.6, 58648.0], [19.7, 58648.0], [19.8, 58648.0], [19.9, 58648.0], [20.0, 58650.0], [20.1, 58650.0], [20.2, 58650.0], [20.3, 58650.0], [20.4, 58650.0], [20.5, 58650.0], [20.6, 58650.0], [20.7, 58650.0], [20.8, 58650.0], [20.9, 58650.0], [21.0, 58651.0], [21.1, 58651.0], [21.2, 58651.0], [21.3, 58651.0], [21.4, 58651.0], [21.5, 58651.0], [21.6, 58651.0], [21.7, 58651.0], [21.8, 58651.0], [21.9, 58651.0], [22.0, 58655.0], [22.1, 58655.0], [22.2, 58655.0], [22.3, 58655.0], [22.4, 58655.0], [22.5, 58655.0], [22.6, 58655.0], [22.7, 58655.0], [22.8, 58655.0], [22.9, 58655.0], [23.0, 58656.0], [23.1, 58656.0], [23.2, 58656.0], [23.3, 58656.0], [23.4, 58656.0], [23.5, 58656.0], [23.6, 58656.0], [23.7, 58656.0], [23.8, 58656.0], [23.9, 58656.0], [24.0, 58658.0], [24.1, 58658.0], [24.2, 58658.0], [24.3, 58658.0], [24.4, 58658.0], [24.5, 58658.0], [24.6, 58658.0], [24.7, 58658.0], [24.8, 58658.0], [24.9, 58658.0], [25.0, 58658.0], [25.1, 58658.0], [25.2, 58658.0], [25.3, 58658.0], [25.4, 58658.0], [25.5, 58658.0], [25.6, 58658.0], [25.7, 58658.0], [25.8, 58658.0], [25.9, 58658.0], [26.0, 58658.0], [26.1, 58658.0], [26.2, 58658.0], [26.3, 58658.0], [26.4, 58658.0], [26.5, 58658.0], [26.6, 58658.0], [26.7, 58658.0], [26.8, 58658.0], [26.9, 58658.0], [27.0, 58659.0], [27.1, 58659.0], [27.2, 58659.0], [27.3, 58659.0], [27.4, 58659.0], [27.5, 58659.0], [27.6, 58659.0], [27.7, 58659.0], [27.8, 58659.0], [27.9, 58659.0], [28.0, 58660.0], [28.1, 58660.0], [28.2, 58660.0], [28.3, 58660.0], [28.4, 58660.0], [28.5, 58660.0], [28.6, 58660.0], [28.7, 58660.0], [28.8, 58660.0], [28.9, 58660.0], [29.0, 58661.0], [29.1, 58661.0], [29.2, 58661.0], [29.3, 58661.0], [29.4, 58661.0], [29.5, 58661.0], [29.6, 58661.0], [29.7, 58661.0], [29.8, 58661.0], [29.9, 58661.0], [30.0, 58662.0], [30.1, 58662.0], [30.2, 58662.0], [30.3, 58662.0], [30.4, 58662.0], [30.5, 58662.0], [30.6, 58662.0], [30.7, 58662.0], [30.8, 58662.0], [30.9, 58662.0], [31.0, 58664.0], [31.1, 58664.0], [31.2, 58664.0], [31.3, 58664.0], [31.4, 58664.0], [31.5, 58664.0], [31.6, 58664.0], [31.7, 58664.0], [31.8, 58664.0], [31.9, 58664.0], [32.0, 58664.0], [32.1, 58664.0], [32.2, 58664.0], [32.3, 58664.0], [32.4, 58664.0], [32.5, 58664.0], [32.6, 58664.0], [32.7, 58664.0], [32.8, 58664.0], [32.9, 58664.0], [33.0, 58664.0], [33.1, 58664.0], [33.2, 58664.0], [33.3, 58664.0], [33.4, 58664.0], [33.5, 58664.0], [33.6, 58664.0], [33.7, 58664.0], [33.8, 58664.0], [33.9, 58664.0], [34.0, 58666.0], [34.1, 58666.0], [34.2, 58666.0], [34.3, 58666.0], [34.4, 58666.0], [34.5, 58666.0], [34.6, 58666.0], [34.7, 58666.0], [34.8, 58666.0], [34.9, 58666.0], [35.0, 58668.0], [35.1, 58668.0], [35.2, 58668.0], [35.3, 58668.0], [35.4, 58668.0], [35.5, 58668.0], [35.6, 58668.0], [35.7, 58668.0], [35.8, 58668.0], [35.9, 58668.0], [36.0, 58668.0], [36.1, 58668.0], [36.2, 58668.0], [36.3, 58668.0], [36.4, 58668.0], [36.5, 58668.0], [36.6, 58668.0], [36.7, 58668.0], [36.8, 58668.0], [36.9, 58668.0], [37.0, 58671.0], [37.1, 58671.0], [37.2, 58671.0], [37.3, 58671.0], [37.4, 58671.0], [37.5, 58671.0], [37.6, 58671.0], [37.7, 58671.0], [37.8, 58671.0], [37.9, 58671.0], [38.0, 58671.0], [38.1, 58671.0], [38.2, 58671.0], [38.3, 58671.0], [38.4, 58671.0], [38.5, 58671.0], [38.6, 58671.0], [38.7, 58671.0], [38.8, 58671.0], [38.9, 58671.0], [39.0, 58672.0], [39.1, 58672.0], [39.2, 58672.0], [39.3, 58672.0], [39.4, 58672.0], [39.5, 58672.0], [39.6, 58672.0], [39.7, 58672.0], [39.8, 58672.0], [39.9, 58672.0], [40.0, 58673.0], [40.1, 58673.0], [40.2, 58673.0], [40.3, 58673.0], [40.4, 58673.0], [40.5, 58673.0], [40.6, 58673.0], [40.7, 58673.0], [40.8, 58673.0], [40.9, 58673.0], [41.0, 58673.0], [41.1, 58673.0], [41.2, 58673.0], [41.3, 58673.0], [41.4, 58673.0], [41.5, 58673.0], [41.6, 58673.0], [41.7, 58673.0], [41.8, 58673.0], [41.9, 58673.0], [42.0, 58673.0], [42.1, 58673.0], [42.2, 58673.0], [42.3, 58673.0], [42.4, 58673.0], [42.5, 58673.0], [42.6, 58673.0], [42.7, 58673.0], [42.8, 58673.0], [42.9, 58673.0], [43.0, 58674.0], [43.1, 58674.0], [43.2, 58674.0], [43.3, 58674.0], [43.4, 58674.0], [43.5, 58674.0], [43.6, 58674.0], [43.7, 58674.0], [43.8, 58674.0], [43.9, 58674.0], [44.0, 58674.0], [44.1, 58674.0], [44.2, 58674.0], [44.3, 58674.0], [44.4, 58674.0], [44.5, 58674.0], [44.6, 58674.0], [44.7, 58674.0], [44.8, 58674.0], [44.9, 58674.0], [45.0, 58675.0], [45.1, 58675.0], [45.2, 58675.0], [45.3, 58675.0], [45.4, 58675.0], [45.5, 58675.0], [45.6, 58675.0], [45.7, 58675.0], [45.8, 58675.0], [45.9, 58675.0], [46.0, 58675.0], [46.1, 58675.0], [46.2, 58675.0], [46.3, 58675.0], [46.4, 58675.0], [46.5, 58675.0], [46.6, 58675.0], [46.7, 58675.0], [46.8, 58675.0], [46.9, 58675.0], [47.0, 58675.0], [47.1, 58675.0], [47.2, 58675.0], [47.3, 58675.0], [47.4, 58675.0], [47.5, 58675.0], [47.6, 58675.0], [47.7, 58675.0], [47.8, 58675.0], [47.9, 58675.0], [48.0, 58676.0], [48.1, 58676.0], [48.2, 58676.0], [48.3, 58676.0], [48.4, 58676.0], [48.5, 58676.0], [48.6, 58676.0], [48.7, 58676.0], [48.8, 58676.0], [48.9, 58676.0], [49.0, 58679.0], [49.1, 58679.0], [49.2, 58679.0], [49.3, 58679.0], [49.4, 58679.0], [49.5, 58679.0], [49.6, 58679.0], [49.7, 58679.0], [49.8, 58679.0], [49.9, 58679.0], [50.0, 58679.0], [50.1, 58679.0], [50.2, 58679.0], [50.3, 58679.0], [50.4, 58679.0], [50.5, 58679.0], [50.6, 58679.0], [50.7, 58679.0], [50.8, 58679.0], [50.9, 58679.0], [51.0, 58681.0], [51.1, 58681.0], [51.2, 58681.0], [51.3, 58681.0], [51.4, 58681.0], [51.5, 58681.0], [51.6, 58681.0], [51.7, 58681.0], [51.8, 58681.0], [51.9, 58681.0], [52.0, 58682.0], [52.1, 58682.0], [52.2, 58682.0], [52.3, 58682.0], [52.4, 58682.0], [52.5, 58682.0], [52.6, 58682.0], [52.7, 58682.0], [52.8, 58682.0], [52.9, 58682.0], [53.0, 58683.0], [53.1, 58683.0], [53.2, 58683.0], [53.3, 58683.0], [53.4, 58683.0], [53.5, 58683.0], [53.6, 58683.0], [53.7, 58683.0], [53.8, 58683.0], [53.9, 58683.0], [54.0, 58684.0], [54.1, 58684.0], [54.2, 58684.0], [54.3, 58684.0], [54.4, 58684.0], [54.5, 58684.0], [54.6, 58684.0], [54.7, 58684.0], [54.8, 58684.0], [54.9, 58684.0], [55.0, 58687.0], [55.1, 58687.0], [55.2, 58687.0], [55.3, 58687.0], [55.4, 58687.0], [55.5, 58687.0], [55.6, 58687.0], [55.7, 58687.0], [55.8, 58687.0], [55.9, 58687.0], [56.0, 58691.0], [56.1, 58691.0], [56.2, 58691.0], [56.3, 58691.0], [56.4, 58691.0], [56.5, 58691.0], [56.6, 58691.0], [56.7, 58691.0], [56.8, 58691.0], [56.9, 58691.0], [57.0, 58692.0], [57.1, 58692.0], [57.2, 58692.0], [57.3, 58692.0], [57.4, 58692.0], [57.5, 58692.0], [57.6, 58692.0], [57.7, 58692.0], [57.8, 58692.0], [57.9, 58692.0], [58.0, 58693.0], [58.1, 58693.0], [58.2, 58693.0], [58.3, 58693.0], [58.4, 58693.0], [58.5, 58693.0], [58.6, 58693.0], [58.7, 58693.0], [58.8, 58693.0], [58.9, 58693.0], [59.0, 58694.0], [59.1, 58694.0], [59.2, 58694.0], [59.3, 58694.0], [59.4, 58694.0], [59.5, 58694.0], [59.6, 58694.0], [59.7, 58694.0], [59.8, 58694.0], [59.9, 58694.0], [60.0, 58695.0], [60.1, 58695.0], [60.2, 58695.0], [60.3, 58695.0], [60.4, 58695.0], [60.5, 58695.0], [60.6, 58695.0], [60.7, 58695.0], [60.8, 58695.0], [60.9, 58695.0], [61.0, 58695.0], [61.1, 58695.0], [61.2, 58695.0], [61.3, 58695.0], [61.4, 58695.0], [61.5, 58695.0], [61.6, 58695.0], [61.7, 58695.0], [61.8, 58695.0], [61.9, 58695.0], [62.0, 58695.0], [62.1, 58695.0], [62.2, 58695.0], [62.3, 58695.0], [62.4, 58695.0], [62.5, 58695.0], [62.6, 58695.0], [62.7, 58695.0], [62.8, 58695.0], [62.9, 58695.0], [63.0, 58695.0], [63.1, 58695.0], [63.2, 58695.0], [63.3, 58695.0], [63.4, 58695.0], [63.5, 58695.0], [63.6, 58695.0], [63.7, 58695.0], [63.8, 58695.0], [63.9, 58695.0], [64.0, 58696.0], [64.1, 58696.0], [64.2, 58696.0], [64.3, 58696.0], [64.4, 58696.0], [64.5, 58696.0], [64.6, 58696.0], [64.7, 58696.0], [64.8, 58696.0], [64.9, 58696.0], [65.0, 58698.0], [65.1, 58698.0], [65.2, 58698.0], [65.3, 58698.0], [65.4, 58698.0], [65.5, 58698.0], [65.6, 58698.0], [65.7, 58698.0], [65.8, 58698.0], [65.9, 58698.0], [66.0, 58699.0], [66.1, 58699.0], [66.2, 58699.0], [66.3, 58699.0], [66.4, 58699.0], [66.5, 58699.0], [66.6, 58699.0], [66.7, 58699.0], [66.8, 58699.0], [66.9, 58699.0], [67.0, 58699.0], [67.1, 58699.0], [67.2, 58699.0], [67.3, 58699.0], [67.4, 58699.0], [67.5, 58699.0], [67.6, 58699.0], [67.7, 58699.0], [67.8, 58699.0], [67.9, 58699.0], [68.0, 58700.0], [68.1, 58700.0], [68.2, 58700.0], [68.3, 58700.0], [68.4, 58700.0], [68.5, 58700.0], [68.6, 58700.0], [68.7, 58700.0], [68.8, 58700.0], [68.9, 58700.0], [69.0, 58701.0], [69.1, 58701.0], [69.2, 58701.0], [69.3, 58701.0], [69.4, 58701.0], [69.5, 58701.0], [69.6, 58701.0], [69.7, 58701.0], [69.8, 58701.0], [69.9, 58701.0], [70.0, 58701.0], [70.1, 58701.0], [70.2, 58701.0], [70.3, 58701.0], [70.4, 58701.0], [70.5, 58701.0], [70.6, 58701.0], [70.7, 58701.0], [70.8, 58701.0], [70.9, 58701.0], [71.0, 58702.0], [71.1, 58702.0], [71.2, 58702.0], [71.3, 58702.0], [71.4, 58702.0], [71.5, 58702.0], [71.6, 58702.0], [71.7, 58702.0], [71.8, 58702.0], [71.9, 58702.0], [72.0, 58703.0], [72.1, 58703.0], [72.2, 58703.0], [72.3, 58703.0], [72.4, 58703.0], [72.5, 58703.0], [72.6, 58703.0], [72.7, 58703.0], [72.8, 58703.0], [72.9, 58703.0], [73.0, 58704.0], [73.1, 58704.0], [73.2, 58704.0], [73.3, 58704.0], [73.4, 58704.0], [73.5, 58704.0], [73.6, 58704.0], [73.7, 58704.0], [73.8, 58704.0], [73.9, 58704.0], [74.0, 58705.0], [74.1, 58705.0], [74.2, 58705.0], [74.3, 58705.0], [74.4, 58705.0], [74.5, 58705.0], [74.6, 58705.0], [74.7, 58705.0], [74.8, 58705.0], [74.9, 58705.0], [75.0, 58707.0], [75.1, 58707.0], [75.2, 58707.0], [75.3, 58707.0], [75.4, 58707.0], [75.5, 58707.0], [75.6, 58707.0], [75.7, 58707.0], [75.8, 58707.0], [75.9, 58707.0], [76.0, 58708.0], [76.1, 58708.0], [76.2, 58708.0], [76.3, 58708.0], [76.4, 58708.0], [76.5, 58708.0], [76.6, 58708.0], [76.7, 58708.0], [76.8, 58708.0], [76.9, 58708.0], [77.0, 58710.0], [77.1, 58710.0], [77.2, 58710.0], [77.3, 58710.0], [77.4, 58710.0], [77.5, 58710.0], [77.6, 58710.0], [77.7, 58710.0], [77.8, 58710.0], [77.9, 58710.0], [78.0, 58710.0], [78.1, 58710.0], [78.2, 58710.0], [78.3, 58710.0], [78.4, 58710.0], [78.5, 58710.0], [78.6, 58710.0], [78.7, 58710.0], [78.8, 58710.0], [78.9, 58710.0], [79.0, 58710.0], [79.1, 58710.0], [79.2, 58710.0], [79.3, 58710.0], [79.4, 58710.0], [79.5, 58710.0], [79.6, 58710.0], [79.7, 58710.0], [79.8, 58710.0], [79.9, 58710.0], [80.0, 58711.0], [80.1, 58711.0], [80.2, 58711.0], [80.3, 58711.0], [80.4, 58711.0], [80.5, 58711.0], [80.6, 58711.0], [80.7, 58711.0], [80.8, 58711.0], [80.9, 58711.0], [81.0, 58711.0], [81.1, 58711.0], [81.2, 58711.0], [81.3, 58711.0], [81.4, 58711.0], [81.5, 58711.0], [81.6, 58711.0], [81.7, 58711.0], [81.8, 58711.0], [81.9, 58711.0], [82.0, 58712.0], [82.1, 58712.0], [82.2, 58712.0], [82.3, 58712.0], [82.4, 58712.0], [82.5, 58712.0], [82.6, 58712.0], [82.7, 58712.0], [82.8, 58712.0], [82.9, 58712.0], [83.0, 58712.0], [83.1, 58712.0], [83.2, 58712.0], [83.3, 58712.0], [83.4, 58712.0], [83.5, 58712.0], [83.6, 58712.0], [83.7, 58712.0], [83.8, 58712.0], [83.9, 58712.0], [84.0, 58713.0], [84.1, 58713.0], [84.2, 58713.0], [84.3, 58713.0], [84.4, 58713.0], [84.5, 58713.0], [84.6, 58713.0], [84.7, 58713.0], [84.8, 58713.0], [84.9, 58713.0], [85.0, 58714.0], [85.1, 58714.0], [85.2, 58714.0], [85.3, 58714.0], [85.4, 58714.0], [85.5, 58714.0], [85.6, 58714.0], [85.7, 58714.0], [85.8, 58714.0], [85.9, 58714.0], [86.0, 58714.0], [86.1, 58714.0], [86.2, 58714.0], [86.3, 58714.0], [86.4, 58714.0], [86.5, 58714.0], [86.6, 58714.0], [86.7, 58714.0], [86.8, 58714.0], [86.9, 58714.0], [87.0, 58716.0], [87.1, 58716.0], [87.2, 58716.0], [87.3, 58716.0], [87.4, 58716.0], [87.5, 58716.0], [87.6, 58716.0], [87.7, 58716.0], [87.8, 58716.0], [87.9, 58716.0], [88.0, 58716.0], [88.1, 58716.0], [88.2, 58716.0], [88.3, 58716.0], [88.4, 58716.0], [88.5, 58716.0], [88.6, 58716.0], [88.7, 58716.0], [88.8, 58716.0], [88.9, 58716.0], [89.0, 58718.0], [89.1, 58718.0], [89.2, 58718.0], [89.3, 58718.0], [89.4, 58718.0], [89.5, 58718.0], [89.6, 58718.0], [89.7, 58718.0], [89.8, 58718.0], [89.9, 58718.0], [90.0, 58719.0], [90.1, 58719.0], [90.2, 58719.0], [90.3, 58719.0], [90.4, 58719.0], [90.5, 58719.0], [90.6, 58719.0], [90.7, 58719.0], [90.8, 58719.0], [90.9, 58719.0], [91.0, 58721.0], [91.1, 58721.0], [91.2, 58721.0], [91.3, 58721.0], [91.4, 58721.0], [91.5, 58721.0], [91.6, 58721.0], [91.7, 58721.0], [91.8, 58721.0], [91.9, 58721.0], [92.0, 58724.0], [92.1, 58724.0], [92.2, 58724.0], [92.3, 58724.0], [92.4, 58724.0], [92.5, 58724.0], [92.6, 58724.0], [92.7, 58724.0], [92.8, 58724.0], [92.9, 58724.0], [93.0, 58725.0], [93.1, 58725.0], [93.2, 58725.0], [93.3, 58725.0], [93.4, 58725.0], [93.5, 58725.0], [93.6, 58725.0], [93.7, 58725.0], [93.8, 58725.0], [93.9, 58725.0], [94.0, 58726.0], [94.1, 58726.0], [94.2, 58726.0], [94.3, 58726.0], [94.4, 58726.0], [94.5, 58726.0], [94.6, 58726.0], [94.7, 58726.0], [94.8, 58726.0], [94.9, 58726.0], [95.0, 58727.0], [95.1, 58727.0], [95.2, 58727.0], [95.3, 58727.0], [95.4, 58727.0], [95.5, 58727.0], [95.6, 58727.0], [95.7, 58727.0], [95.8, 58727.0], [95.9, 58727.0], [96.0, 58728.0], [96.1, 58728.0], [96.2, 58728.0], [96.3, 58728.0], [96.4, 58728.0], [96.5, 58728.0], [96.6, 58728.0], [96.7, 58728.0], [96.8, 58728.0], [96.9, 58728.0], [97.0, 58731.0], [97.1, 58731.0], [97.2, 58731.0], [97.3, 58731.0], [97.4, 58731.0], [97.5, 58731.0], [97.6, 58731.0], [97.7, 58731.0], [97.8, 58731.0], [97.9, 58731.0], [98.0, 58740.0], [98.1, 58740.0], [98.2, 58740.0], [98.3, 58740.0], [98.4, 58740.0], [98.5, 58740.0], [98.6, 58740.0], [98.7, 58740.0], [98.8, 58740.0], [98.9, 58740.0], [99.0, 59728.0], [99.1, 59728.0], [99.2, 59728.0], [99.3, 59728.0], [99.4, 59728.0], [99.5, 59728.0], [99.6, 59728.0], [99.7, 59728.0], [99.8, 59728.0], [99.9, 59728.0]], "isOverall": false, "label": "CreateRatesAvailability", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 29800.0, "maxY": 53.0, "series": [{"data": [[37300.0, 1.0], [39600.0, 1.0], [40300.0, 1.0], [41300.0, 1.0], [41500.0, 1.0], [51500.0, 1.0], [52300.0, 1.0], [52000.0, 1.0], [54600.0, 1.0], [55100.0, 1.0], [58700.0, 31.0], [58600.0, 53.0], [58300.0, 1.0], [59700.0, 1.0], [29800.0, 1.0], [30200.0, 1.0], [30300.0, 1.0], [31200.0, 1.0]], "isOverall": false, "label": "CreateRatesAvailability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 59700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 15.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 85.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 85.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.575625484E12, "maxY": 20.0, "series": [{"data": [[1.575625494E12, 20.0], [1.575625495E12, 20.0], [1.575625496E12, 20.0], [1.575625624E12, 20.0], [1.575625539E12, 20.0], [1.575625668E12, 20.0], [1.57562567E12, 20.0], [1.575625543E12, 20.0], [1.575625544E12, 20.0], [1.575625672E12, 20.0], [1.57562563E12, 20.0], [1.575625715E12, 19.5], [1.575625631E12, 20.0], [1.575625506E12, 20.0], [1.575625719E12, 18.0], [1.57562572E12, 17.0], [1.575625507E12, 20.0], [1.57562555E12, 20.0], [1.575625552E12, 20.0], [1.575625554E12, 20.0], [1.575625682E12, 20.0], [1.575625555E12, 20.0], [1.575625598E12, 20.0], [1.575625683E12, 20.0], [1.575625726E12, 16.0], [1.575625513E12, 20.0], [1.575625728E12, 15.0], [1.575625602E12, 20.0], [1.57562573E12, 14.0], [1.575625603E12, 20.0], [1.575625731E12, 12.5], [1.575625689E12, 20.0], [1.575625565E12, 20.0], [1.575625609E12, 20.0], [1.575625611E12, 20.0], [1.575625484E12, 20.0], [1.575625613E12, 20.0], [1.575625656E12, 20.0], [1.575625741E12, 10.0], [1.575625486E12, 20.0], [1.575625571E12, 20.0], [1.575625572E12, 20.0], [1.57562566E12, 20.0], [1.575625491E12, 20.0], [1.575625662E12, 20.0], [1.575625747E12, 8.0], [1.575625748E12, 4.0]], "isOverall": false, "label": "GetRatesAvailability", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.575625748E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 55810.54320987655, "minX": 1.0, "maxY": 58714.0, "series": [{"data": [[8.0, 58655.0], [2.0, 58644.0], [9.0, 58684.0], [10.0, 58699.0], [11.0, 58658.0], [12.0, 58714.0], [3.0, 58695.0], [13.0, 58714.0], [14.0, 58711.0], [15.0, 58664.0], [16.0, 58687.0], [4.0, 58650.0], [1.0, 58636.0], [17.0, 58673.0], [18.0, 58668.0], [19.0, 58705.0], [20.0, 55810.54320987655], [5.0, 58634.0], [6.0, 58696.0], [7.0, 58708.0]], "isOverall": false, "label": "CreateRatesAvailability", "isController": false}, {"data": [[18.1, 56355.49000000002]], "isOverall": false, "label": "CreateRatesAvailability-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 390.0, "minX": 1.575625484E12, "maxY": 353731.0, "series": [{"data": [[1.575625494E12, 9157.0], [1.575625495E12, 9646.0], [1.575625496E12, 19159.0], [1.575625624E12, 1170.0], [1.575625539E12, 19286.0], [1.575625668E12, 390.0], [1.57562567E12, 390.0], [1.575625543E12, 390.0], [1.575625544E12, 390.0], [1.575625672E12, 1170.0], [1.57562563E12, 2340.0], [1.575625715E12, 780.0], [1.575625631E12, 780.0], [1.575625506E12, 19434.0], [1.575625719E12, 390.0], [1.57562572E12, 390.0], [1.575625507E12, 9643.0], [1.57562555E12, 390.0], [1.575625552E12, 390.0], [1.575625554E12, 780.0], [1.575625682E12, 390.0], [1.575625555E12, 390.0], [1.575625598E12, 780.0], [1.575625683E12, 780.0], [1.575625726E12, 390.0], [1.575625513E12, 12043.0], [1.575625728E12, 390.0], [1.575625602E12, 390.0], [1.57562573E12, 390.0], [1.575625603E12, 390.0], [1.575625731E12, 780.0], [1.575625689E12, 3120.0], [1.575625565E12, 1170.0], [1.575625609E12, 390.0], [1.575625611E12, 390.0], [1.575625484E12, 29518.0], [1.575625613E12, 1170.0], [1.575625656E12, 780.0], [1.575625741E12, 1170.0], [1.575625486E12, 9724.0], [1.575625571E12, 780.0], [1.575625572E12, 2340.0], [1.57562566E12, 390.0], [1.575625491E12, 9564.0], [1.575625662E12, 390.0], [1.575625747E12, 390.0], [1.575625748E12, 2730.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.575625494E12, 44215.0], [1.575625495E12, 44202.0], [1.575625496E12, 88430.0], [1.575625624E12, 132637.0], [1.575625539E12, 88443.0], [1.575625668E12, 44222.0], [1.57562567E12, 44222.0], [1.575625543E12, 44200.0], [1.575625544E12, 44212.0], [1.575625672E12, 132626.0], [1.57562563E12, 265355.0], [1.575625715E12, 88438.0], [1.575625631E12, 88455.0], [1.575625506E12, 88427.0], [1.575625719E12, 44220.0], [1.57562572E12, 44241.0], [1.575625507E12, 44207.0], [1.57562555E12, 44225.0], [1.575625552E12, 44220.0], [1.575625554E12, 88448.0], [1.575625682E12, 44222.0], [1.575625555E12, 44206.0], [1.575625598E12, 88432.0], [1.575625683E12, 88434.0], [1.575625726E12, 44220.0], [1.575625513E12, 353731.0], [1.575625728E12, 44214.0], [1.575625602E12, 44198.0], [1.57562573E12, 44209.0], [1.575625603E12, 44213.0], [1.575625731E12, 88453.0], [1.575625689E12, 353712.0], [1.575625565E12, 132649.0], [1.575625609E12, 44207.0], [1.575625611E12, 44219.0], [1.575625484E12, 132645.0], [1.575625613E12, 132648.0], [1.575625656E12, 88427.0], [1.575625741E12, 132682.0], [1.575625486E12, 44239.0], [1.575625571E12, 88417.0], [1.575625572E12, 265293.0], [1.57562566E12, 44222.0], [1.575625491E12, 44213.0], [1.575625662E12, 44224.0], [1.575625747E12, 44203.0], [1.575625748E12, 309516.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.575625748E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 30150.333333333332, "minX": 1.575625484E12, "maxY": 59728.0, "series": [{"data": [[1.575625494E12, 39601.0], [1.575625495E12, 40303.0], [1.575625496E12, 41485.0], [1.575625624E12, 58709.333333333336], [1.575625539E12, 54928.5], [1.575625668E12, 58660.0], [1.57562567E12, 58668.0], [1.575625543E12, 58673.0], [1.575625544E12, 58710.0], [1.575625672E12, 58708.0], [1.57562563E12, 58682.0], [1.575625715E12, 58703.0], [1.575625631E12, 58684.0], [1.575625506E12, 51923.5], [1.575625719E12, 58668.0], [1.57562572E12, 58673.0], [1.575625507E12, 52085.0], [1.57562555E12, 58694.0], [1.575625552E12, 58728.0], [1.575625554E12, 58664.0], [1.575625682E12, 58674.0], [1.575625555E12, 59728.0], [1.575625598E12, 58720.0], [1.575625683E12, 58683.0], [1.575625726E12, 58687.0], [1.575625513E12, 58637.5], [1.575625728E12, 58664.0], [1.575625602E12, 58710.0], [1.57562573E12, 58711.0], [1.575625603E12, 58659.0], [1.575625731E12, 58714.0], [1.575625689E12, 58681.375], [1.575625565E12, 58721.666666666664], [1.575625609E12, 58666.0], [1.575625611E12, 58695.0], [1.575625484E12, 30150.333333333332], [1.575625613E12, 58680.333333333336], [1.575625656E12, 58714.0], [1.575625741E12, 58680.333333333336], [1.575625486E12, 31223.0], [1.575625571E12, 58707.0], [1.575625572E12, 58692.0], [1.57562566E12, 58671.0], [1.575625491E12, 37359.0], [1.575625662E12, 58724.0], [1.575625747E12, 58655.0], [1.575625748E12, 58666.142857142855]], "isOverall": false, "label": "CreateRatesAvailability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.575625748E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 30150.333333333332, "minX": 1.575625484E12, "maxY": 59728.0, "series": [{"data": [[1.575625494E12, 39601.0], [1.575625495E12, 40303.0], [1.575625496E12, 41485.0], [1.575625624E12, 58709.333333333336], [1.575625539E12, 54928.5], [1.575625668E12, 58660.0], [1.57562567E12, 58668.0], [1.575625543E12, 58673.0], [1.575625544E12, 58710.0], [1.575625672E12, 58708.0], [1.57562563E12, 58682.0], [1.575625715E12, 58703.0], [1.575625631E12, 58683.5], [1.575625506E12, 51923.5], [1.575625719E12, 58668.0], [1.57562572E12, 58673.0], [1.575625507E12, 52085.0], [1.57562555E12, 58694.0], [1.575625552E12, 58728.0], [1.575625554E12, 58664.0], [1.575625682E12, 58674.0], [1.575625555E12, 59728.0], [1.575625598E12, 58720.0], [1.575625683E12, 58683.0], [1.575625726E12, 58687.0], [1.575625513E12, 58637.5], [1.575625728E12, 58664.0], [1.575625602E12, 58710.0], [1.57562573E12, 58711.0], [1.575625603E12, 58659.0], [1.575625731E12, 58714.0], [1.575625689E12, 58681.375], [1.575625565E12, 58721.666666666664], [1.575625609E12, 58666.0], [1.575625611E12, 58695.0], [1.575625484E12, 30150.333333333332], [1.575625613E12, 58680.333333333336], [1.575625656E12, 58714.0], [1.575625741E12, 58680.333333333336], [1.575625486E12, 31223.0], [1.575625571E12, 58707.0], [1.575625572E12, 58692.0], [1.57562566E12, 58671.0], [1.575625491E12, 37359.0], [1.575625662E12, 58724.0], [1.575625747E12, 58655.0], [1.575625748E12, 58666.142857142855]], "isOverall": false, "label": "CreateRatesAvailability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.575625748E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 381.0, "minX": 1.575625484E12, "maxY": 420.0, "series": [{"data": [[1.575625494E12, 381.0], [1.575625495E12, 395.0], [1.575625496E12, 388.0], [1.575625624E12, 412.0], [1.575625539E12, 402.0], [1.575625668E12, 391.0], [1.57562567E12, 405.0], [1.575625543E12, 400.0], [1.575625544E12, 403.0], [1.575625672E12, 411.0], [1.57562563E12, 396.1666666666667], [1.575625715E12, 398.0], [1.575625631E12, 390.5], [1.575625506E12, 394.5], [1.575625719E12, 395.0], [1.57562572E12, 410.0], [1.575625507E12, 404.0], [1.57562555E12, 416.0], [1.575625552E12, 417.0], [1.575625554E12, 400.0], [1.575625682E12, 401.0], [1.575625555E12, 405.0], [1.575625598E12, 406.0], [1.575625683E12, 394.0], [1.575625726E12, 411.0], [1.575625513E12, 391.875], [1.575625728E12, 398.0], [1.575625602E12, 406.0], [1.57562573E12, 396.0], [1.575625603E12, 400.0], [1.575625731E12, 407.5], [1.575625689E12, 400.875], [1.575625565E12, 407.0], [1.575625609E12, 395.0], [1.575625611E12, 401.0], [1.575625484E12, 407.3333333333333], [1.575625613E12, 404.3333333333333], [1.575625656E12, 408.0], [1.575625741E12, 400.0], [1.575625486E12, 398.0], [1.575625571E12, 409.0], [1.575625572E12, 398.8333333333333], [1.57562566E12, 404.0], [1.575625491E12, 394.0], [1.575625662E12, 420.0], [1.575625747E12, 393.0], [1.575625748E12, 389.2857142857143]], "isOverall": false, "label": "CreateRatesAvailability", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.575625748E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 29821.0, "minX": 1.575625484E12, "maxY": 58358.0, "series": [{"data": [[1.575625494E12, 39601.0], [1.575625484E12, 30344.0], [1.575625495E12, 40303.0], [1.575625506E12, 52328.0], [1.575625496E12, 41573.0], [1.575625486E12, 31223.0], [1.575625507E12, 52085.0], [1.575625539E12, 55163.0], [1.575625491E12, 37359.0], [1.575625513E12, 58358.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.575625494E12, 39601.0], [1.575625484E12, 29821.0], [1.575625495E12, 40303.0], [1.575625506E12, 51519.0], [1.575625496E12, 41397.0], [1.575625486E12, 31223.0], [1.575625507E12, 52085.0], [1.575625539E12, 54694.0], [1.575625491E12, 37359.0], [1.575625513E12, 58358.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.575625494E12, 39601.0], [1.575625484E12, 30344.0], [1.575625495E12, 40303.0], [1.575625506E12, 52166.2], [1.575625496E12, 41573.0], [1.575625486E12, 31223.0], [1.575625507E12, 52255.1], [1.575625539E12, 56441.0], [1.575625491E12, 37359.0], [1.575625513E12, 55946.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.575625494E12, 39601.0], [1.575625484E12, 30344.0], [1.575625495E12, 40303.0], [1.575625506E12, 52328.0], [1.575625496E12, 41573.0], [1.575625486E12, 31223.0], [1.575625507E12, 52328.0], [1.575625539E12, 58358.0], [1.575625491E12, 37359.0], [1.575625513E12, 58358.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.575625494E12, 39601.0], [1.575625484E12, 30344.0], [1.575625495E12, 40303.0], [1.575625506E12, 52328.0], [1.575625496E12, 41573.0], [1.575625486E12, 31223.0], [1.575625507E12, 52328.0], [1.575625539E12, 58358.0], [1.575625491E12, 37359.0], [1.575625513E12, 58358.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.575625539E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 41397.0, "minX": 1000.0, "maxY": 58692.0, "series": [{"data": [[1000.0, 41397.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 58692.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 41397.0, "minX": 1000.0, "maxY": 58692.0, "series": [{"data": [[1000.0, 41397.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1000.0, 58692.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.575625454E12, "maxY": 15.0, "series": [{"data": [[1.575625494E12, 1.0], [1.575625495E12, 1.0], [1.575625496E12, 2.0], [1.575625624E12, 3.0], [1.575625454E12, 15.0], [1.575625539E12, 2.0], [1.575625668E12, 1.0], [1.575625455E12, 5.0], [1.57562567E12, 1.0], [1.575625543E12, 1.0], [1.575625544E12, 1.0], [1.575625672E12, 3.0], [1.57562563E12, 6.0], [1.575625631E12, 2.0], [1.575625506E12, 2.0], [1.575625507E12, 1.0], [1.57562555E12, 1.0], [1.575625552E12, 1.0], [1.575625554E12, 1.0], [1.575625682E12, 1.0], [1.575625555E12, 2.0], [1.575625598E12, 2.0], [1.575625683E12, 2.0], [1.575625513E12, 8.0], [1.575625602E12, 1.0], [1.575625603E12, 1.0], [1.575625689E12, 8.0], [1.575625565E12, 3.0], [1.575625609E12, 1.0], [1.575625611E12, 1.0], [1.575625484E12, 3.0], [1.575625613E12, 3.0], [1.575625656E12, 2.0], [1.575625486E12, 1.0], [1.575625571E12, 2.0], [1.575625572E12, 6.0], [1.57562566E12, 1.0], [1.575625491E12, 1.0], [1.575625662E12, 1.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.575625689E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.575625484E12, "maxY": 8.0, "series": [{"data": [[1.575625494E12, 1.0], [1.575625484E12, 3.0], [1.575625495E12, 1.0], [1.575625506E12, 2.0], [1.575625496E12, 2.0], [1.575625486E12, 1.0], [1.575625507E12, 1.0], [1.575625539E12, 2.0], [1.575625491E12, 1.0], [1.575625513E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.575625624E12, 3.0], [1.575625668E12, 1.0], [1.57562567E12, 1.0], [1.575625543E12, 1.0], [1.575625544E12, 1.0], [1.575625672E12, 3.0], [1.57562563E12, 6.0], [1.575625715E12, 2.0], [1.575625631E12, 2.0], [1.575625719E12, 1.0], [1.57562572E12, 1.0], [1.57562555E12, 1.0], [1.575625552E12, 1.0], [1.575625554E12, 2.0], [1.575625682E12, 1.0], [1.575625555E12, 1.0], [1.575625598E12, 2.0], [1.575625683E12, 2.0], [1.575625726E12, 1.0], [1.575625513E12, 7.0], [1.575625728E12, 1.0], [1.575625602E12, 1.0], [1.57562573E12, 1.0], [1.575625603E12, 1.0], [1.575625731E12, 2.0], [1.575625689E12, 8.0], [1.575625565E12, 3.0], [1.575625609E12, 1.0], [1.575625611E12, 1.0], [1.575625613E12, 3.0], [1.575625656E12, 2.0], [1.575625741E12, 3.0], [1.575625571E12, 2.0], [1.575625572E12, 6.0], [1.57562566E12, 1.0], [1.575625662E12, 1.0], [1.575625747E12, 1.0], [1.575625748E12, 7.0]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.575625748E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.575625484E12, "maxY": 8.0, "series": [{"data": [[1.575625624E12, 3.0], [1.575625668E12, 1.0], [1.57562567E12, 1.0], [1.575625543E12, 1.0], [1.575625544E12, 1.0], [1.575625672E12, 3.0], [1.57562563E12, 6.0], [1.575625715E12, 2.0], [1.575625631E12, 2.0], [1.575625719E12, 1.0], [1.57562572E12, 1.0], [1.57562555E12, 1.0], [1.575625552E12, 1.0], [1.575625554E12, 2.0], [1.575625682E12, 1.0], [1.575625555E12, 1.0], [1.575625598E12, 2.0], [1.575625683E12, 2.0], [1.575625726E12, 1.0], [1.575625513E12, 7.0], [1.575625728E12, 1.0], [1.575625602E12, 1.0], [1.57562573E12, 1.0], [1.575625603E12, 1.0], [1.575625731E12, 2.0], [1.575625689E12, 8.0], [1.575625565E12, 3.0], [1.575625609E12, 1.0], [1.575625611E12, 1.0], [1.575625613E12, 3.0], [1.575625656E12, 2.0], [1.575625741E12, 3.0], [1.575625571E12, 2.0], [1.575625572E12, 6.0], [1.57562566E12, 1.0], [1.575625662E12, 1.0], [1.575625747E12, 1.0], [1.575625748E12, 7.0]], "isOverall": false, "label": "CreateRatesAvailability-failure", "isController": false}, {"data": [[1.575625494E12, 1.0], [1.575625484E12, 3.0], [1.575625495E12, 1.0], [1.575625506E12, 2.0], [1.575625496E12, 2.0], [1.575625486E12, 1.0], [1.575625507E12, 1.0], [1.575625539E12, 2.0], [1.575625491E12, 1.0], [1.575625513E12, 1.0]], "isOverall": false, "label": "CreateRatesAvailability-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.575625748E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.575625484E12, "maxY": 8.0, "series": [{"data": [[1.575625494E12, 1.0], [1.575625484E12, 3.0], [1.575625495E12, 1.0], [1.575625506E12, 2.0], [1.575625496E12, 2.0], [1.575625486E12, 1.0], [1.575625507E12, 1.0], [1.575625539E12, 2.0], [1.575625491E12, 1.0], [1.575625513E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.575625624E12, 3.0], [1.575625668E12, 1.0], [1.57562567E12, 1.0], [1.575625543E12, 1.0], [1.575625544E12, 1.0], [1.575625672E12, 3.0], [1.57562563E12, 6.0], [1.575625715E12, 2.0], [1.575625631E12, 2.0], [1.575625719E12, 1.0], [1.57562572E12, 1.0], [1.57562555E12, 1.0], [1.575625552E12, 1.0], [1.575625554E12, 2.0], [1.575625682E12, 1.0], [1.575625555E12, 1.0], [1.575625598E12, 2.0], [1.575625683E12, 2.0], [1.575625726E12, 1.0], [1.575625513E12, 7.0], [1.575625728E12, 1.0], [1.575625602E12, 1.0], [1.57562573E12, 1.0], [1.575625603E12, 1.0], [1.575625731E12, 2.0], [1.575625689E12, 8.0], [1.575625565E12, 3.0], [1.575625609E12, 1.0], [1.575625611E12, 1.0], [1.575625613E12, 3.0], [1.575625656E12, 2.0], [1.575625741E12, 3.0], [1.575625571E12, 2.0], [1.575625572E12, 6.0], [1.57562566E12, 1.0], [1.575625662E12, 1.0], [1.575625747E12, 1.0], [1.575625748E12, 7.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.575625748E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

