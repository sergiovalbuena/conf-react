import React from 'react';
import '../styles/components/Payment.css'

const Payment = () => {
    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                <div className="Payment-button">
                    Boton de Pago PayPal
                </div>
            </div>
            <div className="sidebar"></div>
        </div>
    );
}

export default Payment;