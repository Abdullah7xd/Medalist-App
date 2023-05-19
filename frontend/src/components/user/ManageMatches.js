import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageMatches = ({ tournamentData }) => {
  const [playerList, setPlayerList] = useState([]);
  const { apiUrl } = app_config;
  const [matchList, setMatchList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);

  const fetchMatches = async () => {
    setLoading(true);
    const res = await fetch(apiUrl + "/match/getall");
    const data = await res.json();
    setMatchList(data.result);
    console.log(data);
    setLoading(false);
  };

  const fetchPlayers = async () => {
    setLoading(true);
    const res = await fetch(
      apiUrl + "/player/getbytournament/" + tournamentData._id
    );
    const data = await res.json();
    setPlayerList(data.result);
    console.log(data);
    setLoading(false);
  };

  const matchForm = useFormik({
    initialValues: {
      title: "",
      type: "solo",
      tournament: tournamentData._id,
      category: '',
      description: "",
      playerA: "",
      playerB: "",
      duration: 0,
      matchData: {},
      scheduled: new Date(),
      created_at: new Date(),
    },
    onSubmit: async (values) => {
      if (playerA === null || playerB === null) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please select both players",
        });
        return;
      }
      values.playerA = playerList[playerA]._id;
      values.playerB = playerList[playerB]._id;
      console.log(values);
      const res = await fetch(apiUrl + "/match/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 200) {
        const data = (await res.json()).result;
        console.log(data);
        toast.success("Match Created Successfully");
      }
    },
  });

  useEffect(() => {
    fetchMatches();
    fetchPlayers();
  }, []);

  const getIcon = (game) => {
    if (game === "Badminton") {
      return "/badminton.png";
    }
  };

  const displayMatches = () => {
    if (loading) {
      return (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    } else {
      return matchList.map((match, index) => (
        <div className="card">
          <div className="card-header">
            <p className="m-0">({match.title})</p>
            <h3 className="m-0">{new Date(match.scheduled).toLocaleDateString()} {new Date(match.scheduled).toLocaleTimeString()}</h3>
          </div>
          <div className="card-body">
            <div className="row justify-content-around align-items-center">
              <div className="col-md-4">
                <img
                  src={
                    match.playerA.image
                      ? apiUrl + "/" + match.playerA.image
                      : "/player.png"
                  }
                  alt=""
                  className="img-fluid"
                />
                <h4>{match.playerA.name}</h4>
              </div>
              <div className="col-md-2">
                <img className="img-fluid" src="/vs.jpg" alt="" />
              </div>
              <div className="col-md-4">
                <img
                  src={
                    match.playerB.image
                      ? apiUrl + "/" + match.playerB.image
                      : "/player.png"
                  }
                  alt=""
                  className="img-fluid"
                />
                <h4 className="text-center">{match.playerB.name}</h4>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <div
          className="modal fade"
          id="playerAModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Select Player A
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {playerList.map((player, index) => (
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={
                              player.image
                                ? apiUrl + "/" + player.image
                                : "/player.png"
                            }
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-circle"
                          />
                          <span className="ms-2">{player.name}</span>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="btn btn-primary"
                            onClick={(e) => setPlayerA(index)}
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="playerBModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel2">
                  Select Player B
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {playerList.map((player, index) => (
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={
                              player.image
                                ? apiUrl + "/" + player.image
                                : "/player.png"
                            }
                            alt=""
                            width={50}
                            height={50}
                            className="rounded-circle"
                          />
                          <span className="ms-2">{player.name}</span>
                        </div>
                        <div className="col-md-6">
                          <button
                            className="btn btn-primary"
                            onClick={(e) => setPlayerB(index)}
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="display-4">Manage Matches</p>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-12">
            <h2>Create a Match</h2>
            <section
              className="p-4 p-md-5"
             
            >
              <div className="row d-flex justify-content-center">
                <div className="col-md-12 col-lg-12">
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="text-center mb-4">
                        <h3>Create a New {tournamentData.game} Match</h3>
                        <h6>Payment</h6>
                      </div>
                      <form onSubmit={matchForm.handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4 pb-1">
                          <img
                            className=""
                            width={50}
                            alt=""
                            src={getIcon(tournamentData.game)}
                          />
                          <div className="flex-fill mx-3">
                            <div className="">
                              <input
                                type="text"
                                id="title"
                                value={matchForm.values.title}
                                onChange={matchForm.handleChange}
                                placeholder="Match Title"
                                className="form-control"
                                list="matchname"
                              />
                              <datalist id="matchname">
                                <option>Qualifying</option>
                                <option>Quarter Final</option>
                                <option>Semi Final</option>
                                <option>Final</option>
                              </datalist>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                          <div className="d-flex flex-row align-items-center mb-4 pb-1">
                          <img
                            className=""
                            width={50}
                            alt=""
                            src="/calender.png"
                          />
                          <div className="flex-fill mx-3">
                            <div className="">
                              <label htmlFor="scheduled" className="fw-bold">Select Date & Time of Match</label>
                              <input
                                type="datetime-local"
                                id="scheduled"
                                value={matchForm.values.scheduled}
                                onChange={matchForm.handleChange}
                                placeholder="Match Schedule"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                          </div>
                          <div className="col-md-6">
                          <div className="d-flex flex-row align-items-center mb-4 pb-1">
                          <img
                            className=""
                            width={50}
                            alt=""
                            src="/calender.png"
                          />
                          <div className="flex-fill mx-3">
                            <div className="">
                            <label htmlFor="scheduled" className="fw-bold">Select Match Category</label>
                              <select
                                id="category"
                                value={matchForm.values.category}
                                onChange={matchForm.handleChange}
                                placeholder="Select Category"
                                className="form-control"
                              >
                                {
                                  tournamentData.categories.map((cat)=>(
                                    <option value={cat}>{cat}</option>
                                  ))
                                }
                              </select>
                              
                            </div>
                          </div>
                        </div>
                          </div>
                        </div>
                        

                        <div className="row justify-content-around align-items-center">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body">
                                <img
                                  className="card-img-top"
                                  src={
                                    playerA === null
                                      ? "/player.png"
                                      : apiUrl + "/" + playerList[playerA].image
                                  }
                                  alt=""
                                />
                                <h5 className="text-center my-2">
                                  {playerA === null
                                    ? "Not Selected"
                                    : playerList[playerA].name}
                                </h5>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-mdb-toggle="modal"
                              data-mdb-target="#playerAModal"
                            >
                              <i class="fas fa-pen"></i>
                            </button>
                          </div>
                          <div className="col-md-2">
                            <p className="display-3 text-center fw-bold">VS</p>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="card-body">
                                <img
                                  className="card-img-top"
                                  src={
                                    playerB === null
                                      ? "/player.png"
                                      : apiUrl + "/" + playerList[playerB].image
                                  }
                                  alt=""
                                />
                                <h5 className="text-center my-2">
                                  {playerB === null
                                    ? "Not Selected"
                                    : playerList[playerB].name}
                                </h5>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-danger"
                              data-mdb-toggle="modal"
                              data-mdb-target="#playerBModal"
                            >
                              <i class="fas fa-pen"></i>
                            </button>
                          </div>
                        </div>

                        <button className="btn btn-primary w-100 mt-4">
                          Create Match
                        </button>
                      </form>
                    </div>
                  </div>

                  {displayMatches()}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageMatches;
