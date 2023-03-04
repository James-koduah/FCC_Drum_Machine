const bankOne = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'resources/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'resources/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  const bankTwo = [
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

let displayp = document.getElementById('displayp')
function beat(e){
    
    if(e.id==='Heater-1'){
        let tt= document.getElementById('Q')
        tt.play()
    }
    if(e.id === 'Heater-2'){
        let tt= document.getElementById('W')
        tt.play()
    }
    if(e.id === 'Heater-3'){
        let tt= document.getElementById('E')
        tt.play()
    }
    if(e.id === 'Heater-4'){
        let tt= document.getElementById('A')
        tt.play()
    }
    if(e.id === 'Clap'){
        let tt= document.getElementById('S')
        tt.play()
    }
    if(e.id === 'Open-HH'){
        let tt= document.getElementById('D')
        tt.play()
    }
    if(e.id === "Kick-n'-Hat"){
        let tt= document.getElementById('Z')
        tt.play()
    }
    if(e.id === 'Kick'){
        let tt= document.getElementById('X')
        tt.play()
    }
    if(e.id === 'Closed-HH'){
        let tt= document.getElementById('C')
        tt.play()
    }
    
    displayp.innerHTML=e.id

}


document.addEventListener('keydown', ww)

function ww(e){
    let mm = document.getElementById(e.key.toUpperCase())
    if(mm===null){
      return ;
    }
    mm.play();
    mm.playbackRate=2;
    let ee=mm.parentElement.id
    displayp.innerHTML=ee
}























// function tt(e) {
//     if(e.id === ''){
//         new Audio(bankOne[0].url).play();
//         console.log(e.key)
//     }
//     if(e.id === ''){
//         new Audio(bankOne[1].url).play();
//     }
//     if(e.id === ''){
//         new Audio(bankOne[2].url).play();
//     }
//     if(e.id === ''){
//         new Audio(bankOne[3].url).play();
//     }
//     if(e.id === ''){
//         new Audio(bankOne[4].url).play();
//     }
//     if(e.id === ''){
//         new Audio(bankOne[5].url).play();
//     }
//     if(e.id === ''){
//         new Audio(bankOne[6].url).play();
//     }
//     if(e.id === ''){
//         new Audio(bankOne[7].url).play();
//     }
//     if(e.id === ''){
//         new Audio(bankOne[8].url).play();
//     }
//   }

// document.addEventListener('keydown', tt)