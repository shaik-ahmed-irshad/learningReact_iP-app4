import React from 'react'
import './css/Search.css'

const Search = () => {
  return (
    <>
      <center>
        <form>
          <input
            type="text"
            name="fname"
            placeholder="Search Your GitHub user here .."
          />
          <input type='submit' value={'Search User'} />
        </form>
      </center>
    </>
  );
}

export default Search