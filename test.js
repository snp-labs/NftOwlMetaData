
const fs = require('fs');

const data = {
    "attributes": [
    ],
    "description": "For zkrypto NFT",
    "image": '',
    "name": "Owl #"
};

const image = [
    'https://raw.githubusercontent.com/snp-labs/NftOwlMetaData/main/image/0.png',
    'https://raw.githubusercontent.com/snp-labs/NftOwlMetaData/main/image/1.png',
    'https://raw.githubusercontent.com/snp-labs/NftOwlMetaData/main/image/2.png',
    'https://raw.githubusercontent.com/snp-labs/NftOwlMetaData/main/image/3.png',
]

for (let i = 0; i < 10000; i++) {
    data.image = image[i%4];
    data.name = "Owl #" + i.toString();
    fs.writeFileSync(`./nft/${i}`, JSON.stringify(data));
}
