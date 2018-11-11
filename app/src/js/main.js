$(document).ready(function(){
    // $('.container-whats-arduino').click(function(){
    //    $('.container-contenido').slideDown();
    //    $(this).hide();
    // });
    // $('.close').click(function(){
    //     $('.container-contenido').slideUp('slow');
    //     $('.container-whats-arduino').show();
    //     $('html,body').animate({scrollTop: 0}, 600);
    // });
    $('.burguer-menu').click(function(){
        $('.menu').slideToggle();
    });

    $('.menu-option-products').click(function(){
        $('.menu-option-products .submenu-menu').slideToggle();
        $('.menu-option-learning .submenu-menu').slideUp();
        $('.menu-option-support .submenu-menu').slideUp();
        $('.menu-option-community .submenu-menu').slideUp();
    });

    $('.menu-option-community').click(function(){
        $('.menu-option-community .submenu-menu').slideToggle();
        $('.menu-option-products .submenu-menu').slideUp();
        $('.menu-option-learning .submenu-menu').slideUp();
        $('.menu-option-support .submenu-menu').slideUp();
    });

    $('.menu-option-learning').click(function(){
        $('.menu-option-learning .submenu-menu').slideToggle();
        $('.menu-option-products .submenu-menu').slideUp();
        $('.menu-option-community .submenu-menu').slideUp();
        $('.menu-option-support .submenu-menu').slideUp();
    });

    $('.menu-option-support').click(function(){
        $('.menu-option-support .submenu-menu').slideToggle();
        $('.menu-option-products .submenu-menu').slideUp();
        $('.menu-option-learning .submenu-menu').slideUp();
        $('.menu-option-community .submenu-menu').slideUp();
    });
    });


document.addEventListener("DOMContentLoaded",() =>{
    class ArduinoToogle{
        constructor(btn){
            this.btn = document.querySelector(btn);
            this.init = this.init.bind(this);
            this.caja = this.caja.bind(this);
        }
        caja(){
            return document.querySelector(".contenido-principal .container-contenido")
        }
        inactive(){
            this.caja().classList.remove("active");
        }
        active(){
            this.caja().classList.add("active");
        }
        init(){
            this.btn.addEventListener("click",() =>{
                console.log(this.caja().classList.contains("active"));
                this.caja().classList.contains("active") ? this.inactive()  : this.active();
            })
            // this.caja().style.display = "none";
        }
    }

    class HeaderCambios{
        constructor(){
            this.condicion = this.condicion.bind(this);
        }
        condicion(){
            window.scrollY >= 70 ? this.agregarClases() : this.removeClases();
        }
        agregarClases(){
            document.querySelector(".header").classList.add("scroll");
            document.querySelector(".header-menu").classList.add("scroll");
            document.querySelector(".arduino-logo").classList.add("scroll-logo");
            document.querySelector(".arduino-logo-compressed").classList.add("scroll-logo-compressed");
            document.querySelector(".container-logos").classList.add("scroll");
            document.querySelector(".container-menu").classList.add("scroll-menu");
            document.querySelector(".container-login").classList.add("scroll");
            document.querySelector(".submenu-menu").classList.add("scroll");
        }
        removeClases(){
            document.querySelector(".header").classList.remove("scroll");
            document.querySelector(".header-menu").classList.remove("scroll");
            document.querySelector(".arduino-logo").classList.remove("scroll-logo");
            document.querySelector(".arduino-logo-compressed").classList.remove("scroll-logo-compressed");
            document.querySelector(".container-logos").classList.remove("scroll");
            document.querySelector(".container-menu").classList.remove("scroll-menu");
            document.querySelector(".container-login").classList.remove("scroll");
            document.querySelector(".submenu-menu").classList.remove("scroll");
        }
        init(){
            window.addEventListener("scroll",this.condicion)
            
        }
    }

    class Scroll {
        constructor(btn) {
            this.btn = document.querySelector(btn);
            this.animacion = this.animacion.bind(this);
            this.distanciaRecorrer = this.altoWindow() - this.puntoInicial();
            this.incrementador = this.incrementador.bind(this)
            this.incrementScroll = this.incrementScroll.bind(this)
            let scrollLoopId;
            this.scrollLoopId = scrollLoopId;
        }
    
        altoWindow(){
            return document.body.getBoundingClientRect().height;
        }
        puntoInicial(){
            return this.btn.getBoundingClientRect().top + window.scrollY;
        }
        stopInterval(){
            console.log("stop")
            this.distanciaRecorrer = this.altoWindow() - this.puntoInicial();
            clearInterval( this.scrollLoopId )
        }
        incrementador(){
            let windowsRecorrido = 10;
            window.scrollBy(0, -windowsRecorrido ) ;
            return this.distanciaRecorrer += windowsRecorrido;
        }
        incrementScroll() {
            console.log(this.altoWindow())
            console.log(this.distanciaRecorrer)
            this.altoWindow() <= this.distanciaRecorrer ? this.stopInterval() : this.incrementador();
            
        }
        startScrollLoop(){
            this.scrollLoopId = setInterval( this.incrementScroll,1) ; 
        }
        
        animacion(){
            this.startScrollLoop();
        }
    
        init(){
            this.btn.addEventListener("click", this.animacion)
        }   
    }
    const p1 = new Scroll(".flecha-superior");
    p1.init();

    const arduinoToogle = new ArduinoToogle(".container-whats-arduino");
    arduinoToogle.init()
    
    const headerCambios = new HeaderCambios();
    headerCambios.init();
    
    

})