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
        'quick-start/part1-setup',
        'quick-start/part2-products',
        'quick-start/part3-finance',
        'quick-start/part4-operations',
        'quick-start/part5-reports',
      ],
    },
    {
      type: 'category',
      label: '3. База знаний',
      items: [
        'knowledge/knowledge',
    {
      type: 'category',
      label: '3.1. Данные и безопасность',
      items: [
        'knowledge/data/data-security',
        'knowledge/data/data-access',
      ],
    },
    {
      type: 'category',
      label: '3.2. Настройки доступа',
      items: [
        'knowledge/access/access',
        'knowledge/access/access-role',
        'knowledge/access/access-team',
        'knowledge/access/access-workplace',
        'knowledge/access/access-change',

      ],
    },
    {
      type: 'category',
      label: '3.3. Товары и цены',
      items: [           
        'knowledge/products/product-add',
        'knowledge/products/product-management',
        'knowledge/products/product-remove',
        'knowledge/products/pricelist',
        'knowledge/products/barcode',
        'knowledge/products/minimal-price',
      ],
    },
    {
      type: 'category',
      label: '3.4. Клиенты и продажи',
      items: [            
        'knowledge/customers/customer-add',
        'knowledge/customers/customer-management',
        'knowledge/customers/customer-remove',
        'knowledge/customers/shipments',
        'knowledge/customers/orders',
        'knowledge/customers/returns',
      ],
    },
    {
      type: 'category',
      label: '3.5. Поставщики и закупки',
      items: [            
        'knowledge/suppliers/supplier-add',
        'knowledge/suppliers/supplier-management',
        'knowledge/suppliers/supplier-remove',
        'knowledge/suppliers/purchases',
        'knowledge/suppliers/purchase-orders',
        'knowledge/suppliers/purchase-returns',
      ],
    },
    {
      type: 'category',
      label: '3.6. Склад',
      items: [  
        'knowledge/warehouse/stock-management',          
        'knowledge/warehouse/stock-adjustments',
        'knowledge/warehouse/transfers',
      ],
    },
  ],
},
    {
      type: 'category',
      label: '4. FAQ',
      items: [
        'faq/faq',
      ],
    },
    //{
      //type: 'category',
      //label: '5. Партнерам и интеграторам',
      //items: ['partners/partners-guide'],
    //},
    /*{
      type: 'category',
      label: '5. Для авторов',
      items: [
        'editorial-policy',
        'wiki-style',
      ],
    },*/
  ],
};
