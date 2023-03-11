declare namespace Auth {
    type RoleType = keyof typeof import("../src/enum/business").UserCode;
}
