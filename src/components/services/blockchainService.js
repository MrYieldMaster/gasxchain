import Web3 from 'web3';
import { InjectedConnector } from '@web3-react/injected-connector';

// Replace these with the actual values of your contract ABI and address
const contractABI = [];
const contractAddress = '0x...';

export const injectedConnector = new InjectedConnector({ supportedChainIds: [/* List of supported chain IDs */] });

export const getWeb3 = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      return new Web3(window.ethereum);
    } catch (error) {
      console.error('User denied account access');
      throw error;
    }
  } else {
    console.error('No web3 provider detected');
    throw new Error('No web3 provider detected');
  }
};

export const getContract = async () => {
  const web3 = await getWeb3();
  return new web3.eth.Contract(contractABI, contractAddress);
};

export const getAccount = async () => {
  const web3 = await getWeb3();
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
};

export const getBalance = async (account) => {
  const web3 = await getWeb3();
  return web3.eth.getBalance(account);
};

// Add more functions to interact with your blockchain's smart contracts here
