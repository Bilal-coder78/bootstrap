import React from 'react'

function Footer() {
    return (
        <>
            {/* Normal footer for mobile & tablet */}
            <footer className="bg-dark text-white text-center py-4 d-block d-lg-none animate__animated animate__fadeInUp">
                © 2025 My Website
            </footer>

            {/* Fixed footer for desktop */}
            <footer className="bg-dark text-white text-center py-5 d-none d-lg-block animate__animated animate__fadeInUp">
                © 2025 My Website
            </footer>
        </>
    )
}

export default Footer
