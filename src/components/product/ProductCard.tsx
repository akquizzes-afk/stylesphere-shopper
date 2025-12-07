import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div
          className="aspect-[3/4] bg-secondary overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.img
            src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
            initial={false}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.newArrival && (
              <span className="bg-foreground text-background px-2 py-1 text-xs tracking-widest uppercase">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-accent text-accent-foreground px-2 py-1 text-xs tracking-widest uppercase">
                Sale
              </span>
            )}
          </div>
        </div>
        
        <div className="mt-4 space-y-1">
          <h3 className="text-sm font-medium group-hover:underline underline-offset-4 transition-all">
            {product.name}
          </h3>
          <p className="text-xs text-muted-foreground">{product.category}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
