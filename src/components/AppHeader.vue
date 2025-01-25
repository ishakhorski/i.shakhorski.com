<template>
  <header class="app-header">
    <h1>Ivan Shakhorski</h1>

    <p>Warsaw, <span>Poland 📍</span></p>
  </header>
</template>

<style>
.app-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.app-header h1 {
  font-size: 24px;
}

.app-header p {
  font-size: 16px;
  color: var(--color-gray);
}

.app-header p span {
  white-space: nowrap;
}

@media screen and (min-width: 40rem) {
  .app-header {
    flex-direction: row;
    align-items: center;
  }
}
</style>
