function reverse() {
    let x = parseInt(document.getElementById("reversed-input").value);
    let result = 0;
    while (x !== 0) {
        let digit = x % 10;
        result = result * 10 + digit;
        x = Math.floor(x / 10);
    }
    document.getElementById("reversed-output").innerHTML =
        "The result is: " + result;
}
function palindrome() {
    let x = document.getElementById("palindrome-input").value;
    let l = 0;
    let r = x.length - 1;
    let result = true;
    while (l < r) {
        if (x[l] == x[r]) {
        l++;
        r--;
        } else {
        result = false;
        break;
        }
    }
    if (result) {
        document.getElementById("palindrome-output").innerHTML =
        + x + " is a palindrome.";
    } else {
        document.getElementById("palindrome-output").innerHTML =
        x + " is not a palindrome.";
    }
}
function GeneComb(){
    let x = document.getElementById("generate-input").value;
    let n = x.length;
    let res = [];
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            res.push(x.substring(i,j));
        } 
    }
    document.getElementById("generate-output").innerHTML =
        "The result is: " + res;
}
function aplph() {
    let x = document.getElementById("aplph-input").value;
    let res = x.split("").sort().join("");
    document.getElementById("aplph-output").innerHTML = "The result is: " + res;
}
function convert(){
    let x = document.getElementById("upper-input").value;
    let res = x.split(" ");
    for(let i=0;i<res.length;i++){
        let temp = res[i][0].toUpperCase();
        let remain = res[i].substring(1);
        res[i] = temp + remain;
    }
    res = res.join(" ");
    document.getElementById("upper-output").innerHTML = "The result is: " + res;
}
function longest(){
    let x = document.getElementById("longest-input").value;
    let sentence = x.split(" ");
    let max = 0;
    let target = 0;
    for(let i=0;i<sentence.length;i++){
        let len = sentence[i].length;
        if(len>max){
            max = len;
            target = i;
        }
    }
    let res = sentence[target];
    document.getElementById("longest-output").innerHTML = "The result is: " + res;
}
function vowel(){
    let x = document.getElementById("vowel-input").value;
    let vowels = new Set(["a", "e", "i", "o", "u"]);
    let res = 0;
    for(let i=0;i<x.length;i++){
        if(vowels.has(x[i]) == true){
            res++;
        }
    }
    document.getElementById("vowel-output").innerHTML = "The result is: " + res;
}
function prime(){
    let x = parseInt(document.getElementById("prime-input").value);
    let n = x-1;
    let res = true;
    while(n>1){
        if(x%n == 0){
            res = false;
            break;
        }
        n--;
    }
    if(res){
        document.getElementById("prime-output").innerHTML =
        x + " is Prime ";
    }else{
        document.getElementById("prime-output").innerHTML = x + " is not Prime ";
    }
    
}    
function type(value){
    if (value === null) {
        return "null";
    }
    if (Array.isArray(value)) {
        return "array";
    }
    return typeof value;
}
function iden_matrix(n){
    let matrix = [];
    for(let i=0;i<n;i++){
        let row = [];
        for(let j=0;j<n;j++){
            if(i===j){
                row.push(1);
            }else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
function second(arr){
    let sorted = arr.sort();
    let j = arr.length-2;
    let i = 1;
    return [arr[i],arr[j]];

}
function perfect(val){
    let n = val-1;
    let sum = 0;
    while(n>0){
        if(val % n == 0){
            sum += n;
        }
        n--;
    }
    
    if(sum == val){
        return true;
    }
    return false;
}
function find_factors(val) {
    let n = val;
    let fuctors = [];
    while (n > 0) {
        if (val % n == 0) {
            fuctors.push(n);
        }
        n--;
    }
    return fuctors
}
function amountTocoins(amount,coins){
    let res = [];
    coins.sort(function(a, b){return b - a});
    console.log(coins);
    for(let i = 0; i < coins.length; i++){
        while(amount >= coins[i]){
            amount -= coins[i];
            res.push(coins[i]);
        }
    }
    return res;
}
function exponent(){
    let b = parseInt(document.getElementById("b-input").value);
    let n = parseInt(document.getElementById("n-input").value);
    let res = b ** n;
    document.getElementById("exponent-output").innerHTML = "The result is " + res;
}
function unique(str){
    let set1 = new Set();
    let res = [];
    for(let i = 0; i < str.length;i++){
        if(set1.has(str[i]) == false){
            res.push(str[i]);
            set1.add(str[i]);
        }
    }
    let ans = res.join("");
    return ans;    
}
function occurrences(str){
    let map ={};
    for(let i = 0; i < str.length;i++){
        let char = str[i].toLowerCase();
        if(char >= 'a' && char <= 'z'){
            if (map[char]) {
                map[char]++;
            } else {
                map[char] = 1;
            }
        }
        
    }
    return map;
}
function binary_search(nums,target){
    let l = 0;
    let r = nums.length-1;
    nums.sort(function(a,b){return a-b});
    while(l<=r){
        let mid = Math.floor((l + r) / 2);
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] > target){
            r = mid - 1;
        }else if(nums[mid] < target){
            l = mid+1;
        }
    }
    return -1;
}
function larger_element(arr,val){
    return arr.filter(num=>num > val);
}
function generate_randomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
}
function all_subsets(arr, length) {
    let result = [];
    
    function generate_subsets(start, subset) {
        if (subset.length == length) {
            result.push([...subset]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
            subset.push(arr[i]);
            generate_subsets(i + 1, subset);
            subset.pop();
        }
    }
    
    generate_subsets(0, []);
    return result;
}


function count_occurence(arr, char){
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]==char){
            res ++;
        }
    }
    return res;
}
function not_repeated_characte(arr){
    let map = {};
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]]){
            map[arr[i]]++;
        }else{
            map[arr[i]] = 1;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]] == 1){
            return arr[i];
        }
    }
    return -1;
}
function bbSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}
function Longest_Country_Nam(countries){
    let res;
    let max = 0;
    for(let i = 0; i < countries.length; i++){
        if(max<countries[i].length){
            max = countries[i].length;
            res = i;
        }
    }
    return countries[res];
}
function Longest_substring(str){
    let res = "";
    let j = 0;
    let map = new Map();
    let max = 0;
    for(let i = 0; i < str.length; i++){
        if(map.has(str[i])){
            j = Math.max(j, map.get(str[i])+1);
        }
        map.set(str[i],i);
        if(i-j+1>max){
            max = i-j+1;
            res = str.slice(j,i+1);
        }
    }
    return res;
}
function longest_palindrome(str){
    let res = "";
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let l = i;
            let r = j;
            while (l < r && str[l] == str[r]) {
                l++;
                r--;
            }
            if (l >= r && (j - i + 1) > max) {
                res = str.slice(i, j + 1);
                max = j - i + 1;
            }
        }
    }
    return res;
    
}
function pass_function(func){
    return func();
}
function func_name(func){
    return func.name;
}