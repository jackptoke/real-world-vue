<template>
  <div>
    <h1>Events List</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  async created() {
    await EventService.getEvents()
      .then(response => {
        // console.log(response.data)
        this.events = response.data
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  }
}
</script>
