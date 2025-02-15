const createCards = (comments) => {
  let container = document.getElementById("comments");
  let gridRow = document.createElement("div");
  gridRow.classList.add("row");
  gridRow.classList.add("gap-3");
  comments
    .sort((a, b) => b.id - a.id)
    .forEach((comment) => {
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
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-danger">Delete</button>
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
    let response = await fetch("http://localhost:8080/comments");
    let data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

funcCreateComment = async (comment) => {
  let response = await fetch("http://localhost:8080/comments", {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await response.json();
  // console.log(data);
  createCards(data.comments);
};

funcUpdateComment = async (comment) => {};

funcDeleteComment = async (id) => {};

document.addEventListener("DOMContentLoaded", function () {
  const editForm = document.getElementById("editForm");

  editForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const comment = {
      name: document.getElementById("nameInput").value,
      email: document.getElementById("emailInput").value,
      body: document.getElementById("bodyInput").value,
    };

    // console.log(comment);

    funcCreateComment(comment);

    const modal = bootstrap.Modal.getInstance(
      document.getElementById("editModal")
    );
    modal.hide();
  });
});

funcBuild = async () => {
  // let data = await jsonplaceholderFetch();
  // let data = await localServerFetch();
  // createCards(data.slice(0, 48));
  let data = await restAPIFetch();
  // console.log(data);
  createCards(data.comments);
};

funcBuild();
// restAPIFetch();
