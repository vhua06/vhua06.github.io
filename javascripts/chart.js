// 棣栭爜灏忓湒棰ㄨ姳鍦�
var roseWindTinyIndex = function (tag, data) {
  delTag();
  Highcharts.theme = {
   colors: ["#7cb5ec", "#eeaaee", "#90ee7e",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Dosis, sans-serif"
      }
   },
   title: {
      style: {
         fontSize: '16px',
         fontWeight: 'bold',
         textTransform: 'uppercase'
      }
   },
   tooltip: {
      borderWidth: 0,
      backgroundColor: 'rgba(219,219,216,0.8)',
      shadow: false
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      gridLineWidth: 1,
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   yAxis: {
      minorTickInterval: 'auto',
      title: {
         style: {
            textTransform: 'uppercase'
         }
      },
      labels: {
         style: {
            fontSize: '12px'
         }
      }
   },
   plotOptions: {
      candlestick: {
         lineColor: '#404048'
      }
   },
  
  
   // General
   background2: '#F0F0EA'
  
  }
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme)
    $(tag).highcharts({
        data: {
            rows: data
        },
  
        chart: {
            polar: true,
            type: 'column'
        },
  
        pane: {
            size: '100%'
        },
  
        xAxis: {
            tickmarkPlacement: 'on',
            enabled: false,
            visible: false
        },
  
          legend: {
            enabled: false
          },
  
          title: {
            text: 'WD',
            align: 'left',
            y: 31,
            style: {
              'font-size': '24px'
            }
          },
  
          exporting: {
            enabled: false
          },
  
        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            reversedStacks: false,
            visible: false
        },
  
        tooltip: {
            enabled: false
        },
  
        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'on'
            }
        }
    });
  }
  // 棣栭爜棰ㄨ姳澶у湒
  var roseWindNormalIndex = function (tag, data) {
    delTag();
    Highcharts.theme = {
     colors: ["#7cb5ec", "#eeaaee", "#90ee7e",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
     chart: {
        backgroundColor: null,
        style: {
           fontFamily: "Dosis, sans-serif"
        }
     },
     title: {
        style: {
           fontSize: '16px',
           fontWeight: 'bold',
           textTransform: 'uppercase'
        }
     },
     tooltip: {
        borderWidth: 0,
        backgroundColor: 'rgba(219,219,216,0.8)',
        shadow: false
     },
     legend: {
        itemStyle: {
           fontWeight: 'bold',
           fontSize: '13px'
        }
     },
     xAxis: {
        gridLineWidth: 1,
        labels: {
           style: {
              fontSize: '12px'
           }
        }
     },
     yAxis: {
        minorTickInterval: 'auto',
        title: {
           style: {
              textTransform: 'uppercase'
           }
        },
        labels: {
           style: {
              fontSize: '12px'
           }
        }
     },
     plotOptions: {
        candlestick: {
           lineColor: '#404048'
        }
     },
  
  
     // General
     background2: '#F0F0EA'
  
  }
  // Apply the theme
  Highcharts.setOptions(Highcharts.theme)
      $(tag).highcharts({
        data: {
            rows: data
        },
  
          chart: {
              polar: true,
              type: 'column'
          },
  
          title: {
              text: 'Wind rose for CTSP'
          },
  
          subtitle: {
              text: 'Source: CTSP'
          },
  
          pane: {
              size: '85%'
          },
  
          legend: {
              align: 'right',
              verticalAlign: 'top',
              y: 100,
              layout: 'vertical'
          },
  
          xAxis: {
              tickmarkPlacement: 'on'
          },
  
          yAxis: {
              min: 0,
              endOnTick: false,
              showLastLabel: true,
              title: {
                  text: 'Frequency (%)'
              },
              labels: {
                  formatter: function () {
                      return this.value + '%';
                  },
                  style: {
                      color: Highcharts.getOptions().colors[1]
                  }
              },
              reversedStacks: false
          },
  
          tooltip: {
              valueSuffix: '%'
          },
  
          plotOptions: {
              series: {
                  stacking: 'normal',
                  shadow: false,
                  groupPadding: 0,
                  pointPlacement: 'on'
              }
          }
      })
  }
  // 鍗虫檪瓒ㄥ嫝鍦� realtimeMonitor闋侀潰
  complexRealTimeMonitor = function (allData, nameArray, date, timeType) {
      delTag();
      var data1 = []
      var data2 = []
      var data3 = {
        endOnTick: false,
        type: 'datetime'
      }
      var data4 = {
          pointStart: Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())
      }
      switch (timeType) {
        case 'minutes':
          data4['pointInterval'] = 60 * 1000
          data3['title'] = {
            text: 'Time(minute)'
          }
          break;
        case 'hours':
          data4['pointInterval'] = 60 * 60 * 1000
          data3['title'] = {
            text: 'Time(hour)'
          }
          break;
        case 'eighth':
          var tempData = new Array()
          for ( key in allData) {
            tempData[key] = []
            for (k in allData[key]) {
              if ((parseInt(k, 10) % 8) == 0) {
                tempData[key].push(allData[key][k])
              }
            }
          }
          allData = tempData
          data4['pointInterval'] = 8 * 60 * 60 * 1000
          data3['title'] = {
            text: 'Time(8 hours)'
          }
          break;
        case 'day':
          data4['pointInterval'] = 24 * 60 * 60 * 1000
          data3['title'] = {
            text: 'Time(day)'
          }
          break;
        case 'month':
          data4['pointIntervalUnit'] = 'month'
          data3['title'] = {
            text: 'Time(month)'
          }
          break;
        case 'year':
          data4['pointIntervalUnit'] = 'year'
          data3['title'] = {
            text: 'Time(year)'
          }
          break;
      }
  
      var i = 0			//瑷堢畻鍚嶅瓧瑭茬敤鍝竴鍊�
      var line = -1 			//瑷堢畻鏁告摎瑭叉牴鍝竴鍊嬭桓
      var item2have =  true 		//鍒ゆ柗杌告槸鍚﹂噸瑜囧姞涓婏紝鍥犵偤ppb鐨勮桓鍙渶瑕佸姞涓€娆�
      for (key in allData) {
        if (key.substring(0,1) == 'W') {
            switch (key) {
              case 'W0001':
                var item2 = {
                    tickInterval: 90,
                    endOnTick: true,
                    max: 360,
                    labels: {
                        format: '{value} 掳',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: '',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    opposite: true
                }
                line++
                data2.push(item2)
                var item = {
                  name: 'WD degree',
                  color: Highcharts.getOptions().colors[0],
                  type: 'scatter',
                  yAxis: line,
                  data: allData[key],
                  marker: {
                    fillColor: 'white',
                    lineWidth: 1,
                    lineColor: Highcharts.getOptions().colors[0]
                  },
                  tooltip: {
                    pointFormat: '{point.y} 掳',
                  }
                }
                break;
              case 'W0002':
                var item2 = {
                    endOnTick: true,
                    max: 30,
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'm/s',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    opposite: true
                }
                line++
                data2.push(item2)
                var item = {
                  name: '棰ㄩ€�',
                  type: 'spline',
                  yAxis: line,
                  data: allData[key],
                  marker: {
                    enabled: false,
                    lineColor: Highcharts.getOptions().colors[0]
                  },
                  tooltip: {
                    pointFormat: 'm/s: {point.y}'
                  }
                }
                break;
              case 'W0003':
                  var item2 = {
                      endOnTick: true,
                      max: 50,
                      labels: {
                          format: '{value} 掳',
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      title: {
                          text: '鈩�',
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      opposite: true
                  }
                  line++
                  data2.push(item2)
                  var item = {
                    name: '婧害',
                    type: 'spline',
                    yAxis: line,
                    data: allData[key],
                    marker: {
                      enabled: false,
                      lineColor: Highcharts.getOptions().colors[0]
                    },
                    tooltip: {
                      pointFormat: '{point.y} 鈩�',
                      headerFormat: '<b>Time: {point.x} (hr)</b><br />'
                    }
                  }
                  break;
              case 'W0004':
                  var item2 = {
                      endOnTick: true,
                      max: 100,
                      labels: {
                          format: '{value} %',
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      title: {
                          text: '',
                          style: {
                              color: Highcharts.getOptions().colors[1]
                          }
                      },
                      opposite: true
                  }
                  line++
                  data2.push(item2)
                  var item = {
                    name: '婵曞害',
                    type: 'spline',
                    yAxis: line,
                    data: allData[key],
                    marker: {
                      enabled: false,
                      lineColor: Highcharts.getOptions().colors[0]
                    },
                    tooltip: {
                      pointFormat: '{point.y}锛�',
                      headerFormat: '<b>Time: {point.x} (hr)</b><br />'
                    }
                  }
                  break;
            }
            i++
        } else if (key != 'date') {
          if (key == 'A0001') {
            data2.push({
                min: 0,
                max: 200,
                title: {
                    text: 'ug/m<sup>3</sup>'
                },
                endOnTick: true
            })
            line++
            var item = {
              type: 'spline',
              name: nameArray[i],
              yAxis: line,
              data: allData[key],
              marker: {
                  radius: 4
              },
              tooltip: {
                  pointFormat: '{point.y} ug/m3',
                  headerFormat: '<b>Time: {point.x} (hr)</b><br />'
              }
            }
          } else {
            if (item2have) {
              var item2 = {
                  min: 0,
                  max: 100,
                  title: {
                      text: '(ppb)'
                  },
                  endOnTick: true
              }
              item2have = false
              line++
              data2.push(item2)
            }
            var item = {
              type: 'spline',
              name: nameArray[i],
              yAxis: line,
              data: allData[key],
              marker: {
                  radius: 4
              },
              tooltip: {
                  pointFormat: '{point.y} ppb'
              }
            }
          }
          i++
        } else {}
        data1.push(item)
      }
  
      data1.shift()		//delete time data
      $('.jumbotron .container').highcharts({
          chart: {
               alignTicks: false
          },
          series: data1,
          yAxis: data2,
          xAxis: data3,
          title: {
              text: '鍗虫檪瓒ㄥ嫝鍦�'
          },
          plotOptions: {
              series: data4
          }
      })
    }
  
    complex = function (target) {
      delTag();
            $(target).append('<div id="complex"></div>').find('#complex').highcharts({
            chart: {
               alignTicks: true
            },
                xAxis: {
                    min: 0,
                    max: 72,
              title: {
                text: 'Time(hr)'
              }
                },
                yAxis: [{
                    min: 0,
                    max: 100,
              title: {
                text: 'Concentration(ppb)'
              },
              endOnTick: true
                },{ // Primary yAxis
                  tickInterval: 90,
              endOnTick: true,
              max: 360,
              labels: {
                format: '{value} 掳',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              title: {
                text: 'WD degree',
                style: {
                  color: Highcharts.getOptions().colors[1]
                }
              },
              opposite: true
            }],
                title: {
                    text: '婵冨害姘ｈ薄缍滃悎鍒嗘瀽'
                },
                series: [{
                    type: 'spline',
                    name: 'NOX',
              yAxis: 0,
                    data: [[0,5.31],[1,5.66],[2,4.22],[3,4.25],[4,5.09],[5,5.83],[6,5.78],[7,8.23],[8,5.73],[9,4.91],[10,6.62],[11,5.84],[12,5.71],[13,4.64],[14,5.26],[15,7.13],[16,16.5],[17,41.32]
    ,[18,32.81],[19,5.18],[20,23.67],[21,48.41],[22,5.57],[23,4.6],[24,4.18],[25,4.64],[26,6.23],[27,6.62],[28,6.15],[29,6.89],[30,6.88],[31,8.81],[32,26.08],[33,30.61]
    ,[34,12.77],[35,31.61],[36,12.39],[37,20.66],[38,30.37],[39,25.31],[40,14.95],[41,20.45],[42,65.29],[43,16.57],[44,4.64],[45,7.46],[46,54.51],[47,9.42],[48,5.44],[49,6.1]
    ,[50,4.94],[51,4.97],[52,6.18],[53,6.88],[54,12.44],[55,17.1],[56,12.6],[57,8.43],[58,2.6],[59,3.42],[60,2.4],[61,1.12],[62,1.91],[63,2.35],[64,1.62],[65,2.69],[66,5.78]
    ,[67,7.31],[68,10.56],[69,8.98],[70,8.54],[71,9.35]
    ],
                    marker: {
                        radius: 4
                    },
              tooltip: {
                pointFormat: 'NOX: {point.y} ppb',
                headerFormat: '<b>Time: {point.x} (hr)</b><br />'
              }
                },{
              name: 'WD degree',
              color: Highcharts.getOptions().colors[0],
              type: 'scatter',
              yAxis: 1,
              data: [ // x, y positions where 0 is the first category
                [0,251.18],[1,241.83],[2,250.07],[3,247.7],[4,243.44],[5,214.14],[6,159.77],[7,172.54],[8,233.47],[9,236.97],[10,244.79],[11,240.63],[12,242.9],[13,245.25],[14,259.16]
                ,[15,284.59],[16,325.62],[17,347.97],[18,33.85],[19,69.31],[20,42.85],[21,22.17],[22,76.47],[23,71.31],[24,86.97],[25,117.88],[26,142.59],[27,156.79],[28,174.49],[29,173.41]
                ,[30,188.18],[31,200.28],[32,278.36],[33,325.31],[34,321.12],[35,320.89],[36,321.05],[37,324.4],[38,321.84],[39,321.05],[40,328.29],[41,340.39],[42,8.33],[43,51.42]
                ,[44,70.53],[45,64.38],[46,354.68],[47,96.35],[48,195.52],[49,214.38],[50,212.65],[51,235.97],[52,221.41],[53,170.84],[54,144.27],[55,163.03],[56,181.48],[57,241.35]
                ,[58,252.95],[59,274.84],[60,247.06],[61,250.7],[62,247.7],[63,236.03],[64,196.56],[65,144.73],[66,122.09],[67,116.97],[68,122.94],[69,148.54],[70,171.94],[71,123.42]
              ],
              marker: {
                fillColor: 'white',
                lineWidth: 1,
                lineColor: Highcharts.getOptions().colors[0]
              },
              tooltip: {
                pointFormat: 'WD degree: {point.y}'
              }
            },{
                    type: 'spline',
                    name: 'SO2',
              yAxis: 0,
                    data: [[0,2.01] ,[1,2.28] ,[2,2.02] ,[3,1.21] ,[4,2.5] ,[5,2.01] ,[6,1.35] ,[7,1.59] ,[8,1.14] ,[9,1.22] ,[10,1.5] ,[11,0.87] ,[12,0.32] ,[13,0.39] ,[14,0.56] ,[15,2.42] ,[16,9.1] ,[17,17.19]
                 ,[18,13.81] ,[19,1.69] ,[20,9.22] ,[21,17.48] ,[22,1.48] ,[23,1.02] ,[24,0.28] ,[25,0.25] ,[26,1.45] ,[27,4.02] ,[28,3] ,[29,2.49] ,[30,2.44] ,[31,2.81] ,[32,8.63]
                 ,[33,12.32] ,[34,5.66] ,[35,13.11] ,[36,7.4] ,[37,8.47] ,[38,13.54] ,[39,12.57] ,[40,9.07] ,[41,13.27] ,[42,21.58] ,[43,2.59] ,[44,1.13] ,[45,1.52] ,[46,19.65] ,[47,2.24]
                 ,[48,0.25] ,[49,0.75] ,[50,1.24] ,[51,1.46] ,[52,2.5] ,[53,1.9] ,[54,0.7] ,[55,1.83] ,[56,1.4] ,[57,1.37] ,[58,2.23] ,[59,2.54] ,[60,2.65] ,[61,1.64] ,[62,1.27] ,[63,0.93]
                 ,[64,0.14] ,[65,0] ,[66,0] ,[67,0.08] ,[68,1.04] ,[69,1.2] ,[70,0.34] ,[71,0.39]
                ],
                    marker: {
                        radius: 4
                    },
              tooltip: {
                pointFormat: 'SO2: {point.y} (ppb)',
                headerFormat: '<b>Time: {point.x} (hr)</b><br />'
              }
                }]
            });
        }
  
  barComplex = function(target) {
      delTag();
      $(target).highcharts({
          chart: {
               alignTicks: true,
               events: {
                  afterPrint: function () {
                      console.log('hello');
                  }
               }
          },
          xAxis: {
              min: 0,
              max: 120,
              title: {
                  text: 'Time(hr)'
              }
          },
          yAxis: [{
              min: 0,
              max: 100,
              title: {
                  text: 'PM2.5 Concentration(ug/m3)'
              },
              endOnTick: true
          },{ // Primary yAxis
              tickInterval: 90,
              endOnTick: true,
              max: 360,
              labels: {
                  format: '{value} 掳',
                  style: {
                      color: Highcharts.getOptions().colors[1]
                  }
              },
              title: {
                  text: 'WD degree',
                  style: {
                      color: Highcharts.getOptions().colors[1]
                  }
              },
              opposite: true
          }],
          title: {
              text: '婵冨害姘ｈ薄缍滃悎鍒嗘瀽'
          },
          series: [{
              type: 'column',
              name: 'Bar',
              data: [[14,42.1021], [26,22.8411], [38,44.0416], [50,47.7106], [62,36.872], [74,43.0174], [86,29.3184], [98,31.4095]],
              marker: {
                  enabled: false
              },
              states: {
                  hover: {
                      lineWidth: 0
                  }
              },
              enableMouseTracking: false
          },{
              name: 'WD degree',
              color: Highcharts.getOptions().colors[0],
              type: 'scatter',
              yAxis: 1,
              data: [ // x, y positions where 0 is the first category
                  [1, 180.57], [2, 175.33], [3, 156.91], [4, 152.52], [5, 148.32], [6, 149.33], [7, 136.29], [8, 135.53], [9, 158.77], [10, 350.86], [11, 349.28], [12, 348.37], [13, 348.84], [14, 352.15]
                  , [15, 0.08], [16, 2.8], [17, 5.26], [18, 8.51], [19, 10.04], [20, 8.32], [21, 3.62], [22, 349.75], [23, 318.22], [24, 215.85], [25, 213.83], [26, 196.58], [27, 151.92]
                  , [28, 153.38], [29, 151.11], [30, 158.85], [31, 158.92], [32, 151.58], [33, 188.73], [34, 264.66], [35, 282.09], [36, 256.78], [37, 220.98], [38, 273.16], [39, 305.55]
                  , [40, 325.32], [41, 347.95], [42, 5.24], [43, 18.56], [44, 26.22], [45, 2.54], [46, 5.5], [47, 5.57], [48, 16.7], [49, 54.57], [50, 85.75], [51, 57.72], [52, 151.78]
                  , [53, 176.51], [54, 165.96], [55, 147.41], [56, 140.58], [57, 135.37], [58, 1.67], [59, 339.47], [60, 336], [61, 330.29], [62, 336.68], [63, 343.53], [64, 344.56]
                  , [65, 357.84], [66, 5.3], [67, 7.02], [68, 36.63], [69, 26.86], [70, 3.04], [71, 0.39], [72, 17.78], [73, 195.67], [74, 222.31], [75, 171.17], [76, 142.01], [77, 158.32]
                  , [78, 137.9], [79, 137.89], [80, 161.18], [81, 170.89], [82, 206.85], [83, 272.35], [84, 315.77], [85, 304.54], [86, 280.53], [87, 273.27], [88, 271.86], [89, 191.64]
                  , [90, 121.97], [91, 112.53], [92, 119.34], [93, 138.99], [94, 160.53], [95, 253.8], [96, 111.54], [97, 97.81], [98, 29.91], [99, 44.98], [100, 0.87], [101, 7.46]
                  , [102, 49.07], [103, 112.98], [104, 136.41], [105, 96.71], [106, 349.96], [107, 334.13], [108, 328.36], [109, 320.32], [110, 308.65], [111, 304.02], [112, 322.69]
                  , [113, 332.59], [114, 50.75], [115, 113.03], [116, 99.76], [117, 142.58], [118, 154.51], [119, 155.55], [120, 169.53]
              ],
              marker: {
                  fillColor: 'white',
                  lineWidth: 1,
                  lineColor: Highcharts.getOptions().colors[0]
              },
              tooltip: {
                  pointFormat: 'WD degree: {point.y}'
              }
          },{
              type: 'spline',
              name: '婵冨害',
              yAxis: 0,
              data: [[1, 0], [2, 15.8], [3, 12.2], [4, 26.3], [5, 26.2], [6, 30.6], [7, 31.1], [8, 30.1], [9, 29], [10, 23.7], [11, 22.3], [12, 23], [13, 21.1], [14, 31.1], [15, 23.1], [16, 14.8], [17, 13.8], [18, 11]
                  , [19, 0], [20, 0], [21, 8.4], [22, 11], [23, 12], [24, 11.5], [25, 10.7], [26, 10.8], [27, 13.2], [28, 13.5], [29, 13], [30, 14.7], [31, 5.7], [32, 14.4], [33, 19.4], [34, 20.1], [35, 21]
                  , [36, 20.4], [37, 22.3], [38, 24.6], [39, 21.6], [40, 19.8], [41, 20.1], [42, 20.8], [43, 50.9], [44, 48.6], [45, 33.3], [46, 17.7], [47, 12.1], [48, 11], [49, 10.4], [50, 12.3]
                  , [51, 11.6], [52, 15.2], [53, 19.8], [54, 32.8], [55, 45.2], [56, 63.5], [57, 34.3], [58, 30.1], [59, 32.8], [60, 30.2], [61, 23.2], [62, 22.4], [63, 26], [64, 18], [65, 19.5]
                  , [66, 29.9], [67, 38.8], [68, 37.5], [69, 40.5], [70, 33.9], [71, 13.8], [72, 5.3], [73, 4.6], [74, 5.1], [75, 6.6], [76, 0], [77, 0], [78, 36.6], [79, 30.5], [80, 34.6], [81, 42]
                  , [82, 41.7], [83, 32.7], [84, 29.3], [85, 30.4], [86, 20.4], [87, 20.6], [88, 19.1], [89, 23.1], [90, 34.1], [91, 26.4], [92, 19.6], [93, 19.5], [94, 19.6], [95, 23.1], [96, 16.8]
                  , [97, 22.4], [98, 20.1], [99, 18], [100, 17.4], [101, 24.4], [102, 18.6], [103, 21.3], [104, 30.6], [105, 27.7], [106, 29.9], [107, 38.2], [108, 39.9], [109, 49.8], [110, 49.5], [111, 54.8]
                  , [112, 50.8], [113, 54.6], [114, 34.5], [115, 35.3], [116, 28.5], [117, 25.6], [118, 24.7], [119, 23.7], [120, 24.1]],
              marker: {
                  radius: 4
              },
              tooltip: {
                  pointFormat: '婵冨害: {point.y}',
                  headerFormat: '<b>Time: {point.x} (hr)</b><br />'
              }
          }]
      });
          };
  delTag = function () {
    setTimeout(function(){ $('text[text-anchor="end"]:contains(Highcharts.com)').css('display','none') });
  }