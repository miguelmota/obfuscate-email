var test = require('tape');
var obfuscateEmail = require('../obfuscate-email');

test('obfuscate email', function (t) {
  t.plan(7);

  var emails = [
    'john.appleseed@example.com',
    'm@moogs.io',
    'bob@example.co.uk',
    'mary.jane4243@example.com',
    'foo-bar@quux.baz'
  ];

  emails.forEach(function(email) {
    t.notEqual(obfuscateEmail(email), email);
    console.log('obfuscateEmail('+email+')',obfuscateEmail(email));
  });

  t.equal(obfuscateEmail(''), '');
  t.equal(obfuscateEmail(), undefined);
  t.equal(obfuscateEmail('abc@incomplete'), 'abc@incomplete');
  t.notEqual(obfuscateEmail('abc@complete.com'), 'abc@complete.com');
});
