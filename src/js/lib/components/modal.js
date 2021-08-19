import $ from '../core';

$.prototype.moveX = function (move) {
    for (let i = 0; i < arguments.length; i++) {
        if (!move) {
            this[i].style.transform = '';
        } else {
            this[i].style.transform = `TranslateX(${move}px)`;
        }
    }
};

$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            if(document.body.offsetHeight > document.documentElement.clientHeight) {
                document.body.style.marginRight = `${this.calcScroll()}px`;
                $('.modal').moveX(-this.calcScroll() / 2);
            }
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

   
     $('[data-close]').click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = 0;
        });
    

    $('.modal').click(e => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = '';
            document.body.style.marginRight = 0;
        }
    });
};

$('[data-toggle="modal"]').modal();