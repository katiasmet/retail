<!DOCTYPE html>
<html lang="en" manifest="<?php echo $basePath;?>/manifest.appcache">
<head>
  <meta charset="UTF-8">
  <title>Auth 101</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" type="text/css" href="<?php echo $basePath;?>/css/bootstrap.min.css"/>
  <link rel="stylesheet" type="text/css" href="<?php echo $basePath;?>/css/style.css"/>
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
