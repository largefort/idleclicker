<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Idle Game</title>
    <style>
      #container {
        width: 800px;
        margin: 0 auto;
      }
      canvas {
        border: 1px solid black;
      }
      #stats {
        width: 200px;
        float: right;
      }
      #stats ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      #stats li {
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <h1>My Idle Game</h1>
      <canvas id="canvas" width="600" height="400"></canvas>
      <div id="stats">
        <ul>
          <li>Money: <span id="money">0</span></li>
          <li>Workers: <span id="workers">0</span></li>
          <li>Products: <span id="products">0</span></li>
        </ul>
      </div>
    </div>
    <script src="game.js"></script>
  </body>
</html>
