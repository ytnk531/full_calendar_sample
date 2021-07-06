import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('turbolinks:load', function() {
        const calendarEl = document.getElementById('webpacker-calendar')
        if(!calendarEl) { return }
        const calendar = new Calendar(calendarEl, {
                plugins: [ dayGridPlugin ],
                initialView: 'dayGridMonth'
        })
        calendar.render()
})
