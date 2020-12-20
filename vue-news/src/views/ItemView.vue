<template>
  <div class="container">
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="item">
        <div slot="username">
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
        </div>
        <span slot="time">{{ 'Posted ' + item.time_ago }}</span>
      </user-profile>
      
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
import UserProfile from '../components/UserProfile';

export default {
  components: {
    UserProfile,
  },
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