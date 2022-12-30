
const fs = require('fs');

const data = {
    "attributes": [
    ],
    "description": "For zkrypto NFT",
    "image": '',
    "name": "Owl #"
};

const image = [
    'https://ipfs.io/ipfs/bafybeihpcu3oxrxtjtiaw4vhwjevoosnu2b4et35rbvaygmw7juub6xina',
    'https://ipfs.io/ipfs/bafybeifa3f6swh7oadoucu56lfthbjlyenmm7wvtx42qjrisqjddxsigfe',
    'https://ipfs.io/ipfs/bafybeifielsotzmvodns5gxelbanfkqflsnxeprbqjidrtinapj4swxsi4',
    'https://ipfs.io/ipfs/bafybeidjq4uw4xhxz3tipmkuvsixyzqqwq7q2jiqfzo5ctbuvtzm45krkq',
]

for (let i = 0; i < 10000; i++) {
    data.image = image[i%4];
    data.name = "Owl #" + i.toString();
    fs.writeFileSync(`./nft/${i}`, JSON.stringify(data));
}
