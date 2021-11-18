// const CreateAutoComplete = { fetchData }
// apikey: 17a1fc3fa922438dbbe01411211711
const fetchData = async (searchInput) => {
  const response = await axios.get('http://api.weatherapi.com/v1/search.json', {
    params: {
      key: '17a1fc3fa922438dbbe01411211711',
      q: searchInput,
    },
  });

  console.log(response.data);
  return response.data;
};

const form = document.querySelector('.autocomplete');

form.innerHTML = `
  <form class="mt-2 d-flex justify-content-end me-2">
  <div class="dropdown me-2 mt-2">
  <label for="searchInput"></label>
    <input
      id="input dropdownMenuLink"
      class="input dropdown-toggle  bg-transparent border-top-0 border-end-0 border-start-0"
      data-bs-toggle="dropdown" aria-expanded="false"
      type="text"
      placeholder='Search for a location...'
    ></input>

  <ul class="dropdown-menu results" aria-labelledby="dropdownMenuLink">
  </ul>
</div>
<button class="float-end btn btn-light" type="submit">search</button>
</form>
`;
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown-menu')
const results = document.querySelector('.results')

const renderOption = (location) => {
  return `

    <p>${location.name}</p>
  `
}


const onInput = async (evt) => {
  const items = await fetchData(evt.target.value);


  if (!items.length) {
    dropdown.classList.remove('show');
    return;
  }
  dropdown.classList.add('show')
  for (let item of items) {
    const newItem = document.createElement('a');
    newItem.classList.add('dropdown-item')
    newItem.innerHTML = renderOption(item)
    results.append(newItem)


  }
};

input.addEventListener('input', debounce(onInput, 500));
