# Crown clothing 
### [Live](https://dazzling-lebkuchen-c09f08.netlify.app/)  

!["preview image "](./preview.png)


# What i used?
### For Front end I used 
-  [React js](https://reactjs.org/).
  - [React hooks](https://reactjs.org/docs/hooks-intro.html)
  - [Context](https://reactjs.org/docs/context.html)
  - [React router](https://reactrouter.com/en/main)
  - [Styled components](https://styled-components.com/)
### For Back end I used
- [Firebase](https://firebase.google.com/) 


#### Note:
- It's not responsve yet 
- Payments api is not integrated

## How to run locally?
#### First Initiate 
```
git clone https://github.com/ezekielnizamani/crown-clothing.git
npm install 
```
You will find utils  files in src folder in there go to firebase and open firebase.js.
```
const firebaseConfig = {
  apiKey: "AIzaSyBVnrDVqUHCU7Z1oCEQFdRkBtv4Nz6GTuY",
  authDomain: "crown-clothing-b8372.firebaseapp.com",
  projectId: "crown-clothing-b8372",
  storageBucket: "crown-clothing-b8372.appspot.com",
  messagingSenderId: "1022834864539",
  appId: "1:1022834864539:web:ebc875d926931bff16713e",
};
```
Chnage firebaseConfig with the code givin by firebase then you are ready to go 

To run locally
```
npm start 
```
You should see something like this then just paste this http://localhost:3000 in your browser or whatever you get in Local:
```
webpack compiled successfully
Compiling...
Compiled successfully!

You can now view cewn-clothing in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.10.4:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
