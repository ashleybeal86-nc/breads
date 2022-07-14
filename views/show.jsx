const React = require('react')
const Default = require('./layouts/Default')

function Show({ bread, index }) {
  // Confirm we are getting our bread data in the terminal.
  // console.log(bread.name)
  return (
    <Default>
      <h3>{bread.name}</h3>
      <p>
        and it
        {bread.hasGluten ? <span> does </span> : <span> does NOT </span>}
        have gluten.
      </p>
      <img src={bread.image} alt={bread.name} />
      <p>{bread.getBakedBy()}</p>
      <li>
        <a href="/breads">Go home</a>
      </li>
      <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type="submit" value="DELETE" />
        <a href={`/breads/${bread.id}/edit`}>
          <button>Edit</button>
        </a>
      </form>
      <label htmlFor="baker">Baker</label>
      <select name="baker" id="baker" defaultValue={bread.baker}>
        <option value="Rachel">Rachel</option>
        <option value="Monica">Monica</option>
        <option value="Joey">Joey</option>
        <option value="Chandler">Chandler</option>
        <option value="Ross">Ross</option>
        <option value="Phoebe">Phoebe</option>
      </select>
    </Default>
  );} 

  module.exports = Show
