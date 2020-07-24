<?php
if($_POST["message"]) {
    mail("marie.parker2239@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>

<!DOCTYPE html>

<html lang="en-us">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Marie Parker Drafting Portfolio</title>
    <meta name="description" content="Marie Parker's AutoCAD and Solidowrks Portfolio">

    <link href="css/styles.css" rel="stylesheet">

</head>
<body>
    <nav>
      <div class="boundary top-grid">
        <h1 class="name"><a class="link-on-dark" href="index.html">Marie Parker</a></h1>
        <button class="menu-button" onclick="toggleMenu()">Menu</button>
        <ul id="Menu" class="menu toggle">
          <a class="link-on-dark" href="index.html"><li class="menu-link large-hide">Home</li></a>
          <a class="link-on-dark" href="solidworks.html"><li class="menu-link">Solidworks</li></a>
          <a class="link-on-dark" href="autocad.html"><li class="menu-link">AutoCAD</li></a>
          <a class="link-on-dark" href="contact.html"><li class="menu-link">Contact</li></a>
      </ul>
      </div>
    </nav>
    <div class="background1">
      <div class="boundary">
        <h2>Contact Me</h2>
      </div>
    </div>
    <div class="background2">
        <form method="post" action="contact.php">
            <textarea name="message"></textarea>
            <input type="submit">
        </form>
    </div>
    <div class="background3"></div>
    <footer class="footer">Marie Parker 2020</footer>
    <script src="js/menuToggle.js"></script>
</body>
</html>