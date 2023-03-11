const routes: Array<AuthRoute.Route> = [];
const modules = import.meta.glob("./*.ts", { eager: true });
Object.values(modules).forEach((item: any) => {
    routes.push(item.default as AuthRoute.Route);
});
export default routes;
