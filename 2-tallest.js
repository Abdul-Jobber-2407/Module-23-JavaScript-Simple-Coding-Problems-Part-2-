function getMax(heights){
    // console.log(heights);
    let max = heights[0];
    for(const height of heights){
        
        if(height > max){
            max= height;
        }
    }
    return max;
   
}
const heights = [65,66,78,89,28,97,99,88,77,64];
const max = getMax(heights);
console.log('max value is', max);

// homework : min numbers