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

    function handleTabClick(tabSelector, contentSelector) {
        if ($(tabSelector).length > 0) {
            $(tabSelector).on('click', function (event) {
                let $target = $(event.target);
                let $btn = $target.closest(tabSelector);
                $btn.addClass('active').siblings().removeClass('active');
                $(contentSelector).eq($btn.index()).addClass('active').siblings().removeClass('active');
            });
        }
    }

    handleTabClick('.natal-card__tab', '.natal-card__content');
    handleTabClick('.zodiacs__tab', '.zodiacs__tab-content');
    handleTabClick('.homes__tab', '.homes__tab-content');
    handleTabClick('.elements__tab', '.elements__tab-content');
    handleTabClick('.aspects__spoller-tab', '.aspects__spoller-tab-content');
    handleTabClick('.aspects__tabs-btn', '.aspects__tab-content');

    if ($('.aspects__spoller-btn').length > 0) {

        if ($('.aspects__spoller-btn').hasClass('active')) {
            $('.aspects__spoller-btn.active').next().slideToggle(0);
        }

        $('.aspects__spoller-btn').on('click', function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next().slideToggle();
                return;
            }


            $('.aspects__spoller-btn.active').removeClass('active').next().slideUp();


            $(this).addClass('active');
            $(this).next().slideToggle();
        });
    }




});
