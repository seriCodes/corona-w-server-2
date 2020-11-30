
 export async function getChartsData(token) {
        console.log("getChartsData")

        let h = new Headers({
            'Content-Type': 'text/plain',
            // 'Authentication': 'Bearer ' +token
          });
          console.log(h)

          let response = await  fetch('/', { 
          method: 'GET',
          headers: h,
         mode: 'cors',//this & next line doesen't do anything
         cache: 'default' 
        }) 
        console.log('response')

        console.log(response)
        console.error()
        let data = await response.json()
        console.log( "Data from userUtils")
        
        console.log(data)
        return data;
      }
        