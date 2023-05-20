import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import app_config from "../../config";
import { toast } from "react-hot-toast";

const AddTeam = ({refreshPlayerList, tournamentData}) => {
    
    const [playerList, setPlayerList] = useState([]);
  const url = app_config.apiUrl;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [selImage, setSelImage] = useState('');

  // console.log(tournamentData);
  const getPlayerList = async () => {
    const res = await fetch(`${url}/player/getbytournament/${tournamentData._id}`);
    const data = await res.json();
    console.log(data);
    setPlayerList(data.result);
  };

  useEffect(() => {
    getPlayerList();
  }, []);



  const teamForm = useFormik({
    initialValues: {
        name: '',
        image : '',
        teamData: {},
        created_at: new Date(),
        updated_at: new Date(),
    },

    onSubmit: async (values, {}) => {
      values.image = selImage;
      console.log(values);
      const res = await fetch(`${url}/team/add`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201) {
        const data = (await res.json()).result;
        console.log("Team Created");
        console.log(data);
        refreshPlayerList();
      }
    },
  });

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        toast.success("File Uploaded!!");
      }
    });
  }

  return (
    <div>
      <section className="py-5">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="">
              
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                <h1 className="mb-4">Add new {tournamentData.game} Player</h1>
                  <form onSubmit={teamForm.handleSubmit}>
                    <div className="row align-items-center">
                      <div className="col-md-6 mb-4">
                        <label>Player Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          onChange={teamForm.handleChange}
                          value={teamForm.values.name}
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="upload-image" className="btn btn-dark"> <i class="fas fa-upload"></i> Upload Player Image</label>
                        <input
                        hidden
                          className="form-control"
                          type="file"
                          id="upload-image"
                          accept=".jpg, .jpeg, .png"
                          maxFileSize="2000000"
                          onChange={uploadImage}

                          // 2mb
                        />
                      </div>
                    </div>
                    <div className="py-4">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Add Player to {tournamentData.title}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ManageTeam = ({tournamentData}) => {
  const [teamList, setTeamList] = useState([]);
  const url = app_config.apiUrl;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  // console.log(tournamentData);
  const getPlayerList = async () => {
    const res = await fetch(`${url}/team/getbytournament/${tournamentData._id}`);
    const data = await res.json();
    console.log(data);
    setTeamList(data.result);
  };

  useEffect(() => {
    getPlayerList();
  }, []);

  const displayPlayers = () => {
    return teamList.map((player) => {
      return (
        <div className="col-md-2">
          <div className="card">
            <img className="card-img-top" src={url+'/'+player.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{player.name}</h5>
              <p className="card-text">{player.playerData}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <AddTeam refreshPlayerList={getPlayerList} tournamentData={tournamentData} />
      <div className="container">
        <div className="row">{displayPlayers()}</div>
      </div>
    </div>
  );
};

export default ManageTeam;
