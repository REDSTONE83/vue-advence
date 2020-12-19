<template>
    <div>
        <ul class="news-list">
            <li v-for="item in items" :key="item.id" class="post">
            
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ item.points || 0 }}
                </div>

                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <a v-if="item.domain" :href="item.url">
                            {{ item.title }}
                        </a>
                        <router-link v-else :to="`/item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by 
                        <router-link v-if="item.user" :to="`/user/${item.user}`">
                            {{ item.user }}
                        </router-link>
                        <a v-else-if="item.domain" :href="item.url">
                            {{ item.domain }}
                        </a>
                        
                    </small>
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        }
    },
}
</script>

<style scoped>
.news-list {
  margin: 0; padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text, .link-text a {
  color: #666;
}
</style>