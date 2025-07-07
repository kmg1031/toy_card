<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 100px;
      height: 150px;
      border: 2px solid black;
      border-radius: 10px;
      margin: 10px;
      padding: 5px;
      text-align: center;
      background-color: white;
      cursor: grab;
    }
    .object { background-color: #f5f5dc; }
    .action { background-color: #d0f0fd; }
    .dropzone {
      width: 120px;
      height: 170px;
      border: 2px dashed gray;
      display: inline-block;
      vertical-align: top;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div id="hand">
    <div class="card object" draggable="true">오브젝트 카드</div>
    <div class="card action" draggable="true">행동 카드</div>
  </div>
  <div id="board">
    <div class="dropzone"></div>
    <div class="dropzone"></div>
  </div>

  <script>
    function setupCardEvents() {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.addEventListener('dragstart', e => {
          e.dataTransfer.setData('text/plain', e.target.outerHTML);
          setTimeout(() => card.style.display = 'none', 0);
        });

        card.addEventListener('dragend', () => {
          card.style.display = 'block';
        });
      });
    }

    function setupDropzones() {
      const zones = document.querySelectorAll('.dropzone');
      zones.forEach(zone => {
        zone.addEventListener('dragover', e => e.preventDefault());
        zone.addEventListener('drop', e => {
          e.preventDefault();
          const html = e.dataTransfer.getData('text/plain');
          zone.innerHTML = html;
        });
      });
    }

    function initCardGame() {
      setupCardEvents();
      setupDropzones();
    }

    window.addEventListener('DOMContentLoaded', initCardGame);
  </script>
</body>
</html>
