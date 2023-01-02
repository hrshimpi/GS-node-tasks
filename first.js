var words = ['go','google','photo','golang','good','tango'];

var w = words.sort();
var w = words;
console.log(w);

console.log(typeof(w),'\n');
var i=0;
var j=1;

// while( true ) {
//     if( j === w.length ) {
//         i++;
//         j = i+1;
//     }
//     if( i === w.length-1 ){
//         break;
//     }
//     console.log(w[i], "\n",w[j]);
//     j++;
// }



getMaxKeyVal = (m) => {
    var maxi = 0;
    var akey = '';
    var aval = 0;
    for( [ key,value ] of m ){
        if( maxi < value && key.length!==0 ) {
            akey = key;
            aval = value;
            maxi = value;
        }
    }
    console.log(akey,aval);
}

fnc = (w) => {
    let m = new Map();
    var t=0;
    for( i=0; i<w.length-1 ; i++ ) {
        for( j=i+1; j<w.length ; j++ ) {

            var str1 = w[i];
            var str2 = w[j];
            var newStr = '';
            var minLen = Math.min(str1.length, str2.length);
            for(var k=0; k<minLen; k++){
                if(str1[k] === str2[k]){
                    //continue adding until substring are equal
                    newStr = newStr + str1[k];
                    continue;
                }else{
                    break;
                }
            }
            
            if(m.get(newStr)){
                //then update and increment the value
                let g = m.get(newStr) + 1;
                m.set(newStr,g);
            }else{
                //set as new value
                m.set(newStr,1);
            }
        }
    }
    console.log(m);
    getMaxKeyVal(m);
}

fnc(w);
