<template>
  <div>
    <list-item :items="ask" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem';

export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters({
      ask: 'fetchedAsk'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>