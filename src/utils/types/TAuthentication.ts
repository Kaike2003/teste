

export type TAuthentication = {
    logged: boolean
    user: string
    loggeduser: (email: string, password: string) => void
    outuser: () => void
}
