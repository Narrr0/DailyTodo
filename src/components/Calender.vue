<template>
  <div id="calendar"></div>
</template>

<script>
export default {
  mounted() {
    var calendarEl = document.getElementById("calendar");
    var calendar = new this.$_Calendar(calendarEl, {
      plugins: [
        this.$_DayGrid,
        this.$_TodoList,
        this.$_TimeGrid,
        this.$_Interaction,
      ],
      dateClick: function(info) {
        console.log(info);
      },
      headerToolbar: {
        left: "today",
        center: "title",
        right: "prev,next",
      },
    });
    calendar.on("dateClick", (info) => {
      this.$router.push({
        name: "dailyTodo",
        params: { dateStr: info.dateStr },
      });
    });
    calendar.render();
  },
};
</script>
,
<style scoped>
#calendar {
  max-width: 1000px;
  margin: 40px auto;
}
</style>
