<template>
   <div>
        <el-card shadow="never">
            <el-menu >
              <g-link :to="item.path" v-for="item in routerList" 
                    :key="item.id">
                <el-menu-item 
                    :class="{ 'is-active': currentPath === item.path }"
                    >
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
                </g-link>
            </el-menu>
        </el-card>
  </div>
</template>
<script>
export default {
  name:'SideBarPage',
  data() {
    return {
      routerList: [
        {
          id: 1 ,
          path: '/',
          name: '最新动态',
          icon:'el-icon-star-off'
        },
        {
          id:2 ,
          path:'/social',
          name: '社交圈',
          icon: 'el-icon-mobile-phone'
        },
        {
          id:3 ,
          path: '/blog',
          name: '博客列表',
          icon: 'el-icon-edit-outline'
        } ,
        {
          id:4 ,
          path: '/project',
          name: '开源项目',
          icon: 'el-icon-edit-outline'
        }
      ]
    }
  } ,
  computed:{
    currentPath() {
      return this.$route.path
    }
  }
}
</script>