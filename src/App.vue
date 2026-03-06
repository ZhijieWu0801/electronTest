<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const count = ref(0)
</script>

<template>
  <div class="app">
    <h1>🚀 Electron + Vue</h1>
    <HelloWorld msg="欢迎使用 Electron + Vue 应用" />
    
    <div class="card">
      <button @click="count++">
        点击次数: {{ count }}
      </button>
    </div>
    
    <p class="tip">
      编辑 <code>src/App.vue</code> 来开始你的开发之旅
    </p>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  color: #e8e8e8;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #00d4ff, #7b2cbf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card {
  margin: 2rem 0;
}

button {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #7b2cbf, #00d4ff);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(123, 44, 191, 0.4);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(123, 44, 191, 0.6);
}

button:active {
  transform: translateY(0);
}

.tip {
  color: #888;
  font-size: 0.9rem;
  margin-top: 2rem;
}

code {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-family: 'Consolas', monospace;
  color: #00d4ff;
}
</style>
