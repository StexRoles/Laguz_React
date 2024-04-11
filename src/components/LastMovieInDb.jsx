import React from 'react'
import mandalorian from '../assets/img/oferta-4.png'

function LastMovieInDb() {
    return (
        <>
            {/* Last Movie in DB */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto vendido</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={mandalorian} alt=" Star Wars - Mandalorian " />
                        </div>
                        <p>Auricular Redragon Zeus X White H510W-RGB</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Detalle del producto</a>
                    </div>
                </div>
            </div>
            {/* End content row last movie in Data Base */}
        </>
    )
}

export default LastMovieInDb