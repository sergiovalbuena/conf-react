import React, {useRef, useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
    const {state, addToBuyer} = useContext(ApContext);
    const form = useRef(null);

    const {cart} = state;

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre Completo" name="name" />
                        <input type="text" placeholder="email" name="email" />
                        <input type="text" placeholder="Direccion" name="address" />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="País" name="country" />
                        <input type="text" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                        Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <Link to="/checkout/payment">
                            Pagar
                        </Link>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>ITEM Name</h4>
                        <span>$10</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;