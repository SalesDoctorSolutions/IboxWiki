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
    component: ComponentCreator('/blog', 'd08'),
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
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '495'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/blog/release-3-4',
    component: ComponentCreator('/blog/release-3-4', 'b0e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/обновление',
    component: ComponentCreator('/blog/tags/обновление', '9d7'),
    exact: true
  },
  {
    path: '/blog/tags/релиз',
    component: ComponentCreator('/blog/tags/релиз', 'e32'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f2a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3a3'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '6a8'),
            routes: [
              {
                path: '/docs/editorial-policy',
                component: ComponentCreator('/docs/editorial-policy', 'd77'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faq/',
                component: ComponentCreator('/docs/faq/', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faq/access-control',
                component: ComponentCreator('/docs/faq/access-control', '305'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faq/start',
                component: ComponentCreator('/docs/faq/start', '2d3'),
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
                path: '/docs/knowledge/clients/clients-add',
                component: ComponentCreator('/docs/knowledge/clients/clients-add', '739'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/item-reserve',
                component: ComponentCreator('/docs/knowledge/clients/item-reserve', '430'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/order-add',
                component: ComponentCreator('/docs/knowledge/clients/order-add', '673'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/order-status',
                component: ComponentCreator('/docs/knowledge/clients/order-status', 'cea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/orders-shipments',
                component: ComponentCreator('/docs/knowledge/clients/orders-shipments', '121'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/return',
                component: ComponentCreator('/docs/knowledge/clients/return', '71b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/routes',
                component: ComponentCreator('/docs/knowledge/clients/routes', '06a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/shipment-add',
                component: ComponentCreator('/docs/knowledge/clients/shipment-add', 'c94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/clients/telegram',
                component: ComponentCreator('/docs/knowledge/clients/telegram', '888'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/crm/crm-overview',
                component: ComponentCreator('/docs/knowledge/crm/crm-overview', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/crm/deals',
                component: ComponentCreator('/docs/knowledge/crm/deals', 'b3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/crm/status',
                component: ComponentCreator('/docs/knowledge/crm/status', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/crm/tasks',
                component: ComponentCreator('/docs/knowledge/crm/tasks', '5cd'),
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
                path: '/docs/knowledge/data/data-owner',
                component: ComponentCreator('/docs/knowledge/data/data-owner', 'f40'),
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
                path: '/docs/knowledge/factory/',
                component: ComponentCreator('/docs/knowledge/factory/', '765'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/factory/assembly',
                component: ComponentCreator('/docs/knowledge/factory/assembly', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/factory/assembly-manual',
                component: ComponentCreator('/docs/knowledge/factory/assembly-manual', 'b47'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/factory/assembly-proportions',
                component: ComponentCreator('/docs/knowledge/factory/assembly-proportions', '730'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/factory/assembly-volume',
                component: ComponentCreator('/docs/knowledge/factory/assembly-volume', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/factory/bom',
                component: ComponentCreator('/docs/knowledge/factory/bom', 'd2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/balance-adjustment',
                component: ComponentCreator('/docs/knowledge/finance/balance-adjustment', 'd79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/cash-register',
                component: ComponentCreator('/docs/knowledge/finance/cash-register', 'a81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/payment-add',
                component: ComponentCreator('/docs/knowledge/finance/payment-add', 'c59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/payment-purchase',
                component: ComponentCreator('/docs/knowledge/finance/payment-purchase', 'ac5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/finance/salary-payroll',
                component: ComponentCreator('/docs/knowledge/finance/salary-payroll', 'bdf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/barcode',
                component: ComponentCreator('/docs/knowledge/goods/barcode', '244'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/barcode-print',
                component: ComponentCreator('/docs/knowledge/goods/barcode-print', 'e60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/batch-set',
                component: ComponentCreator('/docs/knowledge/goods/batch-set', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/batch-tracking',
                component: ComponentCreator('/docs/knowledge/goods/batch-tracking', '052'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/goods-add',
                component: ComponentCreator('/docs/knowledge/goods/goods-add', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/goods-organizations',
                component: ComponentCreator('/docs/knowledge/goods/goods-organizations', '328'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/minimum-price',
                component: ComponentCreator('/docs/knowledge/goods/minimum-price', '1eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/pricelist-add',
                component: ComponentCreator('/docs/knowledge/goods/pricelist-add', '2a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/pricelist-delete',
                component: ComponentCreator('/docs/knowledge/goods/pricelist-delete', '8ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/pricelist-edit',
                component: ComponentCreator('/docs/knowledge/goods/pricelist-edit', '1d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/goods/purchase-price',
                component: ComponentCreator('/docs/knowledge/goods/purchase-price', 'dd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/',
                component: ComponentCreator('/docs/knowledge/purchase/', '38d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/order-add',
                component: ComponentCreator('/docs/knowledge/purchase/order-add', '8bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/order-purchase',
                component: ComponentCreator('/docs/knowledge/purchase/order-purchase', 'b8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/purchase-add',
                component: ComponentCreator('/docs/knowledge/purchase/purchase-add', '28e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/purchase-price',
                component: ComponentCreator('/docs/knowledge/purchase/purchase-price', '7c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/supplier-add',
                component: ComponentCreator('/docs/knowledge/purchase/supplier-add', 'a12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/purchase/supplier-return',
                component: ComponentCreator('/docs/knowledge/purchase/supplier-return', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/reports/dashboard',
                component: ComponentCreator('/docs/knowledge/reports/dashboard', '67b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/reports/goods-profit',
                component: ComponentCreator('/docs/knowledge/reports/goods-profit', '447'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/reports/sales-reports',
                component: ComponentCreator('/docs/knowledge/reports/sales-reports', 'b7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/reports/stock-analysis',
                component: ComponentCreator('/docs/knowledge/reports/stock-analysis', '35c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/settings/default-settings',
                component: ComponentCreator('/docs/knowledge/settings/default-settings', '345'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/settings/functional',
                component: ComponentCreator('/docs/knowledge/settings/functional', '3c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/settings/organizations',
                component: ComponentCreator('/docs/knowledge/settings/organizations', 'd24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/warehouse/inventory',
                component: ComponentCreator('/docs/knowledge/warehouse/inventory', '626'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/warehouse/new-transfer',
                component: ComponentCreator('/docs/knowledge/warehouse/new-transfer', '937'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/warehouse/stock-adjustment',
                component: ComponentCreator('/docs/knowledge/warehouse/stock-adjustment', '0fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge/warehouse/stock-transfer',
                component: ComponentCreator('/docs/knowledge/warehouse/stock-transfer', 'ddb'),
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
                path: '/docs/quick-start/part1-registration',
                component: ComponentCreator('/docs/quick-start/part1-registration', 'b35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/quick-start/part2-setup',
                component: ComponentCreator('/docs/quick-start/part2-setup', '380'),
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
                path: '/docs/wiki-style',
                component: ComponentCreator('/docs/wiki-style', '045'),
                exact: true,
                sidebar: "tutorialSidebar"
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
