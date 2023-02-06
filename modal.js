let open_modal = document.querySelectorAll('.open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
for (let i = 0; i < open_modal.length; i++) {
    open_modal[i].onclick = function() { // відкриття
        modal.classList.add('modal_vis'); // видимість вікна
        modal.classList.remove('bounceOutDown'); // видаляе ефект закриття
        body.classList.add('body_block'); // видаляє прокрутку сайта
    };
}
close_modal.onclick = function() { // закриття
    modal.classList.add('bounceOutDown'); // ефект закриття
    window.setTimeout(function() { // ефект закриття на півсекунди.
        modal.classList.remove('modal_vis');
        body.classList.remove('body_block'); // ввідновлює прокрутку сайту
    }, 500);
};