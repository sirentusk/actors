(function(){
  "use strict";

  var ASSETS = {
  "imdb": "images/imdb.png",
  "tmdb": "images/tmdb.png",
  "wikipedia": "images/wikipedia.png",
  "JamesSpader": "images/JamesSpader.jpg",
  "CatherineZetaJones": "images/CatherineZetaJones.jpg",
  "JohnnyDepp": "images/JohnnyDepp.jpg",
  "SalmaHayek": "images/SalmaHayek.jpg",
  "JasonStatham": "images/JasonStatham.jpg",
  "AnnaPaquin": "images/AnnaPaquin.jpg",
  "JaredLeto": "images/JaredLeto.jpg",
  "NatashaLyonne": "images/NatashaLyonne.jpg",
  "EdwardNorton": "images/EdwardNorton.jpg",
  "HaydenPanettiere": "images/HaydenPanettiere.jpg",
  "IainGlen": "images/IainGlen.jpg",
  "VinDiesel": "images/VinDiesel.jpg",
  "MillaJovovich": "images/MillaJovovich.jpg",
  "MichelleRodriguez": "images/MichelleRodriguez.jpg",
  "RichardRoxburgh": "images/RichardRoxburgh.jpg",
  "IanMcShane": "images/IanMcShane.jpg",
  "VincentDOnofrio": "images/VincentDOnofrio.jpg",
  "TomHardy": "images/TomHardy.jpg",
  "KevinSpacey": "images/KevinSpacey.jpg",
  "HugoWeaving": "images/HugoWeaving.jpg",
  "EvaMendes": "images/EvaMendes.jpg",
  "RobertDowneyJr": "images/RobertDowneyJr.jpg",
  "FionaDourif": "images/FionaDourif.jpg",
  "AidanGallagher": "images/AidanGallagher.jpg",
  "RobertSheehan": "images/RobertSheehan.jpg",
  "KateBeckinsale": "images/KateBeckinsale.jpg",
  "StuartTownsend": "images/StuartTownsend.jpg",
  "JohnNoble": "images/JohnNoble.jpg",
  "JamieCampbellBower": "images/JamieCampbellBower.jpg",
  "TheoJames": "images/TheoJames.jpg",
  "DavidSuchet": "images/DavidSuchet.jpg",
  "VinnieJones": "images/VinnieJones.jpg",
  "HughJackman": "images/HughJackman.jpg",
  "JohnNettles": "images/JohnNettles.jpg",
  "JensenAckles": "images/JensenAckles.jpg",
  "JohnHannah": "images/JohnHannah.jpg",
  "HaydenChristensen": "images/HaydenChristensen.jpg",
  "ChrisEvans": "images/ChrisEvans.jpg",
  "RyanPhillippe": "images/RyanPhillippe.jpg"
};

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- starfield ---------- */
  (function starfield(){
    var canvas = document.getElementById('starfield');
    var ctx = canvas.getContext('2d');
    var stars = [];
    var w, h, dpr;

    function resize(){
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round((w * h) / 6500);
      stars = [];
      for (var i = 0; i < count; i++){
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + .3,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * .015 + .006
        });
      }
    }

    function draw(t){
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++){
        var s = stars[i];
        var tw = reduceMotion ? 0.75 : (Math.sin(s.phase + t * s.speed) * .35 + .65);
        ctx.globalAlpha = tw * 0.85;
        ctx.fillStyle = '#e9defb';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (!reduceMotion) requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize, { passive: true });
    resize();
    requestAnimationFrame(draw);
  })();

  /* ---------- spiral layout ---------- */
  fetch('actors.json')
    .then(function(res){ return res.json(); })
    .then(init)
    .catch(function(err){ console.error('Failed to load actors.json', err); });

  function init(ACTORS){
  var stage = document.getElementById('stage');
  var arcsSvg = document.getElementById('arcs');
  var n = ACTORS.length;
  var GA = 137.50776 * Math.PI / 180;
  var R0 = 34, C = (48 - R0) / Math.sqrt(n);

  var points = [];
  ACTORS.forEach(function(actor, idx){
    var i = idx + 1;
    var angle = i * GA;
    var radius = R0 + C * Math.sqrt(i);
    var x = 50 + radius * Math.cos(angle);
    var y = 50 + radius * Math.sin(angle);
    var size = 98 - (idx / Math.max(1, n - 1)) * 40;
    points.push({ actor: actor, x: x, y: y, size: size, idx: idx });
  });

  var pathD = 'M 50 50';
  points.forEach(function(p){ pathD += ' L ' + p.x.toFixed(2) + ' ' + p.y.toFixed(2); });
  var arcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  arcPath.setAttribute('d', pathD);
  arcsSvg.appendChild(arcPath);

  var overlay = document.getElementById('overlay');
  var card = document.getElementById('card');
  var cardPortrait = document.getElementById('cardPortrait');
  var cardName = document.getElementById('card-name');
  var cardLinks = document.getElementById('cardLinks');
  var cardFavs = document.getElementById('cardFavs');
  var closeBtn = document.getElementById('closeBtn');
  var hint = document.getElementById('hint');

  function openCard(actor, nodeEl){
    var rect = nodeEl.getBoundingClientRect();
    var ox = ((rect.left + rect.width / 2) / window.innerWidth * 100).toFixed(1) + '%';
    var oy = ((rect.top + rect.height / 2) / window.innerHeight * 100).toFixed(1) + '%';
    card.style.setProperty('--ox', ox);
    card.style.setProperty('--oy', oy);

    if (actor.photo){
      cardPortrait.className = 'card-portrait';
      cardPortrait.style.backgroundImage = 'url(' + ASSETS[actor.photo] + ')';
      cardPortrait.innerHTML = '';
    } else {
      cardPortrait.className = 'card-portrait sigil';
      cardPortrait.style.backgroundImage = '';
      cardPortrait.innerHTML = '<span class="initials">' + actor.initials + '</span>';
    }

    cardName.textContent = actor.name;

    cardLinks.innerHTML = '';
    [
      ['imdb', actor.imdb, 'IMDb'],
      ['tmdb', actor.tmdb, 'TMDB'],
      ['wikipedia', actor.wiki, 'Wikipedia'],
      ['grokipedia', actor.grokipedia, 'Grokipedia']
    ].forEach(function(pair){
      var a = document.createElement('a');
      a.href = pair[1];
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = 'icon-link';
      a.setAttribute('aria-label', pair[2]);
      if (ASSETS[pair[0]]){
        var img = document.createElement('img');
        img.src = ASSETS[pair[0]];
        img.alt = pair[2];
        a.appendChild(img);
      } else {
        var mark = document.createElement('span');
        mark.className = 'mark';
        mark.textContent = 'G';
        mark.setAttribute('aria-hidden', 'true');
        a.appendChild(mark);
      }
      cardLinks.appendChild(a);
    });

    cardFavs.innerHTML = '';
    actor.favs.forEach(function(f){
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = f.u;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = f.t;
      li.appendChild(a);
      cardFavs.appendChild(li);
    });

    overlay.classList.add('open');
    closeBtn.focus();
    hint.classList.add('faded');
  }

  function closeCard(){
    overlay.classList.remove('open');
  }

  closeBtn.addEventListener('click', closeCard);
  overlay.addEventListener('click', function(e){ if (e.target === overlay) closeCard(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeCard(); });

  points.forEach(function(p){
    var wrap = document.createElement('div');
    wrap.className = 'node-wrap';
    wrap.style.left = p.x + '%';
    wrap.style.top = p.y + '%';
    wrap.style.width = p.size + 'px';
    wrap.style.height = p.size + 'px';

    if (!reduceMotion){
      var angle = Math.random() * Math.PI * 2;
      var reach = 3 + Math.random() * 4;
      wrap.style.setProperty('--dx', (Math.cos(angle) * reach).toFixed(1) + 'px');
      wrap.style.setProperty('--dy', (Math.sin(angle) * reach).toFixed(1) + 'px');
      wrap.style.setProperty('--dur', (7 + Math.random() * 6).toFixed(1) + 's');
      wrap.style.setProperty('--delay', (Math.random() * -12).toFixed(1) + 's');
    }

    var el = document.createElement('button');
    el.type = 'button';
    el.className = 'node ' + (p.actor.photo ? 'photo' : 'sigil');
    el.setAttribute('aria-label', p.actor.name);

    if (p.actor.photo){
      el.style.backgroundImage = 'url(' + ASSETS[p.actor.photo] + ')';
    } else {
      var span = document.createElement('span');
      span.className = 'initials';
      span.textContent = p.actor.initials;
      el.appendChild(span);
    }

    var label = document.createElement('span');
    label.className = 'label';
    label.textContent = p.actor.name;
    el.appendChild(label);

    el.addEventListener('click', function(){ openCard(p.actor, el); });

    wrap.appendChild(el);
    stage.appendChild(wrap);

    var delay = Math.min(p.idx * 16, 480);
    setTimeout(function(){ el.classList.add('is-in'); }, reduceMotion ? 0 : delay);
  });
  }
})();
