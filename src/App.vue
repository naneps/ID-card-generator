<template >
  <div class="container mx-auto">
    <!-- <div class="h-screen"> -->
      <OutputView />
    <!-- </div> -->
    <FormControl />
  </div>
</template>
<script>
import FormControl from "./components/FormControl.vue";
import OutputView from "./pages/OutputView.vue";
export default { components: { FormControl, OutputView } };
</script>
<style >
</style>