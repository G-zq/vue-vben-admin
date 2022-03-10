import type { ProjectConfig } from '/#/config';
import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';
import {
  SIDE_BAR_BG_COLOR_LIST,
  HEADER_PRESET_BG_COLOR_LIST,
  APP_PRESET_COLOR_LIST,
} from './designSetting';
// import { primaryColor } from '../../build/config/themeConfig';

// ! 更改后需要清除浏览器缓存 You need to clear the browser cache after the change
const setting: ProjectConfig = {
  // 是否显示配置按钮 Whether to show the configuration button
  showSettingButton: true,

  // 是否显示切换主题按钮 Whether to show the theme switch button
  showDarkModeToggle: true,

  // `设置`按钮位置 `Settings` button position
  settingButtonPosition: SettingButtonPositionEnum.AUTO,

  // 权限模式 Permission mode
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,

  // 权限相关的缓存存储在 sessionStorage 或 localStorage
  // Permission-related cache is stored in sessionStorage or localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,

  // 会话超时处理 Session timeout processing
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // 颜色 color
  themeColor: APP_PRESET_COLOR_LIST[0],

  // Website gray mode, open for possible mourning dates
  grayMode: false,

  // 色弱模式 Color Weakness Mode
  colorWeak: false,

  // 是否取消菜单、置顶、多标签页显示，以备其他系统可能嵌入
  // Whether to cancel the menu, the top, the multi-tab page display, for possible embedded in other systems
  fullContent: false,

  // 内容模式 content mode
  contentMode: ContentEnum.FULL,

  // 是否显示logo Whether to display the logo
  showLogo: true,

  // 是否显示页脚 Whether to show footer
  showFooter: false,

  // Header配置 Header configuration
  headerSetting: {
    // header背景色 header bg color
    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],
    // 固定在顶部 Fixed at the top
    fixed: true,
    // 是否显示顶部 Whether to show top
    show: true,
    // 主题 theme
    theme: ThemeEnum.LIGHT,
    // 是否开启锁屏功能 Whether to enable the lock screen function
    useLockPage: true,
    // 是否显示全屏按钮 Whether to show the full screen button
    showFullScreen: true,
    // 是否显示文档按钮 Whether to show the document button
    showDoc: false,
    // 是否显示通知按钮 Whether to show the notification button
    showNotice: true,
    // 是否显示菜单搜索 Whether to display the menu search
    showSearch: true,
  },

  // 菜单配置 Menu configuration
  menuSetting: {
    // 侧边栏背景色 sidebar menu bg color
    bgColor: SIDE_BAR_BG_COLOR_LIST[0],
    // 固定在左边 Whether to fix the left menu
    fixed: true,
    // 菜单折叠 Menu collapse
    collapsed: false,
    // 折叠菜单时是否显示菜单名称 Whether to display the menu name when folding the menu
    collapsedShowTitle: false,
    // 是否可以拖动 Whether it can be dragged
    // 只限于打开左侧菜单，鼠标在菜单右侧有一个拖动条 Only limited to the opening of the left menu, the mouse has a drag bar on the right side of the menu
    canDrag: false,
    // 是否不显示dom Whether to show no dom
    show: true,
    // 是否显示dom Whether to show dom
    hidden: false,
    // 菜单宽度 Menu width
    menuWidth: 210,
    // 菜单模式 Menu mode
    mode: MenuModeEnum.INLINE,
    // 菜单类型 Menu type
    type: MenuTypeEnum.SIDEBAR,
    // 菜单主题 Menu theme
    theme: ThemeEnum.DARK,
    // 拆分菜单 Split menu
    split: false,
    // 顶部菜单布局 Top menu layout
    topMenuAlign: 'center',
    // 折叠触发位置 Fold trigger position
    trigger: TriggerEnum.HEADER,
    // 打开手风琴模式，只显示一个菜单 Turn on accordion mode, only show a menu
    accordion: true,
    // 切换页面以关闭菜单 Switch page to close menu
    closeMixSidebarOnChange: false,
    // 模块打开方式‘点击’|‘悬停’ Module opening method ‘click’ |'hover'
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    // 固定扩展菜单 Fixed expanded menu
    mixSideFixed: false,
  },

  // 多标签 Multi-label
  multiTabsSetting: {
    cache: false,
    // 是否开启 Turn on
    show: true,
    // 是否可以拖放排序多标签 Is it possible to drag and drop sorting tabs
    canDrag: true,
    // 打开快速操作 Turn on quick actions
    showQuick: true,
    // 是否显示刷新按钮 Whether to show the refresh button
    showRedo: true,
    // 是否显示折叠按钮 Whether to show the collapse button
    showFold: true,
  },

  // 过渡设置 Transition Setting
  transitionSetting: {
    // 是否开启页面切换动画 Whether to open the page switching animation
    // 禁用状态也会禁用 pageLoading The disabled state will also disable pageLoading
    enable: true,

    // 路由基本切换动画 Route basic switching animation
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // 是否开启页面切换加载 Whether to open page switching loading
    // 仅在 enable=true 时打开 Only open when enable=true
    openPageLoading: true,

    // 是否打开顶部进度条 Whether to open the top progress bar
    openNProgress: true,
  },

  // 是否开启KeepAlive缓存最好在开发时关闭，否则每次都需要清空缓存
  // Whether to enable KeepAlive cache is best to close during development, otherwise the cache needs to be cleared every time
  openKeepAlive: true,

  // 自动锁屏时间，0不锁屏。单位分钟 默认 0 Automatic screen lock time, 0 does not lock the screen. Unit minute default 0
  lockTime: 0,

  // 是否显示面包屑 Whether to show breadcrumbs
  showBreadCrumb: true,

  // 是否显示面包屑图标 Whether to show the breadcrumb icon
  showBreadCrumbIcon: false,

  // 使用错误处理程序插件 Use error-handler-plugin
  useErrorHandle: false,

  // 是否打开回到顶部 Whether to open back to top
  useOpenBackTop: true,

  // 是否可以嵌入 iframe 页面 Is it possible to embed iframe pages
  canEmbedIFramePage: true,

  // 切换界面时是否删除未关闭的消息并通知 Whether to delete unclosed messages and notify when switching the interface
  closeMessageOnSwitch: true,

  // 切换接口时是否取消已经发送但没有响应的http请求 Whether to cancel the http request that has been sent but not responded when switching the interface.
  // 如果启用，我想覆盖单个界面。可以在单独的界面中设置 If it is enabled, I want to overwrite a single interface. Can be set in a separate interface
  removeAllHttpPending: false,
};

export default setting;
