'use strict';

angular.module('monitorWebApp').controller('MainCtrl', function ($scope, $moment, $http) {

  $scope.from = '';
  $scope.timeFrom = 0;
  $scope.to = '';
  $scope.timeTo = 23;
  $scope.data = [];
  $scope.options = {
    xaxis: {
      mode: 'time',
      minTickSize: [30, 'second'],
      tickFormatter: function (val, axis) {
        return $moment(val).format('ddd, hh:mm a');
      }
    },
    grid: {
      color: '#cccccc'
    }
  };
  $scope.hasData = false;

  $scope.refresh = function () {
    var fromDate = new Date($scope.from);
    fromDate.setHours($scope.timeFrom);

    var toDate = new Date($scope.to);
    toDate.setHours($scope.timeTo);

    var baseUrl = 'http://192.168.1.140:9292/monitor/temperature?';

    var url = 'selector={"$and":[ {"time": {"$gt": new Date("%s1")}}, {"time": {"$lte": new Date("%s2")}} ]}';
    url = url.replace('%s1', fromDate.toISOString(), 'g');
    url = url.replace('%s2', toDate.toISOString(), 'g');
    url = baseUrl + encodeURIComponent(url);

    $http.get(url).success(function (mongoData) {
      var mappedData = mongoData.map(function (e) {
        var d = new Date(e.time);
        // var m = $moment(d).format('ddd, h:mm:ss a');
        return [d.getTime(), e.temp];
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