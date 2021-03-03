
;(function (global, $) {
  var Greet = function Greetr(firstName, lastName, language) {
    // instead of being a constructor and needing to use 'new', return another constructor function's generated object
    return new Greet.init(firstName, lastName, language);
  };
  // these are never directly accessible because they are in scope of IIFE.
  var supportedLanguages = ['en', 'fi', 'ge'];

  var greetings = {
    en: 'Hello',
    fi: 'Hei',
    ge: 'Hallo'
  };

  var formalGreetings = {
    en: 'Greetings',
    fi: 'Tervehdys',
    ge: 'Grüß Gott'
  };

  var logMessages = {
    en: 'Logged in',
    fi: 'Kirjautunut sisään',
    ge: 'Eingeloggt'

    // will be exposed inside the prototype object
  };Greet.prototype = {
    fullName: function fullName() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function validate() {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function greeting() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function formalGreeting() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // chainable methods return their own containing object
    greet: function greet(formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function log() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },

    setLanguage: function setLanguage(lang) {
      // set language
      this.language = lang;
      this.validate();
      //make chainable
      return this;
    },

    HTMLGreeting: function HTMLGreeting(selector, formal) {
      // if (!$) {
      //   throw 'jQuery not loaded';
      // }

      if (!selector) {
        throw 'Missing selector';
      }

      var msg = void 0;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      //update value, set html to the greeting
      if ($) {
        $(selector).html(msg);
      } else {
        document.getElementById(selector).innerHTML = msg;
      }
      return this;
    }
  };

  Greet.init = function (firstName, lastName, language) {
    // building a new object that's going to be returned by the Greet function
    // this = empty object created by new
    // no need to call 'new'
    var self = this;
    // setting up default properties
    self.firstName = firstName || '', self.lastName = lastName || '', self.language = language || 'en';

    self.validate();
  };

  // the proto property of an object created by the Greet.init function points to 
  // the prototype property of the Greet function
  Greet.init.prototype = Greet.prototype;

  // attach Greet to the global object so that I can call the function anywhere
  // and the alias G$
  global.Greet = global.G$ = Greet;
})(window, jQuery);


