<template>
  <div class="main-container">
    <search-bar />

    <div class="videos">
      <video-block v-for="video in videos" :key="video.id" :data="video" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onSnapshot, getColRef } from "@/plugins/firestore";
import SearchBar from "./components/SearchBar.vue";
import VideoBlock from "./components/VideoBlock.vue";

const videos = ref([]);

onSnapshot(getColRef("videos"), (colRef) => {
  videos.value = colRef.docs.map((doc) => {
    return doc.data();
  });
});
</script>

<style lang="scss">
.main-container {
  max-width: calc(100% - 30px);
  width: 1440px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .videos {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 30px;
    .video-container {
      margin: 20px;
    }
  }
}

.close-button {
  cursor: pointer;
  span {
    position: absolute;
    width: 90%;
    height: 3px;
    border-radius: 50px;
    background-color: #fff;
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(-45deg);
    }
  }
}

.button {
  padding: 15px;
  background: #136ae4;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.12),
    0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 10px;
  color: #fff;
  margin: 5px;
  min-width: 150px;
  text-align: center;
  cursor: pointer;
  &.button-secondary {
    background-color: #fff;
    border: 1px solid #136ae4;
    color: #136ae4;
  }
}
</style>
