import { AxiosRequestConfig } from 'axios'
import { useMemo, useState } from 'react'
import { Client, Authenticated } from 'axios-http-jwt'

export const useClient = (
    config: AxiosRequestConfig,
    onLogin: (data: any) => Promise<string>,
    onLogout: () => Promise<void>,
    onRefresh: () => Promise<string>,
    header = 'Authorization',
    headerFormat = (value: string) => `Bearer ${value}`
) => {
    const [isAuthenticated, setIsAuthenticated] = useState<Authenticated>(undefined)

    const client = useMemo(() => {
        return new Client(config, onLogin, onLogout, onRefresh, setIsAuthenticated, header, headerFormat)
    }, [])

    return {
        axios: client.axios,
        isLoading: isAuthenticated === undefined,
        isAuthenticated,
        login: client.login,
        logout: client.logout,
    }
}

export default useClient
