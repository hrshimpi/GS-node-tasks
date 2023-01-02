const readline = require('readline-sync');
const fs = require('fs');
const prompt = require('prompt');
var id = 0;
const util = require('util');
const readdir = util.promisify(fs.readdir);

app = () => {
    prompt.start();
    fs.mkdirSync('MyNote');

    var x=0;
    do{
        console.log('Enter the operation:\n1. Create new Note. \n2. Read the note \n3. Update Notet\n5. Delete the file\n ==> Enter your choice:');

        var choice = Number(readline.question());

        switch(choice){
            case 1:
                createNote();
                break;
            case 2:
                readNote();
                break;
            case 3:
                updateNote();
                break;
            case 4:
                console.log("This is 3! to truncate");
                break;
            case 5:
                deleteNote();
                break;
            default:
                console.log("\nInvalid input!");
        }
        console.log("\nDo you want to cotinue, the press 1(other wise 0 to exit)");
        x = Number(readline.question());
    }while(x===1);

    // fs.readdir('./MyNote', (err, notes) => {
    //     if (err) throw err;
    
    //     for (var note of notes) {
    //       console.log(note + ' : File Deleted Successfully.');
    //       fs.unlinkSync('./MyNote/'+note);
    //     }
    // });
    // fs.rmdirSync('MyNote');
    console.log("MyNote App stopped!!!");
}

createNote = () => {
    console.log("\nEnter the title:");
    var Title = String(readline.question());
    
    console.log("\nEnter the desciption:");
    var Desc = String(readline.question());
    id++;
    fs.writeFileSync(`MyNote/${id}.txt`,`ID:${id}\nTitle:${Title}\nDescription:${Desc}`);
}

readNote = () => {
    
    showFiles();

    console.log("\nEnter the id of note: ")
    var id = Number(readline.question());

    console.log(fs.readFileSync(`MyNote/${id}.txt`,'utf-8'));
}

updateNote = () =>{
    
    showFiles();

    console.log("\nEnter the id of note: ");
    var id = Number(readline.question());
    console.log("\nEnter the data to append in note: ")
    var data = String(readline.question());

    var array = fs.readFileSync(`MyNote/${id}.txt`,'utf-8').split("\n");
    var str  = array[2].substring(12,array[2].length);
    array[2] = array[2].replace(str,'')+data;
    
    fs.writeFileSync(`MyNote/${id}.txt`,array[0]+'\n'+array[1]+'\n'+array[2]);
}

deleteNote = () =>{

    showFiles();

    console.log("\nEnter the id of note: ")
    var id = Number(readline.question());
    
    fs.unlinkSync(`MyNote/${id}.txt`);
    
    console.log("Note is deleted successfully!!!");
}

async function showFiles(){

    let names;
    try {
        names = await readdir('MyNote',(err,files)=>{
        files.forEach(file =>{
            console.log(file);
        })
    });
    } catch (e) {
        console.log('e', e);
    }
}

app();
