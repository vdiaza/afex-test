<template>
  <div class="alert-delete-container" @click="emit('close')">
    <div class="alert-delete" @click.stop>
      <div class="close-button" @click="emit('close')">
        <span></span>
        <span></span>
      </div>
      <h2>¿Seguro que quieres eliminar este video?</h2>

      <div class="btn-group">
        <div class="button button-secondary" @click="emit('close')">No</div>
        <div class="button primary-button" @click="emit('delete')">Si</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close", "delete"]);
</script>

<style lang="scss">
.alert-delete-container {
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
  .alert-delete {
    position: relative;
    padding: 25px;
    width: 600px;
    height: 150px;
    overflow: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #fbfbfb;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
    border-radius: 15px;
    .close-button {
      position: absolute;
      top: 20px;
      right: 15px;
      width: 20px;
      height: 20px;
      span {
        background-color: #000;
      }
    }
    .btn-group {
      display: flex;
    }
  }
}
</style>
