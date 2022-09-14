function setCookie(name, value) {
  var hostname = window.location.hostname;
  hostname = hostname.substring(hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1));
  var expires = new Date((new Date()).getTime() + 365 * 24 * 60 * 60 * 1000); // default to 365 days in the future
  console.log('guarda', name, value, expires, hostname)
  
  document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/; domain=" + hostname + ";";
  document.cookie = name + "=" + escape(value) + "; expires=" + expires.toGMTString() + "; path=/;";
  
  //document.cookie = name + '=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  setCookie('testCookie', 'false-34')