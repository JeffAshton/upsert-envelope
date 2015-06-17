/**
 * Creates an UpsertEnvelope
 * @param resource The resource which was updated or inserted
 * @param inserted True iff the resource was inserted, defaults to false
 * @constructor
 */
function UpsertEnvelope( resource, inserted ) {

    this.resource = resource;
    this.inserted = ( inserted === true );
}

/**
 * Wraps a resource as inserted
 * @param resource The resource
 * @returns {UpsertEnvelope}
 */
UpsertEnvelope.asInserted = function( resource ) {
    return new UpsertEnvelope( resource, true );
};

/**
 * Wraps a resource as updated
 * @param resource The resource
 * @param resource
 * @returns {UpsertEnvelope}
 */
UpsertEnvelope.asUpdated = function( resource ) {
    return new UpsertEnvelope( resource, false );
};

module.exports = UpsertEnvelope;