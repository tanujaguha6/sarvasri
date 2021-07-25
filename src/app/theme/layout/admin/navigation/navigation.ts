import {Injectable} from '@angular/core';
export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  faicon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [{
      id: 'navigation',
      title: 'Main Navigation',
      type: 'group',
      icon: 'feather icon-monitor',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          url: '/dashboard/default',
          classes: 'nav-item',
          icon: 'fa fa-dashboard'
        },
        {
          id: 'wallet',
          title: 'Wallet',
          type: 'collapse',
          icon: 'fa fa-money',
          children: [
            {
              id: 'Retail transaction',
              title: 'Retail Transacton',
              type: 'item',
              url: '/wallet/transaction/retail',
              faicon: 'fa fa-circle-o'
            },
                  {
                    id: 'First transaction',
                    title: 'First Transacton',
                    type: 'item',
                    url: '/wallet/transaction/first_wallet',
                    faicon: 'fa fa-circle-o'
                  }
          ]
        },
        {
          id: 'commission',
          title: 'Commission',
          type: 'collapse',
          icon: 'fa fa-suitcase',
          children: [
            {
              id: 'First_Purchase_Income',
              title: 'First Purchase Income',
              type: 'item',
              faicon: 'fa fa-circle-o',
              url: '/commission/first-purchase-income'
            },
            {
              id: 're_prchase_weekly_income',
              title: 'Re purchase weekly Income',
              type: 'item',
              faicon: 'fa fa-circle-o',
              url: '/commission/re-purchase-weekly-income'
            },
            {
              id: 're_prchase_monthly_income',
              title: 'Re purchase monthly Income',
              type: 'item',
              faicon: 'fa fa-circle-o',
              url: '/commission/re-purchase-monthly-income'
            },
            {
              id: 'consistency_income',
              title: 'Consistency Income',
              type: 'item',
              faicon: 'fa fa-circle-o',
              url: '/commission/consistency-income'
            },
            {
              id: 'payout_report',
              title: 'Payout Report',
              type: 'item',
              faicon: 'fa fa-circle-o',
              url: '/commission/payout-report'
            }
          ]
        },
        {
            id: 'deduction',
            title: 'Deduction',
            type: 'collapse',
            icon: 'fa fa-suitcase',
            children: [
              {
                id: 'First_income_deduction',
                title: 'First Income Deduction',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/deduction/first-income-deduction'
              }
            ]
        },
        {
            id: 'matching_report',
            title: 'Matching Report',
            type: 'collapse',
            icon: 'fa fa-balance-scale',
            children: [
              {
                id: 'First_purchase',
                title: 'First Purchase',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/matching-report/first-purchase'
              },
              {
                id: 're_purchase',
                title: 'Re Purchase',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/matching-report/re-purchase'
              }
            ]
        },
        {
            id: 'recognition',
            title: 'Recognition',
            type: 'collapse',
            icon: 'fa fa-mortar-board',
            children: [
              {
                id: 'recognition_view',
                title: 'Recognition View',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/recognition/recognition-view'
              }
            ]
        },
        {
            id: 'member',
            title: 'Member',
            type: 'collapse',
            icon: 'fa fa-users',
            children: [
              {
                id: 'member_add',
                title: 'Member Add',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/member/member-add'
              },
              {
                id: 'member_view',
                title: 'Member View',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/member/member-view'
              },
              {
                id: 'direct_downline',
                title: 'Direct Downline',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/member/direct-downline'
              },
              {
                id: 'binary_tree',
                title: 'Binary Tree',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/member/binary-tree'
              }
            ]
        },
        {
            id: 'invoice',
            title: 'Invoice',
            type: 'collapse',
            icon: 'fa fa-list-alt',
            children: [
              {
                id: 'retail_invoice',
                title: 'Retail Invoice',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/invoice/retail'
              },
              {
                id: 'retail_package_invoice',
                title: 'Retail Package Invoice',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/invoice/retail-package'
              },
              {
                id: 'first_invoice',
                title: 'First Invoice',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/invoice/first'
              },
              {
                id: 'first_package_invoice',
                title: 'First Package Invoice',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/invoice/first-package'
              }
            ]
        },
        {
            id: 'product',
            title: 'Product',
            type: 'collapse',
            icon: 'fa fa-gg',
            children: [
              {
                id: 'product_view',
                title: 'Product View',
                type: 'item',
                faicon: 'fa fa-circle-o',
                url: '/product/view'
              }
            ]
        }
      ]}];

/****************new section *******************/
// const NavigationItems = [
//   {
//     id: 'navigation',
//     title: 'Navigation',
//     type: 'group',
//     icon: 'feather icon-monitor',
//     children: [
//       {
//         id: 'dashboard',
//         title: 'Dashboard',
//         type: 'item',
//         url: '/dashboard/default',
//         classes: 'nav-item',
//         icon: 'feather icon-home'
//       },
//       {
//         id: 'page-layouts',
//         title: 'Page Layouts',
//         type: 'collapse',
//         icon: 'feather icon-layout',
//         children: [
//           {
//             id: 'vertical',
//             title: 'Vertical',
//             type: 'item',
//             url: '/layout/static',
//             target: true
//           },
//           {
//             id: 'horizontal',
//             title: 'Horizontal',
//             type: 'item',
//             url: '/layout/horizontal',
//             target: true
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'ui-element',
//     title: 'UI ELEMENT',
//     type: 'group',
//     icon: 'feather icon-layers',
//     children: [
//       {
//         id: 'basic',
//         title: 'Basic',
//         type: 'collapse',
//         icon: 'feather icon-box',
//         children: [
//           {
//             id: 'alert',
//             title: 'Alert',
//             type: 'item',
//             url: '/basic/alert'
//           },
//           {
//             id: 'button',
//             title: 'Button',
//             type: 'item',
//             url: '/basic/button'
//           },
//           {
//             id: 'badges',
//             title: 'Badges',
//             type: 'item',
//             url: '/basic/badges'
//           },
//           {
//             id: 'breadcrumb-pagination',
//             title: 'Breadcrumbs & Pagination',
//             type: 'item',
//             url: '/basic/breadcrumb-paging'
//           },
//           {
//             id: 'cards',
//             title: 'Cards',
//             type: 'item',
//             url: '/basic/cards'
//           },
//           {
//             id: 'collapse',
//             title: 'Collapse',
//             type: 'item',
//             url: '/basic/collapse'
//           },
//           {
//             id: 'carousel',
//             title: 'Carousel',
//             type: 'item',
//             url: '/basic/carousel'
//           },
//           {
//             id: 'grid-system',
//             title: 'Grid System',
//             type: 'item',
//             url: '/basic/grid-system'
//           },
//           {
//             id: 'progress',
//             title: 'Progress',
//             type: 'item',
//             url: '/basic/progress'
//           },
//           {
//             id: 'modal',
//             title: 'Modal',
//             type: 'item',
//             url: '/basic/modal'
//           },
//           {
//             id: 'spinner',
//             title: 'Spinner',
//             type: 'item',
//             url: '/basic/spinner'
//           },
//           {
//             id: 'tabs-pills',
//             title: 'Tabs & Pills',
//             type: 'item',
//             url: '/basic/tabs-pills'
//           },
//           {
//             id: 'typography',
//             title: 'Typography',
//             type: 'item',
//             url: '/basic/typography'
//           },
//           {
//             id: 'tooltip-popovers',
//             title: 'Tooltip & Popovers',
//             type: 'item',
//             url: '/basic/tooltip-popovers'
//           },
//           {
//             id: 'toasts',
//             title: 'Toasts',
//             type: 'item',
//             url: '/basic/toasts'
//           },
//           {
//             id: 'other',
//             title: 'Other',
//             type: 'item',
//             url: '/basic/other'
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: 'forms',
//     title: 'Forms & Table',
//     type: 'group',
//     icon: 'feather icon-layout',
//     children: [
//       {
//         id: 'forms-element',
//         title: 'Forms',
//         type: 'item',
//         url: '/forms/basic',
//         classes: 'nav-item',
//         icon: 'feather icon-file-text'
//       },
//       {
//         id: 'bootstrap',
//         title: 'Bootstrap',
//         type: 'item',
//         url: '/tbl-bootstrap/bt-basic',
//         classes: 'nav-item',
//         icon: 'feather icon-server'
//       }
//     ]
//   },
//   {
//     id: 'chart-maps',
//     title: 'Chart & Maps',
//     type: 'group',
//     icon: 'feather icon-pie-chart',
//     children: [
//       {
//         id: 'charts',
//         title: 'Charts',
//         type: 'item',
//         url: '/charts/apex',
//         classes: 'nav-item',
//         icon: 'feather icon-pie-chart'
//       },
//       {
//         id: 'maps',
//         title: 'Maps',
//         type: 'item',
//         url: '/maps/google',
//         classes: 'nav-item',
//         icon: 'feather icon-map'
//       }
//     ]
//   },
//   {
//     id: 'pages',
//     title: 'Pages',
//     type: 'group',
//     icon: 'feather icon-file-text',
//     children: [
//       {
//         id: 'auth',
//         title: 'Authentication',
//         type: 'collapse',
//         icon: 'feather icon-lock',
//         children: [
//           {
//             id: 'signup',
//             title: 'Sign up',
//             type: 'item',
//             url: '/auth/signup',
//             target: true,
//             breadcrumbs: false
//           },
//           {
//             id: 'signin',
//             title: 'Sign in',
//             type: 'item',
//             url: '/auth/signin',
//             target: true,
//             breadcrumbs: false
//           }
//         ]
//       },
//       {
//         id: 'sample-page',
//         title: 'Sample Page',
//         type: 'item',
//         url: '/sample-page',
//         classes: 'nav-item',
//         icon: 'feather icon-sidebar'
//       }
//     ]
//   }
// ];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
