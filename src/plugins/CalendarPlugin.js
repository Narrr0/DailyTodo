import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';

export default{
  install(Vue){
    Vue.prototype.$_Calendar = Calendar;
    Vue.prototype.$_DayGrid = dayGridPlugin;
    Vue.prototype.$_TodoList = listPlugin;
    Vue.prototype.$_TimeGrid = timeGridPlugin;
    Vue.prototype.$_Interaction = interactionPlugin;
  }
}