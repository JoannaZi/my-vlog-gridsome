// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'gridsome学习',
  siteDescription:'大前端训练营',
  plugins: [
    {
      use:'@gridsome/source-filesystem' ,
      options: {
          typeName: 'BLogPost',
          path: './content/blog/**/*.md'
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000,//default to 100，查询的最大数据条数限制
        // contentTypes: ['article','user'] //要查询的数据的类型
        contentTypes: ['post','tag','blog','project','following','follower'] ,//生成的集合的名字是 typeName+contentTypes ，这里的就是StrapiPost
        // typeName:'Strapi',
        singleTypes: ['general','vblog'], //单个节点
      //Possibility to login with a Strapi user,
      //when content types are not publicly available (optional)
        // loginData: { //受保护的数据，需登录后才能看到
        //   identifier: '',
        //   password: ''
        // }
      }
    }

  ] ,
  templates:{
    StrapiPost: [
      {
      path: '/post/:id',
      component: './src/templates/Post.vue'
      }
    ] ,
    StrapiTag: [
      {
      path: '/tag/:id',
      component: './src/templates/Tag.vue'
      }
    ]
  }
    
  
}
