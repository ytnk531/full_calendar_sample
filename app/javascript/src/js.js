import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

$(document).on('turbolinks:load', function() {
        const calendarEl = document.getElementById('calendar')
        const calendar = new Calendar(calendarEl, {
                plugins: [ dayGridPlugin ],
                initialView: 'dayGridMonth'
        })
        calendar.render()
})
