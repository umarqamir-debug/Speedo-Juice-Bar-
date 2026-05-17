import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div style={{padding:20,fontFamily:"Arial"}}>
      <h1>🧃 Speedo Juice Bar</h1>
      <p>Order Fresh. Fast. Easy.</p>

      <h2>Quick Order</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} /><br/><br/>
      <input placeholder="Phone" onChange={e=>setPhone(e.target.value)} /><br/><br/>

      <a href={`https://wa.me/27606102051?text=Order from Speedo Juice Bar - Name:${name} Phone:${phone}`} target="_blank">
        <button>Order via WhatsApp</button>
      </a>

      <h2 style={{marginTop:40}}>Event Booking</h2>
      <p>Book us for Events / Markets / Pop-ups</p>

      <a href="https://pay.yoco.com/YOUR_DEPOSIT_LINK" target="_blank">
        <button>Pay Booking Deposit</button>
      </a>
    </div>
  );
}
