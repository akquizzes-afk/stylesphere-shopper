import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { getFeaturedProducts, categories } from '@/data/products';
import { motion } from 'framer-motion';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920"
            alt="Fashion collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-primary-foreground"
          >
            <span className="text-xs tracking-[0.3em] uppercase mb-4 block opacity-80">
              Winter Collection 2024
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Timeless Elegance, Modern Comfort
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
              Discover our curated collection of premium essentials designed for the conscious wardrobe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground" asChild>
                <Link to="/shop?filter=new">New Arrivals</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">Shop by Category</h2>
            <p className="text-muted-foreground">Explore our carefully curated collections</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/shop?category=${category.slug}`}
                  className="group block relative aspect-[4/5] overflow-hidden"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-primary-foreground text-xl md:text-2xl tracking-widest uppercase font-medium">
                      {category.name}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-3xl md:text-4xl mb-2">Featured Pieces</h2>
              <p className="text-muted-foreground">Handpicked favorites from our collection</p>
            </div>
            <Button variant="minimal" className="mt-4 md:mt-0" asChild>
              <Link to="/shop">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="Craftsmanship"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
                Our Philosophy
              </span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                Crafted with Purpose
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every piece in our collection is thoughtfully designed and crafted with the finest materials. 
                We believe in creating timeless essentials that transcend seasons, made to be worn and loved for years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our commitment to sustainable practices and ethical production means you can feel as good 
                about your choices as you look in them.
              </p>
              <Button variant="hero" asChild>
                <Link to="/shop">Discover More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="py-20 bg-charcoal text-primary-foreground">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl mb-4">Join the Atelier</h2>
            <p className="opacity-80 mb-8">
              Subscribe for exclusive access to new arrivals, styling tips, and member-only offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border border-primary-foreground/30 px-4 py-3 text-sm focus:outline-none focus:border-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="accent" size="lg">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
