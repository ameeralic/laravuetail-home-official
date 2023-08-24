<!DOCTYPE html>
<html class="scroll-smooth js">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="storage/images/laravuetail-logo.png">
    <title>LaraVueTail</title>

    @vite('resources/js/app.js')
    @vite('resources/css/app.css')
    @inertiaHead
  </head>
  <body class="bg-zinc-900 scroll-smooth js">
    @inertia
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
  </body>
</html>