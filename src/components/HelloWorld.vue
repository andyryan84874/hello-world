<script>
import { VueTelInput } from 'vue-intl-phone-input';

export default {
  name: 'HelloWorld',
    components: {
      VueTelInput,
    },
  props: {
    msg: String
  }
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    
    <VueTelInput></VueTelInput>
  </div>
</template>
