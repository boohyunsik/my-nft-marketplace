import logo from './logo.svg';
import './App.css';
import { getNFTinfo } from "./nft/index"
import { useEffect, useState } from 'react';

function App() {
  const [nfts, setNfts] = useState([]);

  async function fetchNFT() {
    const result = await getNFTinfo();
    console.log('nfts : ' + result);
    setNfts(result);
    console.log('nftList : ' + nfts);
  }

  useEffect(() => {
    fetchNFT().then(() => {
      console.log('then nfts : ' + nfts);
    });
  }, []);

  return (
    <div>
      {
        console.log('!!! : ' + nfts)
      }
      {
        <img src={nfts[0]}/>
      }
    </div>
  );
}

export default App;
