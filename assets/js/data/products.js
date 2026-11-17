(function () {
  const assetPath = (path) => window.location.pathname.toLowerCase().includes('/pages/')
    || window.location.pathname.toLowerCase().includes('/admin/')
    ? `../${path}`
    : path;

  const products = [
    {
      id: "SKU-0021",
      title: "Statuario White",
      category: "Italian Marble",
      origin: "Italy",
      finish: "Polished",
      color: "White",
      availability: "In Stock",
      price: 450,
      strikePrice: 500,
      stock: 4200,
      rating: 4.9,
      reviews: 284,
      badge: { text: "Bestseller", type: "gold" },
      galleryFolder: "Statuario White",
      image: assetPath("assets/images/Statuario white Italian marble slab with dramatic grey veining, polished surface, luxury material ph.png"),
      spec: 'Italy · Polished · 24"×24"',
      dimensions: '24"×24"',
      description: "The pinnacle of Italian marble craftsmanship — bold, dramatic veining on a pristine white canvas. A timeless symbol of luxury.",
      originDisplay: "Carrara, Italy",
      tileSize: '24"×24" / 24"×48"',
      thickness: "18mm / 20mm",
      minimumOrder: 50,
      defaultQuantity: 100,
      technicalSpecs: {
        "Stone Type": "Natural Marble",
        Origin: "Carrara, Italy",
        Finish: "Polished / Honed",
        "Tile Size": '24"×24", 24"×48"',
        Thickness: "18mm, 20mm",
        "Water Absorption": "< 0.2%",
        "Hardness (Mohs)": "3.0 – 3.5",
        Weight: "~2.7 kg/sqft"
      },
    },
    {
      id: "SKU-0057",
      title: "Calacatta Gold",
      category: "Italian Marble",
      origin: "Italy",
      finish: "Polished",
      color: "White",
      availability: "In Stock",
      price: 900,
      strikePrice: 1000,
      stock: 2800,
      rating: 4.7,
      reviews: 196,
      badge: { text: "Premium", type: "green" },
      galleryFolder: "Calacatta Gold",
      image: assetPath("assets/images/Calacatta Gold Italian marble with golden yellow veins on white background, luxury interior stone, p.png"),
      spec: 'Italy · Polished · 24"×48"',
      dimensions: '24"×48"'
    },
    {
      id: "SKU-0034",
      title: "Nero Marquina",
      category: "Spanish Marble",
      origin: "Spain",
      finish: "Honed",
      color: "Black",
      availability: "In Stock",
      price: 600,
      strikePrice: 680,
      stock: 380,
      rating: 4.8,
      reviews: 142,
      badge: { text: "Bestseller", type: "gold" },
      galleryFolder: "Nero Marquina",
      image: assetPath("assets/images/black Nero Marquina Spanish marble texture with white veins, luxury stone surface, premium quality.png"),
      spec: 'Spain · Honed · 24"×24"',
      dimensions: '24"×24"'
    },
    {
      id: "SKU-0068",
      title: "Emperador Dark",
      category: "Spanish Marble",
      origin: "Spain",
      finish: "Polished",
      color: "Brown",
      availability: "Available to Order",
      price: 660,
      strikePrice: 720,
      stock: 0,
      rating: 4.6,
      reviews: 98,
      badge: { text: "Rich Texture", type: "gold" },
      galleryFolder: "Emperador Dark",
      image: assetPath("assets/marble-emperador.svg"),
      spec: 'Spain · Polished · 18"×18"',
      dimensions: '18"×18"'
    },
    {
      id: "SKU-0091",
      title: "Onyx Green",
      category: "Onyx & Exotic",
      origin: "Pakistan",
      finish: "Backlit",
      color: "Emerald Green",
      availability: "In Stock",
      price: 1200,
      strikePrice: 1350,
      stock: 1100,
      rating: 4.9,
      reviews: 67,
      badge: { text: "Exotic Luxury", type: "green" },
      galleryFolder: "Onyx Green",
      image: assetPath("assets/images/translucent green onyx stone slab with backlit glow, exotic luxury interior material, jewel-like nat.png"),
      spec: 'Pakistan · Backlit · 24"×48"',
      dimensions: '24"×48"'
    },
    {
      id: "SKU-0045",
      title: "Makrana White",
      category: "Indian Marble",
      origin: "India",
      finish: "Polished",
      color: "White",
      availability: "In Stock",
      price: 220,
      strikePrice: null,
      stock: 2500,
      rating: 4.1,
      reviews: 218,
      badge: { text: "Heritage Stone", type: "gold" },
      galleryFolder: "Makrana White",
      image: assetPath("assets/images/Rajasthan white makrana marble India, traditional Indian marble flooring pattern, natural stone luxu.png"),
      spec: 'India · Polished · 24"×24"',
      dimensions: '24"×24"'
    },
    {
      id: "SKU-0072",
      title: "Bianco Sivec",
      category: "Italian Marble",
      origin: "Italy",
      finish: "Honed",
      color: "White",
      availability: "In Stock",
      price: 380,
      strikePrice: null,
      stock: 1700,
      rating: 4.2,
      reviews: 84,
      badge: null,
      galleryFolder: "Bianco Sivec",
      image: assetPath("assets/images/polished Italian white Carrara marble surface close-up, elegant veining pattern, luxury stone textur.png"),
      spec: 'Italy · Honed · 18"×18"',
      dimensions: '18"×18"'
    },
    {
      id: "SKU-0019",
      title: "Arabescato Corchia",
      category: "Italian Marble",
      origin: "Italy",
      finish: "Polished",
      color: "White",
      availability: "In Stock",
      price: 520,
      strikePrice: null,
      stock: 900,
      rating: 5.0,
      reviews: 32,
      badge: { text: "New Arrival", type: "gold" },
      galleryFolder: "Arabescato Corchia",
      image: assetPath("assets/marble-arabescato.svg"),
      spec: 'Italy · Polished · 24"×24"',
      dimensions: '24"×24"'
    },
    {
      id: "SKU-0083",
      title: "Crystal White",
      category: "Indian Marble",
      origin: "Turkey",
      finish: "Polished",
      color: "White",
      availability: "In Stock",
      price: 310,
      strikePrice: 365,
      stock: 1300,
      rating: 4.3,
      reviews: 102,
      badge: { text: "15% OFF", type: "gold" },
      galleryFolder: "Crystal White",
      image: assetPath("assets/marble-crystal.svg"),
      spec: 'Turkey · Polished · 24"×24"',
      dimensions: '24"×24"'
    },
    {
      id: "SKU-0104",
      title: "Black Galaxy Granite",
      category: "Granite",
      origin: "India",
      finish: "Leathered",
      color: "Black",
      availability: "In Stock",
      price: 280,
      strikePrice: 320,
      stock: 1500,
      rating: 4.5,
      reviews: 115,
      badge: { text: "Durable", type: "green" },
      galleryFolder: "Black Galaxy Granite",
      image: assetPath("assets/marble-nero.svg"),
      spec: 'India · Leathered · 24"×24"',
      dimensions: '24"×24"'
    },
    {
      id: "SKU-0062",
      title: "Crema Marfil",
      category: "Spanish Marble",
      origin: "Spain",
      finish: "Brushed",
      color: "Tan / Cream",
      availability: "In Stock",
      price: 480,
      strikePrice: 540,
      stock: 1000,
      rating: 4.7,
      reviews: 154,
      badge: { text: "Classic", type: "gold" },
      galleryFolder: "Crema Marfil",
      image: assetPath("assets/marble-bianco.svg"),
      spec: 'Spain · Brushed · 24"×24"',
      dimensions: '24"×24"'
    },
    {
      id: "SKU-0115",
      title: "Rainforest Green",
      category: "Indian Marble",
      origin: "India",
      finish: "Brushed",
      color: "Emerald Green",
      availability: "Available to Order",
      price: 340,
      strikePrice: null,
      stock: 800,
      rating: 4.4,
      reviews: 76,
      badge: { text: "Natural Art", type: "green" },
      galleryFolder: "Rainforest Green",
      image: assetPath("assets/marble-onyx.svg"),
      spec: 'India · Brushed · 24"×24"',
      dimensions: '24"×24"'
    }
  ];

  window.AksharProducts = products;

  const DATA_FILE = "assets/data/akshar_marbles_product_data.xlsx";

  function spreadsheetAssetPath(value) {
    if (!value) {
      return "";
    }

    const normalized = value.replace(/\\/g, "/")
      .replace(/^assets\/Front-images\//, "assets/images/")
      .replace(/^assets\/background\//, "assets/images/background/")
      .replace(/^assets\/video\//, "assets/videos/");
    const pagePrefix = window.location.pathname.toLowerCase().includes("/pages/")
      || window.location.pathname.toLowerCase().includes("/admin/")
      ? "../"
      : "";

    return new URL(normalized.startsWith("assets/") ? pagePrefix + normalized : normalized, document.baseURI).href;
  }

  function spreadsheetCell(row, column) {
    const value = row[column];
    return value === undefined || value === null ? "" : String(value).trim();
  }

  function spreadsheetNumber(row, column) {
    const value = Number(spreadsheetCell(row, column).replace(/[,₹]/g, ""));
    return Number.isFinite(value) ? value : null;
  }

  async function loadSpreadsheetProducts() {
    if (!window.XLSX) {
      return;
    }

    const response = await fetch((window.location.pathname.toLowerCase().includes("/pages/")
      || window.location.pathname.toLowerCase().includes("/admin/") ? "../" : "") + DATA_FILE);
    if (!response.ok) {
      throw new Error(`Product data file could not be loaded (${response.status}).`);
    }

    const workbook = XLSX.read(await response.arrayBuffer(), { type: "array" });
    const worksheet = workbook.Sheets.Products;
    if (!worksheet) {
      throw new Error('The workbook does not contain a "Products" worksheet.');
    }

    const rows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
    const spreadsheetProducts = rows.map((row) => ({
      id: spreadsheetCell(row, "Product ID"),
      title: spreadsheetCell(row, "Product Name"),
      category: spreadsheetCell(row, "Category"),
      origin: spreadsheetCell(row, "Origin"),
      finish: spreadsheetCell(row, "Finish"),
      dimensions: spreadsheetCell(row, "Tile Size"),
      availability: spreadsheetCell(row, "Stock Status"),
      price: spreadsheetNumber(row, "Current Price (INR)") || 0,
      strikePrice: spreadsheetNumber(row, "Original Price (INR)"),
      stock: 10000,
      image: spreadsheetAssetPath(spreadsheetCell(row, "Image Path"))
    })).filter((product) => product.id && product.title);

    if (spreadsheetProducts.length) {
      window.AksharProducts = spreadsheetProducts;
      window.dispatchEvent(new CustomEvent("akshar:products-loaded"));
    }
  }

  loadSpreadsheetProducts().catch((error) => {
    console.warn("Spreadsheet product data could not be loaded:", error);
  });
})();
