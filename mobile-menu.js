(function () {
  'use strict';

  /* ── Navigation data (shared across all pages) ── */
  var NAV = [
    { label: 'Início', href: 'Home.dc.html' },
    { label: 'Quem Sou', href: 'Quem Sou.dc.html' },
    { label: 'Método Maternar Leve', href: 'Metodo.dc.html' },
    { label: 'Blog', href: 'Blog.dc.html' },
  ];

  var CONSULTORIAS = [
    { label: 'Diagnóstico do Sono', href: 'Diagnostico.dc.html', desc: 'Por onde começar · R$ 147' },
    { label: 'Consultoria Coletiva', href: 'Consultoria Coletiva.dc.html', desc: 'Em grupo · R$ 247' },
    { label: 'Consultoria Individual ★', href: 'Consultoria Individual.dc.html', desc: 'A mais escolhida · R$ 597', hl: true },
    { label: 'Domiciliar Premium', href: 'Consultoria Premium.dc.html', desc: 'Presencial' },
  ];

  var BIBLIOTECA = [
    { label: 'Guia 0–3 meses', href: 'Guia 0-3 meses.dc.html' },
    { label: 'Guia 4–6 meses', href: 'Guia 4-6 meses.dc.html' },
    { label: 'Guia 7–12 meses', href: 'Guia 7-12 meses.dc.html' },
    { label: 'Rotinas Prontas', href: 'Rotinas Prontas.dc.html' },
    { label: 'Kit Ambiente do Sono', href: 'Kit Ambiente do Sono.dc.html' },
    { label: 'Checklists de Rotina', href: 'Checklists de Rotina.dc.html' },
    { label: 'Kit Primeiros Passos', href: 'Kit Primeiros Passos.dc.html' },
    { label: 'Curso para Gestantes', href: 'Curso Gestantes.dc.html' },
    { label: 'MaternaClub', href: 'MaternaClub.dc.html' },
  ];

  /* ── SVG icons ── */
  var ICON_BURGER = '<svg width="22" height="18" viewBox="0 0 22 18" fill="none"><line x1="1" y1="1.5" x2="21" y2="1.5" stroke="#2B2A27" stroke-width="2" stroke-linecap="round"/><line x1="1" y1="9" x2="21" y2="9" stroke="#2B2A27" stroke-width="2" stroke-linecap="round"/><line x1="1" y1="16.5" x2="21" y2="16.5" stroke="#2B2A27" stroke-width="2" stroke-linecap="round"/></svg>';
  var ICON_CLOSE  = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><line x1="2" y1="2" x2="18" y2="18" stroke="#2B2A27" stroke-width="2.2" stroke-linecap="round"/><line x1="18" y1="2" x2="2" y2="18" stroke="#2B2A27" stroke-width="2.2" stroke-linecap="round"/></svg>';

  /* ── CSS injected once ── */
  function injectCSS() {
    var s = document.createElement('style');
    s.id = 'vt-mobile-menu-css';
    s.textContent = [
      '#vt-burger{display:none;align-items:center;justify-content:center;',
        'width:44px;height:44px;border:none;background:transparent;',
        'border-radius:10px;cursor:pointer;padding:0;flex-shrink:0;}',

      '@media(max-width:768px){',
        '#vt-burger{display:flex;}',
      '}',

      '#vt-mobile-menu{',
        'position:fixed;top:0;right:0;bottom:0;width:100%;max-width:360px;',
        'background:#FAF7F2;z-index:9999;overflow-y:auto;',
        'transform:translateX(100%);transition:transform .32s cubic-bezier(.4,0,.2,1);',
        'display:flex;flex-direction:column;',
        'box-shadow:-8px 0 40px rgba(45,42,36,.15);',
      '}',
      '#vt-mobile-menu.vt-open{transform:translateX(0);}',

      '#vt-menu-backdrop{',
        'position:fixed;inset:0;background:rgba(43,42,39,.45);',
        'z-index:9998;opacity:0;pointer-events:none;',
        'transition:opacity .32s ease;',
      '}',
      '#vt-menu-backdrop.vt-open{opacity:1;pointer-events:auto;}',

      '.vt-menu-head{',
        'display:flex;align-items:center;justify-content:space-between;',
        'padding:18px 20px;border-bottom:1px solid #E8E1D5;flex-shrink:0;',
      '}',
      '.vt-menu-close{',
        'width:40px;height:40px;border:none;background:transparent;',
        'border-radius:9px;cursor:pointer;display:flex;align-items:center;',
        'justify-content:center;transition:.15s;',
      '}',
      '.vt-menu-close:hover{background:#EDE7DC;}',

      '.vt-menu-body{flex:1;padding:8px 0 16px;overflow-y:auto;}',

      '.vt-menu-link{',
        'display:block;padding:13px 20px;',
        "font:600 15px 'Hanken Grotesk',sans-serif;",
        'color:#2B2A27;text-decoration:none;transition:.14s;',
      '}',
      '.vt-menu-link:hover{background:#EDE7DC;color:#2E5A63;}',

      '.vt-menu-section{',
        'padding:16px 20px 6px;',
        "font:700 11px 'Hanken Grotesk',sans-serif;",
        'color:#98938B;letter-spacing:.08em;text-transform:uppercase;',
      '}',

      '.vt-menu-sub{',
        'display:flex;align-items:center;justify-content:space-between;',
        'padding:11px 20px 11px 24px;text-decoration:none;transition:.14s;',
      '}',
      '.vt-menu-sub:hover{background:#EDE7DC;}',
      '.vt-menu-sub-label{',
        "font:600 14px 'Hanken Grotesk',sans-serif;color:#2B2A27;",
      '}',
      '.vt-menu-sub-label.hl{color:#2E5A63;}',
      '.vt-menu-sub-desc{',
        "font:400 12px 'Hanken Grotesk',sans-serif;color:#98938B;",
      '}',

      '.vt-menu-divider{height:1px;background:#E8E1D5;margin:8px 20px;}',

      '.vt-menu-foot{',
        'padding:16px 20px 32px;border-top:1px solid #E8E1D5;flex-shrink:0;',
      '}',
      '.vt-menu-cta{',
        'display:block;text-align:center;text-decoration:none;',
        "font:700 15px 'Hanken Grotesk',sans-serif;",
        'color:#fff;background:#2E5A63;',
        'padding:14px 20px;border-radius:12px;',
        'box-shadow:0 6px 20px rgba(46,90,99,.22);transition:.18s;',
      '}',
      '.vt-menu-cta:hover{background:#1F4A52;transform:translateY(-1px);}',
    ].join('');
    document.head.appendChild(s);
  }

  /* ── Build menu HTML ── */
  function buildMenu() {
    var html = '';

    /* Header */
    html += '<div class="vt-menu-head">';
    html += '<a href="Home.dc.html" style="display:flex;align-items:center;gap:10px;text-decoration:none;">';
    html += '<img src="assets/logo-mark.png" alt="Vitória Teixeira" style="height:36px;width:auto;">';
    html += '<span style="font:500 17px \'Newsreader\',serif;color:#2B2A27;">Vitória Teixeira</span>';
    html += '</a>';
    html += '<button class="vt-menu-close" id="vt-menu-close" aria-label="Fechar menu">' + ICON_CLOSE + '</button>';
    html += '</div>';

    /* Body */
    html += '<div class="vt-menu-body">';

    /* Main links */
    NAV.forEach(function (item) {
      html += '<a class="vt-menu-link" href="' + item.href + '">' + item.label + '</a>';
    });

    html += '<div class="vt-menu-divider"></div>';

    /* Consultorias */
    html += '<div class="vt-menu-section">Consultorias</div>';
    CONSULTORIAS.forEach(function (item) {
      html += '<a class="vt-menu-sub" href="' + item.href + '">';
      html += '<span class="vt-menu-sub-label' + (item.hl ? ' hl' : '') + '">' + item.label + '</span>';
      html += '<span class="vt-menu-sub-desc">' + item.desc + '</span>';
      html += '</a>';
    });

    html += '<div class="vt-menu-divider"></div>';

    /* Biblioteca */
    html += '<div class="vt-menu-section">Biblioteca Digital</div>';
    BIBLIOTECA.forEach(function (item) {
      html += '<a class="vt-menu-link" style="padding:10px 20px 10px 24px;" href="' + item.href + '">' + item.label + '</a>';
    });

    html += '</div>'; /* end .vt-menu-body */

    /* Footer CTA */
    html += '<div class="vt-menu-foot">';
    html += '<a class="vt-menu-cta" href="Diagnostico.dc.html">Agendar Diagnóstico do Sono &rarr;</a>';
    html += '</div>';

    return html;
  }

  /* ── Main init ── */
  function init() {
    if (window.innerWidth > 900) return; // only on mobile/tablet

    /* Guard: already injected */
    if (document.getElementById('vt-burger')) return;

    var header = document.querySelector('header');
    if (!header) {
      setTimeout(init, 300);
      return;
    }
    var headerInner = header.querySelector(':scope > div');
    if (!headerInner) {
      setTimeout(init, 300);
      return;
    }

    injectCSS();

    /* Burger button */
    var burger = document.createElement('button');
    burger.id = 'vt-burger';
    burger.setAttribute('aria-label', 'Abrir menu');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = ICON_BURGER;
    headerInner.appendChild(burger);

    /* Backdrop */
    var backdrop = document.createElement('div');
    backdrop.id = 'vt-menu-backdrop';
    document.body.appendChild(backdrop);

    /* Menu panel */
    var panel = document.createElement('div');
    panel.id = 'vt-mobile-menu';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Menu de navegação');
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = buildMenu();
    document.body.appendChild(panel);

    /* ── Open / Close ── */
    var isOpen = false;

    function openMenu() {
      isOpen = true;
      panel.classList.add('vt-open');
      backdrop.classList.add('vt-open');
      panel.setAttribute('aria-hidden', 'false');
      burger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      isOpen = false;
      panel.classList.remove('vt-open');
      backdrop.classList.remove('vt-open');
      panel.setAttribute('aria-hidden', 'true');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function () { isOpen ? closeMenu() : openMenu(); });
    backdrop.addEventListener('click', closeMenu);
    document.getElementById('vt-menu-close').addEventListener('click', closeMenu);

    panel.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) closeMenu();
    });
  }

  /* Wait for dc-runtime to render the header */
  function waitAndInit() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 400); });
    } else {
      setTimeout(init, 400);
    }
  }

  waitAndInit();
})();
