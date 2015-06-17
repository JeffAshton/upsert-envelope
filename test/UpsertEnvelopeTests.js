var expect = require( 'expect' );
var UpsertEnvelope = require( '..' );

describe( 'UpsertEnvelope', function() {

    var resource = 38383;

    describe( 'constructor', function() {

        it( 'should accept just resource, and assume updated', function() {

            var env = new UpsertEnvelope( resource );
            expect( env.resource ).toBe( resource );
            expect( env.inserted ).toBe( false );
        });

        it( 'should accept resource and inserted flag, when installed', function() {

            var env = new UpsertEnvelope( resource, true );
            expect( env.resource ).toBe( resource );
            expect( env.inserted ).toBe( true );
        });

        it( 'should accept resource and inserted flag, when updated', function() {

            var env = new UpsertEnvelope( resource, false );
            expect( env.resource ).toBe( resource );
            expect( env.inserted ).toBe( false );
        });
    });

    describe( 'asInserted', function() {

        it( 'should accept resource', function() {

            var env = UpsertEnvelope.asInserted( resource );
            expect( env.resource ).toBe( resource );
            expect( env.inserted ).toBe( true );
        });
    });

    describe( 'asUpdated', function() {

        it( 'should accept resource', function() {

            var env = UpsertEnvelope.asUpdated( resource );
            expect( env.resource ).toBe( resource );
            expect( env.inserted ).toBe( false );
        });
    });
});