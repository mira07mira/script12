let info = []

for (let i = 0; i < Infinity; i++) {
    
    let command = prompt('Введите команду:');
    
    let parts = command.split(' ');
    
    if (parts[0] === 'add') {
        if (parts.length > 1) {
            info.push(parts.slice(1).join(' '));
            console.log(info);
        }
    }if (parts[0] === 'del') {
        if (parts.length > 1) {
            let index = info.indexOf(parts.slice(1).join(' '));
            info.splice(index, 1);
            console.log(info);
        }
    }if(command === 'stop'){
       console.log(info);
   break
   } 
}

console.log(info);
