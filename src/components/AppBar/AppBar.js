import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UseMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";
import css from "./AppBar.module.css";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <header className={css.header}>
            <div className={css.container}>
                <Navigation />
                {isLoggedIn ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    )
}

