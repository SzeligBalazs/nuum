import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="w-full h-[100vh] overflow-x-hidden bg-neutral-900 text-white flex flex-col font-mono selection:bg-blue-400">
                <div className="w-full text-center p-5 text-gray-300">
                    <h1 className='text-[1.5rem]'>Számrendszer átváltó</h1>
                    <br />
                    <h2>Támogatot számrendszerek: BIN, OCT, DEC, HEX</h2>
                    <h2>Használat (pálda): <br />13 hexbe, 24 octból 1337 to hex, 539 from hex stb.</h2>
                </div>
                <div className="w-full h-[100vh] flex flex-row">
                    <textarea autoFocus id='input' onChange={this.convert} className="bg-neutral-900 w-[50%] h-full p-3 pt-11 pl-8 outline-none resize-none" placeholder='Enter numbers and then "to hex" for example'></textarea>
                    <div className="w-1 h-[90%] bg-neutral-800 rounded-full m-10"></div>
                    <div className="bg-neutral-900 w-[50%] h-full p-3 pt-10 pl-8">
                        <p className="text-green-500"></p>
                    </div>
                </div>
            </div>
        );
    }


    convert() {
        let input = document.getElementById('input');
        let output = document.querySelector('.text-green-500');
        let results = [];

        let lines = input.value.split('\n');

        for (let i = 0; i < lines.length; i++) {
            if(lines[i].includes('to hex')) {
                console.log('hex');
                let number = lines[i].replace('to hex', '');
                results.push(parseInt(number).toString(16).toUpperCase() + " (HEX)");
            } else if(lines[i].includes('to bin')) {
                console.log('bin');
                let number = lines[i].replace('to bin', '');
                results.push(parseInt(number).toString(2).toUpperCase() + " (BIN)");
            } else if(lines[i].includes('to oct')) {
                console.log('oct');
                let number = lines[i].replace('to oct', '');
                results.push(parseInt(number).toString(8).toUpperCase() + " (OCT)");
            } else if(lines[i].includes('from hex')) {
                console.log('dec');
                let number = lines[i].replace('from hex', '');
                results.push(parseInt(number, 16) + " (DEC)");
            } else if(lines[i].includes('from bin')) {
                console.log('dec');
                let number = lines[i].replace('from dec', '');
                results.push(parseInt(number, 2) + " (DEC)");
            } else if(lines[i].includes('from oct')) {
                console.log('dec');
                let number = lines[i].replace('from dec', '');
                results.push(parseInt(number, 8) + " (DEC)");
            }

            if(lines[i].includes('hexbe')) {
                console.log('hex');
                let number = lines[i].replace('hexbe', '');
                results.push(parseInt(number).toString(16).toUpperCase() + " (HEX)");
            } else if(lines[i].includes('binbe')) {
                console.log('bin');
                let number = lines[i].replace('binbe', '');
                results.push(parseInt(number).toString(2).toUpperCase() + " (BIN)");
            } else if(lines[i].includes('octba')) {
                console.log('oct');
                let number = lines[i].replace('octba', '');
                results.push(parseInt(number).toString(8).toUpperCase() + " (OCT)");
            } else if(lines[i].includes('hexből')) {
                console.log('dec');
                let number = lines[i].replace('hexből', '');
                results.push(parseInt(number, 16) + " (DEC)");
            } else if(lines[i].includes('binből')) {
                console.log('dec');
                let number = lines[i].replace('binből', '');
                results.push(parseInt(number, 2) !== "NaN" ? "HIBA" : parseInt(number, 2) + " (DEC)");
            } else if(lines[i].includes('octból')) {
                console.log('dec');
                let number = lines[i].replace('octból', '');
                results.push(parseInt(number, 8) + " (DEC)");
            }
        }
        output.innerText = results.join('\n');
    }
}

export default App;
