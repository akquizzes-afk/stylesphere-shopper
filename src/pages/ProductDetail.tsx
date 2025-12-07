import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Minus, Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getProductById, getFeaturedProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ProductCard } from '@/components/product/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  
  const product = getProductById(id || '');
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== id).slice(0, 4);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Product not found</h1>
          <Button variant="hero" asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }
    if (!selectedColor && product.colors.length > 0) {
      toast({
        title: "Please select a color",
        variant: "destructive"
      });
      return;
    }

    addItem(product, selectedSize, selectedColor || product.colors[0]?.name || 'Default', quantity);
    toast({
      title: "Added to bag",
      description: `${product.name} has been added to your shopping bag.`
    });
  };

  return (
    <main className="pt-20">
      <div className="container mx-auto py-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-[3/4] bg-secondary overflow-hidden"
            >
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-24 bg-secondary overflow-hidden border-2 transition-colors ${
                      activeImage === idx ? 'border-foreground' : 'border-transparent'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  {product.category}
                </p>
                <h1 className="font-display text-3xl md:text-4xl mb-3">{product.name}</h1>
                <div className="flex items-center gap-3">
                  <span className="text-xl">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Color selection */}
              {product.colors.length > 0 && (
                <div>
                  <p className="text-xs tracking-widest uppercase mb-3">
                    Color: <span className="text-muted-foreground">{selectedColor || 'Select'}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.colors.map(color => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === color.name
                            ? 'border-foreground scale-110'
                            : 'border-border hover:border-muted-foreground'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size selection */}
              <div>
                <p className="text-xs tracking-widest uppercase mb-3">
                  Size: <span className="text-muted-foreground">{selectedSize || 'Select'}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] h-10 px-3 border text-sm transition-colors ${
                        selectedSize === size
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="text-xs tracking-widest uppercase mb-3">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-border hover:border-foreground transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-border hover:border-foreground transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <Button variant="hero" size="xl" className="w-full" onClick={handleAddToCart}>
                Add to Bag — ${(product.price * quantity).toFixed(2)}
              </Button>

              {/* Details */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-xs tracking-widest uppercase mb-4">Product Details</h3>
                <ul className="space-y-2">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 pt-16 border-t border-border">
            <h2 className="font-display text-2xl md:text-3xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
