angular.module("gallery", ['ngAnimate'])

.controller('AppController', function($scope){
  $scope.imageList = [
    {
        url: "https://mosaic.scdn.co/640/711e574b8c2f066a7c7eefe9108d8f21fc2818b99f372081a26007e8ccb9404f94a9382e94a890352ea8b06d4eb92c2c9f0a1ac6f31398c2d5bacb3e6df97c0a4da2eef2cf2533a82858d2c238eb5ee4",
        name: "rn",
        go_to_url: "https://open.spotify.com/user/128652660/playlist/6uSCsPzdLuPaGTej3NpN0s",
        location: "Sunnyvale, CA"
    },
    {
        url: "https://mosaic.scdn.co/640/393323adb574dab12aab924432c7a440bc020ba22322d21892c31be5127d96bd1d54a7956be7193773bbc6a3b2e9ca5cb0bca5ce6d4c0859fbd5b498b2587ff1b4d4d301feb7547609eccaec3f9381ba",
        name: "Fall",
        go_to_url: "https://open.spotify.com/user/128652660/playlist/5mKQPqTSLhB4ROC33HdqEB",
        location: "Mountain View, CA"
    },
    {
        url: "https://mosaic.scdn.co/640/ec953c663501991488477dbdeb93989a8b7d4902dfe23b674d7ff0b8f94be34b1d0f5098e5bd979bc987f9ddf05cfcd944a3f2ada9989e5ce762974e3a0fd861327e3510a1e7c282d6925f115205e94d",
        name: "deep focus",
        go_to_url: "https://open.spotify.com/user/1210525585/playlist/7eQdxpt8s1UkkHcskd54jK",
        location: "Mountain View, CA"
    },
    {
        url: "https://mosaic.scdn.co/640/0a66292c7bd99110ad747847b555fea64d1879df35aa53e7622d98b0c551e252f7da0c736fa92b06ac38b6165fa78fe44a5c6ec50611a31e70583f2dd887eabda854c64a16daae32047ede793b561c72",
        name: "Surrendered",
        go_to_url: "https://open.spotify.com/user/128652660/playlist/4jhn3jtD3zq2LaUSYRAqDd",
        location: "Mountain View, CA"
    }
  ]
})

.directive('galleryExample', function($interval, $window){

  return {
    restrict: 'A',
    templateUrl: 'galleryPartial.html',
    scope: {
      images: '='
    },
    link: function(scope, element, attributes){
      // Initialise the nowshowing variable to show the first image.
      scope.nowShowing = 0;

      // Image click behavior
      scope.openInNewWindow = function(index){
        $window.open(scope.images[index].go_to_url);
      }
    }
  };


})
