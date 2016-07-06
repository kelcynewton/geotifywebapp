// public/core.js
var writer = angular.module('writer', []);

function mainController($scope) {
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
