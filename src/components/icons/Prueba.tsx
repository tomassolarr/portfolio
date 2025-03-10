import {useState} from "react";
type Item= {
  text: string;
  id: number;
}


const Prueba = () => {
  const [items, setItems] = useState<string[]>([]);
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    
    const { elements} = event.currentTarget;
    const input= elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input=== null) return; 

    const newItem: Item = {
      text: input.value,
      id: Date.now()
  };
   
  };
  return (
    <div>
      <h1>Agregar</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Agregar</button>
        </form>
    </div>
  );
};
export default Prueba;