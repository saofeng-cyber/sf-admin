import Route from "@/requests/api/route";
interface State {
    token: string;
    routerList: AuthRoute.Route[];
    role: AuthRoute.RoleType;
}
export const RouterModule = defineStore("routerModuleStore", {
    state: (): State => {
        return {
            token: (localStorage.getItem("token") as string) || "",
            routerList: [],
            role: "super",
        };
    },
    actions: {
        setStoken(token: string) {
            this.token = token;
        },
        clearToken() {
            this.token = "";
        },
        async getRouterList(role: AuthRoute.RoleType) {
            this.routerList = (await Route.getAsyncRoute(role as string)).data
                .routelist as AuthRoute.Route[];
        },
        async setRole(role: AuthRoute.RoleType) {
            this.role = role;
        },
    },
    presist: {
        enable: true,
        option: {
            storage: "local",
        },
        resetToState: true,
    },
});
