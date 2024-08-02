import { Outlet } from "react-router-dom"
import TopNav from "../common/components/TopNav"
import BotNav from "../common/components/BotNav"

const RootLayout: React.FC = () => {
    return(
        <div>
            <div className="header">
                <TopNav />
            </div>
            <div className="body">
                <Outlet />
            </div>
            <div className="footer">
                <BotNav />
            </div>
        </div>
    )
}

export default RootLayout