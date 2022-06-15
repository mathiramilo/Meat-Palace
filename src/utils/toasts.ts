import { toast } from 'react-toastify';

/* Login toast */
export const loginToast = (email: string) => toast.info(`Logged in as ${email}`, {
    className: 'toast-custom'
})

/* Logout toast */
export const logoutToast = () => toast.info('Logged out', {
    className: 'toast-custom'
})

/* Signup toast */
export const signupToast = (email: string) => toast.info(`Registered as ${email}`, {
    className: 'toast-custom'
})

/* Product added to cart toast.
Shows the amount and the name of the product
added to the cart. */
export const onAddToast = (name: string, amount: number) => toast.success(`x${amount} ${name} added to cart`, {
    className: 'toast-custom'
})