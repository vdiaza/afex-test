<template>
  <div class="search-container">
    <h3 class="search-title">Añadir nuevo video</h3>
    <div class="search-container-input">
      <input
        class="search-input"
        type="text"
        v-model="videoInput"
        placeholder="Insert youtube URL"
        style="width: 600px"
      />

      <div class="add-video-btn" @click="getVideoInfo">Añadir</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { pushDoc } from "@/plugins/firestore";
import { extractVideoInfo } from "@/plugins/youtube";
const videoInput = ref("");

const getVideoInfo = async () => {
  const video = await extractVideoInfo(videoInput.value);
  pushDoc("videos", {
    id: video.id,
    title: video.snippet.title,
    description: video.snippet.description,
    channelTitle: video.snippet.channelTitle,
    channelId: video.snippet.channelId,
    thumbnail: video.snippet.thumbnails.standard.url,
    addedAt: new Date(),
  });
};
</script>

<style lang="scss">
.search-container {
  text-align: left;
  max-width: 100%;
  .search-container-input {
    display: flex;
    .search-input {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 5px 0px 0px 5px;
      padding: 15px;
    }
    .add-video-btn {
      padding: 7px 20px;
      display: flex;
      align-items: center;
      background: #136ae4;
      border-radius: 0px 10px 10px 0px;
      color: #fff;
      font-weight: 600;
    }
  }
}
</style>
