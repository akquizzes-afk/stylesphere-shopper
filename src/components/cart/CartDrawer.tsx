import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-foreground/20 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-lg font-medium tracking-wide">Shopping Bag</h2>
              <button onClick={closeCart} className="p-1 hover:opacity-70 transition-opacity">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-6">Your bag is empty</p>
                <Button variant="hero" onClick={closeCart} asChild>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-auto p-6 space-y-6">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex gap-4">
                      <div className="w-24 h-32 bg-secondary overflow-hidden flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between">
                          <Link
                            to={`/product/${item.product.id}`}
                            onClick={closeCart}
                            className="font-medium text-sm hover:underline"
                          >
                            {item.product.name}
                          </Link>
                          <button
                            onClick={() => removeItem(item.product.id, item.size, item.color)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.color} / {item.size}
                        </p>
                        <p className="text-sm mt-auto">${item.product.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                            className="p-1 border border-border hover:border-foreground transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                            className="p-1 border border-border hover:border-foreground transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Shipping and taxes calculated at checkout
                  </p>
                  <Button variant="hero" size="lg" className="w-full" asChild onClick={closeCart}>
                    <Link to="/checkout">Checkout</Link>
                  </Button>
                  <Button variant="minimal" className="w-full" onClick={closeCart}>
                    Continue Shopping
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
