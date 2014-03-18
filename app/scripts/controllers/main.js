'use strict';

angular.module('monitorWebApp').controller('MainCtrl', function ($scope,$moment,$http) {

  $scope.from = '';
  $scope.timeFrom = 0;
  $scope.to = '';
  $scope.timeTo = 23;
  $scope.data = [];
  $scope.options = {
        xaxis: {
          mode: "time",
          minTickSize: [1, 'hour'],
          tickFormatter: function(val, axis) {
            var d = new Date(val);
            return $moment(d).format('ddd, h:mm:ss a');
          }
        },
        grid: {
          color: '#cccccc'
        },
        series: {
          lines: {
            show: true, 
            lineWidth: '2px',
            fill: true, 
            fillColor: "#95b7ff",
            steps: true
          }
    }
  };
  $scope.hasData = false;

  $scope.refresh = function() {
    var fromDate = new Date($scope.from);
    fromDate.setHours($scope.timeFrom);

    var toDate = new Date($scope.to);
    toDate.setHours($scope.timeTo);

    var url = '{"$and":[ {"time": {"$gt": %s1}}, {"time": {"$lte": %s2}} ]}';
    url = url.replace('%s1', fromDate.getTime(), 'g');
    url = url.replace('%s2', toDate.getTime(), 'g');
    url = 'http://192.168.1.140:9292/monitor/temperature?selector=' + encodeURIComponent(url);

    $http.get('/temperature.json').success(function(mongoData) {
      var mappedData = mongoData.map(function(e) { 
        return [e.time, e.temp];
      });

      $scope.data = [mappedData];

      // $scope.data = {
      //   labels : filteredLabels,
      //   datasets : [
      //     {
      //       fillColor : 'rgba(0,255,255,0.5)',
      //       strokeColor : 'rgba(133,71,255,1)',
      //       data : mongoData.map(function(e) { return e.temp; })
      //     },
      //   ]
      // };

      $scope.hasData = true;
    });
  };

  $scope.dateOptions = {
        changeYear: false,
        changeMonth: false,
        yearRange: '2010:-0',
        dateFormat: 'dd-mm-yy'
  };

});
