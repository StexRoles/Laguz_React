import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

function ContentRowTop() {
    return (
        <>
            {/* Content Row Top */}
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard Laguz</h1>
                </div>

                {/* Content Row Movies */}
                <ContentRowMovies
                    title={["Productos en Base de Datos", "Total Usuarios"]}
                    value={[21, 79]}
                    icon={["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300", "fas fa-user fa-2x text-gray-300"]}
                    borderColor={["border-left-primary", "border-left-success", "border-left-warning"]}
                />


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