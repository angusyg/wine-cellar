/**
 * Frontend client application ui module;
 * Templates for UI components
 */
(function() {
  'use strict';

  angular
    .module('frontend.core.ui')
    .run(['$templateCache', ($templateCache) => {
      $templateCache.put('TEXT-INPUT-GROUP-DIRECTIVE',
        `<div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">{{addon}}</span>
          </div>
          <input class="form-control" id="funkystyling" type="text" placeholder="{{placeholder}}" ng-model="ngModel" ng-change="ngChange()">
        </div>`
      );
    }]);
})();
