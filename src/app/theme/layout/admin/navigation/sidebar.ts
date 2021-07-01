export class SideBar {
    public static NavigationItems = [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            classes: 'nav-item',
            icon: 'feather icon-home'
          },
          {
            id: 'wallet',
            title: 'Wallet',
            type: 'collapse',
            icon: 'feather icon-layout',
            children: [
              {
                id: 'retail_wallet',
                title: 'Retail Wallet',
                type: 'collapse',
                children: [
                    {
                      id: 'balance',
                      title: 'Balance',
                      type: 'item',
                      url: '/',
                      target: true
                    },
                    {
                      id: 'transaction',
                      title: 'Transacton',
                      type: 'item',
                      url: '/',
                      target: true
                    }
                  ]
              },
              {
                id: 'first_wallet',
                title: 'First Wallet',
                type: 'collapse',
                children: [
                    {
                      id: 'balance',
                      title: 'Balance',
                      type: 'item',
                      url: '/',
                      target: true
                    },
                    {
                      id: 'transaction',
                      title: 'Transacton',
                      type: 'item',
                      url: '/',
                      target: true
                    }
                  ]
              }
            ]
          },
          {
            id: 'commission',
            title: 'Commission',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'First_Purchase_Income',
                title: 'First Purchase Income',
                type: 'item',
                url: '/commission/first-purchase-income'
              },
              {
                id: 're_prchase_weekly_income',
                title: 'Re purchase weekly Income',
                type: 'item',
                url: '/commission/re-purchase-weekly-income'
              },
              {
                id: 're_prchase_monthly_income',
                title: 'Re purchase monthly Income',
                type: 'item',
                url: '/commission/re-purchase-monthly-income'
              },
              {
                id: 'consistency_income',
                title: 'Consistency Income',
                type: 'item',
                url: '/commission/consistency-income'
              },
              {
                id: 'payout_report',
                title: 'Payout Report',
                type: 'item',
                url: '/commission/payout-report'
              }
            ]
        },
        {
            id: 'deduction',
            title: 'Deduction',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'First_income_deduction',
                title: 'First Income Deduction',
                type: 'item',
                url: '/deduction/first-income-deduction'
              }
            ]
        },
        {
            id: 'matching_report',
            title: 'Matching Report',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'First_purchase',
                title: 'First Purchase',
                type: 'item',
                url: '/'
              },
              {
                id: 're_purchase',
                title: 'Re Purchase',
                type: 'item',
                url: '/'
              }
            ]
        },
        {
            id: 'recognition',
            title: 'Recognition',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'recognition_view',
                title: 'Recognition View',
                type: 'item',
                url: '/'
              }
            ]
        },
        {
            id: 'member',
            title: 'Member',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'member_add',
                title: 'Member Add',
                type: 'item',
                url: '/'
              },
              {
                id: 'member_view',
                title: 'Member View',
                type: 'item',
                url: '/'
              },
              {
                id: 'direct_downline',
                title: 'Direct Downline',
                type: 'item',
                url: '/'
              },
              {
                id: 'binary_tree',
                title: 'Binary Tree',
                type: 'item',
                url: '/'
              }
            ]
        },
        {
            id: 'invoice',
            title: 'Invoice',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'retail_invoice',
                title: 'Retail Invoice',
                type: 'item',
                url: '/'
              },
              {
                id: 'retail_package_invoice',
                title: 'Retail Package Invoice',
                type: 'item',
                url: '/'
              },
              {
                id: 'first_invoice',
                title: 'First Invoice',
                type: 'item',
                url: '/'
              },
              {
                id: 'first_package_invoice',
                title: 'First Package Invoice',
                type: 'item',
                url: '/'
              }
            ]
        },
        {
            id: 'product',
            title: 'Product',
            type: 'collapse',
            icon: 'feather icon-box',
            children: [
              {
                id: 'product_view',
                title: 'Product View',
                type: 'item',
                url: '/'
              }
            ]
        }
      ];
  }