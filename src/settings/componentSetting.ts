// Used to configure the general configuration of some components without modifying the components

import type { SorterResult } from '../components/Table';

export default {
  // basic-table setting
  table: {
    // 表单接口请求通用配置 Form interface request general configuration
    // support xxx.xxx.xxx
    fetchSetting: {
      // 传给后台的当前页面的字段名 The field name of the current page passed to the background
      pageField: 'page',
      // 后台显示的每页的数字字段名称 The number field name of each page displayed in the background
      sizeField: 'pageSize',
      // 接口返回的表单数据的字段名 Field name of the form data returned by the interface
      listField: 'items',
      // 接口字段名返回的表总数 Total number of tables returned by the interface field name
      totalField: 'total',
    },
    // 可选择的页数 Number of pages that can be selected
    pageSizeOptions: ['10', '50', '80', '100'],
    // 一页默认显示数量 Default display quantity on one page
    defaultPageSize: 10,
    // 默认尺寸 Default Size default | middle | small
    defaultSize: 'small',
    // 自定义通用排序功能 Custom general sort function
    defaultSortFn: (sortInfo: SorterResult) => {
      const { field, order } = sortInfo;
      if (field && order) {
        return {
          // 传递给后端的排序字段 The sort field passed to the backend you
          field,
          // 传递给后台的排序方法 ascdesc Sorting method passed to the background asc/desc
          order,
        };
      } else {
        return {};
      }
    },
    // 自定义通用过滤功能 Custom general filter function
    defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
      return data;
    },
  },
  // 滚动条设置 scrollbar setting
  scrollbar: {
    // 是否使用原生滚动条 Whether to use native scroll bar
    // 打开后，menu、modal、drawer都会将弹出的滚动条改为native After opening, the menu, modal, drawer will change the pop-up scroll bar to native
    native: false,
  },
};
