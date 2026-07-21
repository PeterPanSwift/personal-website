// ============================================================
// 網站內容資料檔 — 想改文字、新增課程 / App / 文章，改這裡就好！
// 部分欄位（標註 HTML）可以使用 HTML 標籤，例如 <br>、<a>。
// ============================================================

const siteData = {

  // ===== 導覽列 =====
  nav: [
    { text: 'Blog', href: '#blog' },
    { text: '開發教室', href: '#classroom' },
    { text: '家教', href: '#tutoring' },
    { text: '講座課程', href: '#courses' },
    { text: '著作', href: '#books' },
    { text: 'App 作品', href: '#apps' },
    { text: '散文集', href: '#essays' },
    { text: '經歷', href: '#experience' },
    { text: '聯絡', href: '#contact', cta: true },
  ],

  // ===== Hero =====
  hero: {
    avatar: 'images/profile.jpg',
    eyebrow: 'iOS Swift・SwiftUI・Flutter・AI・Python・VIBE CODING',
    titleHTML: '愛瘋一切為蘋果的<br><span class="grad">彼得潘</span>小王子',
    job: '正職：作家 & 果粉',
    sub: '副業：Blog 作家、講師、大學的 iOS SwiftUI / Flutter App / Python 開發講師、家教、企業內訓、VIBE CODING 陪跑教練、工程師、AI 顧問、評審、接案、iOS App 社團講師',
  },

  // ===== 數字亮點 =====
  stats: [
    { num: '3K', plus: true, label: 'blog 文章' },
    { num: '15', plus: true, label: '年 App 教學經驗' },
    { num: '4', plus: false, label: '本暢銷著作' },
    { num: '11', plus: true, label: '款上架 App 作品' },
  ],

  // ===== Blog =====
  blog: {
    eyebrow: 'Blog',
    title: '彼得潘的 App / AI Neverland',
    lead: '分享 iOS App、Flutter、Python 和 AI 開發的教學文章與心得，陪你飛向程式的夢幻島。',
    heading: 'App / AI 開發的教學文章',
    text: '從 Swift、SwiftUI、Flutter、Python 到 AI，彼得潘在 Medium 持續寫下每一篇開發筆記與教學，帶著大家一起成為 App 開發魔法師。',
    buttonText: '前往 Blog →',
    url: 'https://medium.com/@apppeterpan',
    image: 'images/blog-neverland.png',
  },

  // ===== 開發教室 =====
  classroom: {
    eyebrow: '開發教室',
    title: '彼得潘的 Swift iOS / Flutter App 開發教室',
    lead: '學生們精心創作的作業，每一份都是通往 App 開發魔法師的足跡。',
    card: {
      image: 'images/classroom.jpg',
      heading: '學生們精心創作的作業',
      text: '從零開始的初學者，到能獨立完成上架 App 的開發者 — 開發教室裡累積了無數精彩的學生作品。',
      buttons: [
        { text: 'App 作品集 1', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4' },
        { text: 'App 作品集 2', url: 'https://medium.com/海大-ios-app-程式設計' },
        { text: 'App 作品集 3', url: 'https://medium.com/台大-cs-x-ios-app-程式設計' },
      ],
    },
    qaTitle: 'iOS App 開發 Q & A・學習資源',
    qa: [
      { icon: '❓', text: 'iOS App 開發的十個 Q & A', url: 'https://medium.com/@apppeterpan/%E9%97%9C%E6%96%BCios-app%E9%96%8B%E7%99%BC%E7%9A%84%E5%8D%81%E5%80%8Bq-a-65833f6eb993' },
      { icon: '🎒', text: '學習開發 Swift iOS App 前的準備', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E5%AD%B8%E7%BF%92%E9%96%8B%E7%99%BC-swift-ios-app-%E5%89%8D%E7%9A%84%E6%BA%96%E5%82%99-4f9e52debc16' },
      { icon: '🤝', text: '彼得潘 iOS App 開發教學的八個承諾', url: 'https://medium.com/@apppeterpan/%E5%BD%BC%E5%BE%97%E6%BD%98ios-app%E9%96%8B%E7%99%BC%E6%95%99%E5%AD%B8%E7%9A%84%E4%BA%94%E5%80%8B%E6%89%BF%E8%AB%BE-5bc29a7c08a5' },
      { icon: '📚', text: 'Swift iOS App 學習資源和課程整理', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E4%B8%8D%E9%8C%AF%E7%9A%84-swift-ios-app-%E6%95%99%E5%AD%B8%E7%B6%B2%E7%AB%99%E5%92%8C%E8%AA%B2%E7%A8%8B-9a3bf1e03503' },
      { icon: '🧩', text: '999 道 SwiftUI / UIKit / Flutter / Jetpack Compose App 謎題', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84%E8%A9%A6%E7%85%89-%E5%8B%87%E8%80%85%E7%9A%84-100-%E9%81%93-swift-ios-app-%E8%AC%8E%E9%A1%8C' },
    ],
  },

  // ===== 家教 =====
  tutoring: {
    eyebrow: '家教',
    title: '一對一，專屬於你的開發教練',
    items: [
      {
        icon: '🤖',
        title: '專屬於你的 App VIBE CODING 陪跑教練',
        url: 'https://appvibecoding.mystrikingly.com',
        text: '彼得潘遇到許多朋友有開發 iOS / Android App 的需求，他們的目的是利用 AI 完成 App，而不是從頭開始學寫程式。隨著 AI 的進化，透過 AI 完成 App 不再是天方夜譚，然而 App 的開發跟上架有許多要注意的眉角和問題，彼得潘將帶著你一步步透過 AI 完成你想要的 App。',
      },
      {
        icon: '🧭',
        title: '專屬於你的 Swift / Flutter App 開發導師',
        url: 'https://yourappmentor.mystrikingly.com',
        text: '程式開發是段連續思考的過程，很多人在過程中卡關溺水，游不到終點。傳統的教學方式只看到結果，只能告訴學生正確的解法；然而當問題稍稍改變，他們馬上迷失方向，因為真正的問題發生在開發思考的過程裡，從來沒被解決。一對一家教正是找出問題的最佳解藥 — 彼得潘將死命盯著身旁學生的螢幕，觀察他撰寫程式的過程，發現他在某一分某一秒開始走偏，即時地拉他一把，帶領他游向幸福的彼岸。',
      },
    ],
  },

  // ===== 講座課程 =====
  courses: {
    eyebrow: '講座課程',
    title: '近期課程',
    leadText: '成為酷炫的 App 開發魔法師，實現 App 工作、接案、創業的第二人生！',
    leadLinkText: '完整課程講座清單 →',
    leadLinkUrl: 'https://medium.com/@apppeterpan/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-ios-app-%E8%AA%B2%E7%A8%8B%E8%AC%9B%E5%BA%A7-abe64c7e39ac',
    featured: [
      { tag: '開課中', title: '彼得潘的 iOS SwiftUI App 程式設計入門', date: '2026/7/13 ~ 2026/8/31，每週一和四 19:00 ~ 22:00', text: '學習 iOS App 開發的最新技術：SwiftUI、Swift、iOS SDK、Xcode，成為酷炫的 iOS App 開發魔法師！' },
      { tag: '文組友善', title: '文組生的 iOS SwiftUI App 程式設計入門', date: '2026/3/10 ~ 2026/5/26，每週二 19:00 ~ 22:00', text: '專為文組生量身訂做，從零開始學程式，一步一步慢慢教！只要 12 個星期，每週一個晚上，即可學會程式設計的核心概念。' },
      { tag: 'UIKit', title: '彼得潘的 Swift iOS App 程式設計入門', date: '2026/3/12 ~ 2026/5/4，每週一和四 19:00 ~ 22:00', text: '學習 iOS App 開發的最新技術：UIKit、Swift、iOS SDK 和 Xcode，實現未來 App 工作、接案、創業的第二人生！' },
      { tag: '跨平台', title: '彼得潘的 Flutter 跨平台 App 程式設計入門', date: '2026/7，臺灣大學資訊系統訓練班', text: '學習 Flutter 跨平台 App 開發的最新技術：Dart、Flutter SDK、VS Code，成為酷炫的 Flutter App 開發魔法師！' },
      { tag: '跨平台', title: '彼得潘的 Flutter 跨平台 App 程式設計入門', date: '2026/7，ispan 資展國際', text: '學習 Flutter 跨平台 App 開發的最新技術：Dart、Flutter SDK、VS Code，成為酷炫的 Flutter App 開發魔法師！' },
      { tag: '大學課程', title: '海洋大學 Flutter App 入門', date: '2026/2 ~ 2026/6', text: '海洋大學資工系 Flutter 跨平台 App 開發課程。' },
      { tag: '大學課程', title: '海洋大學 SwiftUI iOS App 入門', date: '2026/9 ~ 2027/1', text: '海洋大學資工系 SwiftUI iOS App 開發課程。' },
      { tag: 'Python', title: '海洋大學 Python 程式語言與資料處理', date: '2026/9 ~ 2027/1', text: 'Python 程式語言與資料處理課程。' },
    ],
    historyTitle: '歷年講座與課程',
    history: [
      {
        period: '2021 ~ 2023',
        items: [
          { title: 'APCS 程式設計與 AIoT 智慧應用暑期實作營', date: '2023/7，中華電信學院', note: '前兩天半為 APCS 課程，從最夯的程式語言 Python 語法打基礎，以輕鬆有趣的互動式授課，幫助學生逐步了解 APCS 觀念與題型演練。' },
          { title: '幼獅職訓局 iOS App 開發', date: '2023/5 ~ 6，職訓局' },
          { title: '海洋大學 SwiftUI App 遊戲開發', date: '2023/2 ~ 2023/5' },
          { title: 'iOS App 實戰專案 — 串接 REST API 開發社群 App', date: '2022/12/10 ~ 2023/1/14，TibaMe', note: '帶著同學開發一個媲美上架 App 的社群 App，掌握 iOS App 工程師必備的 REST API 串接技術。' },
          { title: '第一次手做 iOS SwiftUI App', date: '2021/5/23', note: '專屬於初學者的手做 iOS App 課程，親手打造自己喜歡想用的 App，安裝在自己或家人朋友的 iPhone 上。' },
        ],
      },
      {
        period: '2018 ~ 2019',
        items: [
          { title: '新手的 iOS App 練功坊 6：SwiftUI Christmas 交換禮物 App', date: '2019/12/27' },
          { title: '新手的 iOS App 練功坊 5：利用 SwiftUI 製作電子書 App', date: '2019/10/3', note: 'iOS 13 的 SwiftUI 發明後，一首歌的時間就能製作更厲害的 App，快速開發 iPhone、iPad、Mac 三合一的 App。' },
          { title: '新手的 iOS App 練功坊 4：WWDC19 新技術分享 — Xcode 11、iOS 13 & SwiftUI', date: '2019/6/25' },
          { title: '新手的 iOS App 練功坊 3：App Development with Swift 電子書程式範例解析', date: '2019/5/13' },
          { title: '初學者如何學習程式設計 & 工程師工作甘苦談', date: '2019/2/26' },
          { title: '新手的 iOS App 練功坊 2：芝加哥大學的圈圈叉叉 App', date: '2019/2/21' },
          { title: '用 Swift 學習資工系的經典程式問題 1：recursive & iterative', date: '2018/11/16' },
          { title: 'Yahoo iOS App 企業內訓', date: '2018/4/10 ~ 6/14，Yahoo' },
          { title: '深入淺出 Auto Layout 和 Stack View', date: '2018/3/10 ~ 3/11', note: '傳授關於 Auto Layout 和 Stack View 的一切機密，打造滿足各種尺寸的 App 畫面再也不是難事！' },
          { title: '彼得潘的 Swift 程式設計入門', date: '2018/1/27, 2/3，週六', note: '以書籍《彼得潘的 Swift 程式設計入門》為主，12 小時熟悉 Swift 的各項語法和功能！' },
          { title: '創作 MusicKit 告白情歌 App', date: '2018/1/21，台中 iOSDC' },
        ],
      },
      {
        period: '2017',
        items: [
          { title: '文組生的 iOS App 程式初體驗', date: '2017/12/10, 12/17，台中', note: '專為文組生量身訂做，從零開始學程式，2 個週末 14 個小時開發出人生的第一個 iOS App！' },
          { title: '如何變成 iOS App 開發魔法師（免費！）', date: '104 職涯成長 2017/12/13、2016/3/28', note: '分享身為果粉多年學習開發 App 的心路歷程，幫助更多人勇敢踏出第一步。' },
          { title: '不可能不愛的 Xcode 9，Swift 4，iOS 11', date: '2017/9/23 台中軟體園區、2017/6/20', note: 'WWDC17 大解密！分享那些我們夢寐以求和出乎意料的全新功能。' },
          { title: '政大南風四重奏的 iOS App 開發與 Swift 程式語法', date: '2017/9/30、2017/1/19，政大' },
          { title: '逢甲給我一首歌的時間做 App', date: '2017/5/8、2017/4/17，逢甲大學' },
          { title: '晚餐後的幸福甜點 ~ App 創作初體驗', date: '2017/3/31', note: '一邊享用精心製作的手工布朗尼，一邊親手打造美味甜點 App 或自己喜歡主題的 App。' },
          { title: '台大 CS+X 手機應用程式設計', date: '2017/2/24 ~ 3/31，台大 NTU CS+X', note: '專為台大文組生量身訂做，6 個星期學會程式設計的核心概念。' },
          { title: '利用 iOS App 技術創業的 13 個方法', date: '2017/1/19，鐘點大師 & 創咖啡' },
          { title: '台大創創挑戰賽 iOS App 開發工作坊', date: '2017/1/18，台大' },
          { title: 'ALPHA Camp iOS App Bootcamp', date: '十個星期', note: '適合初學者的 iOS App 教學課程，自基礎的 Xcode、Swift 及 Cocoa Touch Framework 出發，教你一步步做出夢想中的 App。' },
        ],
      },
      {
        period: '2015 ~ 2016',
        items: [
          { title: '中央資工 iOS App 程式設計入門', date: '2016/12/10 ~ 12/18，中央資工' },
          { title: '慈濟科大 iOS App 程式設計入門', date: '2016/10 ~ 12，花蓮慈濟科大' },
          { title: '國美魔法 App 工作坊', date: '2016/8/21，國美館', note: '結合藝術與 App，帶領學生從無到有創作獨一無二的國美魔法 App。' },
          { title: '從零開始慢慢學程式（免費）', date: '2016/5/29', note: '以淺顯易懂的 Swift 語言介紹程式設計的基本概念，讓你第一次就愛上程式設計！' },
          { title: '第一次手做 iOS App', date: '台北 2016/5/1、台中 2016/4/30', note: '每個人都有著創作 App 的天份，是時候將它開啟了！' },
          { title: '譯智 KKday 企業包班', date: '2016/4/17 ~ 8/27，70 小時' },
          { title: '第一次程式親密接觸', date: '2016/4/10' },
          { title: 'Objective-C 工程師的 Swift 程式入門', date: '2016/3/27' },
          { title: '大學生的 iOS App 開發入門魔法課', date: '2016/3/16 ~ 6/1，每週三' },
          { title: '女孩們的手做 iOS App', date: '2016/3/6、3/13、3/20', note: '專屬於女孩們的手做電子書 App，7 個小時打造自己喜愛主題的電子書 App。' },
          { title: '彼得潘的深入淺出 iOS App 開發應用', date: '2016/3/5 ~ 4/23，資策會', note: '七個主題：網路後台串接、表格應用、照片牆、Stack View、Facebook、地圖定位、App 分析技術。' },
          { title: '打造你的第一個 iPhone App（以小王子電子書為例）', date: '2015/12/12，ALPHA Camp' },
          { title: '你的程式開發初體驗', date: '2015/8/15' },
          { title: 'Stanford 2015 iOS 讀書會講師', date: '2015/4/11 起十個星期，ALPHA Camp' },
          { title: '彼得潘的 App 逐夢之旅', date: '2015，朝陽科大、資策會等' },
        ],
      },
      {
        period: '2012 ~ 2014',
        items: [
          { title: '弘光科大 iOS App 協同教學', date: '2014/11 ~ 12，弘光科大' },
          { title: '為愛打造 App', date: '2014/1/25，ALPHA Camp x STUDIO A', note: '愛情專屬 App，情人節禮物創意首選！' },
          { title: 'App 開發帳號申請和上架流程', date: '2013/10/18，城邦' },
          { title: 'iOS 7 SDK 特訓班', date: '2013/10/5，譯智教育訓練' },
          { title: '如何將創意提案發展成為一個 App', date: '2013/7/26，遊戲橘子' },
          { title: 'Objective-C 程式設計', date: '2013/7，譯智教育訓練' },
          { title: '正修科大 iOS App 協同教學', date: '2013/5，正修科大' },
          { title: '打造世界上獨一無二的母親節禮物 — 專屬於媽媽的 App', date: '2013/5/5，ALPHA Camp' },
          { title: 'Mobile App 創業解碼', date: '2013/3/20，ALPHA Camp' },
          { title: '當音樂克制不了變成 App 的衝動', date: '2012/9/1，PunApp InstALL 1' },
          { title: '關於彼得潘的 iOS App 冒險故事', date: '2012，南台科大、政大資管、東林扶輪社、HPX Life 5' },
        ],
      },
    ],
    galleryTitle: '彼得潘課程的幸福合影',
    gallery: [
      'images/gallery-1.jpg', 'images/gallery-2.jpg', 'images/gallery-3.jpg', 'images/gallery-4.jpg',
      'images/gallery-5.jpg', 'images/gallery-6.jpg', 'images/gallery-7.jpg', 'images/gallery-8.jpg',
    ],
  },

  // ===== 著作 =====
  books: {
    eyebrow: '著作',
    title: '暢銷程式書作家',
    items: [
      {
        image: 'images/book-swift2017.jpg',
        title: '彼得潘的 Swift 程式設計入門',
        dateHTML: '2017.12 出版',
        award: '🏆 博客來電腦類新書榜 Top 2、金石堂電腦類新書排行榜 Top 1',
      },
      {
        image: 'images/book-swift2015.jpg',
        title: 'Swift 程式設計入門',
        dateHTML: '2015.3 出版・<a href="https://medium.com/@apppeterpan/swift%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88%E5%85%A5%E9%96%80%E5%A4%96%E5%82%B3-2-0%E7%89%88%E4%BF%AE%E8%A8%82%E8%A3%9C%E5%85%85%E5%8C%85-e1ca60c52326" target="_blank" rel="noopener">Swift 3.0 版線上修訂補充包</a>',
        award: '🏆 博客來電腦類暢銷榜 Top 3、新書榜 Top 2、PC home 電腦類新書排行榜 Top 2、金石堂電腦類新書排行榜 Top 3',
      },
      {
        image: 'images/book-app2012.png',
        title: 'App 程式設計入門 — iPhone・iPad 第二版',
        dateHTML: '2012.2 出版',
        award: '🏆 博客來電腦類 Top 1、博客來 2012 年度百大電腦類 Top 6、天瓏銷售排行 Top 1、PC home 電腦/攝影 Top 1',
      },
      {
        image: 'images/book-app2010.png',
        title: 'App 程式設計入門 — iPhone・iPad 第一版',
        dateHTML: '2010.11 出版',
        award: '🏆 iThome 2011 年 100 大 IT 好書推薦',
      },
    ],
  },

  // ===== App 作品 =====
  apps: {
    eyebrow: 'App 作品',
    title: '上架 App Store 的作品們',
    items: [
      {
        image: 'images/app-wealthy.jpg',
        name: 'Wealthy!',
        url: 'https://itunes.apple.com/app/wealthy!-track-expenses-take/id714626591',
        meta: '記帳 App・2013.12・$0.99 & 免費版',
        award: '🏆 台灣 Finance Top 1・台灣不分類 Top 2・中國 Finance Top 2',
        desc: '拍照記帳，記錄每一次購物的美麗回憶！獨家的照片展示模式加上美觀的介面，帳簿就是一本日記本；時間軸瀏覽與管理帳務，簡單直覺。',
      },
      {
        image: 'images/app-penny.png',
        name: '戴佩妮回家路上',
        meta: '專輯 App・2011.12・免費版 & $4.99 版',
        desc: '彼得潘為偶像 Penny 製作的專輯 App！控制 CD 轉盤聆聽 Penny 的溫暖歌聲，觀賞精彩 YouTube MV。',
      },
      {
        image: 'images/app-apart.jpg',
        name: 'Apart — Group Socializing',
        url: 'https://itunes.apple.com/app/apart-group-socializing/id977933667',
        meta: '組隊交友 App・2015.05・免費・Attune Ventures Limited 發行',
        desc: 'Apart connects your circle of friends with other circles in your city. Create a crew, discover and socialize with new and interesting people nearby.',
      },
      {
        image: 'images/app-acaia.jpg',
        name: 'acaia Coffee',
        url: 'https://itunes.apple.com/app/acaia-coffee/id834883045',
        meta: '手沖咖啡記錄 App・2014.3・免費・acaia 發行',
        award: "🏆 2014 SCAA Best New Product・2014 SCAA People's Choice Award",
        desc: '首創「咖啡沖煮記錄圖」，藉由 App 連結 acaia 咖啡秤觀察咖啡沖泡的情況，提供你探索精品咖啡世界無限的可能。',
      },
      {
        image: 'images/app-vk.jpg',
        name: 'V.K克 Official App',
        meta: '鋼琴王子 V.K克的 App・2014.3・免費・小巨人音樂發行',
        desc: 'V.K official app contains all the latest information including profile, news, photos, event schedule, music videos and latest songs tracks.',
      },
      {
        image: 'images/app-minihana.jpg',
        name: 'mini．Hana 幸福插畫',
        meta: 'mini.Hana 作品集・2012.12・免費',
        desc: 'mini Hana 米花兒，心花朵朵開時會冒出的可愛生物。',
      },
      {
        image: 'images/app-locomo.jpg',
        name: 'LOCOMO 運動記錄',
        url: 'https://itunes.apple.com/app/locomo-yun-dong-ji-lu/id537144570',
        meta: '運動記錄社群 App・2012.11・免費・馬拉松世界發行',
        award: '🏆 台灣 Health & Fitness Top 2・2012 TIDCA 評審推薦獎・2012 數位時代「最佳企業 App」・2012 Mobile App 大賽潛力合作獎',
        desc: '參加活動，記錄軌跡，分享你運動的驕傲！',
      },
      {
        image: 'images/app-fitmi.jpg',
        name: 'FitMi 雲端減重',
        meta: '減重飲食記錄 App・2013.3・免費・熱情豆發行',
        award: '🏆 最高排名 Health & Fitness Top 3',
        desc: '計算每天飲食熱量，設定專屬自己的減重計畫。體重趨勢圖、飲食資料庫、多樣的記錄項目。',
      },
      {
        image: 'images/app-toeic.jpg',
        name: '新多益單字',
        meta: '多益單字 App・2014.10・免費・In-App 付費',
        desc: '最標準的英文發音，最超值的升學單字書！',
      },
      {
        image: 'images/app-singer.jpg',
        name: '超級歌手',
        meta: '吹氣唱歌訓練遊戲・2012.2・免費・歌唱聖經作者秀珠老師發行',
        desc: '努力地吹走薑餅人！多種薑餅人角色，多道關卡。',
      },
      {
        image: 'images/app-wretch.jpg',
        name: '正妹傳很大',
        meta: '無名照片上傳 App・2010.3・免費・英諾奧茲發行',
        desc: '照片上傳列表、選擇相片、無名帳號設定，輕鬆上傳照片。',
      },
    ],
  },

  // ===== 散文集 =====
  essays: {
    eyebrow: '散文集',
    title: '彼得潘和 iOS App 的那些年',
    leadLinkText: '完整散文集 →',
    leadLinkUrl: 'https://medium.com/@apppeterpan/%E5%BD%BC%E5%BE%97%E6%BD%98%E5%92%8C-ios-app-%E7%9A%84%E9%82%A3%E4%BA%9B%E5%B9%B4%E6%95%A3%E6%96%87%E9%9B%86-4794cc6b753c',
    items: [
      { date: '2020/1/1', title: '學習開發 Swift iOS App 該買哪台 Mac 呢', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E5%AD%B8%E7%BF%92%E9%96%8B%E7%99%BC-swift-ios-app-%E8%A9%B2%E8%B2%B7%E5%93%AA%E5%8F%B0-mac-%E5%91%A2-79b22c5d317a' },
      { date: '2019/12/5', title: '找到 iOS App 工作的正相關條件？Medium 的 App 作業文章', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E6%89%BE%E5%88%B0-ios-app-%E5%B7%A5%E4%BD%9C%E7%9A%84%E6%AD%A3%E7%9B%B8%E9%97%9C%E6%A2%9D%E4%BB%B6-medium-%E7%9A%84-app-%E4%BD%9C%E6%A5%AD%E6%96%87%E7%AB%A0-5a4a523966eb' },
      { date: '2019/7/27', title: '文組生也能開發 iOS App 的幕後推手，終極果粉 — 彼得潘', url: 'https://www.tech-girlz.com/2019/07/ios-developer-peter-pan.html' },
      { date: '2019/4/25', title: '非本科如何在幾個月內轉職工程師：一週 40 小時的練習', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E9%9D%9E%E6%9C%AC%E7%A7%91%E5%A6%82%E4%BD%95%E5%9C%A8%E5%B9%BE%E5%80%8B%E6%9C%88%E5%85%A7%E8%BD%89%E8%81%B7%E5%B7%A5%E7%A8%8B%E5%B8%AB-%E4%B8%80%E9%80%B1-40-%E5%B0%8F%E6%99%82%E7%9A%84%E7%B7%B4%E7%BF%92-ebacb8b704af' },
      { date: '2018/12/4', title: '學了程式找到工作後，是否就像王子公主，從此過著幸福快樂的日子', url: 'https://bit.ly/2AP4XnS' },
      { date: '2018/10/15', title: '一步一腳印的 iOS App 上架和更新流程', url: 'https://www.appcoda.com.tw/ios-app-submission/' },
      { date: '2018/8/19', title: '為什麼其他同學程式作業寫那麼快？是不是我太弱呢？', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E7%82%BA%E4%BB%80%E9%BA%BC%E5%85%B6%E4%BB%96%E5%90%8C%E5%AD%B8%E7%A8%8B%E5%BC%8F%E4%BD%9C%E6%A5%AD%E5%AF%AB%E9%82%A3%E9%BA%BC%E5%BF%AB-%E6%98%AF%E4%B8%8D%E6%98%AF%E6%88%91%E5%A4%AA%E5%BC%B1%E5%91%A2-269925a51a52' },
      { date: '2018/6/18', title: '搶先預覽 Xcode 10 的全新功能', url: 'https://www.appcoda.com.tw/xcode-10/' },
      { date: '2018/5/1', title: '想不出來怎麼寫，是不是自己不適合寫程式呢？', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E5%B8%B8%E5%B8%B8%E6%83%B3%E4%B8%8D%E5%87%BA%E4%BE%86-%E6%98%AF%E4%B8%8D%E6%98%AF%E8%87%AA%E5%B7%B1%E4%B8%8D%E9%81%A9%E5%90%88%E5%AF%AB%E7%A8%8B%E5%BC%8F%E5%91%A2-a7b4fbeba9e4' },
      { date: '2018/3/12', title: '傳送告白推播的 Push Notification', url: 'https://www.appcoda.com.tw/push-notification/' },
      { date: '2017/9/5', title: '模仿 Apple 教學範例，寫出一手好 Swift', url: 'https://www.appcoda.com.tw/write-better-swift/' },
      { date: '2017/8/19', title: '超過 30 歲，開始學程式還來得及嗎？', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E8%B6%85%E9%81%8E-30-%E6%AD%B2-%E9%96%8B%E5%A7%8B%E5%AD%B8%E7%A8%8B%E5%BC%8F%E4%BE%86%E5%BE%97%E5%8F%8A%E5%97%8E-cc7d3af772af' },
      { date: '2017/6/9', title: '不可能不愛的 Xcode 9', url: 'https://www.appcoda.com.tw/xcode9/' },
      { date: '2017/5/14', title: 'AppCoda 專訪：致力打破學習藩籬，彼得潘引領文組生躋身科技專才', url: 'http://www.appcoda.com.tw/peter-pan-ios-developer-interview/' },
      { date: '2017/4/10', title: 'Swift 的問號與驚嘆號：可有可無的 Optional', url: 'http://www.appcoda.com.tw/swift-optional-intro/' },
      { date: '2017/2/23', title: 'Swift 入門教學：知錯能改善莫大焉的 Error Handling', url: 'http://www.appcoda.com.tw/swift-error-handling/' },
      { date: '2017/1/24', title: 'iOS App 開發常見技術問題精選集（一）', url: 'https://blog.alphacamp.co/2017/01/24/ios-app-development-faq1/' },
      { date: '2017/1/19', title: '利用 iOS App 技術創業的 13 個方法', url: 'http://www.slideshare.net/deeplovepan/ios-app-13' },
      { date: '2016/11/17', title: '掌握八個重點，讓你上課學程式更有效！', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E6%8E%8C%E6%8F%A1%E5%85%AB%E5%80%8B%E9%87%8D%E9%BB%9E-%E8%AE%93%E4%BD%A0%E4%B8%8A%E8%AA%B2%E5%AD%B8%E7%A8%8B%E5%BC%8F%E6%9B%B4%E6%9C%89%E6%95%88-47ccdc793bc8' },
      { date: '2016/8/26', title: '結合 iOS 10 的 User Notifications：傳送米花兒的幸福打氣通知', url: 'http://www.appcoda.com.tw/ios10-user-notifications/' },
      { date: '2016/8/4', title: '那些年我們學不會的程式設計', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E9%82%A3%E4%BA%9B%E5%B9%B4%E6%88%91%E5%80%91%E5%AD%B8%E4%B8%8D%E6%9C%83%E7%9A%84%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88-b647b2de5980' },
      { date: '2016/6/22', title: '沒有 Mac 如何學習二十一世紀的程式語言 Swift？', url: 'https://blog.alphacamp.co/2016/06/22/how-to-learn-swift-without-mac/' },
      { date: '2016/5/26', title: 'Swift 3.0 要來了，你準備好了嗎？', url: 'https://blog.alphacamp.co/2016/05/26/swift-3/' },
      { date: '2016/3/11', title: 'iOS App 開發的十個 Q & A', url: 'https://medium.com/@apppeterpan/%E9%97%9C%E6%96%BCios-app%E9%96%8B%E7%99%BC%E7%9A%84%E5%8D%81%E5%80%8Bq-a-65833f6eb993' },
      { date: '2015/12/11', title: '想成為強大的 App 開發者，就從教學開始！', url: 'https://blog.alphacamp.co/2015/12/11/teaching-is-the-best-way-to-be-a-good-app-developer/' },
      { date: '2015/11/9', title: '跟著小王子一起打造你的第一個 iPhone App', url: 'https://blog.alphacamp.co/2015/11/09/the-little-prince-will-teach-you-how-to-develop-your-first-app/' },
      { date: '2015/8/10', title: 'App 怎麼學？上課還是自學？', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/app-%E6%80%8E%E9%BA%BC%E5%AD%B8-%E4%B8%8A%E8%AA%B2%E9%82%84%E6%98%AF%E8%87%AA%E5%AD%B8-db3d9314ac89' },
      { date: '2015/7/27', title: '當你努力想學習 Swift 時，全世界都會來幫你', url: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/%E7%95%B6%E4%BD%A0%E5%8A%AA%E5%8A%9B%E6%83%B3%E5%AD%B8%E7%BF%92-swift-%E6%99%82-%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E6%9C%83%E4%BE%86%E5%B9%AB%E4%BD%A0-b11dca643686' },
      { date: '2014/12/23', title: 'App 開發學習之五招絕密心法', url: 'https://blog.alphacamp.co/2014/12/23/beautiful-app-life/' },
    ],
    column: {
      title: '雜誌專欄',
      text: 'MacToday App 開發專欄，2011.02 ~ 2014.10。從「認識 Xcode 4 與 iOS SDK，寫出第一個 Hello World 程式」到「全面進化的 Swift enum」，四年不間斷的專欄寫作。',
      buttonText: '完整專欄文章清單 →',
      url: 'https://medium.com/@apppeterpan/mactoday-app%E9%96%8B%E7%99%BC%E5%B0%88%E6%AC%84%E6%96%87%E7%AB%A0%E6%B8%85%E5%96%AE-c105acc2052e',
    },
  },

  // ===== 經歷 =====
  experience: {
    eyebrow: '經歷',
    title: '彼得潘的 App / AI 逐夢之旅',
    leadLinkText: '完整經歷連結 →',
    leadLinkUrl: 'https://medium.com/%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84-swift-ios-app-%E9%96%8B%E7%99%BC%E6%95%99%E5%AE%A4/swift-ios-app-%E7%A8%8B%E5%BC%8F%E9%96%8B%E7%99%BC%E4%BD%9C%E5%AE%B6%E5%BD%BC%E5%BE%97%E6%BD%98%E7%9A%84%E6%96%87%E5%AD%97%E7%B0%A1%E6%AD%B7-f09d4239c809',
    nowTitle: '🚀 現在',
    // 每一項可用 HTML，例如 <strong> 粗體
    now: [
      '<strong>作家</strong>',
      '<strong>Swift iOS / Flutter 開發講師</strong>：臺灣大學資訊系統訓練班、ALPHA Camp、譯智教育訓練、資策會、職訓局、iSpan資展國際、國家文官學院、台中軟體園區、TibaMe、STUDIO A、iPlayground、MOPCON、中華電信學院、新北市政府青年局',
      '<strong>學校 iOS 開發課程講師</strong>：海洋大學資工系、臺北科大資工系、臺北教育大學 iOS 社團、淡江大學 iOS 社團、台大共同教育中心、台大 CS+X、政治大學、中央大學、臺北大學、台北醫學大學、逢甲大學、文化大學、宏國德霖科大、醒吾科大、勤益科大、弘光科大、正修科大、慈濟科大、中國科大、龍華科大、中央警察大學、南崁高中、高雄美國學校、華砇程式社團',
      '<strong>專欄</strong>：AppCoda、ALPHA Camp',
      '<strong>企業內訓(Swift iOS、AI、Flutter)</strong>：Yahoo、東和鋼鐵、聯陽半導體、世界先進、統一資訊、新光人壽、信義房屋、果思設計',
      '<strong>WWDC Swift Student Challenge</strong> 得獎學生的指導老師',
      '<strong>技術顧問</strong>：FUNTEK、點點數位、英諾奧茲、Brocas',
      '<strong>iOS App 開發接案</strong>',
    ],
    pastTitle: '🕰 過去',
    past: [
      'MacToday App 開發專欄作家',
      'PC home Mac 基礎教室專欄作家',
      'PunApp App 評論',
      'FUNTEK 首席 iOS 軟體工程師',
      'acaia 首席 iOS 軟體工程師',
      '熱情豆行動樂活科技首席軟體工程師',
    ],
    educationTitle: '🎓 學歷',
    education: [
      '國立清華大學通訊工程研究所',
      '國立清華大學資訊工程學系',
      '國立高雄中學',
    ],
  },

  // ===== 聯絡 =====
  contact: {
    eyebrow: '聯絡',
    title: '任何 SwiftUI / Flutter / AI / Python 問題，歡迎隨時聯絡彼得潘',
    lead: '當彼得潘回答大家的問題時，其實也在找答案的過程中精進學習，增長了自己的功力，和大家交了朋友，獲得再多錢也買不到的回報和收獲。',
    cards: [
      { icon: '✉️', title: 'Email', textHTML: 'apppeterpan@gmail.com', url: 'mailto:apppeterpan@gmail.com' },
      { icon: '👍', title: '粉絲團', textHTML: '愛瘋一切為蘋果的彼得潘<br><small>每天分享 iOS App 開發的相關文章</small>', url: 'https://www.facebook.com/iphone.peterpan/' },
      { icon: '💬', title: '私人 Facebook', textHTML: 'deeplove.pan', url: 'https://www.facebook.com/deeplove.pan' },
      { icon: '💚', title: 'LINE', textHTML: '私人帳號：deeplovepeterpan<br>官方帳號：@puy0405e' },
    ],
  },

  // ===== 頁尾 =====
  footer: '© 2015 - 2026 愛瘋一切為蘋果的彼得潘 🍎.',
};

// 讓建置腳本（node build.js）也能讀取這份資料，瀏覽器會忽略這段
if (typeof module !== 'undefined' && module.exports) {
  module.exports = siteData;
}
