# Akshar Marbles

## Project Documentation

This guide explains the Akshar Marbles project in beginner-friendly language. It is written in Markdown so it can be printed or converted to PDF.

> **Project type:** Static, multi-page HTML/CSS/JavaScript storefront with a browser-based administration console.

---

# 1. PROJECT OVERVIEW

## What the project is

Akshar Marbles is an online showroom for premium marble, granite, and onyx products. Customers can browse a product catalogue, filter and sort products, open product details, add products to a cart, apply promotional codes, and view a sample order-tracking page.

The project also includes an admin console. An administrator can view dashboard metrics, inventory, customers, logistics, and pricing screens. The pricing screen can read and modify the supplied Excel workbook in the browser.

## Problem it solves

Traditional stone showrooms require customers to visit in person and make it difficult to compare products. This project provides a polished digital catalogue where customers can:

- Discover stones by category, origin, finish, color, price, or availability.
- See images, ratings, specifications, prices, and stock information.
- Build a cart using square feet as the quantity unit.
- See discounts and GST before checkout.
- Access a responsive experience on desktop and mobile screens.

For staff, the admin area brings catalogue, pricing, stock, customer, delivery, and report views into one interface.

## Main features

### Customer storefront

- Luxury landing page with hero content, collections, bestsellers, promises, sale banner, and footer.
- Centralized navigation bar loaded from `components/navbar.html`.
- Browse page backed by `assets/data/akshar_marbles_product_data.xlsx`.
- Search, multi-select filters, price slider, sorting, grid/list view, pagination, and wishlist toggles.
- Product detail page with dynamic gallery, price, stock, technical specifications, ratings, and quantity controls.
- Cart page with quantity changes, remove actions, item savings, GST, promo codes, and checkout payload creation.
- Demo client login and registration.
- Sample order tracking page.
- Story video modal on the home page.

### Administration

- Demo admin login and route protection.
- Generated sidebar navigation and breadcrumbs.
- Dashboard KPI cards, chart-like visualizations, order summaries, and status statistics.
- Inventory table and stock indicators.
- Customer management screen.
- Logistics and delivery screen.
- Pricing and discounts screen with Excel-backed price editing.

## Target users

1. **Homeowners and retail customers** looking for marble or other decorative stone.
2. **Interior designers, architects, contractors, and builders** comparing materials for projects.
3. **Sales and operations staff** managing customers, inventory, orders, and delivery.
4. **Administrators** maintaining prices and promotional information.

## Important scope note

This is currently a front-end demonstration. Authentication, orders, payments, inventory persistence, and delivery data are not connected to a production server or database. The browser simulates these features with local data and browser storage.

---

# 2. PROJECT STRUCTURE

## Full folder and file tree

```text
akshar-marbles/
├── .gitattributes                         Git text-file normalization rules
├── index.html                             Customer home page
├── PROJECT_DOCUMENTATION.md                This documentation
├── admin/
│   ├── login.html                          Admin sign-in page
│   ├── dashboard.html                      Admin dashboard and reports
│   ├── inventory.html                      Inventory overview
│   ├── pricing-discounts.html              Product price and discount editor
│   ├── customers.html                      Customer management screen
│   └── logistics.html                      Logistics and delivery screen
├── pages/
│   ├── browse.html                         Product catalogue and filters
│   ├── product.html                        Product detail template
│   ├── cart.html                           Shopping cart and order summary
│   ├── login.html                          Customer sign-in page
│   ├── register.html                       Customer registration page
│   └── orders.html                         Sample order tracking page
├── components/
│   ├── navbar.html                         Reusable storefront navigation markup
│   ├── navbar.js                           Loads and activates the storefront navigation
│   ├── auth.js                             Demo authentication and route guards
│   └── admin-nav.js                        Admin sidebar, breadcrumbs, and mobile menu
├── assets/
│   ├── data/
│   │   └── akshar_marbles_product_data.xlsx
│   │                                         Product catalogue and pricing workbook
│   ├── css/
│   │   ├── base/
│   │   │   ├── common.css                  Shared storefront header and base styles
│   │   │   ├── site.css                    Older/general site styles
│   │   │   └── storefront.css              Imports the storefront stylesheet set
│   │   ├── pages/
│   │   │   ├── home.css                    Home page styles
│   │   │   ├── browse.css                  Catalogue and filter styles
│   │   │   ├── product.css                 Product detail styles
│   │   │   ├── cart.css                    Cart and summary styles
│   │   │   ├── orders.css                  Order tracking styles
│   │   │   └── auth.css                    Login and registration styles
│   │   └── admin/
│   │       ├── admin-pages.css             Shared admin page styles
│   │       └── dashboard.css               Dashboard-specific styles
│   ├── js/
│   │   ├── data/
│   │   │   └── products.js                 Small fallback/product data set
│   │   ├── pages/
│   │   │   ├── home.js                     Story video modal behavior
│   │   │   ├── browse.js                   Excel loading, filtering, and catalogue rendering
│   │   │   ├── product.js                  Excel product detail loading and rendering
│   │   │   └── cart.js                     Cart state, totals, promo, and checkout behavior
│   │   └── admin/
│   │       └── pricing-discounts.js         Excel price editor behavior
│   ├── images/
│   │   ├── Arabescato-Corchia-Marble.png    Arabescato marble image
│   │   ├── Makrana-Marble-2.png             Makrana marble image
│   │   ├── Statuario white Italian marble slab with dramatic grey veining, polished surface, luxury material ph.png
│   │   │                                         Statuario product image
│   │   ├── Calacatta Gold Italian marble with golden yellow veins on white background, luxury interior stone, p.png
│   │   │                                         Calacatta product image
│   │   ├── Nero Marquina black marble with white veins, Spain, luxury dark stone slab, polished surface close-u.png
│   │   │                                         Nero Marquina product image
│   │   ├── black Nero Marquina Spanish marble texture with white veins, luxury stone surface, premium quality.png
│   │   │                                         Nero Marquina texture image
│   │   ├── Rajasthan white makrana marble India, traditional Indian marble flooring pattern, natural stone luxu.png
│   │   │                                         Rajasthan/Makrana product image
│   │   ├── glowing translucent green onyx stone with backlit illumination, luxury precious stone, interior desi.png
│   │   │                                         Onyx interior image
│   │   ├── translucent green onyx stone slab with backlit glow, exotic luxury interior material, jewel-like nat.png
│   │   │                                         Onyx product image
│   │   ├── luxurious Italian Carrara marble interior, grand foyer with marble floor and walls, elegant chandeli@2x.png
│   │   │                                         Home hero interior image
│   │   ├── polished Italian white Carrara marble surface close-up, elegant veining pattern, luxury stone textur.png
│   │   │                                         Carrara texture image
│   │   ├── background/
│   │   │   └── elegant_marble_background_with_gold_glitter_2605.jpg
│   │   │                                         Authentication page background
│   │   └── vertical-product thumbnails/
│   │       ├── P001/1.png                    P001 gallery image 1
│   │       ├── P001/2.png                    P001 gallery image 2
│   │       ├── P001/3.png                    P001 gallery image 3
│   │       ├── P002/1.png                    P002 gallery image 1
│   │       ├── P002/2.png                    P002 gallery image 2
│   │       ├── P002/3.png                    P002 gallery image 3
│   │       ├── P003/1.png                    P003 gallery image 1
│   │       ├── P003/2.png                    P003 gallery image 2
│   │       ├── P003/3.png                    P003 gallery image 3
│   │       ├── P004/1.png                    P004 gallery image 1
│   │       ├── P004/2.png                    P004 gallery image 2
│   │       ├── P004/3.png                    P004 gallery image 3
│   │       ├── P005/1.png                    P005 gallery image 1
│   │       ├── P005/2.png                    P005 gallery image 2
│   │       ├── P005/3.png                    P005 gallery image 3
│   │       ├── P006/1.png                    P006 gallery image 1
│   │       ├── P006/2.png                    P006 gallery image 2
│   │       └── P006/3.png                    P006 gallery image 3
│   ├── avatar-ananya.svg                    Demo client avatar
│   ├── avatar-anil.svg                      Demo customer avatar
│   ├── avatar-meera.svg                     Demo customer avatar
│   ├── avatar-priya.svg                     Demo customer avatar
│   ├── avatar-rajan.svg                     Demo admin avatar
│   ├── avatar-rohan.svg                     Demo customer avatar
│   ├── avatar-vikram.svg                    Demo customer avatar
│   └── videos/
│       └── gemini_generated_video_2e57a4c1.mp4
│                                             Home-page brand story video
```

### Image files

The `assets/images` directory contains the supplied product and interior PNG files, including Statuario White, Calacatta Gold, Nero Marquina, Makrana White, Onyx Green, Carrara, and other visual assets. The seven SVG avatar files represent demo users.

The `vertical-product thumbnails/P001` through `P006` folders contain three numbered PNGs each. They are intended for product galleries, although the current Excel paths determine which gallery images are actually loaded.

---

# 3. TECHNOLOGIES USED

## Core technologies

- **HTML5:** Page structure, forms, navigation, semantic sections, tables, video, and accessible labels.
- **CSS3:** Layout, color system, responsive breakpoints, transitions, modal states, cards, tables, and dashboard styling.
- **Modern JavaScript:** DOM manipulation, event listeners, modules wrapped in immediately invoked functions, URL parameters, browser storage, and asynchronous file loading.

## Libraries and external resources

### SheetJS

Browse, product, and pricing screens load SheetJS from this CDN:

```html
<script src="https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js"></script>
```

SheetJS exposes the global `XLSX` object. The project uses it to read the `Products` worksheet from the Excel workbook and to write edited pricing data.

There is no `package.json`, build system, framework, or server-side API in the repository. No web font CDN is used; most decorative headings use the browser's Georgia serif font and body text uses system sans-serif fonts.

## Browser APIs used

- `localStorage` for demo authentication, carts, and checkout data.
- `sessionStorage` for the currently applied cart promo code.
- `fetch()` for the navbar component and Excel workbook.
- `URLSearchParams` for product IDs and browse filters.
- `CustomEvent` for authentication, product-loading, and cart-change notifications.
- `navigator.clipboard` for the product share button.
- `showOpenFilePicker()` and the File System Access API where supported by the browser.
- HTML video playback and CSS animation events.

---

# 4. HTML EXPLANATION

## Shared page structure

Most storefront pages follow this pattern:

```html
<body>
  <div id="site-navbar"></div>
  <nav class="breadcrumbs-bar">...</nav>
  <main class="store-container">...</main>
  <script src="../components/auth.js"></script>
  <script src="../components/navbar.js"></script>
</body>
```

The `site-navbar` container is filled at runtime by `navbar.js`. Each page then supplies its own main content and page-specific CSS/JavaScript.

## Home page: `index.html`

The home page contains:

1. A dynamically injected navigation bar.
2. A dark hero section with a headline, calls to action, statistics, and a large image.
3. A collection grid linking to category-filtered browse URLs.
4. A bestseller product grid.
5. A four-card promise section.
6. A static sale banner.
7. A footer with collection, company, support, and admin links.
8. A hidden story modal containing the MP4 video.

Important IDs include:

- `site-navbar`: navbar insertion point.
- `collections`: category section anchor.
- `about`: promise/about anchor.
- `contact`: footer anchor.
- `watch-story-button`: opens the story modal.
- `story-modal`: modal container.
- `story-modal-title`: accessible modal title.

## Browse page: `pages/browse.html`

The browse page has:

- Breadcrumb navigation.
- Search input `#browse-search-input`.
- Sort menu `#sort-dropdown-wrapper`.
- Grid/list view buttons.
- Filter button for mobile layouts.
- Sidebar filters for category, price, finish, color, origin, and availability.
- Empty product grid `.browse-products-grid`.
- Dynamic pagination `.browse-pagination-wrapper`.

The HTML contains filter labels with `data-group` and `data-value` attributes. JavaScript reads these attributes rather than hard-coding every click handler.

Example:

```html
<label class="filter-checkbox-item"
       data-group="category"
       data-value="Italian Marble">
  <span class="custom-box"></span>
  <span>Italian Marble</span>
</label>
```

## Product page: `pages/product.html`

The product page is a template. It starts mostly empty and uses `data-product-field` markers for JavaScript to insert values:

```html
<h1 data-product-field="title"></h1>
<span data-product-field="price"></span>
<div data-product-field="stock"></div>
```

The layout includes:

- Breadcrumbs.
- Vertical gallery thumbnails and a main image.
- Product badges and wishlist/share controls.
- Category, SKU, title, description, rating, price, and savings.
- Origin, finish, tile size, and thickness details.
- Quantity stepper and add-to-cart/buy-now buttons.
- Technical specification rows marked with `data-spec-row`.
- Rating summary and sample review cards.

The URL query string supplies the product ID:

```text
pages/product.html?id=SKU-0021
```

## Cart page: `pages/cart.html`

The cart page has two main columns:

- The left column contains the dynamic item list and promo code form.
- The right column contains the order summary, delivery message, checkout link, accepted payment labels, and trust badges.

Important dynamic IDs include `cart-items-list`, `summary-items-list`, `summary-subtotal`, `summary-discount`, `summary-gst`, `summary-total`, `promo-code-input`, and `checkout-button`.

The initial item markup is a visual fallback. `cart.js` replaces it with the actual cart stored for the current user or guest.

## Login and registration pages

`pages/login.html` contains a client login form with email, password visibility toggle, and quick-login button.

`pages/register.html` contains a registration form for name, email, password, address, and agreement fields. The current demo handler stores only a small user object; it does not persist every visible form field.

`admin/login.html` has a separate admin form and shows an alert when an unauthenticated user is redirected with `reason=unauthorized`.

## Orders page

`pages/orders.html` is a static tracking presentation. It displays order status, progress, courier information, delivery address/details, and sample order items. It does not currently load order data from checkout storage or an API.

## Admin pages

The admin pages provide placeholders for:

- `dashboard.html`: KPI cards, sales-style chart, status donut, recent orders, and top products.
- `inventory.html`: metrics and inventory table.
- `customers.html`: customer search, profile, and order links.
- `logistics.html`: delivery and shipment information.
- `pricing-discounts.html`: dynamic Excel-backed pricing table and static promo-code cards.

Most admin pages contain an empty `<aside></aside>` and a normal `<main>`. `admin-nav.js` fills the sidebar and adds mobile controls and breadcrumbs.

## How HTML connects to CSS and JavaScript

Each HTML file links to CSS using a relative path based on its directory. For example, a page in `pages/` uses `../assets/css/...`, while the root `index.html` uses `assets/css/...`.

Scripts are loaded near the end of `<body>` so the important DOM nodes already exist. Script order matters:

1. `auth.js` defines `window.AksharAuth`.
2. `navbar.js` injects and initializes the shared navigation.
3. `products.js` supplies fallback product data where needed.
4. Page-specific scripts load or render page content.

The browse, product, and pricing pages also load SheetJS before their own scripts.

---

# 5. CSS EXPLANATION

## Design approach

The visual language is a luxury showroom design:

- Deep forest green for primary brand surfaces.
- Warm beige and off-white backgrounds.
- Gold accents for premium labels and discounts.
- Dark green or charcoal text.
- Serif headings, usually Georgia, paired with system sans-serif body text.
- Soft shadows, rounded cards, thin borders, and generous whitespace.

Common CSS variables are defined in the base and admin stylesheets. Typical values include:

```css
:root {
  --g: #164a38;       /* brand green */
  --gold: #c5a46d;    /* premium accent */
  --c: #eee9de;       /* canvas beige */
  --p: #fcfbf7;       /* pale surface */
  --text-dark: #17231d;
}
```

## Base styles

- `common.css` defines the storefront header, brand, navigation, buttons, user menu, breadcrumbs, containers, and reusable cards.
- `site.css` contains a smaller/general style system and appears to be older or less central.
- `storefront.css` imports `common.css` and all storefront page styles, providing an optional single-entry stylesheet.

## Page styles

### `home.css`

Styles the hero grid, hero image, collection cards, bestseller cards, promise cards, sale banner, footer, and story modal. The modal uses `.is-open` and `.is-closing` classes to control visibility and closing animation.

### `browse.css`

Styles the catalogue header, search box, filters sidebar, active filter chips, product grid, list view, product cards, pagination, empty state, and mobile filter drawer.

### `product.css`

Styles the two-column product detail layout, gallery, thumbnails, badges, product information, quantity controls, tabs, technical specification rows, reviews, and responsive stacking.

### `cart.css`

Styles cart item cards, quantity steppers, savings labels, promo form, order summary, payment badges, trust badges, and mobile layouts.

### `orders.css`

Styles order headers, status badges, progress steps, transit information, item details, address cards, and action buttons.

### `auth.css`

Styles the split login/registration card, green hero panel, background image, social proof avatars, statistics, form controls, password toggle, validation states, and mobile layout.

### Admin styles

- `admin-pages.css` provides the shared sidebar, admin header, cards, tables, badges, filter bars, buttons, profile menu, and mobile sidebar behavior.
- `dashboard.css` adds dashboard-specific KPI cards, chart visuals, order lists, and status visualization.

## Flexbox and Grid

The project uses both layout systems:

- CSS Grid handles the home hero, collection grids, browse two-column layout, product detail columns, cart columns, dashboard panels, and admin cards.
- Flexbox handles navigation links, button groups, card rows, filter controls, quantity steppers, profile areas, and mobile drawers.

## Animation and transitions

Transitions are used for hover states, buttons, active tabs, filter drawers, mobile navigation, and dropdowns. The home story modal uses CSS animation classes and listens for `animationend` before removing itself from the visual state.

## Responsive design

Responsive rules are present in the major stylesheets. Common breakpoints include approximately:

- `1024px`: reduce multi-column layouts and dashboard density.
- `860px` or `800px`: adjust authentication and shared layouts.
- `768px`: replace the browse sidebar with a mobile filter drawer.
- `640px` or `620px`: stack cards, forms, headers, and action groups for narrow screens.

The JavaScript complements these rules by adding mobile nav drawers, admin sidebar toggles, filter backdrops, body scroll locking, and Escape-key handling.

---

# 6. JAVASCRIPT EXPLANATION

## `components/auth.js`

This module exposes `window.AksharAuth`.

### Important data

- `STORAGE_KEY`: `akshar_auth_user`.
- `DEMO_USERS.client`: Ananya Sharma, client role.
- `DEMO_USERS.admin`: Rajan Mehta, admin role.

### Important functions

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `getUser()` | None | User object or `null` | Reads and parses the current user from `localStorage`. |
| `setUser(user)` | User object or `null` | None | Saves/removes the user and dispatches `akshar:auth-change`. |
| `login(identifier, role)` | Identifier string, optional role | Redirect filename | Creates a demo client/admin user based on the identifier or explicit role. |
| `logout(redirectUrl)` | Optional URL | None | Removes the user and redirects to the appropriate page. |
| `getCurrentFileName()` | None | Lowercase filename | Reads the current page name from the URL. |
| `guardAdminPage()` | None | None | Redirects non-admin users away from admin pages. |
| `guardClientAuthPage()` | None | None | Redirects already authenticated users away from the client login page. |

This is role-based demo routing, not secure authentication. Passwords are not checked against a server.

## `components/navbar.js`

This module loads the shared navbar, fixes relative paths, displays the current user, and manages desktop/mobile navigation.

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `siteAssetPath(path)` | Asset path | Relative path | Resolves assets correctly from root, `pages/`, or `admin/`. |
| `getComponentPath()` | None | URL string | Finds the script URL and converts `navbar.js` to `navbar.html`. |
| `adjustRelativePaths(container, basePath)` | DOM container, component path | None | Updates relative links and image sources after injection. |
| `loadNavbar()` | None | Promise | Fetches and injects navbar HTML, then initializes it. |
| `detectCurrentPage()` | None | Page key | Determines the active nav page from the URL. |
| `getAuthUser()` | None | User object or `null` | Reads the shared auth object, with a storage fallback. |
| `renderAuthAction(user)` | User object or `null` | HTML string | Builds sign-in, client menu, or admin menu markup. |
| `getMobileDrawerHTML(activePage, user)` | Page key, user | HTML string | Builds mobile navigation markup. |
| `initNavbar()` | None | None | Marks active links, renders auth controls, injects the mobile drawer, and binds events. |
| `setupEvents()` | None | None | Handles dropdowns, logout, mobile drawer, outside clicks, and Escape. |

The module starts on DOM ready and reruns when `akshar:auth-change` is dispatched.

## `components/admin-nav.js`

This module builds the admin sidebar and protects admin pages.

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `getCurrentPage()` | None | Admin page key | Detects dashboard, inventory, pricing, customers, or logistics. |
| `getBreadcrumbConfig(page)` | Page key | Breadcrumb array or `null` | Provides labels and links for the current page. |
| `enforceAuth()` | None | None | Calls the auth guard or uses a local fallback check. |
| `navIcon(name)` | Icon name | SVG string | Returns inline SVG markup for sidebar icons. |
| `setupAdminSidebar()` | None | None | Replaces `<aside>` with sidebar navigation and profile markup. |
| `setupAdminHeader()` | None | None | Adds mobile sidebar toggle, backdrop, and Escape handling. |
| `setupBreadcrumbs()` | None | None | Inserts accessible admin breadcrumbs after the header. |
| `initAdminNav()` | None | None | Runs auth enforcement and all admin navigation setup. |

## `assets/js/data/products.js`

This file defines a small JavaScript array and exposes it as `window.AksharProducts`. Each object can contain:

- ID, name, category, origin, finish, color, availability.
- Current and strike prices.
- Stock, rating, review count, and badges.
- Image, dimensions, descriptions, and technical specifications.

`cart.js` uses this array as its initial product lookup. Browse and product pages replace the global data with workbook data after loading.

## `assets/js/pages/browse.js`

This is the largest storefront module. It loads the Excel catalogue, normalizes rows, filters products, renders cards, and controls catalogue UI.

### State

The `state` object stores selected categories, finishes, colors, origins, availability, maximum price, search text, sort mode, page number, page size, view mode, and wishlist IDs.

### Important functions

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `cell(row, column)` | Workbook row, column name | Trimmed string | Safely reads a cell. |
| `numberCell(row, column)` | Row, column name | Number or `null` | Parses currency/number cells. |
| `booleanCell(row, column)` | Row, column name | Boolean | Converts common true/false strings. |
| `resolveUrl(value)` | Workbook path | URL string | Converts old asset paths and relative paths into usable URLs. |
| `resolveProductUrl(value, productId)` | URL value, ID | URL string | Adds a product query parameter where needed. |
| `normalizeProducts(rows)` | Workbook rows | Product array | Converts spreadsheet columns into the browser product shape. |
| `loadProducts()` | None | Promise | Loads SheetJS, fetches the workbook, validates columns, and publishes products. |
| `showGridMessage(message, isError)` | Message, error flag | None | Shows loading/error text in the product grid. |
| `createIcon(type)` | `heart` or view type | SVG element | Builds action icons. |
| `escapeHTML(value)` | Any value | Safe string | Escapes text inserted into HTML strings. |
| `initFromURL()` | None | None | Reads category, search, finish, origin, and sort query parameters. |
| `getFilteredProducts()` | None | Product array | Applies all active filters and search terms. |
| `sortProducts(items)` | Product array | Sorted array | Sorts by recommendation, price, rating, or name. |
| `renderProductCard(item)` | Product object | DOM element | Creates one catalogue card. |
| `renderEmptyState()` | None | HTML string | Builds the no-results message. |
| `updateSidebarCounts()` | None | None | Updates category and origin counts. |
| `updateActiveChips(totalMatches)` | Match count | None | Shows selected filters as removable chips. |
| `updateSidebarControlsUI()` | None | None | Synchronizes checkboxes, swatches, slider, search, and sort labels. |
| `renderPagination(totalItems)` | Item count | None | Creates page controls from the current page size. |
| `applyFiltersAndRender()` | None | None | Filters, sorts, paginates, and redraws the catalogue. |
| `setupEventListeners()` | None | None | Binds filters, search, sorting, view, wishlist, pagination, and mobile drawer events. |
| `clearAllFilters()` | None | None | Resets all filter state and rerenders. |
| `init()` | None | Promise | Shows loading state, loads products, then initializes controls and rendering. |

## `assets/js/pages/product.js`

This module loads one product row from the workbook using the `id` query parameter.

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `cell(row, column)` | Row, column | String | Reads a workbook cell safely. |
| `numberCell(row, column)` | Row, column | Number or `null` | Parses numeric workbook values. |
| `resolveUrl(value)` | Path | URL string | Normalizes legacy asset paths. |
| `loadProduct()` | None | Promise | Fetches the workbook, finds the requested product, and maps its fields. |
| `formatCurrency(value)` | Number | Currency string | Formats Indian rupee values. |
| `setField(name, value, prefix)` | Field name, value, optional prefix | None | Writes a value to a `data-product-field` element. |
| `getGallery()` | None | Gallery array | Converts product gallery paths to image objects. |
| `imageIsAvailable(src)` | Image URL | Promise<boolean> | Checks whether an image can load. |
| `renderGallery()` | None | Promise | Renders thumbnails and chooses the main image. |
| `renderBadges()` | None | None | Renders product and discount badges. |
| `renderTechnicalSpecs()` | None | None | Shows available specification rows. |
| `renderReviews()` | None | None | Displays rating, stars, review counts, and sample reviews. |
| `renderProduct()` | None | Promise | Fills the complete product template. |
| `setupInteractions()` | None | None | Adds sharing, gallery, and quantity controls. |

If loading fails, the page displays “Unable to load product” and the error message rather than silently pretending the product exists.

## `assets/js/pages/cart.js`

This module stores carts separately for each authenticated user and uses a guest cart when no user is logged in.

### Constants

- `CART_PREFIX`: `akshar_cart_`.
- `CHECKOUT_KEY`: `akshar_checkout`.
- `GST_RATE`: `0.18`.
- `FREE_DELIVERY_THRESHOLD`: `25000`.

### Important functions

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `getUser()` | None | User or `null` | Reads the current auth user. |
| `getStorageKey()` | None | Storage key | Selects a user-specific or guest cart key. |
| `readCart()` | None | Cart array | Reads and validates cart JSON. |
| `writeCart(cart)` | Cart array | None | Saves cart JSON and dispatches `akshar:cart-change`. |
| `formatCurrency(value)` | Number | Rupee string | Formats totals with Indian grouping. |
| `escapeHTML(value)` | Any value | Safe string | Prevents unsafe product text in generated markup. |
| `getProductId(element)` | Clicked element | Product ID or `null` | Resolves the product from a product URL, card data attribute, or title. |
| `addProduct(productId, quantity)` | ID, quantity | None | Adds or increments a product while respecting stock. |
| `calculateTotals(cart, promo)` | Cart, promo object | Totals object | Calculates subtotal, item savings, promo discount, GST, delivery, and total. |
| `getPromo(code, subtotal)` | Code, subtotal | Promo object or `null` | Accepts `AKSHAR20` or `MARBLE15`. |
| `renderCart()` | None | None | Rebuilds items, summary rows, totals, address, and checkout state. |
| `renderCartItem(item)` | Cart item | HTML string | Creates one cart item card. |
| `setText(id, value)` | Element ID, value | None | Safely updates text content. |
| `setupCartPage()` | None | None | Adds delegated item controls, promo actions, checkout storage, and change listeners. |

The document-level click listener also intercepts add-to-cart and buy-now buttons, adds the product, and navigates to the button's target.

## `assets/js/pages/home.js`

The home module controls the story video modal.

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `openStory(event)` | Click event | None | Opens the modal, focuses the close button, resets the video, and starts playback. |
| `closeStory()` | None | None | Pauses video, starts closing animation, and removes modal state after `animationend`. |

The modal also closes when the backdrop or Escape key is used.

## `assets/js/admin/pricing-discounts.js`

This module loads the `Products` worksheet into the admin pricing table.

| Function | Parameters | Return value | Purpose |
|---|---|---|---|
| `cell(row, column)` | Row, column | String | Reads a cell safely. |
| `numberCell(value)` | Value | Number or `null` | Parses currency, percentage, and number input. |
| `formatCurrency(value)` | Number | Currency string | Formats rupee values. |
| `formatPercentage(value)` | Number | Percentage string | Formats discount percentages. |
| `setCellValue(rowNumber, columnNumber, value)` | Row, column, value | None | Writes a number into the in-memory worksheet. |
| `locateColumns()` | None | Column map | Finds required price columns, including supported header aliases. |
| `rowNumberForSku(sku)` | SKU | Row index | Finds the spreadsheet row for a product. |
| `renderRows()` | None | None | Filters and renders pricing table rows. |
| `createPriceInput(type, value)` | Input type, value | Table cell | Builds an editable price input. |
| `createDiscountCell(mrp, salePrice)` | Prices | Table cell | Builds and updates the discount badge. |
| `updateDiscountBadge(badge, mrp, salePrice)` | Badge, prices | None | Calculates and displays discount percentage. |
| `persistWorkbook()` | None | Promise | Writes the workbook through File System Access or downloads a new workbook. |
| `saveRow(tableRow, button)` | Table row, button | Promise | Validates and saves one product's prices. |
| `loadWorkbook()` | None | Promise | Fetches, parses, validates, and renders the workbook. |

The browser cannot directly overwrite a hosted repository file. Depending on browser support, the result is either written to a user-selected file or downloaded as `akshar_marbles_product_data_updated.xlsx`.

---

# 7. HOW IT ALL WORKS TOGETHER

## Initial storefront load

1. The browser parses the HTML and loads base/page CSS.
2. `auth.js` defines the authentication API and may guard the current page.
3. `navbar.js` finds `#site-navbar`, fetches `components/navbar.html`, adjusts paths, and injects the markup.
4. `navbar.js` reads the current user and creates sign-in or profile controls.
5. The page-specific script binds controls.
6. Browse, product, and pricing scripts load the workbook through SheetJS when the page requires it.
7. The page updates the DOM with data-driven content.

## Browsing products

1. `browse.js` reads the workbook's `Products` worksheet.
2. It validates required column names.
3. It normalizes each row into a product object.
4. It reads optional URL parameters such as `category=Italian+Marble`.
5. It filters and sorts the product array.
6. It creates product cards with DOM APIs.
7. User actions update `state` and call `applyFiltersAndRender()`.

## Opening a product

1. A product link points to `pages/product.html?id=SKU-0021`.
2. `product.js` reads the ID from `URLSearchParams`.
3. It finds the matching workbook row.
4. It maps workbook columns into product fields and specifications.
5. It renders text, prices, badges, gallery images, stars, and stock.
6. Quantity controls update the calculated total.
7. Cart buttons are handled by `cart.js`.

## Adding to cart

1. A delegated document click handler recognizes an add-to-cart button.
2. It resolves a product ID from the product page or card.
3. It reads the current cart from `localStorage`.
4. It adds/increments the item without exceeding stock.
5. It writes the updated cart and dispatches `akshar:cart-change`.
6. The cart page listens for that event and rerenders its summary.

## Cart totals and checkout

1. `renderCart()` reads the current user's cart or guest cart.
2. It calculates product savings and an optional promo discount.
3. It calculates GST at 18 percent.
4. Delivery is displayed as free by the current implementation.
5. Clicking checkout stores the cart and totals in `localStorage` under `akshar_checkout`.
6. The link opens the sample orders page. There is no payment gateway or real order creation.

## Authentication

1. Login or registration handlers create a user object.
2. `AksharAuth.setUser()` stores it under `akshar_auth_user`.
3. The auth-change event tells the navbar to rerender.
4. Admin pages call `guardAdminPage()` and redirect non-admin users to admin login.
5. Logout removes the stored user and redirects to the storefront or admin login.

## Admin pricing

1. The admin page is guarded by `admin-nav.js`.
2. SheetJS reads the Excel workbook in memory.
3. `pricing-discounts.js` locates pricing columns and creates editable rows.
4. Search filters visible rows.
5. Saving validates MRP and sale price, updates the in-memory worksheet, and writes/downloads an updated workbook.

---

# 8. HOW TO RUN THE PROJECT

## Requirements

- A modern browser such as Chrome, Edge, or Firefox.
- A local HTTP server. This is important because `fetch()` is used for HTML and Excel files, and browsers commonly block those requests under `file://`.
- Internet access when loading the SheetJS CDN, unless SheetJS is later downloaded and served locally.

## Option A: Visual Studio Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install a Live Server extension if one is not already installed.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.
5. Open the resulting local URL in a browser.

## Option B: Python HTTP server

If Python is installed:

```powershell
cd C:\Users\yashb\OneDrive\Desktop\akshar-marbles
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Useful routes

```text
/index.html
/pages/browse.html
/pages/product.html?id=SKU-0021
/pages/cart.html
/pages/login.html
/pages/register.html
/admin/login.html
/admin/dashboard.html
/admin/pricing-discounts.html
```

## Demo sign-in

The forms are demonstrations and do not validate passwords against a backend.

- Client quick login: `ananya@email.com`
- Admin quick login: `rajan@aksharmarbles.com`

The visible default passwords are demo values only. Do not use this authentication design in production.

## Resetting demo state

Open browser developer tools and clear site storage. The important keys are:

- `akshar_auth_user`
- `akshar_cart_guest`
- `akshar_cart_CUS-00142`
- `akshar_checkout`
- Session key `akshar_cart_promo`

---

# 9. POSSIBLE IMPROVEMENTS

## Correctness and data consistency

1. **Remove or replace stale image paths.** The static cart and orders markup references files such as `assets/marble-statuario.svg`, `assets/marble-calacatta.svg`, and `assets/marble-nero.svg`, but those files are not present in the current asset tree. Use the existing PNG files or add the missing assets.
2. **Use one source of truth for products.** `products.js` contains a separate fallback catalogue while browse/product pages use the workbook. Consolidating these prevents conflicting prices, stock, and names.
3. **Fix product URL consistency.** Several home-page links point to `product.html` without an ID, which makes the dynamic product page unable to identify a specific workbook row.
4. **Make stock data consistent.** The browse and product workbook mappings currently use simplified stock values in places; map the real quantity/status columns where available.
5. **Implement delivery rules or remove unused constants.** `FREE_DELIVERY_THRESHOLD` exists, but delivery is currently always calculated as zero.
6. **Connect checkout to orders.** Checkout currently stores a payload but the orders screen is static. A real order object should be created and rendered after checkout.

## Security

1. Replace demo `localStorage` authentication with a server-side identity provider and secure session cookies.
2. Never rely on a client-side role field to protect admin data.
3. Move price editing to a protected backend endpoint.
4. Validate prices, stock, discounts, and order totals on the server.
5. Add content security policy, HTTPS, CSRF protection, rate limiting, and secure password handling.
6. Avoid exposing default passwords in shipped HTML.

## Accessibility

1. Give color swatches keyboard support and accessible names; current swatches are `div` elements.
2. Add visible focus styles for all interactive controls.
3. Trap focus inside the story modal and return focus to the launch button after closing.
4. Use real buttons for actions instead of placeholder `href="#"` links.
5. Ensure dynamic errors and loading states use appropriate live-region semantics.
6. Check color contrast for muted text, gold text, and status badges.
7. Avoid relying on emoji alone to communicate actions or status.

## Performance

1. Use shorter, descriptive image filenames and compress large images.
2. Add width and height attributes to images to reduce layout shift.
3. Lazy-load below-the-fold images on every page, not only generated browse cards.
4. Cache or bundle the workbook if the catalogue grows significantly.
5. Serve SheetJS locally or use an integrity-protected dependency strategy when offline or supply-chain reliability matters.
6. Avoid registering repeated document-level listeners when navigation is rerendered.

## Maintainability and code quality

1. Split large browse and admin scripts into smaller modules.
2. Use ES modules instead of global objects and IIFEs where browser support allows.
3. Define shared product, cart, user, and workbook types with TypeScript or JSDoc.
4. Replace inline styles with stylesheet classes.
5. Add automated tests for filters, totals, promo codes, auth guards, URL handling, and workbook validation.
6. Add a formatter and linter, then enforce them in CI.
7. Add a small development server configuration and a deployment README if the project will be handed to other developers.

## User experience

1. Add real search-result URL synchronization so filter state can be shared/bookmarked after interaction.
2. Persist wishlist state per user instead of keeping it only in memory.
3. Add a real product quick-view modal.
4. Show meaningful delivery estimates and address editing.
5. Add confirmation and error feedback after cart actions.
6. Provide real pagination only if the catalogue is large; otherwise keep the simpler filtered list.
7. Replace placeholder footer links with working pages or remove them.

---

# 10. CONCLUSION

Akshar Marbles is a visually polished static e-commerce prototype for a premium stone showroom. HTML supplies the storefront and admin page structures, CSS provides the luxury responsive design, and JavaScript connects the pages through dynamic navigation, workbook-backed product data, filtering, cart state, demo authentication, and admin pricing tools.

The project is suitable for demonstrations and front-end learning. Before production use, it needs a backend for authentication, orders, payments, inventory, pricing persistence, and security, plus cleanup of stale asset references and stronger accessibility/testing coverage.
