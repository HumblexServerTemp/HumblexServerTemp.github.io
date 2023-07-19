import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Laptop1Image from './DellLaptop1.jpg';
import Laptop2Image from './DellLaptop2.jpg';
import Laptop3Image from './DellLaptop3.jpg';
import Laptop4Image from './LenovoLaptop1.PNG';
import Laptop5Image from './LenovoLaptop2.PNG';
import Laptop6Image from './LenovoLaptop3.PNG';
import PhoneImage1 from './IPhone14.png';
import PhoneImage2 from './IPhone13.png';
import PhoneImage3 from './IPhoneSE.png';
import PhoneImage4 from './IPhone14Pro.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'react-i18next';

// Mock product data
const products = [
    {
        id: 1,
        name: 'Dell Latitude 5480',
        price: 200,
        category: 'Category 1',
        image: Laptop1Image
    }, {
        id: 2,
        name: 'Dell Vostro 14 3400',
        price: 999,
        category: 'Category 1',
        image: Laptop2Image
    }, {
        id: 3,
        name: 'Alienware m18 Laptop',
        price: 2899.99,
        category: 'Category 1',
        image: Laptop3Image
    }, {
        id: 4,
        name: 'ThinkBook 15 Gen 4',
        price: 1337.4,
        category: 'Category 1',
        image: Laptop4Image
    }, {
        id: 5,
        name: 'ThinkPad P1 Gen 5',
        price: 3429,
        category: 'Category 1',
        image: Laptop5Image
    }, {
        id: 6,
        name: 'Legion 7 Gen 7',
        price: 1979.99,
        category: 'Category 1',
        image: Laptop6Image
    }, {
        id: 7,
        name: 'IPhone 14 MAX',
        price: 1399,
        category: 'Category 2',
        image: PhoneImage1
    }, {
        id: 8,
        name: 'IPhone 14',
        price: 1099,
        category: 'Category 2',
        image: PhoneImage2
    }, {
        id: 9,
        name: 'IPhone 13',
        price: 849,
        category: 'Category 2',
        image: PhoneImage3
    }, {
        id: 10,
        name: 'IPhone SE',
        price: 579,
        category: 'Category 2',
        image: PhoneImage4
    }
];

export const Shop = () => {
    const {t, i18n} = useTranslation();
    const [selectedCategory,
        setSelectedCategory] = useState('');
    const [cartItems,
        setCartItems] = useState([]);
    const [checkoutComplete,
        setCheckoutComplete] = useState(false);
    const [confirmationOpen,
        setConfirmationOpen] = useState(false);
    const [showCategories,
        setShowCategories] = useState(true);
    const [showKeepShopping,
        setShowKeepShopping] = useState(true);

    const calculateTotalPrice = () => {
        const totalPrice = cartItems.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
        return totalPrice.toFixed(2);
    };


    // Filter products based on selected category
    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    // Handle adding a product to the cart
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            const updatedItems = cartItems.map((item) => item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                }
                : item);
            setCartItems(updatedItems);
        } else {
            setCartItems([
                ...cartItems, {
                    ...product,
                    quantity: 1
                }
            ]);
        }
    };

    // Handle updating the quantity of an item in the cart
    const updateCartItemQuantity = (itemId, quantity) => {
        if (isNaN(quantity) || quantity < 0) {
            return; // Skip the update if the quantity is NaN or negative
        }

        if (quantity === 0) {
            const updatedItems = cartItems.filter((item) => item.id !== itemId);
            setCartItems(updatedItems);
        } else {
            const updatedItems = cartItems.map((item) => item.id === itemId
                ? {
                    ...item,
                    quantity
                }
                : item);
            setCartItems(updatedItems);
        }
    };

    // Render the quantity buttons and quantity value
    const renderQuantityControls = (product) => {
        const item = cartItems.find((item) => item.id === product.id);
        if (item) {
            return (
                <div
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 'auto'
                }}>
                    <button onClick={() => updateCartItemQuantity(product.id, item.quantity - 1)}>-</button>
                    {' '}
                    {item.quantity}
                    {' '}
                    <button onClick={() => updateCartItemQuantity(product.id, item.quantity + 1)}>+</button>
                </div>
            );
        } else {
            return (
                <button
                    onClick={() => addToCart(product)}
                    style={{
                    marginLeft: '10px',
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FontAwesomeIcon icon={faShoppingCart}/> {t('addToCart')}
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </button>
            );
        }
    };

    const handleCheckout = () => {
        setCheckoutComplete(true);
        setConfirmationOpen(true);
        setShowCategories(false);
        setShowKeepShopping(false);
    };

    const handleProceed = () => {
        setCheckoutComplete(true);
    };

    const renderProductRows = () => {
        const rows = [];
        const productsCount = filteredProducts.length;
        const itemsPerRow = 3;

        for (let i = 0; i < productsCount; i += itemsPerRow) {
            const rowProducts = filteredProducts.slice(i, i + itemsPerRow);
            const row = (
                <ul
                    key={`row-${i}`}
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    listStyleType: 'none'
                }}>
                    {rowProducts.map((product) => (
                        <li
                            key={product.id}
                            style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '10px',
                            margin: '10px'
                        }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                width: '400px',
                                height: '400px'
                            }}/>
                            <div
                                style={{
                                textAlign: 'center'
                            }}>
                                <h3
                                    style={{
                                    height: '60px'
                                }}>{product.name}</h3>
                                <p>${product.price}</p>
                                <div
                                    style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    {renderQuantityControls(product)}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            );
            rows.push(row);
        }

        return rows;
    };

    const step1Color = cartItems.length > 0
        ? 'green'
        : 'black';
    const step2Color = checkoutComplete
        ? 'green'
        : 'black';

    return (

        <div>
            {/* Filter component */}
            {showCategories && (
                <select
                    value={selectedCategory}
                    onChange={(event) => setSelectedCategory(event.target.value)}
                    style={{
                    fontSize: '20px',
                    padding: '10px',
                    marginBottom: '20px',
                    width: '100%',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    background: 'black',
                    color: 'white'
                }}>
                    <option value="">{t('allCategories')}</option>
                    <option value="Category 1">{t('laptopCategory')}</option>
                    <option value="Category 2">{t('phoneCategory')}</option>
                    <option value="Category 3">{t('noProductCategory')}</option>
                </select>
            )}
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px'
            }}>
                <div
                    style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div
                        style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: step1Color
                    }}>
                        <div
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <span
                                style={{
                                color: 'white'
                            }}>✔️</span>
                        </div>
                    </div>
                    <span
                        style={{
                        marginLeft: '10px',
                        color: step1Color
                    }}>{t('step1')}</span>
                </div>

                <div
                    style={{
                    position: 'relative',
                    width: '100px',
                    height: '50px',
                    marginLeft: '10px'
                }}>
                    <div
                        style={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        right: '0',
                        height: '1px',
                        background: step1Color
                    }}></div>
                </div>

                <div
                    style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: '10px'
                }}>
                    <div
                        style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: step2Color
                    }}>
                        <div
                            style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%'
                        }}>
                            <span
                                style={{
                                color: 'white'
                            }}>✔️</span>
                        </div>
                    </div>
                    <span
                        style={{
                        marginLeft: '10px',
                        color: step2Color
                    }}>{t('step2')}</span>
                </div>
            </div>

            {/* Product listing */}
            {showKeepShopping && showCategories && (
                <div>
                    {filteredProducts.length === 0 && (
                        <div
                            style={{
                            textAlign: 'center'
                        }}>
                            <h3>{t('noProductCategory')}</h3>
                            <button onClick={() => setSelectedCategory('')}>{t('backToCart')}</button>
                        </div>
                    )}
                    {filteredProducts.length > 0 && renderProductRows()}
                </div>
            )}
            {/* Cart component */}
            {showKeepShopping && showCategories && (
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div>
                        <ul
                            style={{
                            listStyleType: 'none'
                        }}>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <div>
                                        <h3>{t('itemName')} {item.name}</h3>
                                        <p>{t('price')}: ${item.price}</p>
                                        <p>{t('quantity')}: {item.quantity}</p>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <div>
                                    <h4>------------------------------------------------------------</h4>
                                    <h3>{t('total')}</h3>
                                    <p>{t('items')}: {cartItems.length}</p>
                                    <p>{t('totalPrice')}: ${calculateTotalPrice()}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            {/* Checkout component */}
            {showKeepShopping && showCategories && !checkoutComplete && !confirmationOpen && cartItems.length > 0 && (
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <button onClick={handleCheckout}>{t('checkout')}</button>
                </div>
            )}

            {checkoutComplete && confirmationOpen && (
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to="/confirmation">
                        <button onClick={handleProceed}>{t('proceed')}</button>
                    </Link>
                </div>
            )}

            {checkoutComplete && !confirmationOpen && (
                <div
                    style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Link to="/confirmation">
                        <button>{t('proceed')}</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Shop;
