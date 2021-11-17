// const CreateAutoComplete = { fetchData }
// apikey: 17a1fc3fa922438dbbe01411211711
// 'http://api.weatherapi.com/v1/current.json?key=17a1fc3fa922438dbbe01411211711&q=London&aqi=no'
const fetchData = async (searchInput) => {
  const response = await axios.get(
    'http://api.weatherapi.com/v1/search.json',
    {
      params: {
        key: '17a1fc3fa922438dbbe01411211711',
        q: searchInput,


      },
    },
  );
  console.log(response.data);
};

const form = document.querySelector('.autocomplete');


form.innerHTML = `
  <form>
  <div class="dropdown">
  <label for="searchInput"></label>
    <input
      id="input dropdownMenuLink"
      class="input rounded-pill dropdown-toggle border-none"
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
const input = document.querySelector('.input');

const onInput = async (evt) => {
  const data = await fetchData(evt.target.value);
  if (data) {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.removeAttribute('hidden');
  }

};


input.addEventListener('input', onInput);
