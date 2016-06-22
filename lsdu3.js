/*
* LSDU3 hash
* See https://snob.ru/selected/entry/109929 for algorithm definition
*/

String.prototype.lsdu3 = function () {
    var input = this;

    input = input.replace(/[^а-яё]/ig, '').toLowerCase();

    var blocks = [[],[],[],[],[]];
    var coef = [[38, 1, 4, 4, 2], [ 9, 2, 2, 5, 4], [36, 3, 8, 2, 4], [0, 7, 14, 5, 4], [38, 1, 1, 4, 0]];
    var ruLetters = ['0','1','2','3','4','5','6','7','8','9','а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
    var result = '';

    for(var i = 0; i < input.length; i++) {
        var j = i % 5;
        blocks[j].push(ruLetters.indexOf(input.charAt(i)));
    }

    for(var i = 0; i < blocks.length; i++){
        var sum = 0;
        for(var j = 0; j < blocks[i].length; j++){
            sum += blocks[i][j] * coef[i][j % coef[i].length];
        }
        result += ruLetters[sum % 43];
    }

    return result.toUpperCase();
}