<template>
    <div class="darkmode-container">
        <button @click="cambiar">
            <label>
                <input class="toggle-checkbox" type="checkbox">
                <div class="toggle-slot">
                    <div class="sun-icon-wrapper">
                        <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
                    </div>
                    <div class="toggle-button"></div>
                    <div class="moon-icon-wrapper">
                        <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
                    </div>
                </div>
            </label>

        </button>

    </div>
</template>

<script setup>

import '../../css/colors.css'

const cambiar = () => {
  document.body.classList.toggle("darkMode");
}

</script>

<style lang="scss" scoped>

.darkmode-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 -15px;
}

button {
  background-color: var(--color-fondo);
  border: none;
  border-radius: 50%;
  scale: 55%;
}

.toggle-checkbox {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.toggle-slot {
  font-size: 10px;
  position: relative;
  height: 3.5em;
  width: 7em;
  border: 0px solid transparent;
  border-radius: 10em;
  background-color: white;
  transition: background-color 250ms;
  cursor: pointer;
}

.toggle-checkbox:checked ~ .toggle-slot {
  background-color: #374151;
}

.toggle-button {
  transform: translate(0.3em, 0.25em);
  position: absolute;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  background-color: #ffeccf;
  box-shadow: inset 0px 0px 0px 0.75em #ffbb52;
  transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
  background-color: #485367;
  box-shadow: inset 0px 0px 0px 0.75em white;
  transform: translate(3.65em, 0.25em);
}

.sun-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: #ffbb52;
}

.sun-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 1;
  transform: translate(2em, 2em) rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
  opacity: 0;
  transform: translate(3em, 2em) rotate(0deg);
}

.moon-icon {
  position: absolute;
  height: 6em;
  width: 6em;
  color: white;
}

.moon-icon-wrapper {
  position: absolute;
  height: 6em;
  width: 6em;
  opacity: 0;
  transform: translate(11em, 2em) rotate(0deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
  opacity: 1;
  transform: translate(2em, 2em) rotate(-15deg);
}

</style>