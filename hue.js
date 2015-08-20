
Hue = function(server, username) {
  this.server = server;
  this.username = username;

  this._getRequest = function(path) {
    HTTP.get("http://" + this.server + "/api/" + username + "/" + path);
  }

  this._postRequest = function(path, data) {
    HTTP.post("http://" + this.server + "/api/" + username + "/" + path, { data: data });
  }

  this._putRequest = function(path, data) {
    HTTP.put("http://" + this.server + "/api/" + username + "/" + path, { data: data });
  }

  // state: {"on":true, "sat":255, "bri":255,"hue":10000}
  this.setLight = function(light, state) {
    this._putRequest("lights/" + light + "/state", state);
  };

}
