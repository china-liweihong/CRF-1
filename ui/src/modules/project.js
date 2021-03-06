import angular from 'angular';
import uiRouter from 'angular-ui-router';
import '../lib/css/project.css';
import '../commons/page.js';
import '../../node_modules/chart.js/dist/Chart.min.js';
import '../../node_modules/angular-chart.js/dist/angular-chart.min.js';

angular.module('project', [uiRouter, 'chart.js', 'page'])
  .config(['ChartJsProvider', function(ChartJsProvider) {
    ChartJsProvider.setOptions({
      colors: ['#949FB1', '#4D5360']
    });

  }])

.controller('projectController', ['$scope', '$http', '$state', 'localStorageService', function($scope, $http, $state, localStorageService) {
  loginStatus();
  $scope.click_project = localStorageService.get('project');

  function loginStatus() {
    if (!localStorageService.get('user')) {
      window.location.href = '/login.html';
    }
  }

}])

.controller('projectDefaultController', ['$scope', '$http', '$state', 'localStorageService', function($scope, $http, $state, localStorageService) {

  loginStatus();
  $http({
    method: 'GET',
    url: '/api/projects/projectData/' + localStorageService.get('project').id
  }).then(function success(response) {
    $scope.labels = ['男病例患者', '女病例患者', '已保存病例', '已提交病例', '所有病例', '所在医院病例', '所在医院男病例', '所在医院女病例'];
    $scope.data = [response.data[0], response.data[1], response.data[3], response.data[2], response.data[4], response.data[5], response.data[6], response.data[7]];
  });

  //得到该项目的所有医院
  $scope.url = '/api/projects/' + localStorageService.get('project').id + '/hospital';


  /**
   *点击某个项目的某家医院，将其数据序列化到本地库中
   */
  $scope.click_hospital = function(hospital) {
    localStorageService.set('hospital', hospital);
  };

  function loginStatus() {
    if (!localStorageService.get('user')) {
      window.location.href = '/login.html';
    }
  }


}])

.controller('projectCaseController', ['$scope', '$http', '$state', '$stateParams', 'localStorageService', function($scope, $http, $state, $stateParams, localStorageService) {
  loginStatus();
  $scope.Illnesses = [];
  searchIllness();

  $scope.clickIll = function(x) {
    sessionStorage.setItem('patientId', x.id);
    window.open('/main.html#!/patientInfo');
  };

  function searchIllness() {
    if (!$stateParams.project_searchInput) {
      $scope.url = '/api/case/' + localStorageService.get('project').id;
    } else if(localStorageService.get('project').id == 1){
      $scope.url = '/api/case/search/' + localStorageService.get('project').id + '/' + $stateParams.project_searchInput;
    } else if(localStorageService.get('project').id == 2){
      $scope.url = '/api/case/mlSearch/' + localStorageService.get('project').id + '/' + $stateParams.project_searchInput;
    }
  }

  function loginStatus() {
    if (!localStorageService.get('user')) {
      window.location.href = '/login.html';
    }
  }

}])

.controller('hospitalDefaultController', ['$scope', '$http', '$state', 'localStorageService', function($scope, $http, $state, localStorageService) {
  loginStatus();
  $scope.click_hospital = localStorageService.get('hospital');
  writeIllnessPermission();
  $scope.image = $scope.click_hospital.image_url;
  $scope.clickPatient = function(x) {
    sessionStorage.setItem('patientId', x.id);
    window.open('/main.html#!/patientInfo');
  };

  function loginStatus() {
    if (!localStorageService.get('user')) {
      window.location.href = '/login.html';
    }
  }

  $scope.Illnesses = [];
  $scope.url = '/api/case/' + localStorageService.get('project').id + '/' + localStorageService.get('hospital').id;


  /**
   *病例录入权限判断，然后进行控制
   */
  function writeIllnessPermission() {
    if (localStorageService.get('project').isCollect) {
      if (!(localStorageService.get('project').currentUserPermissionInProject.contains('新增案例'))) {
        $('#writeIllness').addClass('ng-hide');
      }
    } else {
      $('#writeIllness').addClass('ng-hide');
    }
  }
}]);

Array.prototype.contains = function(obj) {
  var i = this.length;
  while (i--) {
    if (this[i] === obj) {
      return true;
    }
  }
  return false;
};