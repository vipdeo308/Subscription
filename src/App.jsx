import './App.css'

function DisplayCard(card){
  return ( 
    <div class="card w-30">
      <div class="card-body">
        <span>{card.name}</span>
        <h2 class="card-title">${card.cost}/month</h2>
        <hr/>
        <p class="card-text">
            <ul>
                {
                  card.list.map((element)=>{
                    if(element.mark)
                      return (
                        <li className="tick">{element.text}</li>
                      )
                    else
                      return (
                        <li className="cross">{element.text}</li>
                      )    
                  })
                }
            </ul>  
        </p>
        <a href="#" class="btn btn-primary">BUTTON</a>
      </div>
    </div>
  )
}

function App() {

  const plans = [
    {name:"FREE",cost:0,list:[{mark:true,text:"Single User"},{mark:true,text:"50 GB Storage"},{mark:true,text:"Unlimited Public Projects"},{mark:true,text:"Community Access"},{mark:false,text:"Unlimited private Projects"},{mark:false,text:"Dedicated Phone Support"},{mark:false,text:"Free Subdomain"},{mark:false,text:"Monthly Status Reports"}]},
    {name:"PLUS",cost:9,list:[{mark:true,text:"5 Users"},{mark:true,text:"50 GB Storage"},{mark:true,text:"Unlimited Public Projects"},{mark:true,text:"Community Access"},{mark:true,text:"Unlimited private Projects"},{mark:true,text:"Dedicated Phone Support"},{mark:true,text:"Free Subdomain"},{mark:false,text:"Monthly Status Reports"}]},
    {name:"PRO",cost:49,list:[{mark:true,text:"Unlimited Users"},{mark:true,text:"50 GB Storage"},{mark:true,text:"Unlimited Public Projects"},{mark:true,text:"Community Access"},{mark:true,text:"Unlimited private Projects"},{mark:true,text:"Dedicated Phone Support"},{mark:true,text:"Free Subdomain"},{mark:true,text:"Monthly Status Reports"}]}
  ];

  return (
    <>
        {
            plans.map((element)=>{
                return <DisplayCard name={element.name} cost={element.cost} list={element.list}/>
            })
        }
    </>
  )
}

export default App
