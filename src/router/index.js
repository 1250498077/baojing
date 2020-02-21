import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// home_page
import home_page from '@/components/home_page/home_page'
// my
import my from '@/components/my/my'
import my_history from '@/components/my/my_history'
import my_record from '@/components/my/my_record'
import my_signUp from '@/components/my/my_signUp'
import my_vote from '@/components/my/my_vote'
// page_detail
import page_detail from '@/components/page_detail/page_detail'
// person_detail
import person_detail from '@/components/person_detail/person_detail'
//
import new_search from '@/components/new_search/new_search'
// square
import square from '@/components/square/square'
// 热门视频
import hot_video from '@/components/hot_video/hot_video'
// 专题
import hot_topic from '@/components/hot_topic/hot_topic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home_page',
      component: home_page
    },
    {
      path: '/hot_topic',
      name: 'hot_topic',
      component: hot_topic
    },
    {
      path: '/home_page',
      name: 'home_page',
      component: home_page
    },
    {
      path: '/hot_video',
      name: 'hot_video',
      component: hot_video
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    // ================
    {
      path: '/my_history',
      name: 'my_history',
      component: my_history
    },
    {
      path: '/my_record',
      name: 'my_record',
      component: my_record
    },
    {
      path: '/my_signUp',
      name: 'my_signUp',
      component: my_signUp
    },
    {
      path: '/my_vote',
      name: 'my_vote',
      component: my_vote
    },
    // ==================
    {
      path: '/page_detail',
      name: 'page_detail',
      component: page_detail
    },
    {
      path: '/person_detail',
      name: 'person_detail',
      component: person_detail
    },
    {
      path: '/new_search',
      name: 'new_search',
      component: new_search
    },
    {
      path: '/square',
      name: 'square',
      component: square
    },
  ]
})
