import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Добро пожаловать в iBox Docs"
      description="Документация по ERP-системе iBox"
    >
     <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Добро пожаловать в iBox Docs!</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
          Здесь собраны инструкции, гайды и документация по продуктам и внутренним процессам iBox.
        </p>
        <ul style={{ textAlign: 'left', fontSize: '1.1rem', marginTop: '1.5rem' }}>
          <li>🌐 веб-версия системы</li>
          <li>📱 мобильное приложение POS</li>
          <li>💻 POS-терминал для Windows</li>
        </ul>
        <p style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
          <strong>Хотите начать работу с iBox?</strong><br />
          Свяжитесь с нашей командой — мы подключим и поможем настроиться.
        </p>
      </main>
    </Layout>
  );
}
