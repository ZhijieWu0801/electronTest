<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <div class="info">
      <span class="badge">Vue 3</span>
      <span class="badge">Vite</span>
      <span class="badge">Electron</span>
    </div>
  </div>
</template>

<style scoped>
.hello {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hello p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.info {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.badge {
  padding: 0.3rem 0.8rem;
  background: rgba(0, 212, 255, 0.2);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  font-size: 0.8rem;
  color: #00d4ff;
}
</style>
