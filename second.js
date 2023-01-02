const arr1 = [1,2,2];
const arr2 = [9,1,2];
const arr3 = arr1.concat(arr2);

to_remove_duplicate_n_concat = (arr3) => {
    
    var temp = [];

    for( i = 0; i<arr3.length; i++ ){
        if( temp.indexOf( arr3[i] ) === -1 ) {  //will push ith element in new  array
            temp.push( arr3[i] );               
        }
    }

    return temp;
};

console.log(to_remove_duplicate_n_concat(arr3));