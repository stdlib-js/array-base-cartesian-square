/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolveGetter = require( '@stdlib/array-base-resolve-getter' );


// MAIN //

/**
* Returns the Cartesian square.
*
* @param {Collection} x - input array
* @returns {Array<Array>} list of ordered tuples comprising the Cartesian product
*
* @example
* var x = [ 1, 2 ];
*
* var out = cartesianSquare( x );
* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
*/
function cartesianSquare( x ) {
	var get;
	var out;
	var N;
	var v;
	var i;
	var j;

	get = resolveGetter( x );
	N = x.length;
	out = [];
	for ( i = 0; i < N; i++ ) {
		v = get( x, i );
		for ( j = 0; j < N; j++ ) {
			out.push( [ v, get( x, j ) ] );
		}
	}
	return out;
}


// EXPORTS //

module.exports = cartesianSquare;
