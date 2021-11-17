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
  <div class="dropdown">
  <label for="searchInput"></label>
    <input
      id="input dropdownMenuLink"
      class="input dropdown-toggle"
      data-bs-toggle="dropdown" aria-expanded="false"
      type="text"
      placeholder='Search for a location...'
    ></input>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" hidden>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<button type="submit">Submit</button>
</form>
`;

const onInput = () => {
  const data = fetchData();
  if (data) {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.removeAttribute('hidden');
  }
};

const input = document.querySelector('.input');
input.addEventListener('input', onInput);
