/**
 * Frontend client application ui module;
 * Directives for UI components
 */
(function() {
  'use strict';

  angular
    .module('frontend.core.ui')
    .directive('textInputGroup', TextInputGroup);

  TextInputGroup.$inject = ['$templateCache'];

  function TextInputGroup($templateCache) {
    return {
      restrict: 'E',
      scope: {
        ngModel: '=',
        addon: '@',
        placeholder: '@',
        ngChange: '&'
      },
      template: $templateCache.get('TEXT-INPUT-GROUP-DIRECTIVE'),
      link: link,
    };

    function link(scope, element, attrs) {
      element.bind('focus', function() {
        console.log('SAAAAAAAAAAAAAAAAAAAAA')
      });
      // Lost focus
      element.bind('blur', function() {
        console.log('XXXXXXXXXXXXXXXXXX')
      });
    }
  }
})();
