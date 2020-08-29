import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [responseAPI, setResponseAPI] = useState([]);
  
  const URL = 'http://localhost:9999/url'; 
  const BASE_URL = 'http://localhost:9999/';

  const createURL = async (event) => {
    event.preventDefault();

    const form = event.target;
    const url = form['url'].value;
    const slug = form['slug'].value;
    let data = {};
    if (slug) {
      data = {
        url,
        slug
      };
    } else {
      data = {
        url
      };
    }
    try {
      const response = await fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      var success = document.getElementById('success');
      var success_url = document.getElementById('url');
      var arrow = document.getElementById('arrow');
      var failure = document.getElementById('failure');
      if (response.ok) {
        const promise = response.json();
        promise.then((data) => {
          setResponseAPI(JSON.parse(data));
        })
        success.style.display = 'flex';
        success_url.style.display = 'flex';
        arrow.style.display = 'flex';
        failure.style.display = 'none';
      } else {
        setResponseAPI([]);
        success.style.display = 'none';
        success_url.style.display = 'none';
        arrow.style.display = 'none';
        failure.style.display = 'flex';
      }
      
    } catch (error) {
      console.log(error);  
    }

  };

  return (
    <div className="App">
      <h1> URL shortener </h1>
      <main>
        <form onSubmit={createURL}>
          <input type="text" name="url" placeholder="enter a URL" required></input>
          <input type="text" name="slug" placeholder="enter a slug"></input>
          <button type="submit" id="submit_button" value="Submit"> Create </button>
          <h3 id="success"> URL successfully created at </h3>
          <h1 id="arrow"> ↓ </h1>
          <h3 id="url"> <a href={BASE_URL+responseAPI.slug}> {BASE_URL+responseAPI.slug} </a> </h3>
          <h3 id="failure"> Creation failed: check that url is in format http://example.com or https://example.com and that the slug is unique! </h3>
        </form>
      </main>
    </div>
  );
}

export default App;
