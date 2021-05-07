export const tokenService = {
    generateTokenResponse: status => token => ({
        status,
        token,
    })
}

export const generateToken = tokenService.generateTokenResponse('ok')
