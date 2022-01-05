/** Connect to Moralis server */
const serverUrl = "https://c7p3rennmrcq.usemoralis.com:2053/server";
const appId = "nCkkYi88Pqf8VE07TI92BKaRAwoIlOVq8YaUK7vQ";
Moralis.start({ serverUrl, appId });

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
   try {
      user = await Moralis.authenticate({ signingMessage: "Hello World!" })
      console.log(user)
      console.log(user.get('ethAddress'))
   } catch(error) {
     console.log(error)
   }
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

async function getNFTs() {
    let nft = await Moralis.Web3API.account.getNFTs({address: "0x495f947276749ce646f68ac8c248420045cb7b5e"})
    let str = JSON.stringify(nft, null, 2);
    document.getElementById("foo").innerHTML = str;
    
}


document.getElementById("getNFTs").onclick = getNFTs;
document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#metamask

/** Moralis Forum */

// https://forum.moralis.io/
