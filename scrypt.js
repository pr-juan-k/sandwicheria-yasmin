// ========================================
// Configuracion - Cambia el numero de WhatsApp aqui
// ========================================
const WHATSAPP_NUMBER = '5493816024454'; // Formato: codigo pais + numero sin espacios ni guiones
let extraPapasCount = 0;
function changePapas(delta) {
  const categoryData = menuData[selectedCategory];
  const newCount = extraPapasCount + delta;
  
  // Limitamos entre 0 y un máximo razonable (ej. 5 porciones)
  if (newCount >= 0 && newCount <= 5) {
    extraPapasCount = newCount;
    document.getElementById('papasCount').textContent = extraPapasCount;
    updateCurrentPrice();
    updatePapasButtons();
  }
}

function updatePapasButtons() {
  const minusBtn = document.getElementById('papasMinus');
  const plusBtn = document.getElementById('papasPlus');
  
  if (minusBtn && plusBtn) {
    minusBtn.disabled = extraPapasCount === 0;
    // Opcional: deshabilitar el + si llega al máximo de 5
    plusBtn.disabled = extraPapasCount >= 5; 
  }
}
// ========================================
// Datos del Menu
// ========================================
const menuData = {

  milanesas: {
    name: 'Milanesas',
    image: 'images/milanesa.jpeg',
    hasVariety: true,
    varieties: ['carne', 'molida'],
    hasExtraPapas: true,
    extraPapasPrice: 500,
    products: {
      carne: {
        comun: {
          name: 'Carne Gigante Comun',
          price: 5500,
          ingredients: ['lechuga', 'tomate', 'mayonesa', 'mostaza','aji'],
          image: 'images/milanesa.jpeg'
        },
        especial: {
          name: 'Carne Gigante Especial',
          price: 7000,
          ingredients: ['lechuga', 'tomate', , 'mayonesa', 'mostaza' ,'jamon', 'huevo', 'papas fritas','aji'],
          image: 'images/milanesa-p.jpeg'
        },
        comun1: {
          name: 'Carne Chica Comun',
          price: 4000,
          ingredients: ['lechuga', 'tomate', 'mayonesa', 'mostaza','aji'],
          image: 'images/milanesa.jpeg'
        },
        especial2: {
          name: 'Carne Chica Especial',
          price: 5000,
          ingredients: ['lechuga', 'tomate', , 'mayonesa', 'mostaza' ,'jamon', 'huevo', 'papas fritas','aji'],
          image: 'images/milanesa-p.jpeg'
        }
      },
      molida: {
        comun: {
          name: 'Molida Gigante Comun',
          price: 3000,
          ingredients: ['tomate', 'lechuga', 'mayonesa', 'mostaza','aji'],
          image: 'images/milanesa.jpeg'
        },
        especial: {
          name: 'Molida Gigante Especial',
          price: 4000,
          ingredients: ['lechuga', 'tomate','mayonesa', 'mostaza', 'huevo','jamon', 'papas fritas','aji'],
          image: 'images/milanesa-p.jpeg'
        },comun2: {
          name: 'Molida Chica Comun',
          price: 2500,
          ingredients: ['tomate', 'lechuga', 'mayonesa', 'mostaza','aji'],
          image: 'images/milanesa.jpeg'
        },
        especial2: {
          name: 'Molida Chica Especial',
          price: 3500,
          ingredients: ['lechuga', 'tomate', 'mayonesa', 'mostaza','huevo','jamon', 'papas fritas','aji'],
          image: 'images/milanesa-p.jpeg'
        }
      }
    }
  },
  milanesaNapolitana: {
    name: 'Milanesa Napolitana',
    image: 'images/milanesa-napolitana.jpg',
    hasVariety: false,
    isSimple: true,
    noIngredients: true,
    products: {
      '1persona': {
        name: 'Napolitana de carne 1 Persona',
        price: 10000,
        image: 'images/milanesa-napolitana.jpg',
        description: 'Al plato con papas fritas'
      },
      '2personas': {
        name: 'Napolitana de carne 2 Personas',
        price: 20000,
        image: 'images/milanesa-napolitana.jpg',
        description: 'Al plato con papas fritas'
      },
       '1persona molida': {
        name: 'Napolitana de molida 1 Persona',
        price: 7500,
        image: 'images/milanesa-napolitana.jpg',
        description: 'Al plato con papas fritas'
      },
      '2personas molida': {
        name: 'Napolitana de molida 2 Personas',
        price: 14000,
        image: 'images/milanesa-napolitana.jpg',
        description: 'Al plato con papas fritas'
      },


       'f-persona molida': {
        name: 'Napolitana de Carne FAMILIAR',
        price: 25000,
        image: 'images/milanesa-napolitana.jpg',
        description: 'Al plato con papas fritas'
      },
      'f-personas molida': {
        name: 'Napolitana de molida FAMILIAR',
        price: 17000,
        image: 'images/milanesa-napolitana.jpg',
        description: 'Al plato con papas fritas'
      }
    }
  },

  hamburguesas: {
    name: 'Hamburguesas',
    image: 'images/hamburguesa.jpg',
    hasVariety: false,
    hasMedallions: true,
    medallionPrice: 1000,
    maxMedallions: 3,
    hasExtraPapas: true, // <-- NUEVO
    extraPapasPrice: 500, // <-- NUEVO
    products: {
      comun: {
        name: 'Hamburguesa Gigante Comun',
        price: 5000,
        ingredients: ['lechuga', 'tomate', 'mayonesa', 'mostaza','aji'],
        image: 'images/comun.jpeg'
      },
      especial: {
        name: 'Hamburguesa Gigante Especial',
        price: 6000,
        ingredients: ['lechuga', 'tomate', 'mayonesa', 'mostaza', 'huevo','jamon', 'papas fritas','aji'],
        image: 'images/completa.jpeg'
      },
      hamburbumi: {
        name: 'Hamburguesa Gigante Especial Cheddar',
        price: 6500,
        ingredients: ['lechuga', 'tomate', 'mayonesa', 'mostaza',  'queso cheddar', 'jamon','huevo', 'papas fritas','aji'],
        image: 'images/completa.jpeg'
      }
    }
  },pizzas: {
    name: 'Pizzas',
    image: 'images/pizza.jpg',
    hasVariety: false,
    isSimple: true,
    products: {
      muzzarela: {
        name: 'Pizza Comun',
        price: 5500,
        image: 'images/pizza.jpg'
      },
      especial: {
        name: 'Pizza Especial',
        price: 6500,
        image: 'images/pizza-especial.jpg'
      },
      napolitana: {
        name: 'Pizza Napolitana',
        price: 7000,
        image: 'images/pizza-napolitana.jpg'
      },
      napolitana2: {
        name: 'Pizza De Fugazeta',
        price: 7000,
        image: 'images/pizza-muzzarella.jpg'
      },
      
      
      especial1: {
        name: 'Pizza y Huevo',
        price: 8000,
        image: 'images/1pizza-especial.jpg'
      },
      especial3: {
        name: 'Pizza Primavera',
        price: 7500,
        image: 'images/pizza-muzzarella.jpg'
      }
    }
  },
  papas: {
    name: 'Papas Fritas',
    image: 'images/papas.jpg',
    hasVariety: false,
    isSimple: true,
    hasAddon: true,
    addonName: 'Queso Cheddar',
    addonPrice: 1000,
    products: {
      'bandeja_grande': {
        name: 'Bandeja Papas',
        price: 5000,
        image: 'images/papas-bandeja-chica.jpg'
      }
    }
  }
};

// Imagenes de ingredientes
const ingredientImages = {
  'lechuga': 'images/ingredientes/lechuga.jpg',
  'tomate': 'images/ingredientes/tomate.jpg',
  'jamon': 'images/ingredientes/jamon.jpg',
  'queso': 'images/ingredientes/queso.jpg',
  'huevo': 'images/ingredientes/huevo.jpg',
  'queso cheddar': 'images/ingredientes/cheddar.jpg',
  'cebolla caramelizada': 'images/ingredientes/cebolla.jpg',
  'mayonesa': 'images/ingredientes/mayonesa.jpg',
  'mostaza': 'images/ingredientes/mostaza.jpg',
  'ketchup': 'images/ingredientes/ketchup.jpg',
  'papas fritas': 'images/ingredientes/papas-fritas.jpg',
  'aji': 'images/ingredientes/aji.jpeg'
};

// ========================================
// Estado de la Aplicacion
// ========================================
let currentStep = 1;
let selectedCategory = null;
let selectedVariety = null;
let selectedProductType = null;
let removedIngredients = [];
let extraMedallions = 0;
let orderItems = [];
let summaryExpanded = false;
let selectedPapasAddon = false;
// Variables para controlar las promociones
let currentPromoCount = 1;
let configuredPromoItems = [];

// ========================================
// Inicializacion
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  renderMenuItems();
  updateOrderSummary();
});

// ========================================
// Renderizado del Menu Principal
// ========================================
function renderMenuItems() {
  const menuGrid = document.getElementById('menuGrid');
  menuGrid.innerHTML = '';
  
  Object.keys(menuData).forEach(key => {
    const item = menuData[key];
    if (item.isBeverage) return; // Skip beverages in main menu
    
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.onclick = () => selectCategory(key);
    
    menuItem.innerHTML = `
      <img loading="lazy" src="${item.image}" alt="${item.name}" class="menu-item-image">
      <div class="menu-item-info">
        <div class="menu-item-name">${item.name}</div>
      </div>
      <svg class="menu-item-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    `;
    
    menuGrid.appendChild(menuItem);
  });
}

// ========================================
// Seleccion de Categoria
// ========================================
function selectCategory(category) {
  selectedCategory = category;
  selectedVariety = null; // LIMPIEZA DE SEGURIDAD
  const categoryData = menuData[category];
  
  if (categoryData.isBeverage) {
    showStep('beveragesSection');
    renderBeverages();
  } else if (categoryData.hasVariety) {
    showStep('step2');
    renderVarieties(category);
  } else if (categoryData.isSimple) {
    showStep('step3');
    renderSimpleOptions(category);
  } else {
    showStep('step3');
    renderCustomization(category);
  }
}

// ========================================
// Renderizado de Variedades
// ========================================
function renderVarieties(category) {
  const categoryData = menuData[category];
  const varietyGrid = document.getElementById('varietyGrid');
  const varietyTitle = document.getElementById('varietyTitle');
  
  varietyTitle.textContent = `Selecciona el tipo de ${categoryData.name.toLowerCase()}`;
  varietyGrid.innerHTML = '';
  
  categoryData.varieties.forEach(variety => {
    const varietyItem = document.createElement('div');
    varietyItem.className = 'variety-item';
    varietyItem.onclick = () => selectVariety(variety);
    
    varietyItem.innerHTML = `
      <img loading="lazy" src="${categoryData.image}" alt="${variety}" class="menu-item-image">
      <div class="variety-item-name">${variety.charAt(0).toUpperCase() + variety.slice(1)}</div>
    `;
    
    varietyGrid.appendChild(varietyItem);
  });
}

// ========================================
// Seleccion de Variedad
// ========================================
function selectVariety(variety) {
  selectedVariety = variety;
  const categoryData = menuData[selectedCategory];
  
  if (categoryData.isSimple) {
    showStep('step3');
    renderSimpleOptionsWithVariety(selectedCategory, variety);
  } else {
    showStep('step3');
    renderCustomization(selectedCategory, variety);
  }
}

// ========================================
// Renderizado de Opciones Simples
// ========================================
function renderSimpleOptions(category) {
  const categoryData = menuData[category];
  const customizationContent = document.getElementById('customizationContent');
  const customizationTitle = document.getElementById('customizationTitle');
  
  customizationTitle.textContent = `Selecciona tu ${categoryData.name.toLowerCase()}`;
  selectedPapasAddon = false;
  
  let html = '<div class="simple-options">';
  
  Object.keys(categoryData.products).forEach(key => {
    const product = categoryData.products[key];
    const imgSrc = product.image || categoryData.image;
    const desc = product.description || '';
    
    html += `
      <div class="simple-option" onclick="addSimpleProduct('${category}', '${key}')">
        <img loading="lazy" src="${imgSrc}" alt="${product.name}" class="simple-option-image">
        <div class="simple-option-info">
          <div class="simple-option-name">${product.name}</div>
          ${desc ? `<div class="simple-option-desc">${desc}</div>` : ''}
        </div>
        <span class="simple-option-price">$${product.price.toLocaleString()}</span>
      </div>
    `;
  });
  
  html += '</div>';
  
  // Add addon checkbox for papas
  if (categoryData.hasAddon) {
    html += `
      <div class="addon-checkbox-container">
        <label class="addon-checkbox">
          <input type="checkbox" id="papasAddon" onchange="togglePapasAddon(this.checked)">
          <div class="addon-checkbox-info">
            <div class="addon-checkbox-name">Agregar ${categoryData.addonName}</div>
            <div class="addon-checkbox-price">+$${categoryData.addonPrice.toLocaleString()}</div>
          </div>
        </label>
      </div>
    `;
  }
  
  customizationContent.innerHTML = html;
}

function togglePapasAddon(checked) {
  selectedPapasAddon = checked;
}

function renderSimpleOptionsWithVariety(category, variety) {
  const categoryData = menuData[category];
  const products = categoryData.products[variety];
  const customizationContent = document.getElementById('customizationContent');
  const customizationTitle = document.getElementById('customizationTitle');
  
  customizationTitle.textContent = `${categoryData.name} de ${variety.charAt(0).toUpperCase() + variety.slice(1)}`;
  
  let html = '<div class="simple-options">';
  
  Object.keys(products).forEach(key => {
    const product = products[key];
    const imgSrc = product.image || categoryData.image;
    
    html += `
      <div class="simple-option" onclick="addSimpleProductWithVariety('${category}', '${variety}', '${key}')">
        <img loading="lazy" src="${imgSrc}" alt="${product.name}" class="simple-option-image">
        <div class="simple-option-info">
          <div class="simple-option-name">${product.name}</div>
        </div>
        <span class="simple-option-price">$${product.price.toLocaleString()}</span>
      </div>
    `;
  });
  
  html += '</div>';
  customizationContent.innerHTML = html;
}

// ========================================
// Renderizado de Personalizacion
// ========================================
function renderCustomization(category, variety = null) {
  const categoryData = menuData[category];
  const products = variety ? categoryData.products[variety] : categoryData.products;
  const customizationContent = document.getElementById('customizationContent');
  const customizationTitle = document.getElementById('customizationTitle');
  
  let title = `Personaliza tu ${categoryData.name.toLowerCase()}`;
  if (variety) {
    title = `${categoryData.name} de ${variety.charAt(0).toUpperCase() + variety.slice(1)}`;
  }
  customizationTitle.textContent = title;
  
  // Reset state
  selectedProductType = Object.keys(products)[0];
  removedIngredients = [];
  extraMedallions = 0;
  extraPapasCount = 0; // <-- NUEVO
  
  let html = '<div class="product-options">';
  
  // Product types with images
  html += `
    <div class="option-group">
      <div class="option-group-title">Tipo</div>
      <div class="product-types" id="productTypes">
  `;
  
  Object.keys(products).forEach(key => {
    const product = products[key];
    const ingredientsText = product.ingredients ? product.ingredients.join(', ') : '';
    const imgSrc = product.image || categoryData.image;
    html += `
      <div class="product-type-option ${key === selectedProductType ? 'selected' : ''}" 
           onclick="selectProductType('${key}')" data-type="${key}">
        <img loading="lazy" src="${imgSrc}" alt="${product.name}" class="product-type-image">
        <div class="product-type-info">
          <div class="product-type-name">${product.name}</div>
          ${ingredientsText ? `<div class="product-type-ingredients">${ingredientsText}</div>` : ''}
        </div>
        <div class="product-type-price">$${product.price.toLocaleString()}</div>
      </div>
    `;
  });
  
  html += '</div></div>';
  
  // Ingredients checkboxes
  const firstProduct = products[Object.keys(products)[0]];
  if (firstProduct.ingredients) {
    html += `
      <div class="option-group" id="ingredientsGroup">
        <div class="option-group-title">Quitar ingredientes (desmarque lo que no desea)</div>
        <div class="ingredients-list" id="ingredientsList">
        </div>
      </div>
    `;
  }
  
  // Extra medallions
  if (categoryData.hasMedallions) {
    html += `
      <div class="option-group">
        <div class="option-group-title">Medallones extra</div>
        <div class="medallions-counter">
          <div class="medallions-info">
            <span class="medallions-label">Agregar medallon de carne</span>
            <span class="medallions-price">$${categoryData.medallionPrice.toLocaleString()} c/u</span>
          </div>
          <div class="medallions-controls">
            <button class="medallion-btn" onclick="changeMedallions(-1)" id="medalionMinus">-</button>
            <span class="medallions-count" id="medallionsCount">0</span>
            <button class="medallion-btn" onclick="changeMedallions(1)" id="medalionPlus">+</button>
          </div>
        </div>
      </div>
    `;
  }

  // <-- NUEVO: Bloque HTML para Papas Extras
  if (categoryData.hasExtraPapas) {
    html += `
      <div class="option-group">
        <div class="option-group-title">Papas Fritas Extras</div>
        <div class="medallions-counter">
          <div class="medallions-info">
            <span class="medallions-label">Agregar porción de papas</span>
            <span class="medallions-price">$${categoryData.extraPapasPrice.toLocaleString()} c/u</span>
          </div>
          <div class="medallions-controls">
            <button class="medallion-btn" onclick="changePapas(-1)" id="papasMinus">-</button>
            <span class="medallions-count" id="papasCount">0</span>
            <button class="medallion-btn" onclick="changePapas(1)" id="papasPlus">+</button>
          </div>
        </div>
      </div>
    `;
  }
  
  // Add to order section
  html += `
    <div class="add-to-order-section">
      <div class="order-price">
        <span class="order-price-label">Total</span>
        <span class="order-price-value" id="currentPrice">$${firstProduct.price.toLocaleString()}</span>
      </div>
      <button class="btn btn-primary" onclick="addCustomProduct()">
        Agregar al pedido
      </button>
    </div>
  `;
  
  html += '</div>';
  customizationContent.innerHTML = html;
  
  // Render ingredients for the selected product type
  updateIngredientsForSelectedType();
  updateMedallionButtons();
  
  // <-- NUEVO: Actualizar botones de papas al iniciar
  if (typeof updatePapasButtons === 'function') {
    updatePapasButtons();
  }
}

// ========================================
// Actualizar ingredientes segun tipo seleccionado
// ========================================
function updateIngredientsForSelectedType() {
  const categoryData = menuData[selectedCategory];
  let products = selectedVariety ? categoryData.products[selectedVariety] : categoryData.products;
  const product = products[selectedProductType];
  const ingredientsList = document.getElementById('ingredientsList');
  
  if (!ingredientsList || !product.ingredients) return;
  
  removedIngredients = [];
  
  let html = '';
  
  // 1. GENERACIÓN DE INGREDIENTES (Con integración de Ají desmarcado)
  product.ingredients.forEach(ingredient => {
    const imgSrc = ingredientImages[ingredient] || 'images/ingredientes/default.png';
    
    // Lógica Ají: Si es 'aji', el checkbox empieza desmarcado y lo sumamos a removedIngredients
    const isAji = ingredient.toLowerCase() === 'aji';
    const checkedAttribute = isAji ? '' : 'checked';
    
    if (isAji) {
      removedIngredients.push(ingredient);
    }
    
    html += `
      <label class="ingredient-item">
        <input type="checkbox" class="ingredient-checkbox" 
               ${checkedAttribute} onchange="toggleIngredient('${ingredient}', this.checked)">
        <img loading="lazy" src="${imgSrc}" alt="${ingredient}" class="ingredient-image">
        <span class="ingredient-name">${ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</span>
      </label>
    `;
  });
  
  ingredientsList.innerHTML = html;

  // 2. INTERFAZ VISUAL DE PROMOCIONES (Mantiene el contador y el botón parpadeante)
  const titleEl = document.getElementById('customizationTitle');
  const btn = document.querySelector('.add-to-order-section .btn-primary');
  
  if (categoryData.isPromo) {
    if (titleEl) {
      titleEl.innerHTML = `
        <span style="display:block; font-size:1.3em; color:#00bfff; margin-bottom:5px;">
          Milanesa ${currentPromoCount} de ${product.promoCount}
        </span>
        <span style="font-size:0.85em; color:#ffaa00; font-weight:normal;">
          (Indique cómo va preparada esta milanesa 1 a 1)
        </span>
      `;
    }
    
    if (btn) {
      if (currentPromoCount < product.promoCount) {
        btn.textContent = `Siguiente Milanesa (${currentPromoCount}/${product.promoCount})`;
        btn.classList.add('btn-parpadeo-continuo');
      } else {
        btn.textContent = "Completada (Agregar al pedido)";
        btn.classList.remove('btn-parpadeo-continuo');
      }
    }
  } else {
    // Si no es promo, diseño estándar
    if (titleEl) {
      let title = `Personaliza tu ${categoryData.name.toLowerCase()}`;
      if (selectedVariety) {
        title = `${categoryData.name} de ${selectedVariety.charAt(0).toUpperCase() + selectedVariety.slice(1)}`;
      }
      titleEl.textContent = title;
    }
    if (btn) {
      btn.textContent = "Agregar al pedido";
      btn.classList.remove('btn-parpadeo-continuo');
    }
  }
}

// ========================================
// Seleccion de Tipo de Producto
// ========================================
function selectProductType(type) {
  selectedProductType = type;
  
  // Update visual selection
  document.querySelectorAll('.product-type-option').forEach(el => {
    el.classList.remove('selected');
    if (el.dataset.type === type) {
      el.classList.add('selected');
    }
  });
  
  // Update ingredients list for the new type
  updateIngredientsForSelectedType();
  updateCurrentPrice();
}

// ========================================
// Toggle de Ingredientes
// ========================================
function toggleIngredient(ingredient, isChecked) {
  const isAji = ingredient.toLowerCase() === 'aji';
  
  if (isAji) {
    // Si el ají está marcado, lo quitamos de 'removedIngredients' (o sea, lo añadimos al pedido)
    if (isChecked) {
      removedIngredients = removedIngredients.filter(i => i !== ingredient);
    } else {
      removedIngredients.push(ingredient);
    }
  } else {
    // Lógica normal para los otros ingredientes
    if (!isChecked) {
      removedIngredients.push(ingredient);
    } else {
      removedIngredients = removedIngredients.filter(i => i !== ingredient);
    }
  }
}

// ========================================
// Control de Medallones
// ========================================
function changeMedallions(delta) {
  const categoryData = menuData[selectedCategory];
  const newValue = extraMedallions + delta;
  
  if (newValue >= 0 && newValue <= categoryData.maxMedallions) {
    extraMedallions = newValue;
    document.getElementById('medallionsCount').textContent = extraMedallions;
    updateMedallionButtons();
    updateCurrentPrice();
  }
}

function updateMedallionButtons() {
  const categoryData = menuData[selectedCategory];
  if (!categoryData || !categoryData.hasMedallions) return;
  
  const minusBtn = document.getElementById('medalionMinus');
  const plusBtn = document.getElementById('medalionPlus');
  
  if (minusBtn) minusBtn.disabled = extraMedallions <= 0;
  if (plusBtn) plusBtn.disabled = extraMedallions >= categoryData.maxMedallions;
}

// ========================================
// Actualizacion de Precio
// ========================================
function updateCurrentPrice() {
  const categoryData = menuData[selectedCategory];
  let products;
  
  if (selectedVariety) {
    products = categoryData.products[selectedVariety];
  } else {
    products = categoryData.products;
  }
  
  const product = products[selectedProductType];
  let price = product.price;
  
  if (categoryData.hasMedallions) {
    price += extraMedallions * categoryData.medallionPrice;
  }
  
  // <-- NUEVO: Sumar precio de las papas extras
  if (categoryData.hasExtraPapas && extraPapasCount > 0) {
    price += extraPapasCount * categoryData.extraPapasPrice;
  }
  
  document.getElementById('currentPrice').textContent = `$${price.toLocaleString()}`;
}



// ========================================
// Agregar Producto Personalizado
// ========================================
function addCustomProduct() {
  const categoryData = menuData[selectedCategory];
  let products = selectedVariety ? categoryData.products[selectedVariety] : categoryData.products;
  const product = products[selectedProductType];
  
  let price = product.price;
  let details = [];
  
  if (categoryData.hasMedallions && extraMedallions > 0) {
    price += extraMedallions * categoryData.medallionPrice;
    details.push(`+${extraMedallions} medallon${extraMedallions > 1 ? 'es' : ''}`);
  }

  // <-- NUEVO: Guardar precio y detalle de las papas
  if (categoryData.hasExtraPapas && extraPapasCount > 0) {
    price += extraPapasCount * categoryData.extraPapasPrice;
    details.push(`+${extraPapasCount} porción${extraPapasCount > 1 ? 'es' : ''} de papas extra`);
  }
  
  // Filtramos para saber qué ingredientes quitar y cuáles agregar (como el ají)
  const toRemove = removedIngredients.filter(i => i.toLowerCase() !== 'aji');
  const toAdd = removedIngredients.filter(i => i.toLowerCase() === 'aji' && !removedIngredients.includes('aji'));
  const ajiMarcado = document.querySelector('input[onchange*="aji"]')?.checked;

  if (toRemove.length > 0) {
    details.push(`Sin: ${toRemove.join(', ')}`);
  }
  if (ajiMarcado) {
    details.push(`Con Ají`);
  }

  // LÓGICA DE ALMACENAMIENTO PARA PROMOCIONES
  if (categoryData.isPromo) {
    let descripcionItem = `Mila ${currentPromoCount}`;
    if (details.length > 0) descripcionItem += ` (${details.join(' | ')})`;
    configuredPromoItems.push(descripcionItem);

    if (currentPromoCount < product.promoCount) {
      currentPromoCount++;
      updateIngredientsForSelectedType();
      return; 
    } else {
      details = [configuredPromoItems.join('\n   ↳ ')];
    }
  }
  
  // Guardado final en el carrito
  const orderItem = {
    id: Date.now(),
    name: product.name,
    price: price,
    details: details.join(' | '),
    image: product.image || categoryData.image,
    category: selectedCategory
  };
  
  orderItems.push(orderItem);
  updateOrderSummary();
  
  document.getElementById('addedItemName').textContent = product.name + ' agregado al pedido';
  showStep('step4');
  
  if (typeof animarBotonOtroPedido === 'function') {
    animarBotonOtroPedido();
  }

  // Reiniciamos variables
  currentPromoCount = 1;
  configuredPromoItems = [];
}
 
// ========================================
// Agregar Producto Simple
// ========================================
function addSimpleProduct(category, productKey) {
  const categoryData = menuData[category];
  const product = categoryData.products[productKey];
  
  let price = product.price;
  let details = '';
  
  // Check for papas addon
  if (categoryData.hasAddon && selectedPapasAddon) {
    price += categoryData.addonPrice;
    details = `Con ${categoryData.addonName}`;
  }
  
  const orderItem = {
    id: Date.now(),
    name: product.name,
    price: price,
    details: details,
    image: product.image || categoryData.image,
    category: category
  };
  
  orderItems.push(orderItem);
  updateOrderSummary();
  
  document.getElementById('addedItemName').textContent = product.name + ' agregado al pedido';
  showStep('step4');
  animarBotonOtroPedido();
}

function addSimpleProductWithVariety(category, variety, productKey) {
  const categoryData = menuData[category];
  const product = categoryData.products[variety][productKey];
  
  const orderItem = {
    id: Date.now(),
    name: product.name,
    price: product.price,
    details: '',
    image: product.image || categoryData.image,
    category: category
  };
  
  orderItems.push(orderItem);
  updateOrderSummary();
  
  document.getElementById('addedItemName').textContent = product.name + ' agregado al pedido';
  showStep('step4');
}

// ========================================
// Bebidas
// ========================================
function showBeverages() {
  showStep('beveragesSection');
  renderBeverages();
}

function renderBeverages() {
  const beveragesGrid = document.getElementById('beveragesGrid');
  const beverages = menuData.bebidas.products;
  
  beveragesGrid.innerHTML = '';
  
  Object.keys(beverages).forEach(key => {
    const beverage = beverages[key];
    const beverageItem = document.createElement('div');
    beverageItem.className = 'beverage-item';
    beverageItem.onclick = () => addBeverage(key);
    
    beverageItem.innerHTML = `
      <img loading="lazy" src="${menuData.bebidas.image}" alt="${beverage.name}" class="beverage-image">
      <div class="beverage-name">${beverage.name}</div>
      <div class="beverage-price">$${beverage.price.toLocaleString()}</div>
    `;
    
    beveragesGrid.appendChild(beverageItem);
  });
}

function addBeverage(beverageKey) {
  const beverage = menuData.bebidas.products[beverageKey];
  
  const orderItem = {
    id: Date.now(),
    name: beverage.name,
    price: beverage.price,
    details: '',
    image: menuData.bebidas.image,
    category: 'bebidas'
  };
  
  orderItems.push(orderItem);
  updateOrderSummary();
  
  document.getElementById('addedItemName').textContent = beverage.name + ' agregado al pedido';
  showStep('step4');
}

// ========================================
// Navegacion
// ========================================
function showStep(stepId) {
  document.querySelectorAll('.step').forEach(step => {
    step.classList.remove('active');
  });
  document.getElementById(stepId).classList.add('active');
}

function goBack(toStep) {
  if (toStep === 1) {
    // Si volvemos al inicio de todo, limpiamos todas las variables
    resetSelections();
  } else if (toStep === 2) {
    // Si volvemos al paso 2 (Variedades), MANTENEMOS la categoría,
    // solo limpiamos la variedad elegida para que elija de nuevo.
    selectedVariety = null;
  }
  
  showStep('step' + toStep);
}

function goBackFromStep3() {
  // Validación de seguridad por si se perdió la memoria de la categoría
  if (!selectedCategory || !menuData[selectedCategory]) {
    goBack(1);
    return;
  }

  const categoryData = menuData[selectedCategory];
  if (categoryData.hasVariety) {
    // Si tiene variedades (como Milanesas), vuelve al paso 2
    goBack(2);
  } else {
    // Si es un producto directo, vuelve al menú principal
    goBack(1);
  }
}

function addAnotherOrder() {
  resetSelections();
  showStep('step1');
}

function resetSelections() {
  selectedCategory = null;
  selectedVariety = null;
  selectedProductType = null;
  removedIngredients = [];
  extraMedallions = 0;
  selectedPapasAddon = false;
  extraPapasCount = 0; // <-- NUEVO: Reiniciar papas
  currentPromoCount = 1;
  configuredPromoItems = [];
}

// ========================================
// Resumen del Pedido
// ========================================
function updateOrderSummary() {
  const summaryItems = document.getElementById('summaryItems');
  const itemCount = document.getElementById('itemCount');
  const totalPrice = document.getElementById('totalPrice');
  const sendOrderBtn = document.getElementById('sendOrderBtn');
  
  const orderSummaryContainer = document.getElementById('orderSummary'); 
  
  itemCount.textContent = orderItems.length;
  
  const total = orderItems.reduce((sum, item) => sum + item.price, 0);
  totalPrice.textContent = total.toLocaleString();
  
  sendOrderBtn.disabled = orderItems.length === 0;
  
  if (orderItems.length > 0) {
    if(orderSummaryContainer) orderSummaryContainer.classList.add('resaltado-activo-animado'); 
  } else {
    if(orderSummaryContainer) orderSummaryContainer.classList.remove('resaltado-activo-animado');
  }
  
  if (orderItems.length === 0) {
    summaryItems.innerHTML = '<div class="empty-order">Tu pedido esta vacio</div>';
    return;
  }
  
  summaryItems.innerHTML = orderItems.map(item => `
    <div class="summary-item">
      <img loading="lazy" src="${item.image}" alt="${item.name}" class="summary-item-image">
      <div class="summary-item-info">
        <div class="summary-item-name">${item.name}</div>
        ${item.details ? `<div class="summary-item-details" style="white-space: pre-line;">${item.details.replace(/\n/g, '<br>')}</div>` : ''}
      </div>
      <div class="summary-item-price">$${item.price.toLocaleString()}</div>
      <button class="btn btn-danger" onclick="removeItem(${item.id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>
  `).join('');
}

function removeItem(itemId) {
  orderItems = orderItems.filter(item => item.id !== itemId);
  updateOrderSummary();
}

function toggleSummary() {
  const summary = document.getElementById('orderSummary');
  summaryExpanded = !summaryExpanded;
  summary.classList.toggle('expanded', summaryExpanded);
}

// ========================================
// Envio por WhatsApp
// ========================================
// Funciones para manejar el cartel de checkout
function abrirCartelCheckout() {
  if (orderItems.length === 0) return;
  document.getElementById('modalCheckout').style.display = 'flex';
}

function cerrarCartelCheckout() {
  document.getElementById('modalCheckout').style.display = 'none';
}

function toggleDireccion() {
  const tipoEntrega = document.getElementById('tipoEntrega').value;
  const grupoDireccion = document.getElementById('grupoDireccion');
  
  if (tipoEntrega === 'Envío a domicilio') {
    grupoDireccion.style.display = 'flex';
  } else {
    grupoDireccion.style.display = 'none';
  }
}

// Envio por WhatsApp ACTUALIZADO
// ========================================
// Envio por WhatsApp ACTUALIZADO (Dirección Manual + GPS)
// ========================================
// Envio por WhatsApp ACTUALIZADO (Dirección Manual + Referencia + GPS)
// ========================================
function sendWhatsApp() {
  if (orderItems.length === 0) return;
  
  // 1. Capturar los datos básicos
  const nombre = document.getElementById('clienteNombre').value.trim();
  const entrega = document.getElementById('tipoEntrega').value;
  const pago = document.getElementById('metodoPago').value;
  
  let direccionManual = "";
  let referencia = "";
  let linkGps = "";

  // Validar nombre
  if (nombre === '') {
    alert("Por favor, ingresa tu nombre y apellido.");
    return;
  }

  // 2. Validar que completó los campos si es envío a domicilio
  if (entrega === 'Envío a domicilio') {
    direccionManual = document.getElementById('clienteDireccion').value.trim();
    referencia = document.getElementById('clienteReferencia').value.trim(); // Capturamos la referencia
    linkGps = document.getElementById('gpsLink').value;
    
    if (direccionManual === '') {
      alert("Por favor, escribe tu dirección exacta (Calle, número, barrio).");
      return;
    }
    
    
  }
  
  // 3. Armar el encabezado del mensaje
  let message = '🍔 *NUEVO PEDIDO*\n\n';
  message += `👤 *Cliente:* ${nombre}\n`;
  message += `🛵 *Entrega:* ${entrega}\n`;
  
  // Agregamos Dirección, Referencia (solo si escribió algo) y GPS al mensaje
  // Agregamos Dirección, Referencia y GPS (solo si está presente)
  if (entrega === 'Envío a domicilio') {
    message += `📍 *Dirección escrita:* ${direccionManual}\n`;
    
    if (referencia !== '') {
      message += `🏠 *Referencia:* ${referencia}\n`;
    }
    
    // Solo agregamos el mapa si el usuario presionó el botón
    if (linkGps !== '') {
      message += `🗺️ *Mapa (GPS):* ${linkGps}\n`;
    }
  }
  
  message += `💳 *Pago:* ${pago}\n`;
  
  // NUEVO: Agregamos el alias y el aviso solo si es transferencia
  if (pago === 'Transferencia') {
    message += `🏦 *ALIAS:* Germandk\n`;
    message += `⚠️ *POR FAVOR, ENVÍE COMPROBANTE*\n`;
  }
  
  message += '─────────────────\n\n';
  
  // 4. Agrupar items por categoría
  const categories = {
    sandwiches: [],
    milanesaNapolitana: [],
    pizzas: [],
    empanadas: [],
    papas: [],
    bebidas: [],
    promociones: [] // <-- ¡ESTO FALTABA Y CAUSABA EL ERROR!
  };
  
  orderItems.forEach(item => {
    if (item.category === 'milanesas' || item.category === 'lomitos' || item.category === 'hamburguesas') {
      categories.sandwiches.push(item);
    } else if (item.category === 'milanesaNapolitana') {
      categories.milanesaNapolitana.push(item);
    } else if (item.category === 'pizzas') {
      categories.pizzas.push(item);
    } else if (item.category === 'empanadas') {
      categories.empanadas.push(item);
    } else if (item.category === 'papas') {
      categories.papas.push(item);
    } else if (item.category === 'bebidas') {
      categories.bebidas.push(item);
    }else if (item.category === 'promociones') { 
      // <-- AQUÍ ATRAPAMOS LAS PROMOS
      categories.promociones.push(item);
    }
  });
  
  // 5. Construir el detalle del pedido
  if (categories.sandwiches.length > 0) {
    message += '🥪 *SANDWICHES:*\n';
    categories.sandwiches.forEach(item => {
      message += `• ${item.name}`;
      if (item.details) message += ` (${item.details})`;
      message += ` - $${item.price.toLocaleString()}\n`;
    });
    message += '\n';
  }
  
  if (categories.milanesaNapolitana.length > 0) {
    message += '🍖 *MILANESA NAPOLITANA:*\n';
    categories.milanesaNapolitana.forEach(item => {
      message += `• ${item.name} - $${item.price.toLocaleString()}\n`;
    });
    message += '\n';
  }
  // NUEVO: Bloque para imprimir las promociones en WhatsApp
  if (categories.promociones.length > 0) {
    message += '🎁 *PROMOCIONES:*\n';
    categories.promociones.forEach(item => {
      message += `• ${item.name} - $${item.price.toLocaleString()}\n`;
      if (item.details) {
        // Esto asegura que cada milanesa de la promo se vea en una línea nueva con una flechita
        const detallesFormateados = item.details.replace(/\n/g, '\n   ↳ ');
        message += `   ↳ ${detallesFormateados}\n`;
      }
    });
    message += '\n';
  }
  
  if (categories.pizzas.length > 0) {
    message += '🍕 *PIZZAS:*\n';
    categories.pizzas.forEach(item => {
      message += `• ${item.name} - $${item.price.toLocaleString()}\n`;
    });
    message += '\n';
  }
  
  if (categories.empanadas.length > 0) {
    message += '🥟 *EMPANADAS:*\n';
    categories.empanadas.forEach(item => {
      message += `• ${item.name} - $${item.price.toLocaleString()}\n`;
    });
    message += '\n';
  }
  
  if (categories.papas.length > 0) {
    message += '🍟 *PAPAS FRITAS:*\n';
    categories.papas.forEach(item => {
      message += `• ${item.name}`;
      if (item.details) message += ` (${item.details})`;
      message += ` - $${item.price.toLocaleString()}\n`;
    });
    message += '\n';
  }
  
  if (categories.bebidas.length > 0) {
    message += '🥤 *BEBIDAS:*\n';
    categories.bebidas.forEach(item => {
      message += `• ${item.name} - $${item.price.toLocaleString()}\n`;
    });
    message += '\n';
  }
  
  const total = orderItems.reduce((sum, item) => sum + item.price, 0);
  message += '─────────────────\n';
  message += `💰 *TOTAL: $${total.toLocaleString()}*`;
  
  // 6. Cerrar el modal y enviar a WhatsApp
  cerrarCartelCheckout();
  
  // --- INICIO DE CONTEO EN GOOGLE SHEETS ---
  // Reemplaza esto con el enlace larguísimo que copiaste en el Paso 3
  const urlGoogleSheet = 'https://script.google.com/macros/s/AKfycbwpoeVxaB6LC84nHx7Hz-U1IoZMerpmf9G0NFWKUNPjxO-HKrsvEjS-ysY1bcGQyr7NVw/exec';
  
  // Enviamos los datos de fondo sin que el usuario lo note
  fetch(urlGoogleSheet, {
    method: 'POST',
    mode: 'no-cors', // Evita bloqueos de seguridad del navegador al enviar a Google
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cliente: nombre,
      entrega: entrega,
      total: total
    })
  }).catch(error => console.error('Error en el conteo interno:', error));
  // --- FIN DE CONTEO EN GOOGLE SHEETS ---

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}



function cambiarMetodoDir() {
  const metodo = document.querySelector('input[name="metodoDir"]:checked').value;
  if (metodo === 'manual') {
    document.getElementById('dirManual').style.display = 'block';
    document.getElementById('dirGps').style.display = 'none';
  } else {
    document.getElementById('dirManual').style.display = 'none';
    document.getElementById('dirGps').style.display = 'block';
  }
}

function obtenerUbicacion() {
  const status = document.getElementById('gpsStatus');
  const linkInput = document.getElementById('gpsLink');
  
  status.textContent = "Buscando ubicación... Por favor acepta los permisos.";
  status.style.color = "#00bfff";
  
  if (!navigator.geolocation) {
    status.textContent = "Tu navegador no soporta geolocalización.";
    status.style.color = "#ff4444";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      // Link estándar de Google Maps
      linkInput.value = `https://www.google.com/maps?q=${lat},${lng}`;
      
      status.textContent = "✅ Ubicación obtenida correctamente";
      status.style.color = "#00C851"; // Verde
    },
    (error) => {
      console.error(error);
      status.textContent = "❌ Error al obtener ubicación. Revisa tu GPS.";
      status.style.color = "#ff4444"; // Rojo
    },
    { enableHighAccuracy: true }
  );
}
function validarInputDireccion() {
  const direccion = document.getElementById('clienteDireccion').value.trim();
  const btnGps = document.getElementById('btnGps');
  const status = document.getElementById('gpsStatus');
  
  // Si escribió al menos 4 caracteres, habilitamos el botón
  if (direccion.length > 3) {
    btnGps.disabled = false;
    btnGps.style.opacity = "1";
    btnGps.style.cursor = "pointer";
    status.textContent = "Haz clic para confirmar esta dirección por GPS";
    status.style.color = "#ccc";
  } else {
    // Si borra el texto, volvemos a deshabilitar el botón
    btnGps.disabled = true;
    btnGps.style.opacity = "0.5";
    btnGps.style.cursor = "not-allowed";
    status.textContent = "⚠️ Escribe tu dirección arriba para habilitar el GPS";
    status.style.color = "#ffaa00";
    
    // Si borra el texto, también reseteamos el link del GPS por seguridad
    document.getElementById('gpsLink').value = "";
  }
}



//BOTON nuevo pedido parpadea
function animarBotonOtroPedido() {
  const boton = document.getElementById('btnOtroPedido');
  if (boton) {
    // Quitamos la clase por si ya la tenía de un pedido anterior
    boton.classList.remove('animacion-parpadeo');
    // Este truco (reflow) fuerza al navegador a reiniciar la animación
    void boton.offsetWidth; 
    // Agregamos la clase para que parpadee 2 veces
    boton.classList.add('animacion-parpadeo');
  }
}