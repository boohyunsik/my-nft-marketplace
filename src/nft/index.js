import Web3 from "web3";
import abi from "./abi.json";


export async function getNFTinfo() {    
    const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/595b7af287a44ac4876e614e31f797ef"));
    const nftContract = new web3.eth.Contract(abi, "0x374929254401c787263c1a31ae680096ab1dfaa5");
    const result = await nftContract.methods.getUri(2).call();
    console.log('result :' + result);
    return [result];   
}