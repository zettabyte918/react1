import { useState, useEffect } from "react";

function App() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [myclass, setMyClass] = useState("");
  const [fac, setFac] = useState("");

  const handelchangeNom = (event) => {
    setNom(event.target.value);
  };

  const handelchangePrenom = (event) => {
    setPrenom(event.target.value);
  };

  const handelchangeClass = (event) => {
    setMyClass(event.target.value);
  };

  const handelchangeFac = (event) => {
    setFac(event.target.value);
  };

  const affiche = () => {
    alert(`nom:${nom} prenom:${prenom} class:${myclass} fac:${fac}`);
  };

  return (
    <>
      <fieldset>
        <legend>Information personnel</legend>
        <table>
          <tr>
            <td>
              <label>Nom</label>
              <input type="text" onChange={handelchangeNom}></input>
            </td>
            <td>
              <label for="prenom">Prenom</label>
              <input
                id="prenom"
                type="text"
                onChange={handelchangePrenom}
              ></input>
            </td>
          </tr>
          <tr>
            <td>
              <label>class</label>
              <input type="text" onChange={handelchangeClass}></input>
            </td>
            <td>
              <label>fac</label>
              <select onChange={handelchangeFac}>
                <option selected></option>
                <option value="fst">fst</option>
                <option value="fst">iset nabeul</option>
                <option value="fst">fss</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={affiche}>Affiche</button>
            </td>
          </tr>
        </table>
      </fieldset>
    </>
  );
}

export default App;
