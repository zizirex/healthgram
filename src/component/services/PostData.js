export function PostData(type, userData) {
    let BaseURL = 'http://ec2-34-207-252-72.compute-1.amazonaws.com/~LS_user5/hg-api/';

    return new Promise((resolve, reject) =>{
    
         
        fetch(BaseURL+type.concat('/index.php'), {
            method: 'POST',
            body: JSON.stringify(userData),
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             },
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}