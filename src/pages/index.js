import React from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'iBox Docs',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Документация по ERP-системе iBox',
      })}
    >
      <header className="heroBanner">
        <div className="container">
          <h1 className="heroTitle">
            <Translate id="homepage.title">
              iBox — система для автоматизации бизнеса
            </Translate>
          </h1>

          <p className="heroSubtitle">
            <Translate id="homepage.subtitle">
              Полная документация по работе с ERP, POS и мобильными решениями iBox
            </Translate>
          </p>

          <div className="heroButtons">
            <Link
              className="button button--lg heroButton"
              to="/docs/overview/product-overview"
            >
              <Translate id="homepage.button.start">
                Начать
              </Translate>
            </Link>
          </div>
        </div>
      </header>

      <main className="featuresSection">
        <div className="container">
          <div className="featuresGrid">
            <div className="featureCard">
              <h3><Translate id="homepage.feature.web">🌐 Веб-система</Translate></h3>
              <p>
                <Translate id="homepage.feature.web.desc">
                  Управление продажами, аналитика и контроль бизнеса в одном месте
                </Translate>
              </p>
            </div>

            <div className="featureCard">
              <h3><Translate id="homepage.feature.mobile">📱 Мобильный POS</Translate></h3>
              <p>
                <Translate id="homepage.feature.mobile.desc">
                  Принимайте оплату и управляйте продажами прямо со смартфона
                </Translate>
              </p>
            </div>

            <div className="featureCard">
              <h3><Translate id="homepage.feature.desktop">💻 POS для Windows</Translate></h3>
              <p>
                <Translate id="homepage.feature.desktop.desc">
                  Надежное решение для касс и торговых точек с высокой нагрузкой
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}