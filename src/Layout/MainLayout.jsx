import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className="border bg-red-400 coffeeContainer">
                <h1 className="font-bold text-4xl border">Comming soon.....</h1>
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;