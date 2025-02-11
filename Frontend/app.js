const createCards = (comments) => {
  let container = document.getElementById("comments");
  let gridRow = document.createElement("div");
  gridRow.classList.add("row");
  gridRow.classList.add("gap-3");
  comments.forEach((comment) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-3");
    card.innerHTML = `
    <img class="card-img-top" src="https://picsum.photos/id/${Math.floor(
      Math.random() * (50 - 1 + 1) + 1
    )}/200/150" alt="random image">  
      <div class="card-body">
        <h5 class="card-title">${comment.name}</h5>
        <p class="card-text">${comment.body}</p>
        <a href="#" class="btn btn-primary">Go</a>
      </div>
    `;
    gridRow.appendChild(card);
    container.appendChild(gridRow);
  });
};

const jsonplaceholderFetch = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const localServerFetch = async () => {
  try {
    let response = await fetch("./comments.json");
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const restAPIFetch = async () => {
  try {
    let response = await fetch("http://localhost:8080/");
    let temp = await response.json();
    console.log(temp);
  } catch (err) {
    console.log(err);
  }
};

funcBuild = async () => {
  // let data = await jsonplaceholderFetch();
  let data = await localServerFetch();
  createCards(data.slice(0, 48));
};

// funcBuild();
restAPIFetch();
