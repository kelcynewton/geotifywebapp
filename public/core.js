// public/core.js
var writer = angular.module('writer', []);

function mainController($scope) {
    $scope.playlists = [{thumbail_url: "https://mosaic.scdn.co/640/0a66292c7bd99110ad747847b555fea64d1879df35aa53e7622d98b0c551e252f7da0c736fa92b06ac38b6165fa78fe44a5c6ec50611a31e70583f2dd887eabda854c64a16daae32047ede793b561c72",
                        name: "Surrendered",
                        url: "https://open.spotify.com/user/1210525585/playlist/7eQdxpt8s1UkkHcskd54jK",
                        location: "Mountain View, CA"}];
    $scope.thoughts = [];

    $scope.placeholderThought = "Type a thought and press enter...";
    $scope.currentThought = "";

    var adjustScroll = function() {
        $('body').scrollTop($('body')[0].scrollHeight);
    }

    var addNewThought = function(newThought) {
        $scope.thoughts.push({message:newThought});
        $scope.$apply();
        adjustScroll();
    }

    $('div[contenteditable]').keydown(function(e) {
        var that = this;
        // trap the return key being pressed
        if (e.keyCode === 13) {
          e.preventDefault();
          addNewThought($(that).text());
          $(that).text("");
          $(that).focus();
          // prevent the default behaviour of return key pressed
          
        }
    });
}
