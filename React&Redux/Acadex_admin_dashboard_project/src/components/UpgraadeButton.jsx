import React from 'react'
import upgrateimage from '../assets/image/Grafimage.webp'

const UpgraadeButton = () => {
    return (
        <div>
            <div
                className="position-relative ms-2 d-none d-md-block bg-gray-light text-center rounded-3 px-4 pt-5 pb-4 text-center"

            >

                <img
                    src={upgrateimage}
                    alt="Upgrade"
                    className="position-absolute   top-0 translate-middle-x "
                    style={{ marginTop: '-60px' }}

                />


                <h5 className="Small-Medium mb-2">
                    Go Pro with Acadex!
                </h5>

                <p className="gray-100 XSmall-Regular mb-4">
                    Upgrade to Acadex Pro for advanced features and support
                </p>

                <button className="btn btn-primary XSmall-Medium py-2 rounded-3">
                    Upgrade Now
                </button>
            </div>

        </div>
    )
}

export default UpgraadeButton
