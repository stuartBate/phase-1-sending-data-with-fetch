// Add your code here
//fetch from the Server
function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        //post request for name and email address
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          name,
          email
        } )
      } )
      .then( function ( response ) {
        return response.json()
      } )
      //appends id to the DOM
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      //handles failed post
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
  }