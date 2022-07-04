// import logo from './logo.svg';
import "./App.css";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let arr = [
    {
      first: "FREE",
      second: "$50/month",
      third: "single User",
      features:[{
          title: "5GB Storage",
          able:true
      },
    {
        title: " Unlimited Public Projects" ,
        able:true
    },
    {
        title:  "Dedicated Phone Support",
        
        able:true
    },
    {
        title: "Dedicated Phone Support" ,
        able:true
    },
    {
        title:"Free Subdomain" ,
        able:false
    },{
        title:" Monthly Status Reports" ,
        able:false
    }]
},
     
    {
      first: "PLUS",

      second: "$9/month",
      third: "5 User",
      features:[{
        title: "5GB Storage",
        able:true
    },
  {
      title: " Unlimited Public Projects" ,
      able:true
  },
  {
      title:  "Dedicated Phone Support",
      able:true
  },
  {
      title: "Dedicated Phone Support" ,
      able:false
  },
  {
      title:"Free Subdomain" ,
      able:false
  },{
      title:" Monthly Status Reports" ,
      able:false
  }]
    },
    {
      first: "Pro",
 second: "$49/month",
      third: "unlimited",
      features:[{
        title: "5GB Storage",
        able:true
    },
  {
      title: " Unlimited Public Projects" ,
      able:true
  },
  {
      title:  "Dedicated Phone Support",
      able:true
  },
  {
      title: "Dedicated Phone Support" ,
      able:true
  },
  {
      title:"Free Subdomain" ,
      able:true
  },{
      title:" Monthly Status Reports" ,
      able:false
  }]
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {arr.map((pro) => {
            return (
              <Card data={pro}>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default App;
