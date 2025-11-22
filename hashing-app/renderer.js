$(() => {
  const crypto = require('crypto');

  $('#text-input').bind('input propertychange', function() {
    const text = this.value;

    const md5Hash = crypto.createHash('md5').update(text, 'utf8').digest('hex');
    $('#md5-output').text(md5Hash);

    const sha1Hash = crypto.createHash('sha1').update(text, 'utf8').digest('hex');
    $('#sha1-output').text(sha1Hash);

    const sha256Hash = crypto.createHash('sha256').update(text, 'utf8').digest('hex');
    $('#sha256-output').text(sha256Hash);

    const sha512Hash = crypto.createHash('sha512').update(text, 'utf8').digest('hex');
    $('#sha512-output').text(sha512Hash);
  });

  $(document).ready(function() {
    $('#freeze-btn').on('click', function() {
      console.log('Starting freeze...');
      
      const startTime = Date.now();
      const duration = 25000;

      while (Date.now() - startTime < duration) {
      }

      console.log('Freeze ended');
    });
  });
})
