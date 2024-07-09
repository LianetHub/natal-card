"use strict";




$(document).ready(function () {

    if ($('#date').length > 0) {
        new Pikaday({
            field: document.getElementById('date'),
            format: 'YYYY-MM-DD',
            firstDay: 1,
            i18n: {
                previousMonth: 'Предыдущий месяц',
                nextMonth: 'Следующий месяц',
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
            }
        });
    }

    if ($('.natal-card__tab').length > 0) {

        $('.natal-card__tab').on('click', function (event) {

            let $target = $(event.target);
            let $btn = $target.closest('.natal-card__tab')

            $btn.addClass('active').siblings().removeClass('active')

            $('.natal-card__content').eq($btn.index()).addClass('active').siblings().removeClass('active')

        })
    }


    if ($('.zodiacs__tab').length > 0) {

        $('.zodiacs__tab').on('click', function (event) {

            let $target = $(event.target);
            let $btn = $target.closest('.zodiacs__tab')

            $btn.addClass('active').siblings().removeClass('active')

            $('.zodiacs__tab-content').eq($btn.index()).addClass('active').siblings().removeClass('active')

        })
    }
});
