const form = document.querySelector('.autocomplete');
form.innerHTML = `
  <form>
    <label for='searchInput'></label>
    <input
      id='searchInput'
      type='text'
      placeholder='Search for a location...'
    ></input>
  </form>
`;
