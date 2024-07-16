import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu";


export function AuthLayout(){

    return(
        <>
            <Menu />
            <div>
                <Outlet />
            </div>

        </>
    )
}