EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        callbackFn(this[i],i,this)
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        myArr[i] = callbackFn(this[i],i,this);
    }
    return myArr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        if (callbackFn(this[i],i,this))
            myArr.push(this[i]);
    }
    return myArr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        if (callbackFn(this[i],i,this))
            return true;
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    const myArr = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined)
            continue;
        if (!callbackFn(this[i],i,this))
            return false;
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};