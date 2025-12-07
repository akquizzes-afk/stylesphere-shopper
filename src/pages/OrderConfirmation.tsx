import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const OrderConfirmation = () => {
  const orderNumber = `ATL${Date.now().toString().slice(-8)}`;

  return (
    <main className="pt-20 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto max-w-lg text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="h-10 w-10 text-accent" />
        </motion.div>

        <h1 className="font-display text-3xl md:text-4xl mb-4">Thank You!</h1>
        <p className="text-muted-foreground mb-2">Your order has been placed successfully.</p>
        <p className="text-sm text-muted-foreground mb-8">
          Order number: <span className="font-medium text-foreground">{orderNumber}</span>
        </p>

        <div className="bg-secondary/50 p-6 rounded-sm mb-8 text-left space-y-4">
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Confirmation Email</p>
              <p className="text-xs text-muted-foreground">
                We've sent a confirmation email with your order details.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Package className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Shipping Updates</p>
              <p className="text-xs text-muted-foreground">
                You'll receive shipping updates via email once your order ships.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" asChild>
            <Link to="/shop">Continue Shopping</Link>
          </Button>
          <Button variant="hero-outline" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  );
};

export default OrderConfirmation;
