import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/uz/blog',
    component: ComponentCreator('/uz/blog', 'dd3'),
    exact: true
  },
  {
    path: '/uz/blog/',
    component: ComponentCreator('/uz/blog/', '28c'),
    exact: true
  },
  {
    path: '/uz/blog/archive',
    component: ComponentCreator('/uz/blog/archive', 'd95'),
    exact: true
  },
  {
    path: '/uz/blog/authors',
    component: ComponentCreator('/uz/blog/authors', 'cb9'),
    exact: true
  },
  {
    path: '/uz/blog/authors/all-mansur-articles',
    component: ComponentCreator('/uz/blog/authors/all-mansur-articles', 'a31'),
    exact: true
  },
  {
    path: '/uz/blog/release-1-0',
    component: ComponentCreator('/uz/blog/release-1-0', '90b'),
    exact: true
  },
  {
    path: '/uz/blog/tags',
    component: ComponentCreator('/uz/blog/tags', '035'),
    exact: true
  },
  {
    path: '/uz/blog/tags/обновление',
    component: ComponentCreator('/uz/blog/tags/обновление', '4d0'),
    exact: true
  },
  {
    path: '/uz/blog/tags/релиз',
    component: ComponentCreator('/uz/blog/tags/релиз', 'c33'),
    exact: true
  },
  {
    path: '/uz/markdown-page',
    component: ComponentCreator('/uz/markdown-page', 'a50'),
    exact: true
  },
  {
    path: '/uz/docs',
    component: ComponentCreator('/uz/docs', '519'),
    routes: [
      {
        path: '/uz/docs',
        component: ComponentCreator('/uz/docs', '5cf'),
        routes: [
          {
            path: '/uz/docs',
            component: ComponentCreator('/uz/docs', '5bf'),
            routes: [
              {
                path: '/uz/docs/editorial-policy',
                component: ComponentCreator('/uz/docs/editorial-policy', '71f'),
                exact: true
              },
              {
                path: '/uz/docs/faq/',
                component: ComponentCreator('/uz/docs/faq/', '0e2'),
                exact: true
              },
              {
                path: '/uz/docs/intro',
                component: ComponentCreator('/uz/docs/intro', '381'),
                exact: true
              },
              {
                path: '/uz/docs/knowledge/',
                component: ComponentCreator('/uz/docs/knowledge/', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/access/',
                component: ComponentCreator('/uz/docs/knowledge/access/', '7ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/access/access-change',
                component: ComponentCreator('/uz/docs/knowledge/access/access-change', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/access/access-role',
                component: ComponentCreator('/uz/docs/knowledge/access/access-role', '2d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/access/access-team',
                component: ComponentCreator('/uz/docs/knowledge/access/access-team', 'df9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/access/access-workplace',
                component: ComponentCreator('/uz/docs/knowledge/access/access-workplace', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/admin-panel/',
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/', 'd14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/admin-panel/outlet-settings',
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/outlet-settings', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/admin-panel/product-settings',
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/product-settings', '43f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/admin-panel/total-reports',
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/total-reports', 'edf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/customers/customer-add',
                component: ComponentCreator('/uz/docs/knowledge/customers/customer-add', 'd7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/customers/customer-management',
                component: ComponentCreator('/uz/docs/knowledge/customers/customer-management', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/customers/customer-remove',
                component: ComponentCreator('/uz/docs/knowledge/customers/customer-remove', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/customers/orders',
                component: ComponentCreator('/uz/docs/knowledge/customers/orders', 'd7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/customers/returns',
                component: ComponentCreator('/uz/docs/knowledge/customers/returns', '026'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/customers/shipments',
                component: ComponentCreator('/uz/docs/knowledge/customers/shipments', 'e1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/data/data-access',
                component: ComponentCreator('/uz/docs/knowledge/data/data-access', 'e3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/data/data-security',
                component: ComponentCreator('/uz/docs/knowledge/data/data-security', '34f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/balance-adjustments',
                component: ComponentCreator('/uz/docs/knowledge/finance/balance-adjustments', '5cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/finance-management',
                component: ComponentCreator('/uz/docs/knowledge/finance/finance-management', '29c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/payments-made',
                component: ComponentCreator('/uz/docs/knowledge/finance/payments-made', '59b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/payments-received',
                component: ComponentCreator('/uz/docs/knowledge/finance/payments-received', '645'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/salary',
                component: ComponentCreator('/uz/docs/knowledge/finance/salary', 'ee5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/currencies',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/currencies', '502'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/customer-categories',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/customer-categories', '21a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/payment-methods',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/payment-methods', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/product-categories',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/product-categories', 'fd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/cashback',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/cashback', 'd16'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/closing-period',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/closing-period', 'd14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/core-elements',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/core-elements', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/default-values',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/default-values', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/print-templates',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/print-templates', 'ef2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/telegram-employee-bot',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/telegram-employee-bot', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/telegram-order-bot',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/telegram-order-bot', '50d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/',
                component: ComponentCreator('/uz/docs/knowledge/organizations/', '60e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/intercompany-payments',
                component: ComponentCreator('/uz/docs/knowledge/organizations/intercompany-payments', 'f23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/intercompany-requests',
                component: ComponentCreator('/uz/docs/knowledge/organizations/intercompany-requests', 'd78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/intercompany-shipments',
                component: ComponentCreator('/uz/docs/knowledge/organizations/intercompany-shipments', '264'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/products/barcode',
                component: ComponentCreator('/uz/docs/knowledge/products/barcode', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/products/minimal-price',
                component: ComponentCreator('/uz/docs/knowledge/products/minimal-price', 'b12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/products/pricelist',
                component: ComponentCreator('/uz/docs/knowledge/products/pricelist', '8e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/products/product-add',
                component: ComponentCreator('/uz/docs/knowledge/products/product-add', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/products/product-management',
                component: ComponentCreator('/uz/docs/knowledge/products/product-management', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/products/product-remove',
                component: ComponentCreator('/uz/docs/knowledge/products/product-remove', '81f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/suppliers/purchase-orders',
                component: ComponentCreator('/uz/docs/knowledge/suppliers/purchase-orders', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/suppliers/purchase-returns',
                component: ComponentCreator('/uz/docs/knowledge/suppliers/purchase-returns', '344'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/suppliers/purchases',
                component: ComponentCreator('/uz/docs/knowledge/suppliers/purchases', 'bdb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/suppliers/supplier-add',
                component: ComponentCreator('/uz/docs/knowledge/suppliers/supplier-add', 'fb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/suppliers/supplier-management',
                component: ComponentCreator('/uz/docs/knowledge/suppliers/supplier-management', '8e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/suppliers/supplier-remove',
                component: ComponentCreator('/uz/docs/knowledge/suppliers/supplier-remove', 'd72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/stock-adjustments',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/stock-adjustments', '6e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/stock-management',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/stock-management', '915'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/transfers',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/transfers', '2b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/overview/product-overview',
                component: ComponentCreator('/uz/docs/overview/product-overview', 'ea0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/partners/partners-guide',
                component: ComponentCreator('/uz/docs/partners/partners-guide', '545'),
                exact: true
              },
              {
                path: '/uz/docs/quick-start/',
                component: ComponentCreator('/uz/docs/quick-start/', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/quick-start/part1-setup',
                component: ComponentCreator('/uz/docs/quick-start/part1-setup', '820'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/quick-start/part2-products',
                component: ComponentCreator('/uz/docs/quick-start/part2-products', '63c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/quick-start/part3-finance',
                component: ComponentCreator('/uz/docs/quick-start/part3-finance', '942'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/quick-start/part4-operations',
                component: ComponentCreator('/uz/docs/quick-start/part4-operations', '46b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/quick-start/part5-reports',
                component: ComponentCreator('/uz/docs/quick-start/part5-reports', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/wiki-style',
                component: ComponentCreator('/uz/docs/wiki-style', '867'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/uz/',
    component: ComponentCreator('/uz/', 'd50'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
