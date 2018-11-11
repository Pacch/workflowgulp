"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(document).ready(function () {
  // $('.container-whats-arduino').click(function(){
  //    $('.container-contenido').slideDown();
  //    $(this).hide();
  // });
  // $('.close').click(function(){
  //     $('.container-contenido').slideUp('slow');
  //     $('.container-whats-arduino').show();
  //     $('html,body').animate({scrollTop: 0}, 600);
  // });
  $('.burguer-menu').click(function () {
    $('.menu').slideToggle();
  });
  $('.menu-option-products').click(function () {
    $('.menu-option-products .submenu-menu').slideToggle();
    $('.menu-option-learning .submenu-menu').slideUp();
    $('.menu-option-support .submenu-menu').slideUp();
    $('.menu-option-community .submenu-menu').slideUp();
  });
  $('.menu-option-community').click(function () {
    $('.menu-option-community .submenu-menu').slideToggle();
    $('.menu-option-products .submenu-menu').slideUp();
    $('.menu-option-learning .submenu-menu').slideUp();
    $('.menu-option-support .submenu-menu').slideUp();
  });
  $('.menu-option-learning').click(function () {
    $('.menu-option-learning .submenu-menu').slideToggle();
    $('.menu-option-products .submenu-menu').slideUp();
    $('.menu-option-community .submenu-menu').slideUp();
    $('.menu-option-support .submenu-menu').slideUp();
  });
  $('.menu-option-support').click(function () {
    $('.menu-option-support .submenu-menu').slideToggle();
    $('.menu-option-products .submenu-menu').slideUp();
    $('.menu-option-learning .submenu-menu').slideUp();
    $('.menu-option-community .submenu-menu').slideUp();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var ArduinoToogle =
  /*#__PURE__*/
  function () {
    function ArduinoToogle(btn) {
      _classCallCheck(this, ArduinoToogle);

      this.btn = document.querySelector(btn);
      this.init = this.init.bind(this);
      this.caja = this.caja.bind(this);
    }

    _createClass(ArduinoToogle, [{
      key: "caja",
      value: function caja() {
        return document.querySelector(".contenido-principal .container-contenido");
      }
    }, {
      key: "inactive",
      value: function inactive() {
        this.caja().classList.remove("active");
      }
    }, {
      key: "active",
      value: function active() {
        this.caja().classList.add("active");
      }
    }, {
      key: "init",
      value: function init() {
        var _this = this;

        this.btn.addEventListener("click", function () {
          console.log(_this.caja().classList.contains("active"));
          _this.caja().classList.contains("active") ? _this.inactive() : _this.active();
        }); // this.caja().style.display = "none";
      }
    }]);

    return ArduinoToogle;
  }();

  var HeaderCambios =
  /*#__PURE__*/
  function () {
    function HeaderCambios() {
      _classCallCheck(this, HeaderCambios);

      this.condicion = this.condicion.bind(this);
    }

    _createClass(HeaderCambios, [{
      key: "condicion",
      value: function condicion() {
        window.scrollY >= 70 ? this.agregarClases() : this.removeClases();
      }
    }, {
      key: "agregarClases",
      value: function agregarClases() {
        document.querySelector(".header").classList.add("scroll");
        document.querySelector(".header-menu").classList.add("scroll");
        document.querySelector(".arduino-logo").classList.add("scroll-logo");
        document.querySelector(".arduino-logo-compressed").classList.add("scroll-logo-compressed");
        document.querySelector(".container-logos").classList.add("scroll");
        document.querySelector(".container-menu").classList.add("scroll-menu");
        document.querySelector(".container-login").classList.add("scroll");
        document.querySelector(".submenu-menu").classList.add("scroll");
      }
    }, {
      key: "removeClases",
      value: function removeClases() {
        document.querySelector(".header").classList.remove("scroll");
        document.querySelector(".header-menu").classList.remove("scroll");
        document.querySelector(".arduino-logo").classList.remove("scroll-logo");
        document.querySelector(".arduino-logo-compressed").classList.remove("scroll-logo-compressed");
        document.querySelector(".container-logos").classList.remove("scroll");
        document.querySelector(".container-menu").classList.remove("scroll-menu");
        document.querySelector(".container-login").classList.remove("scroll");
        document.querySelector(".submenu-menu").classList.remove("scroll");
      }
    }, {
      key: "init",
      value: function init() {
        window.addEventListener("scroll", this.condicion);
      }
    }]);

    return HeaderCambios;
  }();

  var Scroll =
  /*#__PURE__*/
  function () {
    function Scroll(btn) {
      _classCallCheck(this, Scroll);

      this.btn = document.querySelector(btn);
      this.animacion = this.animacion.bind(this);
      this.distanciaRecorrer = this.altoWindow() - this.puntoInicial();
      this.incrementador = this.incrementador.bind(this);
      this.incrementScroll = this.incrementScroll.bind(this);
      var scrollLoopId;
      this.scrollLoopId = scrollLoopId;
    }

    _createClass(Scroll, [{
      key: "altoWindow",
      value: function altoWindow() {
        return document.body.getBoundingClientRect().height;
      }
    }, {
      key: "puntoInicial",
      value: function puntoInicial() {
        return this.btn.getBoundingClientRect().top + window.scrollY;
      }
    }, {
      key: "stopInterval",
      value: function stopInterval() {
        console.log("stop");
        this.distanciaRecorrer = this.altoWindow() - this.puntoInicial();
        clearInterval(this.scrollLoopId);
      }
    }, {
      key: "incrementador",
      value: function incrementador() {
        var windowsRecorrido = 10;
        window.scrollBy(0, -windowsRecorrido);
        return this.distanciaRecorrer += windowsRecorrido;
      }
    }, {
      key: "incrementScroll",
      value: function incrementScroll() {
        console.log(this.altoWindow());
        console.log(this.distanciaRecorrer);
        this.altoWindow() <= this.distanciaRecorrer ? this.stopInterval() : this.incrementador();
      }
    }, {
      key: "startScrollLoop",
      value: function startScrollLoop() {
        this.scrollLoopId = setInterval(this.incrementScroll, 1);
      }
    }, {
      key: "animacion",
      value: function animacion() {
        this.startScrollLoop();
      }
    }, {
      key: "init",
      value: function init() {
        this.btn.addEventListener("click", this.animacion);
      }
    }]);

    return Scroll;
  }();

  var p1 = new Scroll(".flecha-superior");
  p1.init();
  var arduinoToogle = new ArduinoToogle(".container-whats-arduino");
  arduinoToogle.init();
  var headerCambios = new HeaderCambios();
  headerCambios.init();
});