import React, { useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
    { title: 'Meeting', start: new Date() }
]

const ReactCalendar = () => {    

    const handleDateClick = (arg) => {
        alert(arg.dateStr);
      };
    return (
        <div className="container mx-auto my-auto">
            <section class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                    <h2 class="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Company Calendar</h2>
                </div>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView='dayGridMonth'
                    weekends={false}
                    dateClick={(e) => handleDateClick(e)}
                    eventBackgroundColor='white'
                    editable={true}
                    selectable={true}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                      }}
                    events={events}
                    eventContent={renderEventContent}
                />
            </section>
        </div>

    )
}

const renderEventContent = (eventInfo) => {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    )
}

export default ReactCalendar