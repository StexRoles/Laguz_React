import ContentRowMovies from './ContentRowMovies';
import React, { useEffect, useState } from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowTop() {
    const [products, setProducts] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch('/api/product/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));

        fetch('/api/user/api/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);


    return (
        <>
            {/* Content Row Top */}
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard Laguz</h1>
                </div>

                {/* Content Row Movies */}
                {products && users && (
                    <ContentRowMovies

                        title={["Total de Productos", "Total de Usuarios"]}
                        value={[products.count, users.count]}
                        icon={["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300"]}
                        borderColor={["border-left-primary", "border-left-success"]}

                    />
                )}


                {/* Content Row Last Movie in Data Base */}
                <div className="row">
                    {/* Last Movie in DB */}
                    < LastMovieInDb />

                    {/* Genres in DB */}
                    < GenresInDb />
                </div>
            </div>
            {/* End Content Row Top */}
        </>
    )
}

export default ContentRowTop;