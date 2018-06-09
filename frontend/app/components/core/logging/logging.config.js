/**
 * Frontend client application logging module:
 * Config
 * - Log decorator to send every client log to server
 * - Exception handler to log uncatched exceptions
 */
(function() {
  'use strict';

  angular
    .module('frontend.core.logging')
    .config(LogDecorator)
    .config(ExceptionHandlerDecorator)
    .config(Config);

  LogDecorator.$inject = ['$provide', 'PARAMETERS', 'API'];

  function LogDecorator($provide, PARAMETERS, API) {
    if (PARAMETERS.SERVER_LOGGING_ACTIVATED) {
      DecoratorServer.$inject = ['$delegate', '$window'];

      function DecoratorServer($delegate, $window) {
        const levels = ['debug', 'info', 'warn', 'error'];
        levels.forEach(level => {
          const original = $delegate[level];
          $delegate[level] = () => {
            const message = Array.prototype.slice.call(arguments);
            original(...arguments);
            $.ajax({
              type: 'POST',
              url: `${API.URL}${API.BASE}/log/${level}`,
              contentType: 'application/json',
              data: angular.toJson({
                url: $window.location.href,
                message,
              }),
            });
          };
        });
        return $delegate;
      }
      $provide.decorator('$log', DecoratorServer);
    }
  }

  ExceptionHandlerDecorator.$inject = ['$provide'];

  function ExceptionHandlerDecorator($provide) {
    ExceptionHandler.$inject = ['$delegate', '$log'];

    function ExceptionHandler($delegate, $log) {
      return (exception, cause) => $log.error(exception, cause);
    }
    $provide.decorator('$exceptionHandler', ExceptionHandler);
  }

  Config.$inject = ['$httpProvider'];

  function Config($httpProvider) {
    $httpProvider.interceptors.push('httpErrorInterceptor');
  }
})();
