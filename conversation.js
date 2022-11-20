
const chat = {
    1: {
        text: 'Chat with our Doggo_bot',
        options: [
            {
                text: '🐶 click here to START',
                next: 2
            },
            {
                text: 'Go back',
                url: "index.html"
            }
        ]
    },
    2: {
        text: 'How can we help You',
        
   
        text: 'Choose an option below',
        options: [
            {
                text: "Engineering Streams",
                next:6
                
                
            },
            {
                text: "Ask an Expert",
                next: 5
            },
            {
                text:"close",
                url: "index.html"
            }
        ]
    },
    0: {
        text: 'Thanks for visiting us. Good Luck for Your Career! To chat again click on restart',
    },
   
    
    5: {
        text: 'You can reach us at',
        options: [
            {
                text: "Linkedin",
                url: "https://www.linkedin.com/in/mehul-jain-a5b135224"
                
            },
            {
                text:"Facebook",
                
                
                url:"https://www.facebook.com/profile.php?id=100062199425495"
            },
            {
                text:"Instagram",
                url:"https://www.instagram.com/deadly912ag/"
                
            }
        ]
    },
    6:{
        text:"Engineering Streams",
        options:[
            {text:"Computer science",url:"CSE.html"},
            {text:"Civil ",url:"blank.html"},
            {text:"Electrical",url:"Electrical.html"},
            {text:"Data science",url:"Dse.html "},
            {text:"Bio Eng.",url:"blank.html"},
            {text:"chemical",url: "chem_eng.html" ,
            next:2 }
           
        ],
      
        
        
    },
    
};
