import componentSetting from '/@/settings/componentSetting';

const { table } = componentSetting;

const {
  pageSizeOptions,
  defaultPageSize,
  fetchSetting,
  defaultSize,
  defaultSortFn,
  defaultFilterFn,
} = table;

export const ROW_KEY = 'key';

// Optional display number per page;
export const PAGE_SIZE_OPTIONS = pageSizeOptions;

// Number of items displayed per page
export const PAGE_SIZE = defaultPageSize;

// 常用接口字段设置 Common interface field settings
export const FETCH_SETTING = fetchSetting;

// 默认尺寸 Default Size
export const DEFAULT_SIZE = defaultSize;

// 配置通用排序功能 Configure general sort function
export const DEFAULT_SORT_FN = defaultSortFn;

export const DEFAULT_FILTER_FN = defaultFilterFn;

//  表格单元格的默认布局 Default layout of table cells
export const DEFAULT_ALIGN = 'center';

export const INDEX_COLUMN_FLAG = 'INDEX';

export const ACTION_COLUMN_FLAG = 'ACTION';
