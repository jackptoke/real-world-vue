<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventShow', params: { id: event.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <BaseIcon name="users"> {{ event.attendees.length }} attending</BaseIcon>
      <br />
      <MediaBox>
        <h5 slot="title" class="title">Jack Toke</h5>
        <p slot="description" class="description">Javascript Developer</p>
      </MediaBox>
    </div>
  </router-link>
</template>

<script>
import MediaBox from '@/components/MediaBox.vue'
export default {
  props: { event: Object },
  components: {
    MediaBox
  }
}
</script>

<style scoped>
h4 {
  color: green;
}
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
