import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <React.Fragment>
            <div className="copyright-area three">
                <div className="container">
                    <div className="copyright-item">
                        <p>&copy;{currentYear} Made with ❤ by <a href="https://github.com/s2hon" target="_blank" rel="noreferrer">Staci Shon</a></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer