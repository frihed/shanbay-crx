/**
 * 词典添加和配置
 * @user Joseph
 */



function findDerivatives(originalTerm, callback) {
    if(localStorage['dict'] == 'webster') {
        // 设置使用Webster 字典
        getOnlineWebsterCollegiate(originalTerm, function (word, json) {
            callback({
                originalTerm: originalTerm,
                word: word,
                json: json
            });
        });
    } else if (localStorage['dict'] == 'oxford'){
        // 设置使用Oxford 字典
        //TODO add oxford dictionary here
    }
}
