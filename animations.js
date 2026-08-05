/* EduFlow Academy — shared animation layer, included on every page.
   Adds: fade-in on load, fade-out page transition on internal navigation,
   scroll/entrance reveal for top-level page sections, and never leaves
   content permanently hidden if something goes wrong. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function fadeIn() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.add('eduflow-loaded');
      });
    });
  }

  function isInternalHtmlLink(a) {
    if (!a || !a.getAttribute) return false;
    var href = a.getAttribute('href');
    if (!href) return false;
    if (href.charAt(0) === '#') return false;
    if (/^(javascript|mailto|tel):/i.test(href)) return false;
    if (a.target && a.target !== '' && a.target !== '_self') return false;
    if (a.hasAttribute('download')) return false;
    if (a.hasAttribute('onclick')) return false;
    if (a.origin && a.origin !== window.location.origin) return false;
    return true;
  }

  function setupPageTransitions() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href]');
      if (!isInternalHtmlLink(a)) return;
      var href = a.getAttribute('href');
      e.preventDefault();
      document.body.classList.remove('eduflow-loaded');
      document.body.classList.add('eduflow-leaving');
      setTimeout(function () { window.location.href = href; }, reduceMotion ? 0 : 280);
    }, true);
  }

  function collectRevealTargets() {
    var skipTags = { SCRIPT: 1, STYLE: 1, LINK: 1, NOSCRIPT: 1, META: 1 };
    var atomicTags = { NAV: 1, HEADER: 1, FOOTER: 1, ASIDE: 1 };
    var maxDepth = 3;
    var maxTargets = 60;

    function expand(el, depth) {
      if (atomicTags[el.tagName] || depth >= maxDepth) return [el];
      var kids = Array.prototype.filter.call(el.children, function (c) {
        return !skipTags[c.tagName];
      });
      if (kids.length >= 2 && kids.length <= 60) {
        var out = [];
        kids.forEach(function (k) {
          out = out.concat(expand(k, depth + 1));
        });
        return out;
      }
      return [el];
    }

    var top = Array.prototype.filter.call(document.body.children, function (el) {
      return !skipTags[el.tagName];
    });

    var targets = [];
    top.forEach(function (el) {
      targets = targets.concat(expand(el, 0));
    });
    return targets.slice(0, maxTargets);
  }

  function setupReveal() {
    var targets = collectRevealTargets();
    if (!targets.length) return;

    targets.forEach(function (el, i) {
      el.classList.add('eduflow-reveal');
      el.style.setProperty('--eduflow-delay', Math.min(i * 0.1, 0.7) + 's');
    });

    if (!('IntersectionObserver' in window) || reduceMotion) {
      targets.forEach(function (el) { el.classList.add('eduflow-in-view'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('eduflow-in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { observer.observe(el); });

    // Safety net: never leave content permanently invisible.
    setTimeout(function () {
      targets.forEach(function (el) { el.classList.add('eduflow-in-view'); });
    }, 2500);
  }

  ready(function () {
    setupReveal();
    setupPageTransitions();
    fadeIn();
  });

  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      document.body.classList.remove('eduflow-leaving');
      document.body.classList.add('eduflow-loaded');
    }
  });
})();
