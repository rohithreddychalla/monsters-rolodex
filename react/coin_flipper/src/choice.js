
function choice(arr){
    let nums = Math.floor(Math.random()*arr.length);
    return arr[nums];
};

export default choice; 