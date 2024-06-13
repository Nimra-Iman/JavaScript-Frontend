// String.fromCharCode() takes a sequence of Unicode values as
//  arguments and returns a string created by converting each value 
//  to a character. In this specific usage, 97 + randomNumber calculates a random number 
//  between 97 and 122 (inclusive), as the ASCII values for lowercase letters 'a' to 'z' 
//  are 97 to 122 respectively.
// For example, if randomNumber is 0, 97 + randomNumber evaluates to 97, which corresponds
// to the character 'a'. Similarly, if randomNumber is 25, 97 + randomNumber evaluates to 
// 122, which corresponds to the character 'z'. Therefore, String.fromCharCode(97 + randomNumber)
//  generates a random lowercase letter from 'a' to 'z' based on the value of randomNumber.



//   super strong:  2 capital, 2 small, 2 numbers, 2 special
//   strong:  3 capital, 2 small, 1 numbers, 2 special
//   weak:  4 capital, 3 small, 1 special

class Password {
    constructor(password, pass, p) {
        this.password = password
        this.pass = pass
        this.p = p
    }
    Strong() {
        let strong = " "
        let str = " "
        const num = Math.floor(Math.random() * 9) //*************1 number
        console.log(num)
        strong = strong.concat(num)

        for (let i = 0; i < 2; i++) {
            const randomNumber = Math.floor(Math.random() * 26);
            // Add the ASCII value of 'a' (97) to the random number to get a random small letter
            let small = String.fromCharCode(97 + randomNumber);
            let r_small = (str.concat(small))
            console.log(r_small) //*************** 2 small letters
            strong = strong.concat(r_small)
        }

        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * 26);
            // Add the ASCII value of 'a' (97) to the random number to get a random small letter
            let capital = String.fromCharCode(65 + randomNumber);
            let r_capi = (str.concat(capital))
            console.log(r_capi) //*************** 3 capital letters
            strong = strong.concat(r_capi)
        }

        let special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]"]
        let spe = ""
        for (let i = 0; i < 2; i++) {
            let index = Math.floor(Math.random() * 15);
            let r_special = (special[index])
            let specialFinal = (spe.concat(r_special))
            console.log(specialFinal) //  ***********  2 special characters 
            strong = strong.concat(specialFinal)
        }
        // console.log(strong)
        this.password = strong
        // console.log(this.password)
        let stro = document.getElementById("stropas")
        stro.onclick = () => {
            let p = document.getElementById("strongP")
            p.innerHTML = this.password
        }

    }

    super_Strong() {   // super strong:  2 capital, 2 small, 2 numbers, 2 special
        let strong1 = ""
        let str = " "
        for (let i = 0; i < 2; i++) {
            const num = Math.floor(Math.random() * 9) //*************1 number
            console.log(num)
            strong1 = strong1.concat(num)
        }
        for (let i = 0; i < 2; i++) {
            const randomNumber = Math.floor(Math.random() * 26);
            // Add the ASCII value of 'a' (97) to the random number to get a random small letter
            let small = String.fromCharCode(97 + randomNumber);
            let r_small = (str.concat(small))
            console.log(r_small) //*************** 2 small letters
            strong1 = strong1.concat(r_small)
        }

        for (let i = 0; i < 2; i++) {
            const randomNumber = Math.floor(Math.random() * 26);
            // Add the ASCII value of 'a' (97) to the random number to get a random small letter
            let capital = String.fromCharCode(65 + randomNumber);
            let r_capi = (str.concat(capital))
            console.log(r_capi) //*************** 2 capital letters
            strong1 = strong1.concat(r_capi)
        }

        let special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]"]
        let spe = ""
        for (let i = 0; i < 2; i++) {
            let index = Math.floor(Math.random() * 15);
            let r_special = (special[index])
            let specialFinal = (spe.concat(r_special))
            console.log(specialFinal) //  ***********  2 special characters 
            strong1 = strong1.concat(specialFinal)
        }
        // console.log(strong)
        this.pass = strong1
        // console.log(this.password)
        let strop = document.getElementById("supstropas")
        strop.onclick = () => {
            let p1 = document.getElementById("superStrongP");
            p1.innerHTML = this.pass;
        };
    }

    weak() {   //  weak:  4 capital, 3 small, 1 special
        let strong2 = "" //ek final string jis k ander saary elements akathy hon gy
        let str = " "

        for (let i = 0; i < 3; i++) {
            const randomNumber = Math.floor(Math.random() * 26);
            // Add the ASCII value of 'a' (97) to the random number to get a random small letter
            let small = String.fromCharCode(97 + randomNumber);
            let r_small = (str.concat(small))
            console.log(r_small) //*************** 2 small letters
            strong2 = strong2.concat(r_small)
        }

        for (let i = 0; i < 4; i++) {
            const randomNumber = Math.floor(Math.random() * 26);
            // Add the ASCII value of 'a' (97) to the random number to get a random small letter
            let capital = String.fromCharCode(65 + randomNumber);
            let r_capi = (str.concat(capital))
            console.log(r_capi) //*************** 2 capital letters
            strong2 = strong2.concat(r_capi)
        }

        let special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "[", "]"]
        let spe = ""

        let index = Math.floor(Math.random() * 15);
        let r_special = (special[index])
        let specialFinal = (spe.concat(r_special))
        console.log(specialFinal) //  ***********  1 special character 
        strong2 = strong2.concat(specialFinal)

        this.p = strong2
        // document.write(this.p)

        let weakpass = document.getElementById("weakpas")
        weakpass.onclick = () => {
            let p2 = document.getElementById("weakp");
            p2.innerHTML = this.p;
        };
    }
}
let c = new Password()
c.Strong()
c.super_Strong()
c.weak()





