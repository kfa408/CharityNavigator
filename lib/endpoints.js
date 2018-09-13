module.exports = {
    authentication: {
        requestToken: 'authentication/token/new',
        session: 'authentication/session/new'
    },
    methods: {
        Organizations: {
            '': {
                resource: 'Organizations',
                method: 'get'
            }
        }
    }
}
