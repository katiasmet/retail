<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <title>#MadeInSchie</title>

  <meta name="viewport" content="width=device-width, initial-scale=1"/>

  <link rel="stylesheet" type="text/css" href="<?php echo $basePath;?>/css/style.css"/>
  <script type="text/javascript">
    WebFontConfig = {
      custom: {
        families: ['gotham'],
        urls: ['<?php echo $basePath;?>/assets/fonts/gotham.css']
      }
    };

    (function() {
      var wf = document.createElement('script');
      wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
  </script>
</head>
<body>
  <div class="react-app">

  </div>
  <script>
    window.app = window.app || {};
    window.app.basename = '<?php echo $basePath;?>';
  </script>

  <script src="<?php echo $basePath;?>/js/script.js"></script>
</body>
</html>
