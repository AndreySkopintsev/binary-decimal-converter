const switchBtn = document.getElementById('switch')
const numInput = document.getElementById('num-input')
const numOutput = document.getElementById('num-output')
const convert = document.getElementById('convert')
const warning = document.getElementById('warning')


switchBtn.addEventListener('click',()=>{
    switchBtn.innerHTML = switchBtn.innerHTML=='binary' ? 'decimal' : 'binary'
    numInput.placeholder = switchBtn.innerHTML =='decimal' ? 'Please enter a decimal number...' : 'Please enter a binary number...'
})

convert.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(numInput.value)
    if(!numInput.value){
        console.log('The input field is empty, please type in some input.')
        warning.classList.add('active')
        setTimeout(
            ()=>{
                warning.classList.remove('active')
            }
        ,2000)
    }else{
        let inputNum = numInput.value
        if(switchBtn.innerHTML == 'binary'){
            inputNum.split('').map((char) => {
                if (char !== '0' && char !== '1') {
                    numInput.value = ''
                    return alert('Please, enter a binary number')
                }else{
                    let parsedNum = parseInt(inputNum,2)
                    numOutput.value = parsedNum
                };
            });
            
        }else{
            let parsedNum = parseInt(inputNum,10).toString(2)
            numOutput.value = parsedNum
        }
        setTimeout(() => {
            numInput.value = ''
            numOutput.value = ''
        }, 3000);
    }
})


class Group{
    constructor(){
        this.group = []
    }

    add(value){
        if(this.group.indexOf(value) !== -1){
            console.log('this value already exists')
        }else{
            this.group = [...this.group,value]
        }
    }

    delete(value){
        if(this.group.indexOf(value)!=-1){
            this.group = this.group.filter(member => member != value)
        }else{
            console.log('this value doesn\'t exist')
        }
        
    }

    has(value){
        if(this.group.indexOf(value) != -1){
            return true
        }else{
            return false
        }
    }

    from([a,b]){
        console.log(a)
        console.log(b)
        for(a;a<=b;a++){
            this.group = [...this.group,a]
        }
    }
}

let groupA = new Group()