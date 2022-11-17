<template>
  <div class="video-modal-container" @click="emit('close')">
    <div class="video-modal" @click.stop>
      <div class="close-button" @click="emit('close')">
        <span></span>
        <span></span>
      </div>
      <div class="video-embed-block">
        <div class="video-preview" @click="loadVideo = true" v-if="!loadVideo">
          <img :src="data.thumbnail" :alt="data.title" />
          <div class="play-button"></div>
        </div>
        <iframe
          v-if="loadVideo"
          :src="`https://www.youtube.com/embed/${data.id}`"
          frameborder="0"
        />
      </div>

      <div class="video-content">
        <h3 class="video-title">{{ data.title }}</h3>
        <div class="video-description">{{ shortText(data.description) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data } = toRefs(props);

const loadVideo = ref(false);

const emit = defineEmits(["close"]);

const shortText = (text) => {
  if (text.length > 300) return text.substr(0, 300) + " ...";
  return text;
};
</script>

<style lang="scss">
.video-modal-container {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  top: 0;
  left: 0;
  .video-modal {
    padding: 25px;
    width: 800px;
    height: 340px;
    overflow: auto;
    display: flex;
    align-items: center;
    background: #fbfbfb;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
    border-radius: 15px;
    position: relative;

    .close-button {
      width: 30px;
      position: absolute;
      top: 20px;
      right: 10px;
      span {
        background-color: #000;
      }
    }
    .video-content {
      width: 50%;
    }
    .video-embed-block {
      margin-right: 30px;
      width: 50%;
      iframe {
        width: 100%;
        height: 280px;
      }
      .video-preview {
        width: 100%;
        height: auto;
        position: relative;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .play-button {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          height: 50px;
          width: 50px;
          background-color: #ff0000;
          border-radius: 50%;
          &::after {
            content: "";
            position: absolute;
            left: 5px;
            right: 0;
            margin: auto;
            top: 0;
            bottom: 0;
            width: 0;
            height: 0;
            border-bottom: 10px solid transparent;
            border-top: 10px solid transparent;
            border-left: 15px solid #fff;
            clear: both;
          }
        }
      }
    }

    @media (max-width: 767px) {
      flex-direction: column;
      height: 90%;
      .video-content {
        width: 100%;
      }
      .video-embed-block {
        margin-top: 10px;
        margin-right: 0px;
        width: 100%;
      }
    }
  }
}
</style>
