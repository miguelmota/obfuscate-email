(function(){

  function random(a,b) {
    return Math.floor(Math.random() * b) + a;
  };

  function obfuscateEmail(email) {
    if (!email) return email;
    var re = /^(.*)(@)(.*?)(\.)(.*)$/;

    return email.replace(re, function(m,username,at,hostname,dot,tld) {
      function obs(s) {
        var a = [];
        var n = s.length;
        while (n--) {
          if (random(0,3) !== 0) {
            a.push('*');
          } else {
            a.push(s[s.length-1-n]);
          }
        }
        return a.join('');
      }
      return obs(username) + at + obs(hostname) + dot + obs(tld);
    });
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = obfuscateEmail;
  } else if (typeof exports !== 'undefined') {
    exports.obfuscateEmail = obfuscateEmail;
  } else {
    window.obfuscateEmail = obfuscateEmail;
  }

})();
