const Tester = require( './tester' );

const utils = require( '../utils' );

class APITester extends Tester {

    constructor() {

        super( {

            resource: '/',
            path: '/',
            httpMethod: 'GET',
            headers: null,
            queryStringParameters: null,
            pathParameters: null,
            stageVariables: null,

            requestContext: {

                resourcePath: '/',
                apiId: '00aaa0a00a',
                accountId: "999999999999",
                resourceId: "5kwokute99",
                stage: null,
                requestId: "test-invoke-request",

                identity: {

                    cognitoIdentityPoolId: null,
                    accountId: "999999999999",
                    cognitoIdentityId: null,
                    caller: "999999999999",
                    apiKey: "test-invoke-api-key",
                    sourceIp: "1.2.3.4",
                    accessKey: "ASIAJ7WA3PXZVP6WUPZQ",
                    cognitoAuthenticationType: null,
                    cognitoAuthenticationProvider: null,
                    userArn: "arn:aws:iam::999999999999:root",
                    userAgent: "Apache-HttpClient/4.5.x (Java/1.8.0_102)",
                    user: "999999999999"
                }
            },
            body: null,
            isBase64Encoded: false
        });
    }

    httpMethod( value ) {

        return this.eventValue( 'httpMethod', value );
    }

    resource( value ) {

        this.eventValue( 'resource', value );
        this.eventValue( 'path', value );
        this.eventValue( 'requestContext.resourcePath', value );

        return this;
    }

    path( value ) {

        return this.eventValue( 'path', value );
    }

    headers( value ) {

        return this.eventValue( 'headers', value );
    }

    queryStringParameters( value ) {

        return this.eventValue( 'queryStringParameters', value );
    }

    pathParameters( value ) {

        return this.eventValue( 'pathParameters', value );
    }

    body( body = {}, base64Encoded = false ) {

        if( body ) {

            if( body instanceof Buffer ) {

                body = body.toString( 'base64' );
                base64Encoded = true;
            }
            else {

                if( utils.isObject( body ) ) {

                    body = JSON.stringify( body );
                }
                else {

                    body = body.toString();
                }
            }
        }

        this.eventValue( 'body', body );
        this.eventValue( 'isBase64Encoded', base64Encoded );

        return this;
    }

    apiId( id ) {

        return this.eventValue( 'requestContext.apiId', id );
    }

    base64Encoded( encoded = true ) {

        return this.eventValue( 'isBase64Encoded', encoded );
    }
}

module.exports = APITester;