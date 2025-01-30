class dinglemouse {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    getFullName() {
        // const _1st = this.fName.length > 0 ? this.fName : "";
        // const _2nd = this.lName.length > 0 ? this.lName : "";
        // return `${_1st}${_1st.length > 0 && _2nd.length > 0 ? " " : " "} ${_2nd}`;
        return `${this.fName} ${this.lName}`.trim() ; 

    }

}