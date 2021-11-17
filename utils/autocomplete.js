// const CreateAutoComplete = { fetchData }
// apikey: 17a1fc3fa922438dbbe01411211711
// 'http://api.weatherapi.com/v1/current.json?key=17a1fc3fa922438dbbe01411211711&q=London&aqi=no'

const fetchData = async (searchInput) => {
  const response = await axios.get(
    'http://api.weatherapi.com/v1/current.json?key=17a1fc3fa922438dbbe01411211711&q=London&aqi=no',
    {
      params: {
        q: searchInput,
      },
    }
  );

  console.log(response);
  console.log(response.data.location);
};

const form = document.querySelector('.autocomplete');
form.innerHTML = `
  <form>
    <label for="searchInput"></label>
    <input
      id="input"
      type="text"
      placeholder='Search for a location...'
    ></input>
    <button type="submit">Submit</button>
  </form>
`;

const input = document.querySelector('#input');
input.addEventListener('input', fetchData());
