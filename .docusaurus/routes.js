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
    component: ComponentCreator('/uz/docs', '509'),
    routes: [
      {
        path: '/uz/docs',
        component: ComponentCreator('/uz/docs', '84f'),
        routes: [
          {
            path: '/uz/docs',
            component: ComponentCreator('/uz/docs', '6d1'),
            routes: [
              {
                path: '/uz/docs/editorial-policy',
                component: ComponentCreator('/uz/docs/editorial-policy', 'ea1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/faq/',
                component: ComponentCreator('/uz/docs/faq/', 'be8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/faq/access-control',
                component: ComponentCreator('/uz/docs/faq/access-control', '88d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/faq/start',
                component: ComponentCreator('/uz/docs/faq/start', '771'),
                exact: true,
                sidebar: "tutorialSidebar"
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
                path: '/uz/docs/knowledge/clients/clients-add',
                component: ComponentCreator('/uz/docs/knowledge/clients/clients-add', 'd98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/item-reserve',
                component: ComponentCreator('/uz/docs/knowledge/clients/item-reserve', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/order-add',
                component: ComponentCreator('/uz/docs/knowledge/clients/order-add', 'eec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/order-status',
                component: ComponentCreator('/uz/docs/knowledge/clients/order-status', 'ab2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/orders-shipments',
                component: ComponentCreator('/uz/docs/knowledge/clients/orders-shipments', '54f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/return',
                component: ComponentCreator('/uz/docs/knowledge/clients/return', 'b49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/routes',
                component: ComponentCreator('/uz/docs/knowledge/clients/routes', '036'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/shipment-add',
                component: ComponentCreator('/uz/docs/knowledge/clients/shipment-add', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/clients/telegram',
                component: ComponentCreator('/uz/docs/knowledge/clients/telegram', 'dbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/crm/crm-overview',
                component: ComponentCreator('/uz/docs/knowledge/crm/crm-overview', '2cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/crm/deals',
                component: ComponentCreator('/uz/docs/knowledge/crm/deals', '2e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/crm/status',
                component: ComponentCreator('/uz/docs/knowledge/crm/status', 'd27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/crm/tasks',
                component: ComponentCreator('/uz/docs/knowledge/crm/tasks', '293'),
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
                path: '/uz/docs/knowledge/data/data-owner',
                component: ComponentCreator('/uz/docs/knowledge/data/data-owner', '91b'),
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
                path: '/uz/docs/knowledge/factory/',
                component: ComponentCreator('/uz/docs/knowledge/factory/', '541'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/factory/assembly',
                component: ComponentCreator('/uz/docs/knowledge/factory/assembly', '90b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/factory/assembly-manual',
                component: ComponentCreator('/uz/docs/knowledge/factory/assembly-manual', 'fd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/factory/assembly-proportions',
                component: ComponentCreator('/uz/docs/knowledge/factory/assembly-proportions', '9ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/factory/assembly-volume',
                component: ComponentCreator('/uz/docs/knowledge/factory/assembly-volume', '813'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/factory/bom',
                component: ComponentCreator('/uz/docs/knowledge/factory/bom', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/balance-adjustment',
                component: ComponentCreator('/uz/docs/knowledge/finance/balance-adjustment', 'da2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/cash-register',
                component: ComponentCreator('/uz/docs/knowledge/finance/cash-register', '219'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/payment-add',
                component: ComponentCreator('/uz/docs/knowledge/finance/payment-add', '280'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/payment-purchase',
                component: ComponentCreator('/uz/docs/knowledge/finance/payment-purchase', '12d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/salary-payroll',
                component: ComponentCreator('/uz/docs/knowledge/finance/salary-payroll', 'c58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/barcode',
                component: ComponentCreator('/uz/docs/knowledge/goods/barcode', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/barcode-print',
                component: ComponentCreator('/uz/docs/knowledge/goods/barcode-print', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/batch-set',
                component: ComponentCreator('/uz/docs/knowledge/goods/batch-set', '2ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/batch-tracking',
                component: ComponentCreator('/uz/docs/knowledge/goods/batch-tracking', '25c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/goods-add',
                component: ComponentCreator('/uz/docs/knowledge/goods/goods-add', 'fbc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/goods-organizations',
                component: ComponentCreator('/uz/docs/knowledge/goods/goods-organizations', '20a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/minimum-price',
                component: ComponentCreator('/uz/docs/knowledge/goods/minimum-price', '78e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/pricelist-add',
                component: ComponentCreator('/uz/docs/knowledge/goods/pricelist-add', '6da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/pricelist-delete',
                component: ComponentCreator('/uz/docs/knowledge/goods/pricelist-delete', '1de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/pricelist-edit',
                component: ComponentCreator('/uz/docs/knowledge/goods/pricelist-edit', 'eba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/goods/purchase-price',
                component: ComponentCreator('/uz/docs/knowledge/goods/purchase-price', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/purchase/',
                component: ComponentCreator('/uz/docs/knowledge/purchase/', '2b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/purchase/order-add',
                component: ComponentCreator('/uz/docs/knowledge/purchase/order-add', 'dc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/purchase/order-purchase',
                component: ComponentCreator('/uz/docs/knowledge/purchase/order-purchase', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/purchase/purchase-add',
                component: ComponentCreator('/uz/docs/knowledge/purchase/purchase-add', '787'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/purchase/purchase-price',
                component: ComponentCreator('/uz/docs/knowledge/purchase/purchase-price', '358'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/purchase/supplier-add',
                component: ComponentCreator('/uz/docs/knowledge/purchase/supplier-add', '03b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/purchase/supplier-return',
                component: ComponentCreator('/uz/docs/knowledge/purchase/supplier-return', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/reports/dashboard',
                component: ComponentCreator('/uz/docs/knowledge/reports/dashboard', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/reports/goods-profit',
                component: ComponentCreator('/uz/docs/knowledge/reports/goods-profit', 'a31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/reports/sales-reports',
                component: ComponentCreator('/uz/docs/knowledge/reports/sales-reports', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/reports/stock-analysis',
                component: ComponentCreator('/uz/docs/knowledge/reports/stock-analysis', '410'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/settings/default-settings',
                component: ComponentCreator('/uz/docs/knowledge/settings/default-settings', '239'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/settings/functional',
                component: ComponentCreator('/uz/docs/knowledge/settings/functional', '2b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/settings/organizations',
                component: ComponentCreator('/uz/docs/knowledge/settings/organizations', 'd76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/inventory',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/inventory', '40e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/new-transfer',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/new-transfer', '56f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/stock-adjustment',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/stock-adjustment', 'a12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/stock-transfer',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/stock-transfer', 'ec1'),
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
                path: '/uz/docs/quick-start/part1-registration',
                component: ComponentCreator('/uz/docs/quick-start/part1-registration', '827'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/quick-start/part2-setup',
                component: ComponentCreator('/uz/docs/quick-start/part2-setup', '874'),
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
                component: ComponentCreator('/uz/docs/quick-start/part4-operations', '4ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/quick-start/part5-reports',
                component: ComponentCreator('/uz/docs/quick-start/part5-reports', '868'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/wiki-style',
                component: ComponentCreator('/uz/docs/wiki-style', '9dc'),
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
    path: '/uz/',
    component: ComponentCreator('/uz/', 'd50'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
