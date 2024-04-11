import React, { useEffect, useState } from 'react';

function GenresInDb() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('/api/product/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {products && products.countByCategory.map((category, index) => (
                            <div key={index} className="col-lg-6 mb-4">
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">
                                        {category.category}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresInDb;