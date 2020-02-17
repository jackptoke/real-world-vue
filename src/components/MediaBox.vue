<template>
  <div class="a-container">
    <img class="avatar" alt="My Avatar" src="../assets/jack-profile3.png" />
    <div class="a-texts">
      <slot name="title"></slot>
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style scoped>
.a-container {
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  /* border: 1px solid red; */
}
.avatar {
  width: 50px;
  height: 50px;
}
.a-texts {
  padding: 0px 20px;
  /* border: 1px solid red; */
}
.title {
  margin: 0px auto;
  /* border: 1px solid red; */
}
.description {
  margin: 0px auto;
  font-size: 12px;
  /* border: 1px solid red; */
}
</style>
