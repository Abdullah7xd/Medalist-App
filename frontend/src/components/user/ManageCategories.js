import React, { useState } from "react";
import app_config from "../../config";

const ManageCategories = ({ tournamentData, refreshData }) => {
  const { apiUrl, categoryData } = app_config;
  const [categories, setCategories] = useState(tournamentData.categories);
  const [inputText, setInputText] = useState("");
  

  const addCatgeory = async () => {
    const res = await fetch(`${apiUrl}/tournament/update/${tournamentData._id}`, {
      method: "PUT",
      body: JSON.stringify({
        categories: [...tournamentData.categories, inputText],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    refreshData();

  };

  const removeCategory = async (index) => {
    let temp = tournamentData.categories;
    temp.splice(index, 1);

    const res = await fetch(`${apiUrl}/tournament/update/${tournamentData._id}`, {
      method: "PUT",
      body: JSON.stringify({
        categories
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status);
    refreshData();
  };

  const showCategories = () => {
    return categories.map((category, index) => {
      return (
        <div key={index}>
          <h4>{category}</h4>
          <button onClick={e => removeCategory(index)} className="btn btn-danger">Remove</button>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Add Category</h4>
            <div className="input-group">
              <select
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Category Name"
              >
                {categoryData[tournamentData.game].map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    )
                )}

              </select>
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={addCatgeory}
                >
                  <i className="fa fa-plus"></i> Add
                </button>
              </div>
            </div>
          </div>
        </div>
        {showCategories()}
      </div>
    </div>
  );
};

export default ManageCategories;
