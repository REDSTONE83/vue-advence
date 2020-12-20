<template>
  <list-item :items="items" />
</template>

<script>
import ListItem from '../components/ListItem';
import { mapGetters } from 'vuex';

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      items: 'fetchedList'
    })
  }
}
</script>

<style>

</style>