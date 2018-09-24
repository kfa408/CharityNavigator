module.exports = {
    authentication: {
        requestToken: 'authentication/token/new',
        session: 'authentication/session/new'
    },
    methods: {
        orgs: {
            '': {
                resource: 'Organizations',
                method: 'get'
            },
            Ein: {
                resource: 'Organizations/:ein',
                method: 'get'
            }
        }
    }
}
