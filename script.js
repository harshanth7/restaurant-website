/**
 * THE SPICE GARDEN - LUXURY INDIAN FINE DINING
 * Interactive Master Script (script.js)
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Menu Data Collection
     ========================================================================== */
  const menuData = [
    // Starters & Chaats
    {
      id: 'm-1',
      title: 'Truffle Samosa Chaat',
      category: 'starters',
      price: 345,
      isVeg: true,
      isChef: true,
      spicyLevel: 1,
      portion: '3 pcs',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
      description: 'Artisan spiced potato & pea pastry crushed and topped with Greek yogurt, mint-coriander emulsion, tamarind drizzle, and black truffle oil.'
    },
    {
      id: 'm-2',
      title: 'Dahi Puri Cloud Shots',
      category: 'starters',
      price: 295,
      isVeg: true,
      isChef: false,
      spicyLevel: 1,
      portion: '6 shots',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
      description: 'Crispy hollow semolina spheres filled with spiced sprouts, chilled sweet yogurt foam, ruby pomegranates, and nylon sev crisp.'
    },
    {
      id: 'm-3',
      title: 'Amritsari Crispy Fish Fry',
      category: 'starters',
      price: 545,
      isVeg: false,
      isChef: false,
      spicyLevel: 2,
      portion: 'Platter',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80',
      description: 'Golden fried sea bass fillets crusted in spiced gram flour, crushed ajwain seeds, and yellow chili, served with radish lachha and mint relish.'
    },
    {
      id: 'm-4',
      title: 'Galouti Kebab on Sheermal',
      category: 'starters',
      price: 625,
      isVeg: false,
      isChef: true,
      spicyLevel: 2,
      portion: '4 medallions',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
      description: 'Melt-in-the-mouth smoked minced lamb medallions infused with 32 secret Lucknowi spices, served atop saffron mini sheermal breads.'
    },

    // Tandoor & Grills
    {
      id: 'm-5',
      title: 'Charred Tandoori Chicken',
      category: 'tandoor',
      price: 595,
      isVeg: false,
      isChef: true,
      spicyLevel: 2,
      portion: 'Half / Full',
      image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=700&q=80',
      description: 'Spring chicken steeped in Kashmiri red chili, mustard oil, and hung curd marinade, roasted over glowing charcoal in clay tandoor.'
    },
    {
      id: 'm-6',
      title: 'Paneer Tikka Angara',
      category: 'tandoor',
      price: 475,
      isVeg: true,
      isChef: false,
      spicyLevel: 2,
      portion: 'Skewer',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80',
      description: 'Prime cottage cheese cubes infused with charred bell peppers, onion petals, and carom yogurt marinade, kissed with live coal smoke.'
    },
    {
      id: 'm-7',
      title: 'Tandoori Tiger Prawns',
      category: 'tandoor',
      price: 895,
      isVeg: false,
      isChef: true,
      spicyLevel: 2,
      portion: '6 Jumbo Prawns',
      image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=700&q=80',
      description: 'Jumbo coastal tiger prawns marinated in yellow mustard paste, lemon reduction, and crushed coriander seeds, char-grilled to juicy tenderness.'
    },
    {
      id: 'm-8',
      title: 'Tandoori Malai Broccoli',
      category: 'tandoor',
      price: 445,
      isVeg: true,
      isChef: false,
      spicyLevel: 1,
      portion: 'Sharable',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
      description: 'Crisp broccoli florets steeped in cream cheese, green cardamom dust, and mace marinade, lightly glazed over clay embers.'
    },

    // Royal Curries
    {
      id: 'm-9',
      title: 'Smoked Butter Chicken Royale',
      category: 'curries',
      price: 595,
      isVeg: false,
      isChef: true,
      spicyLevel: 1,
      portion: 'Bowl with Cream',
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=700&q=80',
      description: 'Pulled clay-oven tandoori chicken simmered in a velvety sauce of sun-ripened vine tomatoes, cashew cream, butter, and fragrant kasuri methi.'
    },
    {
      id: 'm-10',
      title: 'Dal Makhani Bukhara Style',
      category: 'curries',
      price: 445,
      isVeg: true,
      isChef: true,
      spicyLevel: 1,
      portion: 'Brass Handi',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
      description: 'Whole black lentils and kidney beans simmered continuously for 24 hours on slow charcoal embers, finished with farm-churned white butter.'
    },
    {
      id: 'm-11',
      title: 'Nalli Rogan Josh Kashmiri',
      category: 'curries',
      price: 745,
      isVeg: false,
      isChef: true,
      spicyLevel: 3,
      portion: 'Braised Shank',
      image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=700&q=80',
      description: 'Tender baby lamb shanks braised in aromatic Kashmiri chili, dried ginger, fennel seed extract, and whole ratan jot bark.'
    },
    {
      id: 'm-12',
      title: 'Paneer Makhani Khurchan',
      category: 'curries',
      price: 495,
      isVeg: true,
      isChef: false,
      spicyLevel: 1,
      portion: 'Handi',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
      description: 'Silken paneer batons tossed on iron griddle with roasted bell peppers, ginger juliennes, and a rich spiced tomato-fenugreek sauce.'
    },

    // Biryani & Breads
    {
      id: 'm-13',
      title: 'Royal Awadhi Dum Biryani',
      category: 'biryani',
      price: 645,
      isVeg: false,
      isChef: true,
      spicyLevel: 2,
      portion: 'Pot with Raita',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
      description: 'Aged long-grain basmati layered with tender spiced lamb, saffron strands, rose water, and caramel onions, sealed with dough in clay handi.'
    },
    {
      id: 'm-14',
      title: 'Subz Nizami Dum Biryani',
      category: 'biryani',
      price: 495,
      isVeg: true,
      isChef: false,
      spicyLevel: 1,
      portion: 'Pot with Raita',
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=700&q=80',
      description: 'Garden vegetables, baby potatoes, and paneer cubes cooked in dum with mint, brown onion crisps, and saffron-infused basmati.'
    },
    {
      id: 'm-15',
      title: 'Garlic & Truffle Butter Naan',
      category: 'biryani',
      price: 195,
      isVeg: true,
      isChef: false,
      spicyLevel: 0,
      portion: '2 pcs',
      image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=700&q=80',
      description: 'Hand-stretched leavened bread slapped against fiery tandoor walls, brushed with roasted garlic butter, fresh cilantro, and Italian truffle glaze.'
    },

    // Desserts
    {
      id: 'm-16',
      title: 'Shahi Tukda with Gold Leaf',
      category: 'desserts',
      price: 295,
      isVeg: true,
      isChef: true,
      spicyLevel: 0,
      portion: '2 slices',
      image: 'https://images.unsplash.com/photo-1605197161470-717bf6286762?auto=format&fit=crop&w=700&q=80',
      description: 'Crisp ghee-fried milk bread soaked in saffron-cardamom syrup, crowned with condensed rabri reduction, slivered pistachios, and pure edible 24k gold leaf.'
    },
    {
      id: 'm-17',
      title: 'Saffron Pistachio Rasmalai',
      category: 'desserts',
      price: 275,
      isVeg: true,
      isChef: false,
      spicyLevel: 0,
      portion: '3 discs',
      image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80',
      description: 'Delicate poached cottage cheese patties steeped in cardamom-scented saffron milk nectar, chilled and garnished with toasted almonds.'
    },

    // Beverages & Lassi
    {
      id: 'm-18',
      title: 'Royal Mango Saffron Lassi',
      category: 'drinks',
      price: 245,
      isVeg: true,
      isChef: false,
      spicyLevel: 0,
      portion: 'Tall Glass',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=700&q=80',
      description: 'Creamy artisanal yogurt blended with Alphonso mango pulp, green cardamom dust, and a crown of saffron threads.'
    },
    {
      id: 'm-19',
      title: 'Spiced Indian Masala Chai',
      category: 'drinks',
      price: 165,
      isVeg: true,
      isChef: false,
      spicyLevel: 0,
      portion: 'Clay Kulhad',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80',
      description: 'Assam single-estate black tea leaves slow-brewed with buffalo milk, fresh crushed ginger, green cardamom pods, cinnamon, and cloves.'
    }
  ];

  /* ==========================================================================
     2. Feast Bag (Shopping Cart) State & Management
     ========================================================================== */
  let cart = [];

  const bagCountEl = document.getElementById('bagCount');
  const bagItemsBadgeEl = document.getElementById('bagItemsBadge');
  const bagItemsListEl = document.getElementById('bagItemsList');
  const bagEmptyViewEl = document.getElementById('bagEmptyView');
  const bagSubtotalEl = document.getElementById('bagSubtotal');
  const bagTaxEl = document.getElementById('bagTax');
  const bagTotalEl = document.getElementById('bagTotal');
  const bagDrawerEl = document.getElementById('bagDrawer');
  const bagBackdropEl = document.getElementById('bagBackdrop');
  const openBagBtn = document.getElementById('openBagBtn');
  const closeBagBtn = document.getElementById('closeBagBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  function openBagDrawer() {
    bagDrawerEl.classList.add('open');
    bagBackdropEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeBagDrawer() {
    bagDrawerEl.classList.remove('open');
    bagBackdropEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (openBagBtn) openBagBtn.addEventListener('click', openBagDrawer);
  if (closeBagBtn) closeBagBtn.addEventListener('click', closeBagDrawer);
  if (bagBackdropEl) bagBackdropEl.addEventListener('click', closeBagDrawer);

  function addToCart(item) {
    const existingIndex = cart.findIndex(c => c.id === item.id);
    if (existingIndex > -1) {
      cart[existingIndex].qty += 1;
    } else {
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        qty: 1
      });
    }

    updateCartUI();
    showToast('Feast Bag Updated', `${item.title} added to your feast!`, 'success');

    // Button bump animation
    if (bagCountEl) {
      bagCountEl.classList.add('bump');
      setTimeout(() => bagCountEl.classList.remove('bump'), 250);
    }
  }

  function updateItemQty(id, delta) {
    const itemIndex = cart.findIndex(c => c.id === id);
    if (itemIndex > -1) {
      cart[itemIndex].qty += delta;
      if (cart[itemIndex].qty <= 0) {
        cart.splice(itemIndex, 1);
      }
      updateCartUI();
    }
  }

  function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    showToast('Item Removed', 'The dish was removed from your feast bag.', 'info');
  }

  function updateCartUI() {
    const totalItems = cart.reduce((acc, cur) => acc + cur.qty, 0);
    const subtotal = cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
    // Indian Restaurant GST: 5% (2.5% CGST + 2.5% SGST)
    const tax = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + tax;

    if (bagCountEl) bagCountEl.textContent = totalItems;
    if (bagItemsBadgeEl) bagItemsBadgeEl.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;

    if (bagSubtotalEl) bagSubtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (bagTaxEl) bagTaxEl.textContent = `₹${tax.toLocaleString('en-IN')}`;
    if (bagTotalEl) bagTotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    // Render cart items
    if (cart.length === 0) {
      if (bagEmptyViewEl) bagEmptyViewEl.style.display = 'block';
      // Remove any existing item cards
      const cards = bagItemsListEl.querySelectorAll('.bag-item-card');
      cards.forEach(c => c.remove());
      if (checkoutBtn) checkoutBtn.disabled = true;
    } else {
      if (bagEmptyViewEl) bagEmptyViewEl.style.display = 'none';

      // Rebuild list
      let html = '';
      cart.forEach(item => {
        const itemLineTotal = item.price * item.qty;
        html += `
          <div class="bag-item-card" data-id="${item.id}">
            <img src="${item.image}" alt="${item.title}" class="bag-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=200&q=80'">
            <div class="bag-item-info">
              <h5 class="bag-item-name">${item.title}</h5>
              <div class="bag-item-price">₹${itemLineTotal.toLocaleString('en-IN')}</div>
              <div class="bag-qty-controls">
                <button type="button" class="qty-btn btn-qty-minus" data-id="${item.id}" aria-label="Decrease quantity">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="qty-count">${item.qty}</span>
                <button type="button" class="qty-btn btn-qty-plus" data-id="${item.id}" aria-label="Increase quantity">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <button type="button" class="remove-item-btn" data-id="${item.id}" aria-label="Remove item">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        `;
      });

      // Clear existing cards
      const oldCards = bagItemsListEl.querySelectorAll('.bag-item-card');
      oldCards.forEach(c => c.remove());
      bagItemsListEl.insertAdjacentHTML('beforeend', html);

      if (checkoutBtn) checkoutBtn.disabled = false;

      // Attach event listeners to cart controls
      bagItemsListEl.querySelectorAll('.btn-qty-minus').forEach(btn => {
        btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), -1));
      });
      bagItemsListEl.querySelectorAll('.btn-qty-plus').forEach(btn => {
        btn.addEventListener('click', () => updateItemQty(btn.getAttribute('data-id'), 1));
      });
      bagItemsListEl.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-id')));
      });
    }
  }

  // Checkout action
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) return;
      closeBagDrawer();
      showToast('Order Received!', 'Our kitchen has received your order request. A server will attend to your feast shortly.', 'success');
      cart = [];
      updateCartUI();
    });
  }

  // Hook up "Add to Feast" buttons from the Specialties section
  document.querySelectorAll('.add-specialty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const title = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price'));
      const card = btn.closest('.specialty-card');
      const img = card.querySelector('img') ? card.querySelector('img').src : '';

      addToCart({ id, title, price, image: img });
    });
  });

  /* ==========================================================================
     3. Menu Filtering, Search & Rendering
     ========================================================================== */
  const menuGrid = document.getElementById('menuGrid');
  const menuTabs = document.querySelectorAll('.category-pill');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const menuEmptyState = document.getElementById('menuEmptyState');
  const resetMenuBtn = document.getElementById('resetMenuBtn');

  // Filter state
  let currentCategory = 'all';
  let searchQuery = '';
  let filterVegOnly = false;
  let filterChefPicks = false;
  let filterSpicyOnly = false;

  const vegFilterBtn = document.getElementById('vegFilterBtn');
  const chefFilterBtn = document.getElementById('chefFilterBtn');
  const spicyFilterBtn = document.getElementById('spicyFilterBtn');

  function renderMenuItems() {
    if (!menuGrid) return;

    const filtered = menuData.filter(item => {
      // Category filter
      const matchCat = (currentCategory === 'all' || item.category === currentCategory);
      // Search filter
      const matchSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery) || 
        item.description.toLowerCase().includes(searchQuery);
      // Dietary filters
      const matchVeg = !filterVegOnly || item.isVeg === true;
      const matchChef = !filterChefPicks || item.isChef === true;
      const matchSpicy = !filterSpicyOnly || item.spicyLevel >= 2;

      return matchCat && matchSearch && matchVeg && matchChef && matchSpicy;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = '';
      if (menuEmptyState) menuEmptyState.style.display = 'block';
      return;
    }

    if (menuEmptyState) menuEmptyState.style.display = 'none';

    let html = '';
    filtered.forEach(item => {
      // Generate spice chili icons
      let chiliHtml = '';
      for (let i = 1; i <= 3; i++) {
        chiliHtml += `<i class="fa-solid fa-pepper-hot ${i <= item.spicyLevel ? 'lit' : ''}"></i>`;
      }

      html += `
        <article class="menu-card" data-category="${item.category}">
          <div class="menu-card-media">
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=700&q=80'">
            <div class="menu-card-badges">
              ${item.isChef ? '<span class="badge-tag chef"><i class="fa-solid fa-star"></i> Chef Choice</span>' : ''}
            </div>
            <div class="dietary-marker ${item.isVeg ? 'veg' : 'non-veg'}" title="${item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}">
              <span class="marker-dot"></span>
            </div>
          </div>
          <div class="menu-card-body">
            <div class="menu-title-row">
              <h3 class="menu-item-title">${item.title}</h3>
              <span class="menu-item-price">₹${item.price.toLocaleString('en-IN')}</span>
            </div>
            <p class="menu-item-desc">${item.description}</p>
            <div class="menu-card-footer">
              <div class="menu-tags-meta">
                <span class="spice-chilis" title="Spice Level: ${item.spicyLevel}/3">${chiliHtml}</span>
                <span class="portion-tag">&bull; ${item.portion}</span>
              </div>
              <button type="button" class="add-order-btn" data-id="${item.id}">
                <i class="fa-solid fa-plus"></i> Add
              </button>
            </div>
          </div>
        </article>
      `;
    });

    menuGrid.innerHTML = html;

    // Attach click events to dynamically rendered "Add" buttons
    menuGrid.querySelectorAll('.add-order-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const dish = menuData.find(d => d.id === id);
        if (dish) addToCart(dish);
      });
    });
  }

  // Category tab clicks
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      currentCategory = tab.getAttribute('data-category');
      renderMenuItems();
    });
  });

  // Search input events
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderMenuItems();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      menuSearchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderMenuItems();
      menuSearchInput.focus();
    });
  }

  // Dietary filter toggle buttons
  if (vegFilterBtn) {
    vegFilterBtn.addEventListener('click', () => {
      filterVegOnly = !filterVegOnly;
      vegFilterBtn.classList.toggle('active', filterVegOnly);
      renderMenuItems();
    });
  }

  if (chefFilterBtn) {
    chefFilterBtn.addEventListener('click', () => {
      filterChefPicks = !filterChefPicks;
      chefFilterBtn.classList.toggle('active', filterChefPicks);
      renderMenuItems();
    });
  }

  if (spicyFilterBtn) {
    spicyFilterBtn.addEventListener('click', () => {
      filterSpicyOnly = !filterSpicyOnly;
      spicyFilterBtn.classList.toggle('active', filterSpicyOnly);
      renderMenuItems();
    });
  }

  // Reset menu filter button
  if (resetMenuBtn) {
    resetMenuBtn.addEventListener('click', () => {
      currentCategory = 'all';
      searchQuery = '';
      filterVegOnly = false;
      filterChefPicks = false;
      filterSpicyOnly = false;

      if (menuSearchInput) menuSearchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.style.display = 'none';
      if (vegFilterBtn) vegFilterBtn.classList.remove('active');
      if (chefFilterBtn) chefFilterBtn.classList.remove('active');
      if (spicyFilterBtn) spicyFilterBtn.classList.remove('active');

      menuTabs.forEach(t => {
        if (t.getAttribute('data-category') === 'all') {
          t.classList.add('active');
          t.setAttribute('aria-selected', 'true');
        } else {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        }
      });

      renderMenuItems();
    });
  }

  // Initial render of menu items
  renderMenuItems();

  /* ==========================================================================
     4. Food Gallery & Lightbox
     ========================================================================== */
  const galleryTabs = document.querySelectorAll('.gallery-tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  let activeGalleryList = Array.from(galleryItems);

  // Gallery category tabs
  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');

      activeGalleryList = [];
      galleryItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
          activeGalleryList.push(item);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  function openLightbox(index) {
    if (activeGalleryList.length === 0) return;
    currentGalleryIndex = (index + activeGalleryList.length) % activeGalleryList.length;
    const item = activeGalleryList[currentGalleryIndex];
    const src = item.getAttribute('data-src') || item.querySelector('img').src;
    const caption = item.getAttribute('data-caption') || item.querySelector('.gallery-caption-title').textContent;

    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = activeGalleryList.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => openLightbox(currentGalleryIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => openLightbox(currentGalleryIndex + 1));

  // Keyboard navigation for lightbox
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(currentGalleryIndex + 1);
  });

  /* ==========================================================================
     5. Table Reservation System & Validation
     ========================================================================== */
  const reservationForm = document.getElementById('reservationForm');
  const resDateInput = document.getElementById('resDate');
  const reservationModal = document.getElementById('reservationModal');
  const closeResModalBtn = document.getElementById('closeResModalBtn');
  const doneBookingBtn = document.getElementById('doneBookingBtn');
  const printBookingBtn = document.getElementById('printBookingBtn');
  const resModalBackdrop = document.getElementById('resModalBackdrop');
  const bookingReceipt = document.getElementById('bookingReceipt');

  // Ensure reservation date cannot be in the past
  if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.min = today;
    resDateInput.value = today;
  }

  function closeReservationModal() {
    if (reservationModal) {
      reservationModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (closeResModalBtn) closeResModalBtn.addEventListener('click', closeReservationModal);
  if (doneBookingBtn) doneBookingBtn.addEventListener('click', closeReservationModal);
  if (resModalBackdrop) resModalBackdrop.addEventListener('click', closeReservationModal);
  if (printBookingBtn) {
    printBookingBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form fields
      const nameField = document.getElementById('resName');
      const phoneField = document.getElementById('resPhone');
      const emailField = document.getElementById('resEmail');
      const guestsField = document.getElementById('resGuests');
      const dateField = document.getElementById('resDate');
      const timeField = document.getElementById('resTime');
      const areaField = document.getElementById('resArea');
      const occasionField = document.getElementById('resOccasion');
      const notesField = document.getElementById('resNotes');

      let isValid = true;

      // Clear previous error messages
      document.querySelectorAll('.field-error').forEach(el => el.textContent = '');

      // Name validation
      if (!nameField.value.trim() || nameField.value.trim().length < 2) {
        document.getElementById('resNameError').textContent = 'Please enter your full name.';
        isValid = false;
      }

      // Phone validation
      const phoneVal = phoneField.value.trim();
      if (!phoneVal || phoneVal.length < 7) {
        document.getElementById('resPhoneError').textContent = 'Please enter a valid contact phone number.';
        isValid = false;
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailField.value.trim() || !emailPattern.test(emailField.value.trim())) {
        document.getElementById('resEmailError').textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Date validation
      if (!dateField.value) {
        document.getElementById('resDateError').textContent = 'Please select a dining date.';
        isValid = false;
      }

      if (!isValid) return;

      // Extract guest details
      const guestName = nameField.value.trim();
      const guestPhone = phoneField.value.trim();
      const guestEmail = emailField.value.trim();
      const guestGuests = guestsField.value;
      const guestDate = dateField.value;
      const guestTime = timeField.value;
      const guestArea = areaField.value;
      const guestOccasion = occasionField.value;
      const guestNotes = notesField.value.trim();

      // Generate Booking ID
      const bookingCode = 'TSG-' + Math.floor(100000 + Math.random() * 900000);

      // Clean phone number for WhatsApp & SMS (default to India 91 if 10 digits)
      let cleanPhone = guestPhone.replace(/\D/g, '');
      if (cleanPhone.length === 10) {
        cleanPhone = '91' + cleanPhone;
      }

      // WhatsApp & SMS message body
      const phoneMessage = `🍽️ *TABLE RESERVATION CONFIRMED* - The Spice Garden, Bengaluru\n\n` +
        `Namaste ${guestName},\nYour table has been reserved at The Spice Garden!\n\n` +
        `📌 *Booking ID:* ${bookingCode}\n` +
        `📅 *Date:* ${guestDate}\n` +
        `⏰ *Time:* ${guestTime}\n` +
        `👥 *Party:* ${guestGuests} Guests\n` +
        `🪑 *Seating:* ${guestArea}\n\n` +
        `📍 *Location:* The Spice Garden, #42, 100 Feet Road, Indiranagar, Bengaluru - 560038\n` +
        `📞 *Concierge:* +91 80 4567 7742\n\n` +
        `We look forward to hosting your royal feast!`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(phoneMessage)}`;
      const smsUrl = `sms:${cleanPhone}?body=${encodeURIComponent(phoneMessage)}`;

      // Email Subject & Body for Gmail
      const emailSubject = `Table Reservation Confirmed - The Spice Garden Bengaluru [#${bookingCode}]`;
      const emailBody = `Dear ${guestName},\n\n` +
        `We are pleased to confirm your table reservation at The Spice Garden, Indiranagar, Bengaluru!\n\n` +
        `RESERVATION DETAILS:\n` +
        `--------------------------------------------------\n` +
        `Booking Reference: ${bookingCode}\n` +
        `Date: ${guestDate}\n` +
        `Time Slot: ${guestTime}\n` +
        `Party Size: ${guestGuests} Guests\n` +
        `Seating Area: ${guestArea}\n` +
        `Occasion: ${guestOccasion}\n` +
        `Contact Phone: ${guestPhone}\n` +
        (guestNotes ? `Special Notes: ${guestNotes}\n` : '') +
        `\nRESTAURANT VENUE:\n` +
        `The Spice Garden\n` +
        `#42, 100 Feet Road, HAL 2nd Stage, Indiranagar\n` +
        `Bengaluru, Karnataka 560038, India\n` +
        `Google Maps: https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bengaluru\n` +
        `Phone: +91 80 4567 7742 / +91 98860 77745\n\n` +
        `We look forward to offering you a magnificent dining experience!\n\n` +
        `Warm regards,\n` +
        `The Spice Garden Concierge Team`;

      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(guestEmail)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      const mailtoUrl = `mailto:${guestEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Google Calendar reminder link
      const calTitle = encodeURIComponent(`Dinner at The Spice Garden, Bengaluru`);
      const calDetails = encodeURIComponent(`Table reservation #${bookingCode} for ${guestGuests} guests at ${guestTime}. Location: #42, 100 Feet Road, Indiranagar, Bengaluru.`);
      const calLocation = encodeURIComponent(`#42, 100 Feet Road, Indiranagar, Bengaluru`);
      const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calTitle}&details=${calDetails}&location=${calLocation}`;

      // Render Booking Receipt with direct dispatch channels
      if (bookingReceipt) {
        bookingReceipt.innerHTML = `
          <div class="receipt-code-row">
            <div>
              <span class="receipt-label">Booking Reference</span>
              <div class="receipt-code">${bookingCode}</div>
            </div>
            <div class="live-status-pill"><span class="pulse-dot"></span> Confirmed</div>
          </div>

          <div class="receipt-data-grid">
            <div class="receipt-item">
              <strong>Guest Name</strong>
              <span>${escapeHtml(guestName)}</span>
            </div>
            <div class="receipt-item">
              <strong>Party Size</strong>
              <span>${guestGuests} Guests</span>
            </div>
            <div class="receipt-item">
              <strong>Date & Time</strong>
              <span>${guestDate} &bull; ${guestTime}</span>
            </div>
            <div class="receipt-item">
              <strong>Seating Area</strong>
              <span>${guestArea}</span>
            </div>
            <div class="receipt-item">
              <strong>Contact Phone</strong>
              <span>${escapeHtml(guestPhone)}</span>
            </div>
            <div class="receipt-item">
              <strong>Email Address</strong>
              <span>${escapeHtml(guestEmail)}</span>
            </div>
          </div>

          ${guestNotes ? `
            <div style="margin-top: 0.8rem; font-size: 0.82rem; color: var(--text-secondary); border-top: 1px solid var(--border-subtle); padding-top: 0.5rem;">
              <strong>Special Requests:</strong> ${escapeHtml(guestNotes)}
            </div>
          ` : ''}

          <!-- Contact Dispatch Details & Direct Actions -->
          <div class="dispatch-notice-box">
            <div class="dispatch-header">
              <i class="fa-solid fa-circle-check"></i>
              <span>Booking Details Dispatched to Your Contacts</span>
            </div>
            <div class="dispatch-list">
              <div class="dispatch-item">
                <i class="fa-solid fa-envelope"></i>
                <span><strong>Gmail:</strong> ${escapeHtml(guestEmail)}</span>
              </div>
              <div class="dispatch-item">
                <i class="fa-solid fa-mobile-screen-button"></i>
                <span><strong>Phone / WhatsApp:</strong> ${escapeHtml(guestPhone)}</span>
              </div>
            </div>

            <!-- Instant Delivery Action Buttons -->
            <div class="dispatch-actions-grid">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-dispatch btn-whatsapp" id="sendWhatsAppBtn">
                <i class="fa-brands fa-whatsapp"></i> Send to WhatsApp
              </a>
              <a href="${gmailComposeUrl}" target="_blank" rel="noopener noreferrer" class="btn-dispatch btn-gmail" id="sendGmailBtn">
                <i class="fa-solid fa-envelope-open-text"></i> Send via Gmail
              </a>
              <a href="${googleCalUrl}" target="_blank" rel="noopener noreferrer" class="btn-dispatch btn-cal">
                <i class="fa-regular fa-calendar-plus"></i> Add Reminder to Google Calendar
              </a>
            </div>
          </div>
        `;
      }

      // Show Confirmation Modal
      if (reservationModal) {
        reservationModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      showToast('Booking Details Dispatched!', `Confirmation sent to ${guestEmail} & ${guestPhone}.`, 'success');

      // Reset form
      reservationForm.reset();
      const today = new Date().toISOString().split('T')[0];
      if (resDateInput) resDateInput.value = today;
    });
  }

  /* ==========================================================================
     6. Direct Contact Inquiry Form & Tab Switching
     ========================================================================== */
  const tabReservationBtn = document.getElementById('tabReservationBtn');
  const tabContactBtn = document.getElementById('tabContactBtn');
  const contactInquiryForm = document.getElementById('contactInquiryForm');

  if (tabReservationBtn && tabContactBtn) {
    tabReservationBtn.addEventListener('click', () => {
      tabReservationBtn.classList.add('active');
      tabContactBtn.classList.remove('active');
      reservationForm.style.display = 'flex';
      contactInquiryForm.style.display = 'none';
    });

    tabContactBtn.addEventListener('click', () => {
      tabContactBtn.classList.add('active');
      tabReservationBtn.classList.remove('active');
      reservationForm.style.display = 'none';
      contactInquiryForm.style.display = 'flex';
    });
  }

  if (contactInquiryForm) {
    contactInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      let isValid = true;
      document.getElementById('contactNameError').textContent = '';
      document.getElementById('contactEmailError').textContent = '';
      document.getElementById('contactMessageError').textContent = '';

      if (!name) {
        document.getElementById('contactNameError').textContent = 'Please enter your name.';
        isValid = false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email)) {
        document.getElementById('contactEmailError').textContent = 'Please enter a valid email address.';
        isValid = false;
      }
      if (!message) {
        document.getElementById('contactMessageError').textContent = 'Please write your message or inquiry.';
        isValid = false;
      }

      if (!isValid) return;

      showToast('Message Sent', 'Thank you for writing to us! Our concierge team will respond shortly.', 'success');
      contactInquiryForm.reset();
    });
  }

  /* ==========================================================================
     7. Newsletter Subscription Form & Royal Circle VIP Modal
     ========================================================================== */
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterStatus = document.getElementById('newsletterStatus');
  const newsletterModal = document.getElementById('newsletterModal');
  const closeNewsletterModalBtn = document.getElementById('closeNewsletterModalBtn');
  const newsletterModalBackdrop = document.getElementById('newsletterModalBackdrop');
  const newsletterEmailDisplay = document.getElementById('newsletterEmailDisplay');
  const newsletterGmailBtn = document.getElementById('newsletterGmailBtn');
  const copyVoucherBtn = document.getElementById('copyVoucherBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const redeemReservationBtn = document.getElementById('redeemReservationBtn');

  function closeNewsletterModal() {
    if (newsletterModal) {
      newsletterModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  if (closeNewsletterModalBtn) closeNewsletterModalBtn.addEventListener('click', closeNewsletterModal);
  if (newsletterModalBackdrop) newsletterModalBackdrop.addEventListener('click', closeNewsletterModal);

  if (redeemReservationBtn) {
    redeemReservationBtn.addEventListener('click', () => {
      closeNewsletterModal();
    });
  }

  // Copy Voucher Code to Clipboard
  if (copyVoucherBtn) {
    copyVoucherBtn.addEventListener('click', () => {
      const code = 'ROYAL15-SPICE';
      navigator.clipboard.writeText(code).then(() => {
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        copyVoucherBtn.style.background = '#27ae60';
        copyVoucherBtn.style.color = '#fff';
        showToast('Code Copied!', 'Voucher code ROYAL15-SPICE copied to clipboard.', 'success');
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy';
          copyVoucherBtn.style.background = '';
          copyVoucherBtn.style.color = '';
        }, 2500);
      }).catch(() => {
        showToast('Voucher Code', 'Your code is: ROYAL15-SPICE', 'info');
      });
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailPattern.test(email)) {
        if (newsletterStatus) {
          newsletterStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a valid email address (e.g. yourname@gmail.com).';
          newsletterStatus.className = 'newsletter-status error';
        }
        if (newsletterEmail) {
          newsletterEmail.focus();
        }
        return;
      }

      // Save subscription state
      try {
        localStorage.setItem('spice_garden_royal_circle', email);
      } catch (err) {
        // localStorage fallback
      }

      const voucherCode = 'ROYAL15-SPICE';
      const emailSubject = `Welcome to The Royal Circle - The Spice Garden Bengaluru [15% Voucher Inside]`;
      const emailBody = `Namaste!\n\n` +
        `Welcome to The Royal Circle at The Spice Garden, Bengaluru!\n\n` +
        `Here is your exclusive 15% welcome dining voucher:\n` +
        `--------------------------------------------------\n` +
        `VOUCHER CODE: ${voucherCode}\n` +
        `BENEFIT: Flat 15% OFF your total dining bill\n` +
        `LOCATION: #42, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru\n` +
        `--------------------------------------------------\n\n` +
        `How to Redeem:\n` +
        `Simply show this email or mention code ${voucherCode} upon dining or during your table reservation.\n\n` +
        `Reserve a Table: https://thespicegarden.in/#reservation\n` +
        `Direct Concierge: +91 80 4567 7742\n\n` +
        `Warm regards,\n` +
        `The Spice Garden Team`;

      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

      // Update modal content
      if (newsletterEmailDisplay) {
        newsletterEmailDisplay.innerHTML = `<strong>Gmail / Email:</strong> ${escapeHtml(email)}`;
      }
      if (newsletterGmailBtn) {
        newsletterGmailBtn.href = gmailComposeUrl;
      }

      // Inline success display
      if (newsletterStatus) {
        newsletterStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Subscribed! 15% VIP dining voucher unlocked.';
        newsletterStatus.className = 'newsletter-status success';
      }

      // Open VIP membership confirmation modal
      if (newsletterModal) {
        newsletterModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      showToast('Welcome to The Royal Circle!', `VIP voucher dispatched to ${email}`, 'success');

      newsletterForm.reset();

      setTimeout(() => {
        if (newsletterStatus) {
          newsletterStatus.textContent = '';
          newsletterStatus.className = 'newsletter-status';
        }
      }, 7000);
    });
  }

  /* ==========================================================================
     8. Mobile Navigation Drawer & Backdrop
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-book-btn');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileMenu);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  /* ==========================================================================
     9. Header Sticky State & Scrollspy Active Nav
     ========================================================================== */
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header shadow on scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scrollspy navigation highlight
    sections.forEach(sec => {
      const secHeight = sec.offsetHeight;
      const secTop = sec.offsetTop - 140;
      const secId = sec.getAttribute('id');

      if (scrollY > secTop && scrollY <= secTop + secHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${secId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================================================
     10. Animated Stats Counter (Intersection Observer)
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsCounted = false;

  function countUp(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1800; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, stepTime);
  }

  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          statNumbers.forEach(num => countUp(num));
        }
      });
    }, { threshold: 0.4 });

    const statsBar = document.querySelector('.stats-counter-bar');
    if (statsBar) observer.observe(statsBar);
  }

  /* ==========================================================================
     11. Live Restaurant Opening Status
     ========================================================================== */
  function updateLiveStatus() {
    const badge = document.getElementById('liveStatusBadge');
    if (!badge) return;

    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const currentTimeVal = hours + mins / 60;

    // Lunch: 12:00 to 15:30, Dinner: 18:30 to 23:30
    const isLunchOpen = currentTimeVal >= 12.0 && currentTimeVal <= 15.5;
    const isDinnerOpen = currentTimeVal >= 18.5 && currentTimeVal <= 23.5;

    if (isLunchOpen) {
      badge.innerHTML = '<span class="pulse-dot"></span> Open Now &bull; Lunch Service';
    } else if (isDinnerOpen) {
      badge.innerHTML = '<span class="pulse-dot"></span> Open Now &bull; Royal Dinner';
    } else if (currentTimeVal < 12.0) {
      badge.innerHTML = '<span class="pulse-dot" style="background:#e59819;"></span> Opens at 12:00 PM for Lunch';
    } else if (currentTimeVal > 15.5 && currentTimeVal < 18.5) {
      badge.innerHTML = '<span class="pulse-dot" style="background:#e59819;"></span> Dinner Service Starts 6:30 PM';
    } else {
      badge.innerHTML = '<span class="pulse-dot" style="background:#8e847b;"></span> Closed &bull; Opens Tomorrow 12 PM';
    }
  }
  updateLiveStatus();

  /* ==========================================================================
     12. Toast Notification Helper
     ========================================================================== */
  const toastContainer = document.getElementById('toastContainer');

  function showToast(title, message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconClass = 'fa-circle-info';
    if (type === 'success') iconClass = 'fa-circle-check';
    if (type === 'error') iconClass = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass} toast-icon ${type}"></i>
      <div class="toast-content">
        <h5 class="toast-title">${escapeHtml(title)}</h5>
        <p class="toast-message">${escapeHtml(message)}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    // Trigger enter transition
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3.8s
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  // HTML escaping utility for safe text injection
  function escapeHtml(string) {
    const div = document.createElement('div');
    div.innerText = string;
    return div.innerHTML;
  }

});
