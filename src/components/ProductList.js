import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {

    return (
        <div className="container">

            <h1>Mobile Store</h1>

            <div className="row">

                {products.map((product) => (

                    <div
                        className="col-12 col-md-6"
                        key={product.id}
                    >

                        <Link
                            to={`/products/${product.id}`}
                        >

                            <div className="row">

                                <div className="col-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>

                                <div className="col-8">

                                    <h3>
                                        {product.name}
                                    </h3>

                                    <p>
                                        Price: {product.price}
                                    </p>

                                </div>

                            </div>

                        </Link>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default ProductList;