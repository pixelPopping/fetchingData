import { useState } from "react";

export const form = () => {
    const [name, setName] = useState(""); // For the quote text
    const [email, setEmail] = useState(""); // For the author's name
    const [website, setWebsite] = useState("");
    const [users, setUsers] = useState([]);

    


    const handleNameChange  = (event) => {
        setName(event.target.value);
      };

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
        
    }

    const handleWebsiteChange = (event) =>{
        setWebsite(event.target.value);
    }

    const CreatUser = (event) => {
        event.preventDefault(); // Prevent the form from reloading the page
    
        // Add the new quote to the list of quotes
        setUsers((prevUsers) => [
            ...prevUsers,
            { name, email, website }
          ]);
    
        // Clear the input fields after submission
        setName("");
        setEmail("");
        setWebsite("");
      };
    

    return(

        <div>
      <form onSubmit={CreatUser}>
      <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleNameChange }
/>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="text"
          placeholder="Enter Website"
          value={website}
          onChange={handleWebsiteChange}
        />
        <button type="submit">Submit</button>
      </form>
      <h1>Quotes:</h1>
      <div className="quotes">
        {users.map((q, index) => (
          <div className="quote" key={index}>
            <p>"{q.text}"</p>- <span>{q.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
    }

    export default form;