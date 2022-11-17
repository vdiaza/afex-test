<template>
  <div class="video-container">
    <div class="close-button" @click="displayDelete = true">
      <span></span>
      <span></span>
    </div>
    <img :src="data.thumbnail" alt="" @click="displayModal = true" />
  </div>

  <video-modal v-if="displayModal" :data="data" @close="displayModal = false" />

  <alert-delete
    v-if="displayDelete"
    @close="displayDelete = false"
    @delete="deleteItem"
  />
</template>

<script setup>
import { toRefs, defineProps, ref } from "vue";
import VideoModal from "./VideoModal.vue";
import AlertDelete from "./AlertDelete.vue";
import { delDoc } from "@/plugins/firestore";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const { data } = toRefs(props);
const displayModal = ref(false);
const displayDelete = ref(false);

const deleteItem = async () => {
  await delDoc("videos", data.value.id);
};
</script>

<style lang="scss">
.video-container {
  width: 320px;
  height: 180px;
  max-width: calc(50% - 50px);
  background-color: gray;
  position: relative;
  box-shadow: 3px 3px 10px 1px rgb(0 0 0 / 40%);
  .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #fff;
    background-color: #000;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
