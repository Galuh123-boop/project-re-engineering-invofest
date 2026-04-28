import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function AuthLayout() {
    return (
        <>
            <Header />
            <div className="grid grid-cols-2 items-center min-h-screen">

                {/* kiri */}
                <div className="h-screen flex items-center min-h-screen flex-col justify-center">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                        alt="Invofest"
                        className="w-96"
                    />
                    <h2></h2>
                </div>


                {/* kanan */}
                <div className="p-6">
                    <Outlet />
                </div>
            </div>
        </>
    );
}