<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window" id="modal-window">
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {};
</script>
<style scoped>
  .modal.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  .modal-window {
    background: #fff;
    width: 1000px;
    margin: 0 auto;
    border-radius: 4px;
    overflow-y: scroll;
  }
  .modal-content {
    padding: 10px 20px;
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.4s;
  }
  .modal-enter-active .modal-window,
  .modal-leave-active .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
  .modal-leave-active {
    transition: opacity 0.6s ease 0.4s;
  }
  .modal-enter,
  .modal-leave-to {
    opacity: 0;
  }
  .modal-enter .modal-window,
  .modal-leave-to .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
</style>
