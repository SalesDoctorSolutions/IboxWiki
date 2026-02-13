import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '7c0'),
    exact: true
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', 'd1a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-mansur-articles',
    component: ComponentCreator('/blog/authors/all-mansur-articles', '931'),
    exact: true
  },
  {
    path: '/blog/release-1-0',
    component: ComponentCreator('/blog/release-1-0', '869'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/обновление',
    component: ComponentCreator('/blog/tags/обновление', 'f6f'),
    exact: true
  },
  {
    path: '/blog/tags/релиз',
    component: ComponentCreator('/blog/tags/релиз', '532'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '122'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '841'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e32'),
            routes: [
              {
                path: '/docs/editorial-policy',
                component: ComponentCreator('/docs/editorial-policy', 'f0b'),
                exact: true
              },
              {
                path: '/docs/faq/',
                component: ComponentCreator('/docs/faq/', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '853'),
                exact: true
              },
              {
                path: '/docs/knowledge/',
                component: ComponentCreator('/docs/knowledge/', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/',
                component: ComponentCreator('/docs/knowledge/access/', 'e15'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-change',
                component: ComponentCreator('/docs/knowledge/access/access-change', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-role',
                component: ComponentCreator('/docs/knowledge/access/access-role', 'eb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-team',
                component: ComponentCreator('/docs/knowledge/access/access-team', '5c4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/access/access-workplace',
                component: ComponentCreator('/docs/knowledge/access/access-workplace', 'c2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/customers/customer-add',
                component: ComponentCreator('/docs/knowledge/customers/customer-add', '2b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/customers/customer-management',
                component: ComponentCreator('/docs/knowledge/customers/customer-management', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/customers/customer-remove',
                component: ComponentCreator('/docs/knowledge/customers/customer-remove', '598'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/customers/orders',
                component: ComponentCreator('/docs/knowledge/customers/orders', 'b85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/customers/returns',
                component: ComponentCreator('/docs/knowledge/customers/returns', 'f30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/customers/shipments',
                component: ComponentCreator('/docs/knowledge/customers/shipments', '464'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/data/data-access',
                component: ComponentCreator('/docs/knowledge/data/data-access', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/data/data-security',
                component: ComponentCreator('/docs/knowledge/data/data-security', '968'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/balance-adjustments',
                component: ComponentCreator('/docs/knowledge/finance/balance-adjustments', '366'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/finance-management',
                component: ComponentCreator('/docs/knowledge/finance/finance-management', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/payments-made',
                component: ComponentCreator('/docs/knowledge/finance/payments-made', '49e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/payments-received',
                component: ComponentCreator('/docs/knowledge/finance/payments-received', '818'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/salary',
                component: ComponentCreator('/docs/knowledge/finance/salary', 'bb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/global-settings/',
                component: ComponentCreator('/docs/knowledge/global-settings/', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/global-settings/currencies',
                component: ComponentCreator('/docs/knowledge/global-settings/currencies', '661'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organization-settings/cashback',
                component: ComponentCreator('/docs/knowledge/organization-settings/cashback', 'ff9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organization-settings/closing-period',
                component: ComponentCreator('/docs/knowledge/organization-settings/closing-period', '4d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organization-settings/core-elements',
                component: ComponentCreator('/docs/knowledge/organization-settings/core-elements', '081'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organization-settings/default-values',
                component: ComponentCreator('/docs/knowledge/organization-settings/default-values', '360'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organization-settings/print-templates',
                component: ComponentCreator('/docs/knowledge/organization-settings/print-templates', '9ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organization-settings/telegram-employee-bot',
                component: ComponentCreator('/docs/knowledge/organization-settings/telegram-employee-bot', '7cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organization-settings/telegram-order-bot',
                component: ComponentCreator('/docs/knowledge/organization-settings/telegram-order-bot', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organizations/',
                component: ComponentCreator('/docs/knowledge/organizations/', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organizations/intercompany-payments',
                component: ComponentCreator('/docs/knowledge/organizations/intercompany-payments', '6f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organizations/intercompany-requests',
                component: ComponentCreator('/docs/knowledge/organizations/intercompany-requests', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/organizations/intercompany-shipments',
                component: ComponentCreator('/docs/knowledge/organizations/intercompany-shipments', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/products/barcode',
                component: ComponentCreator('/docs/knowledge/products/barcode', 'c4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/products/minimal-price',
                component: ComponentCreator('/docs/knowledge/products/minimal-price', '121'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/products/pricelist',
                component: ComponentCreator('/docs/knowledge/products/pricelist', '242'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/products/product-add',
                component: ComponentCreator('/docs/knowledge/products/product-add', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/products/product-management',
                component: ComponentCreator('/docs/knowledge/products/product-management', '03b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/products/product-remove',
                component: ComponentCreator('/docs/knowledge/products/product-remove', 'fb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/suppliers/purchase-orders',
                component: ComponentCreator('/docs/knowledge/suppliers/purchase-orders', '8e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/suppliers/purchase-returns',
                component: ComponentCreator('/docs/knowledge/suppliers/purchase-returns', '11d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/suppliers/purchases',
                component: ComponentCreator('/docs/knowledge/suppliers/purchases', '949'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/suppliers/supplier-add',
                component: ComponentCreator('/docs/knowledge/suppliers/supplier-add', 'b5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/suppliers/supplier-management',
                component: ComponentCreator('/docs/knowledge/suppliers/supplier-management', '20a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/suppliers/supplier-remove',
                component: ComponentCreator('/docs/knowledge/suppliers/supplier-remove', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/warehouse/stock-adjustments',
                component: ComponentCreator('/docs/knowledge/warehouse/stock-adjustments', '2d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/warehouse/stock-management',
                component: ComponentCreator('/docs/knowledge/warehouse/stock-management', '7ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/warehouse/transfers',
                component: ComponentCreator('/docs/knowledge/warehouse/transfers', '9af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/overview/product-overview',
                component: ComponentCreator('/docs/overview/product-overview', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/partners/partners-guide',
                component: ComponentCreator('/docs/partners/partners-guide', '738'),
                exact: true
              },
              {
                path: '/docs/quick-start/',
                component: ComponentCreator('/docs/quick-start/', 'eec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part1-setup',
                component: ComponentCreator('/docs/quick-start/part1-setup', 'dd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part2-products',
                component: ComponentCreator('/docs/quick-start/part2-products', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part3-finance',
                component: ComponentCreator('/docs/quick-start/part3-finance', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part4-operations',
                component: ComponentCreator('/docs/quick-start/part4-operations', '8d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part5-reports',
                component: ComponentCreator('/docs/quick-start/part5-reports', '836'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/wiki-style',
                component: ComponentCreator('/docs/wiki-style', 'e15'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
