import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import {Outlet} from 'react-router-dom';

function RootLayout(){

    return(
        <div>
            <Header />
            {/* Main Dynamic Content */}
            <div style={{minHeight:'50vh'}} >
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout;