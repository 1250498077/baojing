import { HTTP } from './http.js'

class sellList extends HTTP {
  constructor() {
    super()
  }

  getall(params) {
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据id查询用户信息
   *  GET /api/user
   * */
  get_user(data) {
    let params  = {
      url: '/api/user',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  首页信息
   *  GET /api/homeModel
   * */
  get_homeModel(data) {
    let params  = {
      url: '/api/home/model/',
      method: 'get',
      data: {
        viewType: 1
      }
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  获取热门赛事推荐
   *  GET /api/hot/getHotMatch
   *  data参数：page  size  viewType
   * */
  get_HotMatch(data) {
    let params  = {
      url: '/api/hot/getHotMatch',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  获取热门专题
   *  GET /api/hot/getHotPartition
   *  data参数：page  size  viewType
   * */
  get_HotPartition(data) {
    let params  = {
      url: '/api/hot/getHotPartition',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  获取人气榜单热门选手
   *  GET /api/hot/getHotPlayer
   *  data参数：page  size  viewType  matchId
   * */
  get_HotPlayer(data) {
    let params  = {
      url: '/api/hot/getHotPlayer',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  获取热门视频
   *  GET /api/hot/getHotVideo
   *  data参数：page  size  viewType
   * */
  get_HotVideo(data) {
    let params  = {
      url: '/api/hot/getHotVideo',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  参赛选手详情
   *  GET /api/player/detailPlayer
   *  data: playId
   * */
  get_detailPlayer(data) {
    let params  = {
      url: '/api/player/detailPlayer',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  选手列表视频
   *  GET /api/player/getPlayerVideo
   *  data:playId   page   size
   * */
  get_PlayerVideo(data) {
    let params  = {
      url: '/api/player/getPlayerVideo',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  获取人气选手列表
   *  GET /api/player/list
   *  data: page  size  matchId
   * */
  get_list(data) {
    let params  = {
      url: '/api/player/list',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  选手投票
   *  POST /api/player/saveVote
   *  data: userId  playerId   matchId  votes  type
   * */
  post_saveVote(data) {
    let params  = {
      url: '/api/player/saveVote',
      method: 'post',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据id获取赛事具体信息
   *  GET /api/match/getMatchById
   *  data: matchId
   * */
  get_MatchById(data) {
    let params  = {
      url: '/api/match/getMatchById',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据id获取专题
   *  GET /api/partition/getById
   *  data: id
   * */
  get_ById(data) {
    let params  = {
      url: '/api/partition/getById',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  收藏选手或视频
   *  POST /api/user/collect
   *  data: userId   type   id
   * */
  post_collect(data) {
    let params  = {
      url: '/api/user/collect',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  删除观看记录
   *  POST /api/user/delPlayHist
   *  data: userId   type   id
   * */
  post_delPlayHist(data) {
    let params  = {
      url: '/api/user/delPlayHist',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  返回单个选手或视频收藏状态
   *  GET /api/user/getCollectById
   *  data: id
   * */
  get_CollectById(data) {
    let params  = {
      url: '/api/user/getCollectById',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  个人信息-我的账号
   *  GET /api/user/my
   *  data: id
   * */
  get_my(data) {
    let params  = {
      url: '/api/user/my',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  我的收藏展示
   *  GET /api/user/myCollect
   *  data: userId   type   page   size
   * */
  get_myCollect(data) {
    let params  = {
      url: '/api/user/myCollect',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  投票记录
   *  GET /api/user/votes
   *  data: id
   * */
  get_votes(data) {
    let params  = {
      url: '/api/user/votes',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   * 根据比赛id获取比赛视频
   * GET /api/match/getMatchVideoByMatchId
   * data: page    size    matchId
   * */
  get_MatchVideoByMatchId(data) {
    let params  = {
      url: '/api/match/getMatchVideoByMatchId',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   * 赛事报名
   * POST /api/match/savePlayer
   * data: avatar    content    playerMobile    playerName    matchId    playerId
   * */
  savePlayer(data) {
    let params  = {
      url: '/api/match/savePlayer',
      method: 'post',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  搜索模块
   *  GET /api/search/
   *  data:  page   size   type   pinyin    title   fromType
   * */
  search(data) {
    let params  = {
      url: '/api/search/',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据模板类型获取模板列表
   *  GET /api/home/model/
   *  data: viewType     类型,0表示电视端,1表示手机端
   * */
  slide_list() {
    let params  = {
      url: '/api/home/model/',
      method: 'get',
      data: {
        viewType: 1
      }
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据选手id获取礼物列表
   *  GET /api/gift/listByPlayer
   *  data: playerId
   * */
  listByPlayer(data) {
    let params  = {
      url: '/api/gift/listByPlayer',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据选手id评论
   *  POST /api/comment/save
   *  data:   userId    playerId   content
   * */
  comment_save(data) {
    let params  = {
      url: '/api/comment/save',
      method: 'post',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  查看选手的评论
   *  GET /api/comment/listByPlayer
   *  data: playerId   page   size
   * */
  get_listByPlayer(data) {
    let params  = {
      url: '/api/comment/listByPlayer',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  支付接口测试
   *  GET    /api/order/saveOrder
   *  data: buyNum  userId   giftId   type  matchId   playerId
   * */
  saveOrder(data) {
    let params  = {
      url: '/api/order/saveOrder',
      method: 'post',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  图片上传
   *  /upload
   * */
  file_upload(data) {
    let params  = {
      url: '/upload',
      method: 'post',
      data: data,
      ct_type: 'multipart/form-data'
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  查订单号是否成功
   *  GET /api/order/getPayStatus
   *  data： orderNo
   * */
  getPayStatus(data) {
    let params  = {
      url: '/api/order/getPayStatus',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  图片二维码的获取
   *  GET /api/QRCode
   *  data： orderNo
   * */
  QRCode(data) {
    let params  = {
      url: '/api/QRCode',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  采用http GET方式请求获得jsapi_ticket
   *  https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
   * */
  get_jsapi_ticket() {}

  /**
   *  内部
   *  GET /api/search/searchByMatch
   * */
  searchByMatch(data) {
    let params  = {
      url: '/api/search/searchByMatch',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据选手id查询广告
   *  GET /api/advertisement/getByPlayerId
   *  playerId
   * */
  getByPlayerId(data) {
    let params  = {
      url: '/api/advertisement/getByPlayerId',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  二维码统计
   *  POST /api/viewCountUpdate/QRCodeRecord
   *  param: id   type
   * */
  QRCodeRecord(data) {
    let params  = {
      url: '/api/viewCountUpdate/QRCodeRecord',
      method: 'post',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  累加接口
   *  POST /api/viewCountUpdate
   *  params:  type   id    showType
   * */
  viewCountUpdate(data) {
    data.showType = '1'
    let params  = {
      url: '/api/viewCountUpdate',
      method: 'post',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  根据matchBarId获取单个matchBar
   *  GET /api/match/bar/getMatchBar
   *  params: barId    page   size  showType
   * */
  getMatchBar(data) {
    data.showType = 1
    let params  = {
      url: '/api/match/bar/getMatchBar',
      method: 'get',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

  /**
   *  微信分享
   *  POST /api/viewCountUpdate/weChatShare
   *  params: id   type
   * */
  weChatShare(data) {
    let params  = {
      url: '/api/viewCountUpdate/weChatShare',
      method: 'post',
      data: data
    }
    return this.request(params).then((res) => {
      return Promise.resolve(res)
    })
  }

}

let model = new sellList()

export { model }
