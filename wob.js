var Wob = {
  data: {
    colors: [],
    message: ""
  },

  init: function() {
    for (var i = 0; i < this.URL.colors().length; i++) {
      this.data.colors.push(this.URL.colors()[i]);
    }
    this.data.message = this.URL.message();
    this.light(this.data.message, this.data.colors);
  },

  light: function(message, colors) {
    alert(message + colors.toString());
  }
};

Wob.Session = {
  store: [],

  get: function(key) {
    return this.store[key];
  },

  set: function(key, value) {
    this.store[key] = value;
  },

  equals: function(key, value) {
    return (this.store[key] === value) ? true : false;
  }
};

Wob.URL = {
  path: function(segment) {
    // http://woblight.com/s/646773,776773,828273/this%20is%20Woblight!%20What%20are%20you%20doing%3F
    var p = window.location.pathname;
    return (segment ? p.split('/')[segment] : p);
  },

  message: function() {
    return decodeURIComponent(this.path(3));
  },

  colors: function() {
    return this.path(2).split(',');
  }
}
