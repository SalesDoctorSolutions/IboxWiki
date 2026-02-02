import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

export default function Home() {
  return (
    <Layout
      title="Добро пожаловать в iBox Docs"
      description="Документация по ERP-системе iBox"
    >
     <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}><Translate>Добро пожаловать в iBox Docs!</Translate></h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          <Translate>Здесь собраны инструкции, гайды и документация по продуктам и внутренним процессам iBox.</Translate>
        </p>
        <ul style={{ textAlign: 'left', fontSize: '1.1rem', marginTop: '1.5rem' }}>
          <li><Translate>🌐 веб-версия системы</Translate></li>
          <li><Translate>📱 мобильное приложение POS</Translate></li>
          <li><Translate>💻 POS-терминал для Windows</Translate></li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          <strong><Translate>Хотите начать работу с iBox?</Translate></strong><br />
          <Translate>Свяжитесь с нашей командой — мы подключим и поможем настроиться.</Translate>
        </p>
      </main>
    </Layout>
  );
}
