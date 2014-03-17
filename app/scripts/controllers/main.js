'use strict';

angular.module('monitorWebApp').controller('MainCtrl', function ($scope,$resource,$moment,$http) {

    window.test = function(data) {
        console.log(data);
    };

    $http.defaults.headers.common.Accept = 'application/json';
    $http.defaults.headers.common.ContentType = 'application/json';

    $http.jsonp('http://192.168.1.140:28017/monitor/temperature/?limit=50&callback=test');

  var rData = [
    { 'time' : 1394963957883, 'read' : 'YES', 'temp' : 23.812, '_id' : { '$oid' : '532575f6de7a4c380d6eaac3' } } ,
    { 'time' : 1394964197184, 'read' : 'YES', 'temp' : 23.687, '_id' : { '$oid' : '532576e61d95a3870d93ca07' } } ,
    { 'time' : 1394964207172, 'read' : 'YES', 'temp' : 23.687, '_id' : { '$oid' : '532576ef1d95a3870d93ca08' } } ,
    { 'time' : 1394964217168, 'read' : 'YES', 'temp' : 23.687, '_id' : { '$oid' : '532576f91d95a3870d93ca09' } } ,
    { 'time' : 1394964227179, 'read' : 'YES', 'temp' : 23.687, '_id' : { '$oid' : '532577031d95a3870d93ca0a' } } ,
    { 'time' : 1394964237199, 'read' : 'YES', 'temp' : 23.625, '_id' : { '$oid' : '5325770d1d95a3870d93ca0b' } } ,
    { 'time' : 1394964247198, 'read' : 'YES', 'temp' : 23.625, '_id' : { '$oid' : '532577171d95a3870d93ca0c' } } ,
    { 'time' : 1394964257208, 'read' : 'YES', 'temp' : 23.687, '_id' : { '$oid' : '532577211d95a3870d93ca0d' } } ,
    { 'time' : 1394964267208, 'read' : 'YES', 'temp' : 23.625, '_id' : { '$oid' : '5325772b1d95a3870d93ca0e' } } ,
    { 'time' : 1394964277209, 'read' : 'YES', 'temp' : 23.625, '_id' : { '$oid' : '532577351d95a3870d93ca0f' } } ,
    { 'time' : 1394964287218, 'read' : 'YES', 'temp' : 23.625, '_id' : { '$oid' : '5325773f1d95a3870d93ca10' } } ,
    { 'time' : 1394964297228, 'read' : 'YES', 'temp' : 23.625, '_id' : { '$oid' : '532577491d95a3870d93ca11' } } ,
    { 'time' : 1394964307229, 'read' : 'YES', 'temp' : 23.812, '_id' : { '$oid' : '532577531d95a3870d93ca12' } } ,
    { 'time' : 1394964317239, 'read' : 'YES', 'temp' : 26.875, '_id' : { '$oid' : '5325775d1d95a3870d93ca13' } } ,
    { 'time' : 1394964327248, 'read' : 'YES', 'temp' : 29.062, '_id' : { '$oid' : '532577671d95a3870d93ca14' } } ,
    { 'time' : 1394964337249, 'read' : 'YES', 'temp' : 29.937, '_id' : { '$oid' : '532577711d95a3870d93ca15' } } ,
    { 'time' : 1394964347258, 'read' : 'YES', 'temp' : 29.312, '_id' : { '$oid' : '5325777b1d95a3870d93ca16' } } ,
    { 'time' : 1394964357259, 'read' : 'YES', 'temp' : 28.5, '_id' : { '$oid' : '532577851d95a3870d93ca17' } } ,
    { 'time' : 1394964367270, 'read' : 'YES', 'temp' : 28.062, '_id' : { '$oid' : '5325778f1d95a3870d93ca18' } } ,
    { 'time' : 1394964377268, 'read' : 'YES', 'temp' : 27.75, '_id' : { '$oid' : '532577991d95a3870d93ca19' } } ,
    { 'time' : 1394964387268, 'read' : 'YES', 'temp' : 27.437, '_id' : { '$oid' : '532577a31d95a3870d93ca1a' } } ,
    { 'time' : 1394964397278, 'read' : 'YES', 'temp' : 27.125, '_id' : { '$oid' : '532577ad1d95a3870d93ca1b' } } ,
    { 'time' : 1394964407279, 'read' : 'YES', 'temp' : 26.812, '_id' : { '$oid' : '532577b71d95a3870d93ca1c' } } ,
    { 'time' : 1394964417289, 'read' : 'YES', 'temp' : 26.625, '_id' : { '$oid' : '532577c11d95a3870d93ca1d' } } ,
    { 'time' : 1394964427288, 'read' : 'YES', 'temp' : 26.375, '_id' : { '$oid' : '532577cb1d95a3870d93ca1e' } } ,
    { 'time' : 1394964437298, 'read' : 'YES', 'temp' : 26.125, '_id' : { '$oid' : '532577d51d95a3870d93ca1f' } } ,
    { 'time' : 1394964447298, 'read' : 'YES', 'temp' : 25.937, '_id' : { '$oid' : '532577df1d95a3870d93ca20' } } ,
    { 'time' : 1394964457298, 'read' : 'YES', 'temp' : 25.75, '_id' : { '$oid' : '532577e91d95a3870d93ca21' } } ,
    { 'time' : 1394964467308, 'read' : 'YES', 'temp' : 25.625, '_id' : { '$oid' : '532577f31d95a3870d93ca22' } } ,
    { 'time' : 1394964477308, 'read' : 'YES', 'temp' : 25.437, '_id' : { '$oid' : '532577fd1d95a3870d93ca23' } } ,
    { 'time' : 1394964487318, 'read' : 'YES', 'temp' : 25.312, '_id' : { '$oid' : '532578071d95a3870d93ca24' } } ,
    { 'time' : 1394964497321, 'read' : 'YES', 'temp' : 25.125, '_id' : { '$oid' : '532578111d95a3870d93ca25' } } ,
    { 'time' : 1394964507328, 'read' : 'YES', 'temp' : 25, '_id' : { '$oid' : '5325781b1d95a3870d93ca26' } } ,
    { 'time' : 1394964517339, 'read' : 'YES', 'temp' : 24.875, '_id' : { '$oid' : '532578251d95a3870d93ca27' } } ,
    { 'time' : 1394964527338, 'read' : 'YES', 'temp' : 24.75, '_id' : { '$oid' : '5325782f1d95a3870d93ca28' } } ,
    { 'time' : 1394964537348, 'read' : 'YES', 'temp' : 24.625, '_id' : { '$oid' : '532578391d95a3870d93ca29' } } ,
    { 'time' : 1394964547358, 'read' : 'YES', 'temp' : 24.5, '_id' : { '$oid' : '532578431d95a3870d93ca2a' } } ,
    { 'time' : 1394964557358, 'read' : 'YES', 'temp' : 24.5, '_id' : { '$oid' : '5325784d1d95a3870d93ca2b' } } ,
    { 'time' : 1394964567368, 'read' : 'YES', 'temp' : 24.312, '_id' : { '$oid' : '532578571d95a3870d93ca2c' } } ,
    { 'time' : 1394964577368, 'read' : 'YES', 'temp' : 24.25, '_id' : { '$oid' : '532578611d95a3870d93ca2d' } } ,
    { 'time' : 1394964587378, 'read' : 'YES', 'temp' : 24.187, '_id' : { '$oid' : '5325786b1d95a3870d93ca2e' } } ,
    { 'time' : 1394964597389, 'read' : 'YES', 'temp' : 24.125, '_id' : { '$oid' : '532578751d95a3870d93ca2f' } } ,
    { 'time' : 1394964607398, 'read' : 'YES', 'temp' : 24, '_id' : { '$oid' : '5325787f1d95a3870d93ca30' } } ,
    { 'time' : 1394964617398, 'read' : 'YES', 'temp' : 23.937, '_id' : { '$oid' : '532578891d95a3870d93ca31' } } ,
    { 'time' : 1394964627409, 'read' : 'YES', 'temp' : 23.875, '_id' : { '$oid' : '532578931d95a3870d93ca32' } } ,
    { 'time' : 1394964637408, 'read' : 'YES', 'temp' : 23.812, '_id' : { '$oid' : '5325789d1d95a3870d93ca33' } } ,
    { 'time' : 1394964647423, 'read' : 'YES', 'temp' : 23.75, '_id' : { '$oid' : '532578a71d95a3870d93ca34' } } ,
    { 'time' : 1394964657419, 'read' : 'YES', 'temp' : 23.687, '_id' : { '$oid' : '532578b11d95a3870d93ca35' } } ,
    { 'time' : 1394964667429, 'read' : 'YES', 'temp' : 23.625, '_id' : { '$oid' : '532578bb1d95a3870d93ca36' } } ,
    { 'time' : 1394964677428, 'read' : 'YES', 'temp' : 23.562, '_id' : { '$oid' : '532578c51d95a3870d93ca37' } }
  ];

  $scope.data = {
    labels : rData.map(function(e) { return $moment(e.time).format('ddd, hh:mm:ss'); }),
    datasets : [
      {
        fillColor : 'rgba(0,255,255,0.5)',
        strokeColor : 'rgba(133,71,255,1)',
        data : rData.map(function(e) { return e.temp; })
      },
    ]
  };

  $scope.myOptions =  {};
});
