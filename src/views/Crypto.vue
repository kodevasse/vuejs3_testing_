<template>
  <div>
    <h1>Crypto</h1>
    <button class="btn btn-primary" @click="loginfo()">Connect</button>
  </div>
</template>
<script setup>
import { ethers } from "ethers";
import { ref } from "vue";
const network = ref();
const chainId = ref();

console.log(window.ethereum);
// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const signer = provider.getSigner();
var isMetamaskInstalled = () => ethereum.isMetamask;
// Checks if metamask is installed
if (isMetamaskInstalled) {
  console.log("Metamask is installed!");
} else {
  alert("Install Metamask extension to connect to dApp!");
}

// check if metamask is connected to the current chain
var isMetamask = () => ethereum.isConnected();

// get metamask chainID
const getChainId = async () => {
  return await ethereum.request({ method: "chainId" });
};

// get metamask networkId
const getNetworkId = async () => {
  return await ethereum.request({ method: "networkVersion" });
};

// if metamask is connected do this
// if (isMetamask()) {
//   ethereum.autoRefreshOnNetworkChange = false;
//   network.value = await getNetworkId();

//   chainId.value = await getChainId();
//   await connectToAccount();
//   console.log("Metamask connected:", await isMetamask());
// } else {
//   alert("Connect to available ethereum network!");
//   console.log("Connect to available ethereum network!");
// }

// request metamask to connect with account
const connectToAccount = async () => {
  try {
    let account = await ethereum.request({ method: "eth_requestAccounts" });
    return account;
  } catch (error) {
    console.log("Error connection to metamask account:\n", error);
    return error;
  }
};
</script>
