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
    path: '/uz/search',
    component: ComponentCreator('/uz/search', '8b9'),
    exact: true
  },
  {
    path: '/uz/docs',
    component: ComponentCreator('/uz/docs', '6d5'),
    routes: [
      {
        path: '/uz/docs',
        component: ComponentCreator('/uz/docs', 'd56'),
        routes: [
          {
            path: '/uz/docs',
            component: ComponentCreator('/uz/docs', '039'),
            routes: [
              {
                path: '/uz/docs/functionality/finance/multi-currency',
                component: ComponentCreator('/uz/docs/functionality/finance/multi-currency', '722'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/finance/negative-payments',
                component: ComponentCreator('/uz/docs/functionality/finance/negative-payments', '377'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/finance/payment-by-shipment',
                component: ComponentCreator('/uz/docs/functionality/finance/payment-by-shipment', 'bf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/finance/vat',
                component: ComponentCreator('/uz/docs/functionality/finance/vat', '9f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/products/batch',
                component: ComponentCreator('/uz/docs/functionality/products/batch', '5f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/products/dependent-prices',
                component: ComponentCreator('/uz/docs/functionality/products/dependent-prices', '09b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/products/duplicates',
                component: ComponentCreator('/uz/docs/functionality/products/duplicates', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/products/landed-cost',
                component: ComponentCreator('/uz/docs/functionality/products/landed-cost', '80e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/products/packs',
                component: ComponentCreator('/uz/docs/functionality/products/packs', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/products/product-variants',
                component: ComponentCreator('/uz/docs/functionality/products/product-variants', '5d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/products/services',
                component: ComponentCreator('/uz/docs/functionality/products/services', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/sales/contracts',
                component: ComponentCreator('/uz/docs/functionality/sales/contracts', 'db2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/sales/network-outlets',
                component: ComponentCreator('/uz/docs/functionality/sales/network-outlets', 'd7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/sales/organisation-minimal-price',
                component: ComponentCreator('/uz/docs/functionality/sales/organisation-minimal-price', 'dd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/sales/sales-to-employees',
                component: ComponentCreator('/uz/docs/functionality/sales/sales-to-employees', '592'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/sales/search-code',
                component: ComponentCreator('/uz/docs/functionality/sales/search-code', '82f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/cashbox-responsible',
                component: ComponentCreator('/uz/docs/functionality/statuses/cashbox-responsible', 'adb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/orders',
                component: ComponentCreator('/uz/docs/functionality/statuses/orders', '3b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/payments',
                component: ComponentCreator('/uz/docs/functionality/statuses/payments', 'f67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/purchase-orders',
                component: ComponentCreator('/uz/docs/functionality/statuses/purchase-orders', '1c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/purchase-returns',
                component: ComponentCreator('/uz/docs/functionality/statuses/purchase-returns', '428'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/purchases',
                component: ComponentCreator('/uz/docs/functionality/statuses/purchases', 'da1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/returns',
                component: ComponentCreator('/uz/docs/functionality/statuses/returns', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/shipments',
                component: ComponentCreator('/uz/docs/functionality/statuses/shipments', 'c91'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/transfers',
                component: ComponentCreator('/uz/docs/functionality/statuses/transfers', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/statuses/warehouse-responsible',
                component: ComponentCreator('/uz/docs/functionality/statuses/warehouse-responsible', '95d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/warehouse-logistics/multi-warehouse-purchase',
                component: ComponentCreator('/uz/docs/functionality/warehouse-logistics/multi-warehouse-purchase', '3f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/warehouse-logistics/negative-operations',
                component: ComponentCreator('/uz/docs/functionality/warehouse-logistics/negative-operations', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/warehouse-logistics/order-by-warehouse',
                component: ComponentCreator('/uz/docs/functionality/warehouse-logistics/order-by-warehouse', 'b41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/functionality/warehouse-logistics/shipment-by-warehouse',
                component: ComponentCreator('/uz/docs/functionality/warehouse-logistics/shipment-by-warehouse', '538'),
                exact: true,
                sidebar: "tutorialSidebar"
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
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/admin-panel/outlet-settings',
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/outlet-settings', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/admin-panel/product-settings',
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/product-settings', 'e1d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/admin-panel/total-reports',
                component: ComponentCreator('/uz/docs/knowledge/admin-panel/total-reports', '855'),
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
                component: ComponentCreator('/uz/docs/knowledge/finance/balance-adjustments', 'c7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/finance-management',
                component: ComponentCreator('/uz/docs/knowledge/finance/finance-management', '971'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/payments-made',
                component: ComponentCreator('/uz/docs/knowledge/finance/payments-made', '092'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/payments-received',
                component: ComponentCreator('/uz/docs/knowledge/finance/payments-received', '651'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/finance/salary',
                component: ComponentCreator('/uz/docs/knowledge/finance/salary', '15f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/', '0ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/currencies',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/currencies', 'd5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/customer-categories',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/customer-categories', '67b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/payment-methods',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/payment-methods', '39d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/global-settings/product-categories',
                component: ComponentCreator('/uz/docs/knowledge/global-settings/product-categories', 'e42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/cashback',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/cashback', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/closing-period',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/closing-period', '2e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/core-elements',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/core-elements', '932'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/default-values',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/default-values', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/print-templates',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/print-templates', 'ca8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/telegram-employee-bot',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/telegram-employee-bot', '64f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organization-settings/telegram-order-bot',
                component: ComponentCreator('/uz/docs/knowledge/organization-settings/telegram-order-bot', 'eba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/',
                component: ComponentCreator('/uz/docs/knowledge/organizations/', 'fd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/intercompany-payments',
                component: ComponentCreator('/uz/docs/knowledge/organizations/intercompany-payments', '85d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/intercompany-requests',
                component: ComponentCreator('/uz/docs/knowledge/organizations/intercompany-requests', '714'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/organizations/intercompany-shipments',
                component: ComponentCreator('/uz/docs/knowledge/organizations/intercompany-shipments', '938'),
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
                component: ComponentCreator('/uz/docs/knowledge/warehouse/stock-adjustments', '77c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/stock-management',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/stock-management', '425'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/knowledge/warehouse/transfers',
                component: ComponentCreator('/uz/docs/knowledge/warehouse/transfers', '17c'),
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
                path: '/uz/docs/reports/payment/cash-flow',
                component: ComponentCreator('/uz/docs/reports/payment/cash-flow', 'f22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/cashbox-turnover',
                component: ComponentCreator('/uz/docs/reports/payment/cashbox-turnover', '017'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/customer-balances',
                component: ComponentCreator('/uz/docs/reports/payment/customer-balances', 'cce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/debitors',
                component: ComponentCreator('/uz/docs/reports/payment/debitors', '66f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/employee-balances',
                component: ComponentCreator('/uz/docs/reports/payment/employee-balances', '370'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/mutual-settlements',
                component: ComponentCreator('/uz/docs/reports/payment/mutual-settlements', 'f4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/net-working-capital',
                component: ComponentCreator('/uz/docs/reports/payment/net-working-capital', 'e62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/organization-balances',
                component: ComponentCreator('/uz/docs/reports/payment/organization-balances', '668'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/payments-received',
                component: ComponentCreator('/uz/docs/reports/payment/payments-received', 'b00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/pnl',
                component: ComponentCreator('/uz/docs/reports/payment/pnl', 'c44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/payment/supplier-balances',
                component: ComponentCreator('/uz/docs/reports/payment/supplier-balances', 'dc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/purchase/',
                component: ComponentCreator('/uz/docs/reports/purchase/', '3b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/purchase/purchase-orders',
                component: ComponentCreator('/uz/docs/reports/purchase/purchase-orders', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/purchase/purchase-returns',
                component: ComponentCreator('/uz/docs/reports/purchase/purchase-returns', '1f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/abc',
                component: ComponentCreator('/uz/docs/reports/sales/abc', '14c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/cashback-history',
                component: ComponentCreator('/uz/docs/reports/sales/cashback-history', '520'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/customer-purchasing-behaviour',
                component: ComponentCreator('/uz/docs/reports/sales/customer-purchasing-behaviour', 'f21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/daily-customer-report',
                component: ComponentCreator('/uz/docs/reports/sales/daily-customer-report', 'd8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/intercompany-shipments',
                component: ComponentCreator('/uz/docs/reports/sales/intercompany-shipments', '52a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/profitability-by-customer',
                component: ComponentCreator('/uz/docs/reports/sales/profitability-by-customer', 'db3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/profitability-by-employee',
                component: ComponentCreator('/uz/docs/reports/sales/profitability-by-employee', '7cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/profitability-by-product',
                component: ComponentCreator('/uz/docs/reports/sales/profitability-by-product', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/sales-by-products',
                component: ComponentCreator('/uz/docs/reports/sales/sales-by-products', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/sales-orders',
                component: ComponentCreator('/uz/docs/reports/sales/sales-orders', '319'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/sales-returns',
                component: ComponentCreator('/uz/docs/reports/sales/sales-returns', '03d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/sales/shipments',
                component: ComponentCreator('/uz/docs/reports/sales/shipments', '7f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/stock/available-stocks',
                component: ComponentCreator('/uz/docs/reports/stock/available-stocks', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/stock/inventory-movement-report',
                component: ComponentCreator('/uz/docs/reports/stock/inventory-movement-report', '008'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/stock/recommended-stock',
                component: ComponentCreator('/uz/docs/reports/stock/recommended-stock', '890'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/stock/stock-adjustment',
                component: ComponentCreator('/uz/docs/reports/stock/stock-adjustment', '059'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/stock/stock-analysis',
                component: ComponentCreator('/uz/docs/reports/stock/stock-analysis', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/stock/stock-by-warehouse',
                component: ComponentCreator('/uz/docs/reports/stock/stock-by-warehouse', '20c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/uz/docs/reports/stock/transfers',
                component: ComponentCreator('/uz/docs/reports/stock/transfers', 'd83'),
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
