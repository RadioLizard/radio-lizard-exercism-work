class CustomSet {
    constructor(elements =[]){
        this.elements=elements
    }
    //checks to see if the set is empty
    empty(){
        return this.elements.length < 1 ? true : false
    }

    //checks to see if the item (argument) is included in the set.
    contains(item){
        return this.elements.includes(item) ? true : false
    }
    //checks to see if the set is a subset of another set.
    subset(array){
        const thisArray = array.elements
        if ((this.elements.length<1&&thisArray.length<1) || (this.elements.length<1 && thisArray.length>=1)){
            return true
        }
        else if(this.elements.length >=1 && thisArray.length <1){
            return false
        }
        else if (this.elements.length>=1 && thisArray.length >=1){
            let trues = 0
            this.elements.forEach((item)=>{
                if (thisArray.includes(item)===true){
                    trues++
                }
            })
            return (trues === this.elements.length && trues <= thisArray.length) ? true : false
        }
    }
}

export {CustomSet}