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
  <form class="mt-2 d-flex justify-content-end me-2">
  <div class="dropdown me-2 mt-2">
  <label for="searchInput"></label>
    <input
      id="input dropdownMenuLink"
      class="input dropdown-toggle bg-transparent border-top-0 border-end-0 border-start-0"
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
<button class="float-end btn btn-light" type="submit">search</button>
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
