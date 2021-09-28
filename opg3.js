function personligHilsen (navn=`bro`){
    console.log(`yo ${navn} vil du med til piratfest på reffen i aften? adressen er piratvej 100`)
    }
    let array =[
            {
                navn: 'sigurd',
                sang:'hit me baby one more time',
            },
            {
                navn: 'tessa',
                sang: 'ben',
            },
            {
                navn: 'mia',
                sang: 'love will tear us apart',
            },
        ]
    array.forEach(i => console.log(personligHilsen(i.navn)));
    array.forEach(i => console.log(i.sang));
    