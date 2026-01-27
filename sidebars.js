/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '1. Обзор продукта',
      items: ['overview/product-overview'],
    },
    {
      type: 'category',
      label: '2. Быстрый старт',
      items: [
        'quick-start/quick-start',
        'quick-start/part1-registration',
        'quick-start/part2-setup',
        'quick-start/part3-finance',
      ],
    },
    {
  type: 'category',
  label: '3. База знаний',
  items: [
    'knowledge/knowledge',
    {
      type: 'category',
      label: 'Данные и безопасность',
      items: [
        'knowledge/data/data-security',
        'knowledge/data/data-access',
        'knowledge/data/data-owner',
      ],
    },
    {
      type: 'category',
      label: 'Настройки доступа',
      items: [
        'knowledge/access/access',
        'knowledge/access/access-team',
        'knowledge/access/access-role',
        'knowledge/access/access-workplace',
        'knowledge/access/access-change',

      ],
    },
    {
      type: 'category',
      label: 'Товары и цены',
      items: [           
        'knowledge/goods/goods-add',
        'knowledge/goods/goods-organizations',
        'knowledge/goods/purchase-price',
        'knowledge/goods/batch-tracking',
        'knowledge/goods/batch-set',
        'knowledge/goods/pricelist-add',
        'knowledge/goods/pricelist-edit',
        'knowledge/goods/pricelist-delete',
        'knowledge/goods/barcode',
        'knowledge/goods/barcode-print',
        'knowledge/goods/minimum-price',
      ],
    },
    {
      type: 'category',
      label: 'Закупки и поставщики',
      items: [            
        'knowledge/purchase/purchase',
        'knowledge/purchase/supplier-add',
        'knowledge/purchase/purchase-price',
        'knowledge/purchase/order-purchase',
        'knowledge/purchase/order-add',
        'knowledge/purchase/purchase-add',
        'knowledge/purchase/supplier-return',

      ],
    },
    {
      type: 'category',
      label: 'Клиенты и заказы',
      items: [            
        'knowledge/clients/clients-add',
        'knowledge/clients/order-add',
        'knowledge/clients/item-reserve',
        'knowledge/clients/shipment-add',
        'knowledge/clients/routes',
        'knowledge/clients/orders-shipments',
        'knowledge/clients/return',
        'knowledge/clients/telegram',
        'knowledge/clients/order-status',

      ],
    },
    {
      type: 'category',
      label: 'Склад',
      items: [
        'knowledge/warehouse/inventory',
        'knowledge/warehouse/stock-adjustment',
        'knowledge/warehouse/stock-transfer',
        'knowledge/warehouse/new-transfer',

      ],
    },
    {
      type: 'category',
      label: 'Фабрика',
      items: [
        'knowledge/factory/factory',
        'knowledge/factory/bom',
        'knowledge/factory/assembly',
        'knowledge/factory/assembly-manual',
        'knowledge/factory/assembly-proportions',
        'knowledge/factory/assembly-volume',

      ],
    },
    {
      type: 'category',
      label: 'Финансы',
      items: [
        'knowledge/finance/cash-register',
        'knowledge/finance/payment-add',
        'knowledge/finance/salary-payroll',
        'knowledge/finance/balance-adjustment',
        'knowledge/finance/payment-purchase',
      ],
    },
    {
      type: 'category',
      label: 'Отчеты',
      items: [
        'knowledge/reports/dashboard',
        'knowledge/reports/sales-reports',
        'knowledge/reports/goods-profit',
        'knowledge/reports/stock-analysis',
      ],
    },
    {
      type: 'category',
      label: 'CRM',
      items: [            
        'knowledge/crm/crm-overview',
        'knowledge/crm/tasks',
        'knowledge/crm/deals',
        'knowledge/crm/status',

      ],
    },
    {
      type: 'category',
      label: 'Основные настройки в iBOX',
      items: [
        'knowledge/settings/default-settings',
        'knowledge/settings/functional',
        'knowledge/settings/organizations',
      ],
    },
  ],
},
    {
      type: 'category',
      label: '4. FAQ',
      items: [
        'faq/faq',
        'faq/start',
        'faq/access-control',
      ],
    },
    //{
      //type: 'category',
      //label: '5. Партнерам и интеграторам',
      //items: ['partners/partners-guide'],
    //},
    {
      type: 'category',
      label: '5. Для авторов',
      items: [
        'editorial-policy',
        'wiki-style',
      ],
    },
  ],
};
