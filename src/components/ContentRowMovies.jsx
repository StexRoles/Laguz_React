import React from 'react'
import PropTypes from 'prop-types'

function ContentRowMovies(props) {
    return (
        <>
            {/* Content Row Movies */}
            <div className="row">

                {/* Information in Data Base */}
                {props.title.map((title, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className={`card ${props['borderColor'][index]} shadow h-100 py-2`}>
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{title}</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{props.value[index]}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className={props.icon[index]}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            {/* End movies in Data Base */}
        </>
    )
};

ContentRowMovies.defaultProps = {
    title: ["Title box", "Title box", "Title box" ],
    value: [10, 11, 12],
    icon: ["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300", "fas fa-user fa-2x text-gray-300"],
    borderColor: ["border-left-primary", "border-left-success", "border-left-warning"],

};

ContentRowMovies.propTypes = {
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.arrayOf(PropTypes.number).isRequired,
    icon: PropTypes.arrayOf(PropTypes.oneOf(["fas fa-film fa-2x text-gray-300", "fas fa-award fa-2x text-gray-300", "fas fa-user fa-2x text-gray-300"])).isRequired,
    borderColor: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContentRowMovies