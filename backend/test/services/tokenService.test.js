import { tokenService } from '../../src/services'

describe('tokenService', () => {
        describe('generateTokenResponse', () => {
            it('should return token object with status and message fields ', () => {
                const expectedObject = {
                    status: 'ok',
                    token: 'testToken123YXC'
                }
                const tokenObject = tokenService.generateTokenResponse('ok')('testToken123YXC')
                expect(tokenObject).toEqual(expectedObject)
            })
        })
})
