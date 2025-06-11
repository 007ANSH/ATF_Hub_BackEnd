const { app } = require('@azure/functions');

app.http('api1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
       // fetch from blob storage and return files to frontend. 
            
    }
});
