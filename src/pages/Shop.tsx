import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

const subcategories = {
  women: ['Outerwear', 'Knitwear', 'Pants', 'Dresses', 'Shirts'],
  men: ['Outerwear', 'Knitwear', 'Pants', 'Shirts'],
  accessories: ['Bags', 'Scarves', 'Hats'],
};

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activeSubcategory = searchParams.get('subcategory') || '';
  const activeFilter = searchParams.get('filter') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    if (key === 'category') {
      newParams.delete('subcategory');
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeFilter === 'new') {
      result = result.filter(p => p.newArrival);
    }

    if (activeCategory) {
      result = result.filter(p => p.category.toLowerCase() === activeCategory);
    }

    if (activeSubcategory) {
      result = result.filter(p => p.subcategory.toLowerCase() === activeSubcategory.toLowerCase());
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = result.filter(p => p.newArrival).concat(result.filter(p => !p.newArrival));
        break;
      default:
        result = result.filter(p => p.featured).concat(result.filter(p => !p.featured));
    }

    return result;
  }, [activeCategory, activeSubcategory, activeFilter, activeSort]);

  const currentSubcategories = activeCategory
    ? subcategories[activeCategory as keyof typeof subcategories] || []
    : [];

  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-center">
            {activeFilter === 'new' ? 'New Arrivals' : 
             activeCategory ? categories.find(c => c.slug === activeCategory)?.name || 'Shop' : 
             'All Products'}
          </h1>
          {activeSubcategory && (
            <p className="text-center text-muted-foreground mt-2 capitalize">{activeSubcategory}</p>
          )}
        </div>
      </div>

      <div className="container mx-auto py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-sm hover:text-accent transition-colors md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          {/* Category tabs - desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setFilter('category', '')}
              className={`text-xs tracking-widest uppercase transition-colors ${
                !activeCategory ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.slug}
                onClick={() => setFilter('category', cat.slug)}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  activeCategory === cat.slug ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm"
            >
              Sort by: {sortOptions.find(o => o.value === activeSort)?.label}
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-full mt-2 bg-card border border-border shadow-lg z-50 min-w-[180px]"
                  >
                    {sortOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setFilter('sort', option.value);
                          setSortOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                          activeSort === option.value ? 'text-accent' : ''
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            {currentSubcategories.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">Category</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setFilter('subcategory', '')}
                      className={`text-sm transition-colors ${
                        !activeSubcategory ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      All {categories.find(c => c.slug === activeCategory)?.name}
                    </button>
                  </li>
                  {currentSubcategories.map(sub => (
                    <li key={sub}>
                      <button
                        onClick={() => setFilter('subcategory', sub.toLowerCase())}
                        className={`text-sm transition-colors ${
                          activeSubcategory === sub.toLowerCase() ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {sub}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">Filter</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setFilter('filter', activeFilter === 'new' ? '' : 'new')}
                    className={`text-sm transition-colors ${
                      activeFilter === 'new' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    New Arrivals
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          {/* Mobile filters drawer */}
          <AnimatePresence>
            {filtersOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setFiltersOpen(false)}
                  className="fixed inset-0 bg-foreground/20 z-50 md:hidden"
                />
                <motion.aside
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'tween' }}
                  className="fixed left-0 top-0 bottom-0 w-72 bg-background z-50 p-6 md:hidden overflow-auto"
                >
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="font-medium">Filters</h2>
                    <button onClick={() => setFiltersOpen(false)}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">Shop</h3>
                    <ul className="space-y-2">
                      <li>
                        <button
                          onClick={() => { setFilter('category', ''); setFiltersOpen(false); }}
                          className={`text-sm ${!activeCategory ? 'text-foreground' : 'text-muted-foreground'}`}
                        >
                          All Products
                        </button>
                      </li>
                      {categories.map(cat => (
                        <li key={cat.slug}>
                          <button
                            onClick={() => { setFilter('category', cat.slug); setFiltersOpen(false); }}
                            className={`text-sm ${activeCategory === cat.slug ? 'text-foreground' : 'text-muted-foreground'}`}
                          >
                            {cat.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {currentSubcategories.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-xs tracking-widest uppercase mb-4 font-medium">Category</h3>
                      <ul className="space-y-2">
                        {currentSubcategories.map(sub => (
                          <li key={sub}>
                            <button
                              onClick={() => { setFilter('subcategory', sub.toLowerCase()); setFiltersOpen(false); }}
                              className={`text-sm ${activeSubcategory === sub.toLowerCase() ? 'text-foreground' : 'text-muted-foreground'}`}
                            >
                              {sub}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.aside>
              </>
            )}
          </AnimatePresence>

          {/* Products grid */}
          <div className="flex-1">
            {/* Active filters */}
            {(activeCategory || activeSubcategory || activeFilter) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {activeFilter === 'new' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-sm">
                    New Arrivals
                    <button onClick={() => setFilter('filter', '')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {activeCategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-sm capitalize">
                    {activeCategory}
                    <button onClick={() => setFilter('category', '')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                {activeSubcategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary text-sm capitalize">
                    {activeSubcategory}
                    <button onClick={() => setFilter('subcategory', '')}>
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            <p className="text-sm text-muted-foreground mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground mb-4">No products found</p>
                <Button variant="hero" onClick={() => setSearchParams({})}>
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
