import {Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <div className="app-cointainer">
            <main id="main-content">
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout;