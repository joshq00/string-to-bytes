function toArray ( str ) {
	return str.split( '' );
}
function getCharCode ( character ) {
	return character.charCodeAt( 0 );
}
function getByte ( nbr ) {
	return nbr & 0xFF;
}
function stripByte ( nbr ) {
	return nbr >> 8;
}
function toBytes ( charCode ) {
	if ( !charCode ) {
		return [];
	}
	return toBytes( stripByte( charCode ) )
		.concat( getByte( charCode ) );
}
module.exports = function strtobytes ( str ) {
	return toArray( str ).map( getCharCode ).map( toBytes );
};
