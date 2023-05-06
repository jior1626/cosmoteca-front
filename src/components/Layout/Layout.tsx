
import React from "react";

import "./Layout.css";
import Header from "./Header/Header";

interface LayoutInterface {
    children?: React.ReactNode;
}
const Layout: React.FC<LayoutInterface> = ({ children }) => {

    return (
        <main>
            <Header />
            <div className="content">
                {children}
            </div>
        </main>
    )
}

export default Layout;