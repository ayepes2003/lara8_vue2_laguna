<template>
    <div>
        <advanced-search v-model="model" :options="options" select multiple>
        </advanced-search>
    </div>
</template>

<script>
import Advanced-Search from 'vue-advanced-search'

export default {
  components: { AdvancedSearch },
  data () {
    return {
      model: null,
      options: [
          { label: 'label1', value: 'value1' },
          { label: 'label2', value: 'value2' },
          { label: 'label3', value: 'value3' }
      ]
    }
  }
}
</script>
<style src="vue-advanced-search/dist/AdvancedSearch.css"></style>

<script>
export default {
    name: "CompSelect",
    created() {},
    data() {
        return {};
    },
    props: {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
