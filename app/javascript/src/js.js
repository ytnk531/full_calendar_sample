import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('turbolinks:load', function() {
        const calendarEl = document.getElementById('webpacker-calendar')
        const calendar = new Calendar(calendarEl, {
                plugins: [ dayGridPlugin ],
                initialView: 'dayGridMonth'
        })
        calendar.render()
})
