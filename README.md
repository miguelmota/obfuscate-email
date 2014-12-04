# obfuscate-email

Obfuscate email address

# Install

```bash
npm install obfuscate-email
```

# Usage

```javascript
var obfuscateEmail = require('obfuscateEmail');

obfuscateEmail('john.appleseed@example.com') // *o*n.**p*es***@******e.***
obfuscateEmail('foo-bar@quux.baz') // ***-*a*@q***.***
obfuscateEmail('mary.jane4243@example.com') // ******a*e4**3@ex**p**.c**
obfuscateEmail('bob@example.co.uk') // *o*@****p**.*o.u*

```

# License

MIT
