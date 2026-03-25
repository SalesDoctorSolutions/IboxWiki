import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    const sidebar = document.querySelector('.menu');
    if (!sidebar) return;

    const handleClick = (e) => {
      const trigger = e.target.closest('.menu__link--sublist');
      if (!trigger) return;

      const currentItem = trigger.parentElement;

      // Mark this folder as "just toggled"
      currentItem.setAttribute('data-reset', 'true');
    };

    sidebar.addEventListener('click', handleClick);

    return () => {
      sidebar.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const sidebar = document.querySelector('.menu');
    if (!sidebar) return;

    const items = sidebar.querySelectorAll('[data-reset="true"]');

    items.forEach((item) => {
      // collapse all nested children
      const nested = item.querySelectorAll('.menu__list-item');

      nested.forEach((child) => {
        child.classList.remove('menu__list-item--expanded');
        child.classList.add('menu__list-item--collapsed');
      });

      // remove marker
      item.removeAttribute('data-reset');
    });
  }, [location]);

  return <>{children}</>;
}