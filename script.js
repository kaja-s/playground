(() => {
  const STORAGE_KEY = "designerOrder:v1";

  function query(selector, root = document) {
    return root.querySelector(selector);
  }

  function queryAll(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function getOrderIds(container) {
    return queryAll('.designer-card', container).map((el) => el.dataset.id);
  }

  function saveOrder(container) {
    const ids = getOrderIds(container);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (_) {
      // ignore storage failures
    }
  }

  function restoreOrder(container) {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      if (!value) return;
      const savedIds = JSON.parse(value);
      const cardsById = new Map(
        queryAll('.designer-card', container).map((el) => [el.dataset.id, el])
      );
      const fragment = document.createDocumentFragment();
      // Append saved in order if present, else append remaining afterward
      savedIds.forEach((id) => {
        const card = cardsById.get(id);
        if (card) {
          fragment.appendChild(card);
          cardsById.delete(id);
        }
      });
      for (const [, node] of cardsById) {
        fragment.appendChild(node);
      }
      container.appendChild(fragment);
    } catch (err) {
      // ignore malformed
    }
  }

  function getDragAfterElement(container, y) {
    const draggableElements = queryAll('.designer-card:not(.dragging)', container);
    let closest = { offset: Number.NEGATIVE_INFINITY, element: null };
    for (const child of draggableElements) {
      const rect = child.getBoundingClientRect();
      const offset = y - rect.top - rect.height / 2;
      if (offset < 0 && offset > closest.offset) {
        closest = { offset, element: child };
      }
    }
    return closest.element;
  }

  function setupDragAndDrop(container) {
    function onDragStart(ev) {
      const target = ev.currentTarget;
      target.classList.add('dragging');
      target.setAttribute('aria-grabbed', 'true');
      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setData('text/plain', target.dataset.id || '');
    }

    function onDragEnd(ev) {
      const target = ev.currentTarget;
      target.classList.remove('dragging');
      target.setAttribute('aria-grabbed', 'false');
      saveOrder(container);
    }

    for (const card of queryAll('.designer-card', container)) {
      card.addEventListener('dragstart', onDragStart);
      card.addEventListener('dragend', onDragEnd);
      card.addEventListener('keydown', (ev) => {
        // Space/Enter toggle grab for basic keyboard support
        if (ev.code === 'Space' || ev.code === 'Enter') {
          ev.preventDefault();
          card.setAttribute('tabindex', '0');
        }
      });
      card.setAttribute('tabindex', '0');
    }

    container.addEventListener('dragover', (ev) => {
      ev.preventDefault();
      const afterElement = getDragAfterElement(container, ev.clientY);
      const dragging = query('.designer-card.dragging', container);
      if (!dragging) return;
      if (afterElement == null) {
        container.appendChild(dragging);
      } else {
        container.insertBefore(dragging, afterElement);
      }
    });

    container.addEventListener('drop', (ev) => {
      ev.preventDefault();
      saveOrder(container);
    });
  }

  function setupResetButton(container) {
    const btn = query('.reset-order');
    if (!btn) return;
    btn.addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
      // Simple reset: sort by data-id default order in DOM by recreating DOM from initial markup order
      const cards = queryAll('.designer-card', container);
      cards.sort((a, b) => (a.dataset.id || '').localeCompare(b.dataset.id || ''));
      const frag = document.createDocumentFragment();
      for (const c of cards) frag.appendChild(c);
      container.appendChild(frag);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    const grid = query('.designers-grid');
    if (!grid) return;
    restoreOrder(grid);
    setupDragAndDrop(grid);
    setupResetButton(grid);
  });
})();

