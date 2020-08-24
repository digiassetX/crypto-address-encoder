const base58check=require('base58check');
const bech32=require('bech32');

/**
 *
 * @param {string}  pubkeyHash
 * @param {string}  prefix
 * @return {string}
 */
module.exports=(pubkeyHash,prefix="D")=> {
    if (prefix.length>1) {
        //bech32
        let words=bech32.toWords(Buffer.from(pubkeyHash,'hex'));
        words.unshift(0);   //add 0 to beginning
        return bech32.encode(prefix,words);

    } else {
        //base58
        const code=({
            'D':    '1e',
            'S':    '3f'
        })[prefix];
        return base58check.encode(pubkeyHash, code);
    }
}