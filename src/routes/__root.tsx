import { createRootRoute, Outlet } from '@tanstack/react-router';
import TanLink from '@/shared/ui/links/TanLink/TanLink.tsx';


export const Route = createRootRoute({
    component: () => (
        <>
            <div className="p-2 flex gap-2">
                <TanLink className="[&.active]:font-bold" to="/">
                    Home
                </TanLink>{ ' ' }
                <TanLink className="[&.active]:font-bold" to="/about">
                    About
                </TanLink>
            </div>
            <hr/>
            <Outlet/>
        </>
    ),
});