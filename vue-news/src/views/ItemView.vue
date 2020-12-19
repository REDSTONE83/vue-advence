<template>
  <div class="container">
    <section>
      <!-- 질문 상세 내역 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
          <div class="time">
            {{ item.time_ago }}
          </div>
        </div>
      </div>
      
      <h2>{{ item.title }}</h2>

      <div v-html="item.content">
      </div>

    </section>
    <section>
      <!-- 질문 댓글 -->
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      item: 'fetchedItem'
    })
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>

<style scoped>
.container{
  padding: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.user-container .fa-user {
  font-size: 2.5rem;
}
.user-container .user-description {
  padding-left: 8px;
}
.user-container .user-description .time {
  font-size: 0.6rem;
  margin-top: 4px;
}
</style>